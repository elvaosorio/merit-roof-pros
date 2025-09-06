import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, service, message }: QuoteRequest = await req.json();

    console.log("Received quote request:", { firstName, lastName, email, phone, service });

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    );

    // Store the quote request in database
    const { data, error: dbError } = await supabase
      .from("quote_requests")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service,
        message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save quote request");
    }

    console.log("Quote request saved to database:", data.id);

    // Send email notification to business owner
    const businessEmailResponse = await resend.emails.send({
      from: "Merit Construction <noreply@resend.dev>",
      to: ["osorioelva@gmail.com"],
      subject: "New Quote Request - Merit Construction",
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    });

    if (businessEmailResponse.error) {
      console.error("Failed to send business notification email:", businessEmailResponse.error);
    } else {
      console.log("Business notification email sent successfully");
    }

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Merit Construction <noreply@resend.dev>",
      to: [email],
      subject: "Thank you for your quote request - Merit Construction",
      html: `
        <h1>Thank you for contacting Merit Construction & Design!</h1>
        <p>Dear ${firstName},</p>
        <p>We have received your quote request and will get back to you within 24 hours.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong> ${message}</p>
        
        <p>If you have any urgent questions, please call us at <a href="tel:3236109999">(323) 610-9999</a>.</p>
        
        <p>Best regards,<br>
        Merit Construction & Design Team<br>
        License #1072096</p>
      `,
    });

    if (confirmationEmailResponse.error) {
      console.error("Failed to send confirmation email:", confirmationEmailResponse.error);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Quote request submitted successfully",
        id: data.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-quote-request function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit quote request" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);