"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/data/appLinks";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [showBadges, setShowBadges] = useState(false);
  const badgesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showBadges) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        badgesMenuRef.current &&
        !badgesMenuRef.current.contains(event.target as Node)
      ) {
        setShowBadges(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showBadges]);

  const handleDownloadClick = () => {
    trackEvent("download_clicked");

    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    if (isIOS) {
      window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
    } else if (isAndroid) {
      window.open(GOOGLE_PLAY_URL, "_blank", "noopener,noreferrer");
    } else {
      setShowBadges((previous) => !previous);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbf6ee]/90 backdrop-blur supports-[backdrop-filter]:bg-[#fbf6ee]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]">
          <Image
            src="/branding/prayonit_logo.png"
            alt="Prayonit logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-[#1f2a44]">
            Prayonit
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-[#1f2a44] sm:gap-6">
          <a
            href="#how-it-works"
            className="rounded-md px-1 py-1 hover:text-[#a8842f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            How It Works
          </a>

          <div ref={badgesMenuRef} className="relative">
            <button
              type="button"
              onClick={handleDownloadClick}
              aria-haspopup="true"
              aria-expanded={showBadges}
              className="rounded-full bg-[#1f2a44] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#2b3a5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
            >
              Download
            </button>

            {showBadges && (
              <div className="animate-fade-in absolute right-0 top-full mt-2 flex flex-col items-stretch gap-2 rounded-xl bg-white p-3 shadow-lg ring-1 ring-black/5">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("app_store_clicked")}
                  aria-label="Download on the App Store"
                  className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
                >
                  <Image
                    src="/branding/app_store_badge.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("google_play_clicked")}
                  aria-label="Get it on Google Play"
                  className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
                >
                  <Image
                    src="/branding/google_play_badge.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
