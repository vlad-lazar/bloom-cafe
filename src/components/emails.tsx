// src/components/emails/contact-form-email.tsx
import React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Contact Form Submission from {name}</h1>
    <p>You have received a new message from your website contact form.</p>
    <hr />
    <h2>Message Details:</h2>
    <ul>
      <li>
        <strong>Name:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </li>
      {subject && (
        <li>
          <strong>Subject:</strong> {subject}
        </li>
      )}
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
