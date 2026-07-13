"use client";

import Image from "next/image";
import { useRef } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/data/appLinks";
import { trackEvent } from "@/lib/analytics";

interface DownloadSectionProps {
  heading: string;
  supportingCopy: string;
  id?: string;
}

export default function DownloadSection({
  heading,
  supportingCopy,
  id,
}: DownloadSectionProps) {
  const badgesRef = useRef<HTMLDivElement>(null);

  const handleDownloadClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
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
      badgesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      id={id}
      className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="rounded-3xl bg-gradient-to-b from-[#1f2a44] to-[#141c30] px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#cfd6e6]">
          {supportingCopy}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#"
            onClick={handleDownloadClick}
            className="w-full max-w-xs rounded-full bg-[#d4af6a] px-8 py-3 text-center text-base font-semibold text-[#1f2a44] shadow-md transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            DOWNLOAD PRAYONIT
          </a>

          <div
            ref={badgesRef}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("app_store_clicked")}
              aria-label="Download on the App Store"
              className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Image
                src="/branding/app_store_badge.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("google_play_clicked")}
              aria-label="Get it on Google Play"
              className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Image
                src="/branding/google_play_badge.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </a>
          </div>

          <p className="text-sm font-medium text-[#cfd6e6]">
            Start your 14-day free trial.
          </p>
        </div>
      </div>
    </section>

  );
}
