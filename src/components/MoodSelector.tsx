"use client";

import { moods } from "@/data/moods";
import type { Mood } from "@/types/mood";

interface MoodSelectorProps {
  onSelect: (mood: Mood) => void;
}

export default function MoodSelector({ onSelect }: MoodSelectorProps) {
  return (
    <div className="w-full animate-fade-in">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            type="button"
            onClick={() => onSelect(mood)}
            className="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border border-transparent bg-white/80 px-4 py-5 text-center shadow-sm ring-1 ring-black/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#d4af6a] hover:shadow-md active:scale-[0.98] active:border-[#d4af6a] active:ring-2 active:ring-[#d4af6a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a44]"
          >
            <span className="text-3xl" aria-hidden="true">
              {mood.emoji}
            </span>
            <span className="text-sm font-semibold text-[#1f2a44]">
              {mood.buttonLabel}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
