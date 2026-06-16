import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Neo Energy Solutions",
  description:
    "Neo Energy Solutions is committed to protecting the privacy and security of clients, partners, and website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="mono-label text-accent">LEGAL</span>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>

      <div className="mt-10 space-y-8 text-muted">
        <p>
          Neo Energy Solutions states that it is committed to protecting the
          privacy and security of clients, partners, and website visitors.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Information We May Collect
          </h2>
          <p className="mt-3">
            When you submit an inquiry or quote request through our website, we
            may collect personal information such as your name, phone number,
            email address, company name, and project details. This information
            is used solely to respond to your request and provide relevant
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p className="mt-3">
            Inquiries and form submissions are used to communicate with you
            about our products and services, prepare quotations, and coordinate
            project discussions. We do not sell or share your personal
            information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Data Protection
          </h2>
          <p className="mt-3">
            We take reasonable measures to protect the information you provide
            through our website. However, no online data transmission can be
            guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Contact Us About Privacy
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us at{" "}
            <a
              href="mailto:info@neo-es.com"
              className="text-accent hover:text-accent-dark"
            >
              info@neo-es.com
            </a>
            .
          </p>
        </section>

        <p className="text-sm">
          This policy may be updated from time to time. Please review this page
          periodically for any changes.
        </p>
      </div>
    </div>
  );
}
