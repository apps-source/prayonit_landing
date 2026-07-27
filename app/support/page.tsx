import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Prayonit",
  description: "Get help with Prayonit.",
};

export default function SupportPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1f2a44] sm:text-4xl">
            Support
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#43506b]">
            <p>
              We&rsquo;re here to help. If you have a question about the
              Prayonit app, this website, or your account, reach out and
              we&rsquo;ll get back to you as soon as we can.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Email us
              </h2>
              <p className="mt-2">
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Account and data deletion
              </h2>
              <p className="mt-2">
                For account or data deletion requests, visit our{" "}
                <a
                  href="/delete-account"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  Delete Account &amp; Data
                </a>{" "}
                page or email us directly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Frequently asked
              </h2>
              <p className="mt-2">
                <span className="font-medium text-[#1f2a44]">
                  Is Prayonit free?
                </span>{" "}
                Eligible users may receive a 14-day free trial before a Prayonit
                Premium subscription begins.
              </p>
              <p className="mt-4">
                <span className="font-medium text-[#1f2a44]">
                  Where do the Bible verses come from?
                </span>{" "}
                Prayonit uses the King James Version (KJV) of the Bible.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
