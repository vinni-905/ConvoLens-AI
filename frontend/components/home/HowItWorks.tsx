import type { HowItWorksStep, ResultRowData } from "@/types/home";

const steps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Upload",
    description:
      "Upload a conversation recording directly to ConvoLens AI.",
    detail: "Audio / Video",
    icon: "↑",
  },
  {
    number: "02",
    title: "Transcribe",
    description:
      "AI converts the conversation into an accurate, searchable transcript.",
    detail: "Speech → Text",
    icon: "≋",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Our analysis engine identifies speakers, topics, sentiment, tone, and conversation patterns.",
    detail: "AI Processing",
    icon: "✦",
  },
  {
    number: "04",
    title: "Visualize",
    description:
      "Complex conversation data is transformed into clear charts and meaningful metrics.",
    detail: "Data → Insights",
    icon: "◫",
  },
  {
    number: "05",
    title: "Understand",
    description:
      "Get a complete picture of the conversation and discover insights you might have missed.",
    detail: "Actionable Results",
    icon: "✓",
  },
];

const results: ResultRowData[] = [
  {
    label: "Speakers",
    value: "3 detected",
  },
  {
    label: "Talk time",
    value: "62 / 27 / 11%",
  },
  {
    label: "Sentiment",
    value: "Positive",
  },
  {
    label: "Topics",
    value: "5 identified",
  },
];

const waveformHeights = [
  18, 32, 22, 42, 28,
  50, 34, 44, 24, 38,
  52, 30, 46, 25, 40,
  32, 48, 28, 42, 20,
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            From Recording to Insight
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            See how ConvoLens works.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A simple workflow turns a raw conversation into structured,
            meaningful intelligence.
          </p>
        </div>

        {/* ================= FIVE STEP PIPELINE ================= */}

        <div className="relative mt-20">

          {/* Connecting line - desktop */}
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-linear-to-r from-blue-500/10 via-blue-500/40 to-cyan-500/10 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <StepCard
                key={step.number}
                {...step}
              />
            ))}
          </div>
        </div>

        {/* ================= PROCESSING ENGINE ================= */}

        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/3">

          {/* Panel Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <span className="text-xs text-slate-500">
                ConvoLens Processing Engine
              </span>

            </div>

            <span className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Ready
            </span>

          </div>

          {/* ================= PROCESSING CONTENT ================= */}

          <div className="grid gap-8 p-6 lg:grid-cols-3 lg:p-8">

            {/* ---------- INPUT ---------- */}

            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-5">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Input
              </p>

              <p className="mt-2 font-medium text-white">
                conversation.mp3
              </p>

              {/* Audio waveform */}
              <div className="mt-6 flex h-12 items-center gap-1">
                {waveformHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-full bg-blue-500/60"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  24:18 recording
                </p>

                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs text-blue-400">
                  MP3
                </span>
              </div>

            </div>

            {/* ---------- AI ENGINE ---------- */}

            <div className="relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">

              <p className="text-xs uppercase tracking-wider text-blue-400">
                Processing
              </p>

              <div className="mt-5 flex items-center justify-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-3xl text-blue-400 shadow-lg shadow-blue-500/10">
                  ✦
                </div>

              </div>

              <div className="mt-5 text-center">

                <p className="font-medium text-white">
                  AI Conversation Analysis
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Speakers · Topics · Sentiment · Tone · Patterns
                </p>

              </div>

              {/* Processing indicator */}
              <div className="mt-6 flex items-center justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/40" />
                <span className="ml-2 text-xs text-slate-500">
                  Processing conversation
                </span>
              </div>

            </div>

            {/* ---------- OUTPUT ---------- */}

            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-5">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Output
              </p>

              <div className="mt-5 space-y-3">
                {results.map((result) => (
                  <ResultRow
                    key={result.label}
                    {...result}
                  />
                ))}
              </div>

              {/* View results */}
              <div className="mt-5 rounded-lg border border-emerald-500/10 bg-emerald-500/5 px-3 py-2 text-center text-xs text-emerald-400">
                Analysis complete
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


/* ================= STEP CARD ================= */

function StepCard({
  number,
  title,
  description,
  detail,
  icon,
}: HowItWorksStep) {
  return (
    <article className="group relative z-10 rounded-2xl border border-white/10 bg-slate-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">

      {/* Number + Icon */}
      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold tracking-widest text-blue-400">
          {number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
          {icon}
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Detail */}
      <div className="mt-5 border-t border-white/5 pt-4 text-xs text-slate-500">
        {detail}
      </div>

    </article>
  );
}


/* ================= RESULT ROW ================= */

function ResultRow({
  label,
  value,
}: ResultRowData) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">

      <span className="text-xs text-slate-500">
        {label}
      </span>

      <span className="text-xs font-medium text-slate-300">
        {value}
      </span>

    </div>
  );
}