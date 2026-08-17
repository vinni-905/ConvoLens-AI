import Navbar from "@/components/layout/Navbar";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                AI-powered conversation intelligence
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Understand
                <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Every Conversation.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                ConvoLens AI transforms conversation recordings into
                meaningful insights. Discover who spoke, what was discussed,
                and how the conversation unfolded.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Analyze a Conversation
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10">
                  See How It Works
                </button>
              </div>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                <span>✓ Speaker analysis</span>
                <span>✓ Talk-time insights</span>
                <span>✓ AI summaries</span>
              </div>
            </div>

            {/* RIGHT SIDE — PRODUCT PREVIEW */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="text-xs text-slate-500">
                    Conversation Analysis
                  </span>
                </div>

                {/* Dashboard */}
                <div className="space-y-6 p-6">

                  {/* Title */}
                  <div>
                    <p className="text-sm text-slate-500">
                      Analysis complete
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
                      Team Discussion
                    </h2>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-3">
                    <StatCard
                      label="Duration"
                      value="24:18"
                    />

                    <StatCard
                      label="Speakers"
                      value="3"
                    />

                    <StatCard
                      label="Words"
                      value="3.2K"
                    />
                  </div>

                  {/* Talk Time */}
                  <div className="rounded-xl border border-white/10 bg-slate-950/70 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Talk Time
                      </span>

                      <span className="text-xs text-slate-500">
                        24 minutes
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">

                      <SpeakerBar
                        name="Speaker A"
                        percentage="62%"
                        width="62%"
                      />

                      <SpeakerBar
                        name="Speaker B"
                        percentage="27%"
                        width="27%"
                      />

                      <SpeakerBar
                        name="Speaker C"
                        percentage="11%"
                        width="11%"
                      />

                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">

                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                        ✦
                      </div>

                      <span className="font-medium">
                        AI Insight
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      The conversation was collaborative, with Speaker A
                      contributing most of the discussion. The main topic was
                      project planning and task distribution.
                    </p>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-white/5 bg-white/2 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-sm text-slate-500">

          <span>Built for meaningful conversations</span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <span>Powered by AI</span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <span>Designed with privacy in mind</span>

        </div>
      </section>
    </main>
  );
}


/* ================= STAT CARD ================= */

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}


/* ================= SPEAKER BAR ================= */

function SpeakerBar({
  name,
  percentage,
  width,
}: {
  name: string;
  percentage: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs">
        <span className="text-slate-400">
          {name}
        </span>

        <span className="text-slate-500">
          {percentage}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}