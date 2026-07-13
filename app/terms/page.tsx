import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Prayonit",
  description: "The terms that govern use of Prayonit.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1f2a44] sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[#43506b]">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#43506b]">
            <p>
              By using this website or the Prayonit app, you agree to these
              terms. Please read them carefully.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Use of the app
              </h2>
              <p className="mt-2">
                Prayonit is provided to help you slow down, reflect on
                Scripture, and spend time in prayer. It is offered as a
                personal devotional tool and does not replace pastoral care,
                professional counsel, or your local church community.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Free trial and subscriptions
              </h2>
              <p className="mt-2">
                Prayonit may offer a free trial period followed by a paid
                subscription. Subscription terms, pricing, and cancellation
                details are presented in the app and the applicable app
                store prior to purchase.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Changes to these terms
              </h2>
              <p className="mt-2">
                We may update these terms from time to time. Continued use of
                the app or website after changes are posted constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Contact us
              </h2>
              <p className="mt-2">
                Questions about these terms can be sent through our{" "}
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
