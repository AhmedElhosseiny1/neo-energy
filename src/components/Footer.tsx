import Link from "next/link";
import { ArrowRight, Mail, Globe } from "lucide-react";
import { NeoLogo } from "@/components/NeoLogo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <NeoLogo className="h-7 w-auto text-accent" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Pioneering modular industrial energy systems for a sustainable
              future.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mono-label mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/catalog" className="text-muted hover:text-accent">
                  Datasheets
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted hover:text-accent">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted hover:text-accent">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-accent">
                  Global Offices
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent">
                  Engineering Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-4">Stay Updated</h3>
            <form className="flex" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg border border-r-0 border-border bg-white px-4 py-2 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-accent px-3 text-white hover:bg-accent-dark"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© 2024 Neo Energy Solutions. Industrial Precision. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
