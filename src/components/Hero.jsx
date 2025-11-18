import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden border-b-4 border-black bg-slate-900">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-950/90" />

      <div className="relative container mx-auto px-6 sm:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-4 py-2 bg-lime-400 text-black font-bold border-4 border-black shadow-[6px_6px_0_0_#000]">
            NEOBRUTALISM • TECHNOLOGY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[4px_4px_0_#000]">
            Bold software for a world that moves in cubes
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-100/90 bg-slate-900/40 border-4 border-black inline-block p-4 pr-6 shadow-[6px_6px_0_0_#000]">
            Design, build, and launch with unapologetic clarity. Minimal, fast, and unmistakably modern.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#get-started" className="inline-flex items-center justify-center px-6 py-4 bg-lime-400 text-black font-extrabold border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-4 bg-white text-black font-extrabold border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
