import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Replacement Policy | Neo Energy Solutions",
  description:
    "Product quality and customer satisfaction are core operational priorities at Neo Energy Solutions. Review our return and replacement terms.",
};

export default function ReturnReplacementPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="mono-label text-accent">LEGAL</span>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        Return & Replacement Policy
      </h1>

      <div className="mt-10 space-y-8 text-muted">
        <p>
          Neo Energy Solutions frames product quality and customer satisfaction
          as core operational priorities. Products supplied by the company are
          subject to the following return and replacement terms.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Warranty Coverage
          </h2>
          <p className="mt-3">
            Products are covered by the official manufacturer warranty according
            to each product category’s warranty period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Eligibility for Return or Replacement
          </h2>
          <p className="mt-3">
            Returns or replacements may apply when:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>The request is within 30 days from delivery.</li>
            <li>A manufacturing defect is confirmed.</li>
            <li>
              The product was installed and used according to official technical
              guidelines.
            </li>
            <li>
              A technical inspection by Neo Energy Solutions verifies the issue
              when required.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Non-Eligible Cases
          </h2>
          <p className="mt-3">
            Returns or replacements are not accepted for:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Damage caused by improper installation.</li>
            <li>Physical damage after delivery.</li>
            <li>Misuse, negligence, or incorrect system/electrical integration.</li>
            <li>
              Damage from external factors such as voltage fluctuation, natural
              disaster, or force majeure.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Procedure
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Contact customer service.</li>
            <li>Provide invoice number and product details.</li>
            <li>Neo Energy’s technical team evaluates the case.</li>
            <li>If approved, replacement or refund is processed.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Refund Method
          </h2>
          <p className="mt-3">
            Approved refunds are processed through the original payment method
            within a reasonable timeframe.
          </p>
        </section>

        <p className="text-sm">
          For questions about returns or replacements, please contact us at{" "}
          <a
            href="mailto:info@neo-es.com"
            className="text-accent hover:text-accent-dark"
          >
            info@neo-es.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
