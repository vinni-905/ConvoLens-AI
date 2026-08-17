const features = [
  {
    icon: "◉",
    title: "Speaker Analysis",
    description:
      "Identify different speakers and understand exactly how much each person contributed to the conversation.",
    highlights: ["Speaker identification", "Talk-time percentage", "Speaker comparison"],
  },
  {
    icon: "◒",
    title: "Talk-Time Insights",
    description:
      "See who dominated the conversation, who spoke less, and how the discussion was distributed.",
    highlights: ["Speaking duration", "Participation ratio", "Conversation balance"],
  },
  {
    icon: "✦",
    title: "AI Conversation Summary",
    description:
      "Turn long conversations into concise, useful summaries without manually listening to the entire recording.",
    highlights: ["Key points", "Important moments", "Action items"],
  },
  {
    icon: "♡",
    title: "Sentiment & Tone",
    description:
      "Understand the emotional direction of a conversation and detect changes in tone throughout the discussion.",
    highlights: ["Positive / neutral / negative", "Tone changes", "Emotional patterns"],
  },
  {
    icon: "⌁",
    title: "Conversation Patterns",
    description:
      "Discover interruptions, response patterns, participation gaps, and other communication behaviors.",
    highlights: ["Interruptions", "Response patterns", "Communication behavior"],
  },
  {
    icon: "⌕",
    title: "Topics & Keywords",
    description:
      "Automatically identify the major subjects and important keywords discussed during the conversation.",
    highlights: ["Topic detection", "Keyword extraction", "Discussion themes"],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/5 bg-slate-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Conversation Intelligence
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Go beyond the transcript.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            ConvoLens AI looks deeper than words. Understand participation,
            communication patterns, emotions, topics, and the story behind
            every conversation.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlights={feature.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  highlights,
}: {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/5">
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Highlights */}
      <div className="mt-6 space-y-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center gap-2 text-sm text-slate-500"
          >
            <span className="text-blue-400">✓</span>
            {highlight}
          </div>
        ))}
      </div>
    </article>
  );
}