import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WhatsApp Business",
  description: "Read our privacy policy for WhatsApp Business communications.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 text-foreground">
      <h1 className="text-3xl font-semibold text-ink">
        Privacy Policy for WhatsApp Business
      </h1>
      <div className="mt-8 space-y-8 leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-ink">Introduction</h2>
          <p className="mt-3">
            We respect your privacy and are committed to protecting your
            personal data. This policy explains how information is handled
            during WhatsApp Business communications.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">
            Information We Collect
          </h2>
          <p className="mt-3">
            During communication we may receive your name, phone number, email
            address, message content and basic usage information such as the
            time and frequency of communication.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">
            How We Use Information
          </h2>
          <p className="mt-3">
            Information is used to respond to requests, provide support, follow
            up on conversations and improve the quality of communication.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Contact</h2>
          <p className="mt-3">
            For questions about this policy, contact
            robinlaurentius@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}
