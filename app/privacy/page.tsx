import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Prayonit",
  description: "How Prayonit handles your information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1f2a44] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#43506b]">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#43506b]">
            <p>
              Prayonit (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) respects your privacy. This page explains, in
              plain language, how information is handled when you visit this
              website or use the Prayonit app.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                This website
              </h2>
              <p className="mt-2">
                This landing page is a static website. It does not require an
                account, does not collect personal information through forms,
                and does not use tracking cookies or analytics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                The Prayonit app
              </h2>
              <p className="mt-2">
                The Prayonit mobile app may collect information necessary to
                provide its features, such as your mood selections, journal
                entries, and saved prayers, so that this content can be shown
                back to you. This information is used only to provide and
                improve the app experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Contact us
              </h2>
              <p className="mt-2">
                If you have questions about this Privacy Policy, please reach
                out through our{" "}
                <a
                  href="/support"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  Support
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
