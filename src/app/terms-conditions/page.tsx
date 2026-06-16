import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Neo Energy Solutions",
  description:
    "By accessing the Neo Energy Solutions website or purchasing products, users agree to the company’s Terms & Conditions.",
};

export default function TermsConditionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="mono-label text-accent">LEGAL</span>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        Terms & Conditions
      </h1>

      <div className="mt-10 space-y-8 text-muted">
        <p>
          Neo Energy Solutions states that by accessing its website or
          purchasing its products, users agree to the company’s Terms &
          Conditions.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Website Access and Usage
          </h2>
          <p className="mt-3">
            Users agree to access and use this website only for lawful purposes.
            Any misuse, unauthorized access, or attempt to disrupt the website
            or its services is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Product Purchase Terms
          </h2>
          <p className="mt-3">
            Product availability, pricing, and specifications are subject to
            change without notice. Orders and quotations are subject to
            confirmation by Neo Energy Solutions. Final terms of sale, including
            delivery timelines and payment conditions, will be communicated at
            the time of quotation or order confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Limitations of Liability
          </h2>
          <p className="mt-3">
            Neo Energy Solutions strives to ensure that information on this
            website is accurate and up to date. However, we do not accept
            liability for any errors, omissions, or damages arising from the use
            of this website or reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Warranty Relationship to Manufacturer Terms
          </h2>
          <p className="mt-3">
            Product warranties are provided in accordance with the manufacturer’s
            official warranty terms. Neo Energy Solutions facilitates warranty
            claims and returns in line with our Return & Replacement Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Orders, Returns, and Replacements
          </h2>
          <p className="mt-3">
            Orders are subject to stock availability and technical review.
            Returns and replacements are handled according to our Return &
            Replacement Policy, which outlines eligibility, procedures, and
            refund methods.
          </p>
        </section>

        <p className="text-sm">
          These Terms & Conditions may be updated from time to time. Continued
          use of the website constitutes acceptance of the current terms. For
          questions, contact us at{" "}
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
