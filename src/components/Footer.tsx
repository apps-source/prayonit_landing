"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#fbf6ee]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm text-[#43506b] sm:flex-row sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-semibold text-[#1f2a44]">Prayonit</span>
          <span>by Next Wave Studios</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/privacy"
            onClick={() => trackEvent("privacy_clicked")}
            className="rounded-md hover:text-[#1f2a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            onClick={() => trackEvent("terms_clicked")}
            className="rounded-md hover:text-[#1f2a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            Terms
          </Link>
          <Link
            href="/support"
            onClick={() => trackEvent("support_clicked")}
            className="rounded-md hover:text-[#1f2a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            Support
          </Link>
          <Link
            href="/delete-account"
            onClick={() => trackEvent("delete_account_clicked")}
            className="rounded-md hover:text-[#1f2a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            Delete Account &amp; Data
          </Link>
        </nav>

        <p>&copy; {year} Prayonit. All rights reserved.</p>
      </div>
    </footer>
  );
}
