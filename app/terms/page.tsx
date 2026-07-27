import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Prayonit",
  description: "The terms that govern use of Prayonit and its website.",
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
            Last updated: July 26, 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-[#43506b]">
            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                1. Acceptance of Terms
              </h2>
              <p className="mt-2">
                These Terms of Service govern your use of the Prayonit mobile
                app and the Prayonit website operated by Next Wave Studios LLC.
                By using Prayonit or this website, you agree to these Terms and
                our{" "}
                <a
                  href="/privacy"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                2. Purpose of Prayonit
              </h2>
              <p className="mt-2">
                Prayonit is a Christian mood-based prayer and devotional app
                designed to support personal faith, reflection, Scripture
                reading, journaling, and prayer. Depending on the experience
                you choose, Prayonit may provide Bible verses, devotional
                content, AI-assisted prayers, journaling tools, saved content,
                and sharing features.
              </p>
              <p className="mt-2">
                Prayonit is intended to encourage reflection and devotional
                practice. It is not a promise of any specific spiritual,
                emotional, mental-health, or life outcome.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                3. Not Professional or Emergency Care
              </h2>
              <p className="mt-2">
                Prayonit is not medical care, mental-health treatment,
                counseling, therapy, crisis intervention, legal advice, or
                financial advice. It is also not a replacement for a pastor,
                clergy member, licensed counselor, physician, or other
                qualified professional.
              </p>
              <p className="mt-2">
                If you are experiencing an emergency, immediate danger, or a
                crisis situation, contact local emergency services or an
                appropriate crisis resource right away.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                4. AI-Assisted Content
              </h2>
              <p className="mt-2">
                Some prayers, reflections, devotionals, or related features in
                Prayonit may be generated or assisted by artificial
                intelligence. AI-assisted content may contain errors, may not
                fit every user&apos;s beliefs, circumstances, or needs, and
                should not be treated as authoritative theological, medical,
                psychological, legal, or other professional guidance.
              </p>
              <p className="mt-2">
                Please use your own judgment and trusted faith resources when
                reviewing AI-assisted content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                5. Scripture and Faith Content
              </h2>
              <p className="mt-2">
                Prayonit provides Scripture and devotional content for personal
                religious education, encouragement, and reflection. Where
                applicable, Scripture content may include passages from the King
                James Version.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                6. Accounts and Account Security
              </h2>
              <p className="mt-2">
                Some Prayonit features require an account. You are responsible
                for providing accurate information, protecting your login
                credentials, and all activity that occurs through your account.
                If you believe your account has been compromised, contact{" "}
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                7. User Content and Private Journals
              </h2>
              <p className="mt-2">
                You retain ownership of your original journal entries, prayer
                requests, reflections, and other content you submit. You give
                Next Wave Studios LLC the limited rights needed to host, store,
                process, display, back up, and otherwise operate the features
                you request.
              </p>
              <p className="mt-2">
                You agree not to submit unlawful content or content that
                infringes another person&apos;s rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                8. Subscriptions and Free Trials
              </h2>
              <p className="mt-2">
                Prayonit Premium currently costs $9.99 per month. Eligible
                users may receive a 14-day trial, and eligibility may depend on
                the applicable app-store account.
              </p>
              <p className="mt-2">
                Subscriptions renew automatically unless canceled through the
                store where you subscribed. Apple and Google handle billing,
                cancellation, and most refund decisions under their own rules.
                Deleting your Prayonit account does not cancel an Apple App
                Store or Google Play subscription.
              </p>
              <p className="mt-2">
                Prices, features, and availability may change with appropriate
                notice where required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                9. Account and Data Deletion
              </h2>
              <p className="mt-2">
                You may request deletion of your full Prayonit account or
                certain specific data by visiting our{" "}
                <a
                  href="/delete-account"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  Delete Account &amp; Data
                </a>{" "}
                page or by emailing{" "}
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
                . We may require verification of account ownership before
                processing a request.
              </p>
              <p className="mt-2">
                Some limited information may be retained when reasonably
                necessary for fraud prevention, security, legal compliance,
                transaction records, dispute resolution, or enforcement of
                these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                10. Acceptable Use
              </h2>
              <p className="mt-2">
                You agree not to use Prayonit for illegal activity,
                harassment, abuse, unauthorized access, automated scraping,
                interference with security, misuse of sharing features, reverse
                engineering where prohibited, or uploading content that
                infringes another person&apos;s rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                11. Intellectual Property
              </h2>
              <p className="mt-2">
                The Prayonit name, branding, software, design, original
                devotional materials, and other company-created content belong
                to Next Wave Studios LLC or its licensors. You may use Prayonit
                for normal personal use and share content through features made
                available within the app.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                12. Availability and Changes
              </h2>
              <p className="mt-2">
                Prayonit may occasionally be unavailable. Features may change,
                and content may be corrected, updated, or removed. Next Wave
                Studios LLC does not guarantee uninterrupted or error-free
                operation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                13. Suspension and Termination
              </h2>
              <p className="mt-2">
                We may restrict, suspend, or terminate access to Prayonit if we
                reasonably believe there has been a violation of these Terms,
                unlawful behavior, a security risk, misuse of the service, or
                if the service is discontinued.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                14. Disclaimers and Limitation of Liability
              </h2>
              <p className="mt-2">
                Prayonit is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis to the extent permitted by applicable
                law. To the extent permitted by law, Next Wave Studios LLC
                disclaims warranties not expressly stated in these Terms.
              </p>
              <p className="mt-2">
                To the extent permitted by law, Next Wave Studios LLC will not
                be liable for indirect, incidental, special, consequential, or
                punitive damages, or for loss of data, profits, goodwill, or
                business interruption arising from your use of Prayonit. Nothing
                in these Terms limits liability that cannot be limited under
                applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                15. Changes to the Terms
              </h2>
              <p className="mt-2">
                We may update these Terms from time to time. When we do, we
                will revise the last-updated date on this page. Your continued
                use of Prayonit or this website after updated Terms take effect
                means you accept the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                16. Contact
              </h2>
              <p className="mt-2">
                Questions about these Terms may be sent to{" "}
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
