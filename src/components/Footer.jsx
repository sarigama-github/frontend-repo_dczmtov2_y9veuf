export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="container mx-auto px-6 sm:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black" />
          <span className="font-extrabold text-xl">NeoGrid</span>
        </div>
        <p className="text-black/70">© {new Date().getFullYear()} NeoGrid. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="#features" className="px-4 py-2 bg-amber-300 border-4 border-black font-extrabold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">Features</a>
          <a href="#get-started" className="px-4 py-2 bg-cyan-300 border-4 border-black font-extrabold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">Get Started</a>
        </div>
      </div>
    </footer>
  );
}
