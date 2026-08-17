export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          ConvoLens <span className="text-blue-500">AI</span>
        </h1>

        {/* Navigation */}
        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">How It Works</a>
          <a href="#" className="hover:text-blue-400">About</a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}