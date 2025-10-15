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
  appUrl: z.string().url().optional(),
  accessToken: z.string().min(1),
});

interface TransferEmailRequest {
  recipientEmail: string;
  fileName: string;
  fileSize: string;
  message?: string;
  senderEmail: string;
  appUrl?: string;
  accessToken: string;
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

    const { recipientEmail, fileName, fileSize, message, senderEmail, appUrl, accessToken }: TransferEmailRequest = validationResult.data;

    console.log("Sending transfer notification to:", recipientEmail);

    const downloadUrl = `${appUrl || 'https://your-app-url.com'}/download?token=${accessToken}`;

    const emailResponse = await resend.emails.send({
      from: "SecureTransfer <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `${senderEmail} sent you a secure file: ${fileName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <tr>
                      <td style="padding: 40px 40px 20px 40px;">
                        <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827;">
                          🔒 You've Received a Secure File
                        </h1>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 0 40px 20px 40px;">
                        <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 24px; color: #374151;">
                          <strong>${senderEmail}</strong> has sent you a secure file through SecureTransfer.
                        </p>
                        
                        <div style="background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 4px;">
                          <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">File Details:</p>
                          <p style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600; color: #111827;">📄 ${fileName}</p>
                          <p style="margin: 0; font-size: 14px; color: #6b7280;">Size: ${fileSize}</p>
                        </div>
                        
                        ${message ? `
                        <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 16px; margin: 24px 0; border-radius: 4px;">
                          <p style="margin: 0 0 8px 0; font-size: 14px; color: #92400e; font-weight: 600;">Message from sender:</p>
                          <p style="margin: 0; font-size: 14px; color: #78350f; line-height: 20px;">${message}</p>
                        </div>
                        ` : ''}
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 0 40px 40px 40px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td align="center">
                              <a href="${downloadUrl}" 
                                 style="display: inline-block; padding: 14px 32px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                                Download File Now
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <p style="margin: 16px 0 0 0; font-size: 14px; line-height: 20px; color: #6b7280; text-align: center;">
                          Click the button above to access your file directly. No signup required!
                        </p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
                        <p style="margin: 0; font-size: 12px; line-height: 18px; color: #6b7280; text-align: center;">
                          This email was sent by SecureTransfer. If you didn't expect this file, you can safely ignore this email.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
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
