import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { token } = await req.json();
    
    if (!token) {
      return new Response(
        JSON.stringify({ error: "Access token is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Fetching transfer by token");

    // Fetch transfer using admin client to bypass RLS
    const { data: transfer, error: transferError } = await supabaseAdmin
      .from("transfers")
      .select("*")
      .eq("access_token", token)
      .single();

    if (transferError || !transfer) {
      console.error("Transfer fetch error:", transferError);
      return new Response(
        JSON.stringify({ error: "Invalid or expired access link" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if transfer has expired
    if (transfer.expiry_date) {
      const expiryDate = new Date(transfer.expiry_date);
      if (expiryDate < new Date()) {
        return new Response(
          JSON.stringify({ error: "This transfer has expired" }),
          { status: 410, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // Generate signed URL with admin client
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

    console.log("Generated signed URL for token access");

    return new Response(
      JSON.stringify({ 
        signedUrl: signedUrlData.signedUrl,
        fileName: transfer.file_name,
        fileSize: transfer.file_size,
        message: transfer.message,
        senderEmail: transfer.recipient_email
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in get-file-by-token function:", error);
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
