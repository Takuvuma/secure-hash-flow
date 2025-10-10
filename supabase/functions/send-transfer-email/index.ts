import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Validation schema for email inputs
const emailSchema = z.string().email().max(255);
const transferEmailSchema = z.object({
  recipientEmail: emailSchema,
  fileName: z.string().min(1).max(255),
  fileSize: z.string().min(1).max(50),
  message: z.string().max(1000).optional(),
  senderEmail: emailSchema,
});

interface TransferEmailRequest {
  recipientEmail: string;
  fileName: string;
  fileSize: string;
  message?: string;
  senderEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    
    // Validate input data
    const validationResult = transferEmailSchema.safeParse(requestData);
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ error: "Invalid input data", details: validationResult.error.issues }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { recipientEmail, fileName, fileSize, message, senderEmail }: TransferEmailRequest = validationResult.data;

    console.log("Sending transfer notification to:", recipientEmail);

    const emailResponse = await resend.emails.send({
      from: "SecureTransfer <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `You received a secure file: ${fileName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Secure File Transfer</h1>
          <p>You have received a secure file transfer from <strong>${senderEmail}</strong>.</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #1f2937;">File Details</h2>
            <p><strong>File Name:</strong> ${fileName}</p>
            <p><strong>File Size:</strong> ${fileSize}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          
          <p style="color: #6b7280;">This file has been securely encrypted and uploaded. The sender has been notified of this transfer.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px;">
              This is an automated message from SecureTransfer. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-transfer-email function:", error);
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
