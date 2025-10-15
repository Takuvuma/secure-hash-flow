import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role key for storage access
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Create Supabase client with user's JWT for auth
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing authorization header" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      console.error("Auth error:", authError);
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { transferId } = await req.json();
    
    if (!transferId) {
      return new Response(
        JSON.stringify({ error: "Transfer ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Fetching transfer:", transferId, "for user:", user.email);

    // Fetch the transfer and verify user has access
    const { data: transfer, error: transferError } = await supabaseClient
      .from("transfers")
      .select("*")
      .eq("id", transferId)
      .single();

    if (transferError || !transfer) {
      console.error("Transfer fetch error:", transferError);
      return new Response(
        JSON.stringify({ error: "Transfer not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Verify user is either sender or recipient
    const isAuthorized = 
      transfer.user_id === user.id || 
      transfer.recipient_email === user.email;

    if (!isAuthorized) {
      console.error("User not authorized for transfer");
      return new Response(
        JSON.stringify({ error: "Not authorized to access this file" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Generate signed URL with admin client (bypasses RLS)
    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin
      .storage
      .from("secure-transfers")
      .createSignedUrl(transfer.file_path, 3600); // Valid for 1 hour

    if (signedUrlError || !signedUrlData) {
      console.error("Signed URL error:", signedUrlError);
      return new Response(
        JSON.stringify({ error: "Failed to generate download URL" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Generated signed URL for transfer:", transferId);

    return new Response(
      JSON.stringify({ 
        signedUrl: signedUrlData.signedUrl,
        fileName: transfer.file_name 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in get-file-download-url function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
