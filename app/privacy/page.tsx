import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Prayonit",
  description: "How Prayonit handles information for the website and app.",
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
            Last updated: July 26, 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-[#43506b]">
            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                1. Introduction
              </h2>
              <p className="mt-2">
                This Privacy Policy describes how Next Wave Studios LLC handles
                information in connection with the Prayonit mobile app and the
                Prayonit website. It explains the categories of information
                that may be collected, how information may be used or shared,
                how it may be retained, and how deletion requests may be made.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                2. Information Users Provide
              </h2>
              <p className="mt-2">
                Depending on how you use Prayonit, you may provide information
                such as your email address, account identifiers, profile
                information, mood selections, prayer prompts or requests,
                generated prayers, journal entries and reflections, saved
                prayers and devotionals, favorites, support messages, account
                or data deletion requests, and content you choose to share.
              </p>
              <p className="mt-2">
                Not every user provides every category of information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                3. Information Collected Automatically
              </h2>
              <p className="mt-2">
                Prayonit and its service providers may automatically collect
                categories of technical and usage information such as device
                type, operating system, app version, IP address, browser
                information, usage events, diagnostics, security logs, and
                subscription entitlement status. When notifications are enabled,
                push-notification tokens may also be collected.
              </p>
              <p className="mt-2">
                The public website also generates standard hosting and security
                logs and includes analytics tools described below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                4. How Information Is Used
              </h2>
              <p className="mt-2">
                Information may be used to create and manage accounts, provide
                mood-based devotional experiences, generate requested
                AI-assisted prayers, save journal entries and user-selected
                content, manage subscriptions and Premium access, respond to
                support requests, process deletion requests, secure and improve
                the service, diagnose errors, and comply with legal
                obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                5. AI Processing
              </h2>
              <p className="mt-2">
                If you use an AI-assisted feature, text you submit for that
                feature may be processed by an AI service provider in order to
                generate the response you requested.
              </p>
              <p className="mt-2">
                Please avoid entering information into AI-assisted features if
                you do not want that information processed for that purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                6. Subscriptions and Payments
              </h2>
              <p className="mt-2">
                Apple and Google process subscription payments for Prayonit
                Premium. Prayonit may receive information such as product
                identifier, subscription status, entitlement status, purchase
                confirmation, renewal status, and expiration information.
              </p>
              <p className="mt-2">
                Prayonit does not directly receive your complete payment-card
                details from Apple or Google.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                7. How Information Is Shared
              </h2>
              <p className="mt-2">
                Information may be shared with service providers that help
                operate Prayonit, such as cloud hosting and database providers,
                authentication providers, AI service providers,
                subscription-management providers, analytics, diagnostics, or
                crash-reporting providers, email and customer-support
                providers, and Apple or Google.
              </p>
              <p className="mt-2">
                Information may also be disclosed when reasonably necessary for
                legal compliance, fraud prevention, security, protection of
                rights, or a business transfer subject to applicable law.
              </p>
              <p className="mt-2">
                Next Wave Studios LLC does not sell personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                8. Website Analytics, Cookies, and Logs
              </h2>
              <p className="mt-2">
                The public Prayonit website does not include account forms or
                direct data-entry fields, but it does include analytics and
                third-party integrations. The repository currently includes
                Vercel Analytics, Google Analytics, and Microsoft Clarity.
              </p>
              <p className="mt-2">
                These services, together with the hosting platform, may collect
                information such as IP address, browser and device information,
                page views, navigation behavior, referral information, and
                general usage data. They may use cookies or similar technologies
                to support analytics, site performance measurement, fraud
                prevention, and security.
              </p>
              <p className="mt-2">
                The website also contains external links to the Apple App Store
                and Google Play, as well as mailto links that open your email
                application if you choose to contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                9. Data Retention
              </h2>
              <p className="mt-2">
                Information may be retained while an account is active, as
                needed to provide requested services, and for reasonable periods
                for security, fraud prevention, legal obligations, dispute
                resolution, transaction records, backups, or logs.
              </p>
              <p className="mt-2">
                We do not promise that every backup copy is removed
                immediately after a deletion request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                10. Account and Data Deletion
              </h2>
              <p className="mt-2">
                You may request deletion of your full Prayonit account and
                associated data, or request deletion of certain specific data
                while keeping your account when technically and legally
                possible.
              </p>
              <p className="mt-2">
                To submit a request, visit our{" "}
                <a
                  href="/delete-account"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  Delete Account &amp; Data
                </a>{" "}
                page or email{" "}
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
                . Verification may be required before a request is completed.
              </p>
              <p className="mt-2">
                Deleting a Prayonit account does not automatically cancel an
                Apple App Store or Google Play subscription.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                11. Data Security
              </h2>
              <p className="mt-2">
                We use reasonable administrative, technical, and organizational
                safeguards designed to protect information. No system can be
                guaranteed to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                12. International Processing
              </h2>
              <p className="mt-2">
                Service providers that help operate Prayonit may process
                information in countries other than your own, subject to
                applicable protections and legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                13. Children&apos;s Privacy
              </h2>
              <p className="mt-2">
                Prayonit does not knowingly collect children&apos;s personal
                information in violation of applicable law. If you are a parent
                or guardian and have concerns about information provided by a
                child, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                14. Privacy Rights
              </h2>
              <p className="mt-2">
                Depending on your location, you may have rights relating to
                access, correction, deletion, restriction, objection,
                portability, or withdrawal of consent where applicable. To make
                a request, email{" "}
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
                15. Changes to the Privacy Policy
              </h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. When we do,
                we will revise the last-updated date on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                16. Contact
              </h2>
              <p className="mt-2">Next Wave Studios LLC</p>
              <p className="mt-2">
                <a
                  href="mailto:apps@nextwavestudiosapp.com"
                  className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
                >
                  apps@nextwavestudiosapp.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
