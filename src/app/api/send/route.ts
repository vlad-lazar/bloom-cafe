// src/app/api/send/route.ts
import { ContactFormEmail } from "@/components/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.CONTACT_EMAIL_FROM;
const toEmail = process.env.CONTACT_EMAIL_TO;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Email configuration is missing on the server." },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: `Bloom Café <${fromEmail}>`, // Using your verified domain from .env
      to: [toEmail], // Using the recipient from .env
      subject: subject || `Feedback Bloom Cafè from ${name}`,
      // Pass the component directly to the 'react' property
      react: await Promise.resolve(
        ContactFormEmail({
          name,
          email,
          subject,
          message,
        })
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
