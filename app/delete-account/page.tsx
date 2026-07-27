import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Your Prayonit Account and Data",
  description:
    "Learn how to request deletion of your Prayonit account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1f2a44] sm:text-4xl">
            Delete Your Prayonit Account and Data
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#43506b]">
            <p>
              Prayonit users may request deletion of their account and the
              personal data associated with it at any time.
            </p>

            <p>
              At this time, account and data deletion requests should be
              submitted by email. An in-app deletion option may be added in a
              future version of Prayonit, but this page should be used for
              current requests.
            </p>

            <p>
              You may request account or data deletion by emailing{" "}
              <a
                href="mailto:apps@nextwavestudiosapp.com"
                className="font-medium text-[#1f2a44] underline underline-offset-4 hover:text-[#a8842f]"
              >
                apps@nextwavestudiosapp.com
              </a>{" "}
              from the email address associated with your Prayonit account.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Email subject line
              </h2>
              <p className="mt-2">Prayonit Account Deletion Request</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Please specify whether you want
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  Your entire Prayonit account and associated data deleted, or
                </li>
                <li>
                  Specific Prayonit data deleted while keeping your account
                </li>
              </ul>
            </div>

            <p>
              We may contact you to verify account ownership before completing
              the request.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Data that may be deleted includes
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Account profile information</li>
                <li>Mood selections and mood history</li>
                <li>Saved prayers, devotions, and reflections</li>
                <li>Journal entries</li>
                <li>Shareable content connected to the account</li>
                <li>Other content connected to the Prayonit account</li>
              </ul>
            </div>

            <p>Account deletion is permanent and cannot be reversed.</p>

            <p>
              Deleting a Prayonit account does not automatically cancel an
              Apple App Store or Google Play subscription. Subscriptions must
              be canceled separately through the store where they were
              purchased.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[#1f2a44]">
                Contact Next Wave Studios LLC
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

            <a
              href="mailto:apps@nextwavestudiosapp.com?subject=Prayonit%20Account%20Deletion%20Request"
              className="inline-flex rounded-full bg-[#1f2a44] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c3a61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
            >
              Request Account Deletion
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
