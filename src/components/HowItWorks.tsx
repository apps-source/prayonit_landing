const unlockFeatures = [
  {
    emoji: "📖",
    title: "Hundreds of KJV Scriptures",
    description:
      "Receive verses that meet you where you are every day.",
  },
  {
    emoji: "🙏",
    title: "Personalized Guided Prayer",
    description:
      "Receive guided prayers based on your mood and what is on your heart.",
  },
  {
    emoji: "📝",
    title: "Private Prayer Journal",
    description: "Write to God and revisit your spiritual journey.",
  },
  {
    emoji: "❤️",
    title: "Save Favorite Verses",
    description: "Quickly return to the verses that mean the most.",
  },
  {
    emoji: "🌅",
    title: "Daily Encouragement",
    description: "Fresh morning and evening inspiration every day.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1f2a44] sm:text-3xl">
          What You&rsquo;ll Unlock in the App
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#43506b]">
          The full Prayonit experience goes further, helping you keep
          showing up for moments like this one.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {unlockFeatures.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-start gap-3 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5"
          >
            <span className="text-3xl" aria-hidden="true">
              {feature.emoji}
            </span>
            <h3 className="text-base font-semibold text-[#1f2a44]">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#43506b]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
