import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WhatsApp Business",
  description: "Read our privacy policy for WhatsApp Business communications.",
  robots: {
    index: false,
    follow: false,
  },
};

const privacyPolicy = `
# Privacy Policy for WhatsApp Business

## Introduction
We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect information during our WhatsApp Business communications. By using our WhatsApp Business services, you agree to this privacy policy.

## Information We Collect
During our communication via WhatsApp, we may collect the following information:
- **Personal Information** such as your name, phone number, and email address that you provide through the chat.
- **Message Content** such as text, images, videos, and other files that you share with us.
- **Usage Information**, such as the time and frequency of our communication.

## How We Use Your Information
The information we collect through WhatsApp is used for the following purposes:
- **Customer Support**: To respond to your inquiries, resolve issues, or provide assistance.
- **Communication**: To update you on your requests, provide relevant notifications, or follow up on past conversations.
- **Improving Services**: To analyze interactions and improve the quality of our WhatsApp Business communication.

## How We Protect Your Data
We take appropriate technical and organizational measures to safeguard your personal data. This includes encryption and secure data storage practices.

## Sharing Your Data
We do not share your personal information with third parties unless:
- It is necessary to provide the service you've requested.
- We are legally obligated to share the information (e.g., to comply with a subpoena or legal process).

## Your Rights
You have the right to:
- Request access to the personal information we hold about you.
- Correct any inaccuracies in your personal data.
- Request the deletion of your personal information, subject to legal requirements.

## Contact Us
If you have any questions or concerns about this privacy policy or how we handle your data, please contact us via WhatsApp or at our provided email address.

## Changes to This Privacy Policy
We may update this privacy policy from time to time. Any changes will be communicated through WhatsApp or via email.
`;

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <MarkdownRenderer content={privacyPolicy} />
    </main>
  );
}
