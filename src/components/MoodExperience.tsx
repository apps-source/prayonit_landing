"use client";

import { useState } from "react";
import type { Mood } from "@/types/mood";
import { trackEvent } from "@/lib/analytics";
import MoodSelector from "./MoodSelector";
import DownloadSection from "./DownloadSection";

export default function MoodExperience() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [showPrayer, setShowPrayer] = useState(false);

  const handleSelectMood = (mood: Mood) => {
    setSelectedMood(mood);
    setShowPrayer(false);
  };

  const handleChooseDifferentMood = () => {
    setSelectedMood(null);
    setShowPrayer(false);
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#a8842f]">
          Welcome to Prayonit
        </p>
      </div>

      <div className="mt-6 text-center sm:mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1f2a44] sm:text-4xl">
          How are you feeling today?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#43506b] sm:text-lg">
          Whatever brought you here today&hellip; you&rsquo;re not here by
          accident.
          <br />
          Take one quiet moment. Choose how you&rsquo;re feeling.
          <br />
          We&rsquo;ll help you begin with Scripture and prayer.
        </p>
      </div>


      <div className="mt-6 sm:mt-8">
        {!selectedMood ? (
          <MoodSelector onSelect={handleSelectMood} />
        ) : (
          <div key={selectedMood.id} className="animate-fade-slide-in">
            <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl" aria-hidden="true">
                  {selectedMood.emoji}
                </span>
                <h2 className="text-xl font-semibold text-[#1f2a44] sm:text-2xl">
                  {selectedMood.label}
                </h2>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#a8842f]">
                  Scripture for how you&rsquo;re feeling
                </p>
                <blockquote className="mt-2 text-base italic leading-relaxed text-[#1f2a44] sm:text-lg">
                  &ldquo;{selectedMood.verseText}&rdquo;
                </blockquote>
                <p className="mt-2 text-sm font-medium text-[#43506b]">
                  {selectedMood.verseReference} (KJV)
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#a8842f]">
                  A short devotion
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#43506b]">
                  {selectedMood.devotion}
                </p>
              </div>

              {!showPrayer ? (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent("lets_pray_clicked", {
                        mood: selectedMood.id,
                      });
                      setShowPrayer(true);
                    }}
                    className="rounded-full bg-[#1f2a44] px-8 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
                  >
                    Let&rsquo;s Pray
                  </button>
                </div>
              ) : (
                <div className="mt-8 animate-fade-slide-in">
                  <div className="rounded-2xl bg-[#1f2a44]/5 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#a8842f]">
                      A prayer for this moment
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-[#1f2a44]">
                      {selectedMood.prayer}
                    </p>
                  </div>

                  <p className="mt-6 text-center text-sm italic text-[#43506b]">
                    Prayer doesn&rsquo;t have to end here.
                  </p>
                </div>
              )}
            </div>

            {showPrayer && (
              <div className="animate-fade-slide-in">
                <DownloadSection
                  id="download"
                  heading="Continue Your Prayer Journey"
                  supportingCopy="Get guided, personalized prayers based on your mood, uplifting devotionals, journaling, and daily spiritual encouragement in the Prayonit app."
                />
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleChooseDifferentMood}
                className="rounded-full px-5 py-2 text-sm font-medium text-[#43506b] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
              >
                Choose a different mood
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
