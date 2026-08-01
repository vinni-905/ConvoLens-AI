import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="flex flex-col items-center justify-center py-32 text-center">
          <h1 className="text-6xl font-extrabold">
            Transform Conversations
          </h1>

          <h2 className="mt-4 text-6xl font-extrabold text-blue-500">
            into Meaningful Insights
          </h2>

          <p className="mt-8 max-w-2xl text-xl text-gray-400">
            Upload your conversations and let AI analyze speakers,
            communication patterns, summaries, and insights.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700">
            Analyze Conversation
          </button>
        </section>
      </main>
    </>
  );
}