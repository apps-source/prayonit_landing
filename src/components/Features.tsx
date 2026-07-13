const features = [
  {
    title: "Mood-based Scripture",
    description:
      "Trusted KJV verses chosen to meet you in exactly how you feel today.",
  },
  {
    title: "Guided personalized prayer",
    description:
      "Get a guided, personalized prayer based on your mood right now.",
  },
  {
    title: "Uplifting devotionals",
    description:
      "Short reflections that help Scripture take root in everyday life.",
  },
  {
    title: "Private prayer journal",
    description:
      "Capture what's on your heart and keep a personal record of your walk.",
  },
  {
    title: "Daily spiritual support",
    description:
      "A calm companion for consistent moments of reflection and prayer.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1f2a44] sm:text-3xl">
          Everything you need to keep showing up
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="text-base font-semibold text-[#1f2a44]">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#43506b]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
