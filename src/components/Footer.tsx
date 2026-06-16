import Link from "next/link";
import { ArrowRight, Mail, Globe, Phone } from "lucide-react";
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
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
              Villa No. 8, Ninth District Service Center,
              <br />
              Sheikh Zayed, Egypt
            </address>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p>
                <a href="tel:+201208434441" className="hover:text-accent">
                  +20 120 843 4441
                </a>
                <span className="mx-2 text-border">/</span>
                <a href="tel:+201208434449" className="hover:text-accent">
                  +20 120 843 4449
                </a>
              </p>
              <p>
                <a href="mailto:info@neo-es.com" className="hover:text-accent">
                  info@neo-es.com
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:info@neo-es.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+201208434441"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://www.neo-es.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mono-label mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted hover:text-accent">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-muted hover:text-accent">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return-replacement-policy" className="text-muted hover:text-accent">
                  Return & Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-muted hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-4">Stay Updated</h3>
            <p className="mb-4 text-sm text-muted">
              Subscribe for the latest solar insights and Neo Energy updates.
            </p>
            <form className="flex" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-2xl border border-r-0 border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-2xl bg-accent px-4 text-white transition-colors hover:bg-accent-dark"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-muted sm:px-6 lg:px-8">
          <p>
            Neo Energy Solutions is part of Neo Mena Holding, a group focused on
            sustainable and complementary businesses.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Neo Energy Solutions. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-accent">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
