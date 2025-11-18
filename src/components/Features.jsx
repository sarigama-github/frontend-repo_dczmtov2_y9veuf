export default function Features() {
  const items = [
    {
      title: 'Chunky Layouts',
      desc: 'Strong grids, thick borders, and bold type that pop off the screen.',
      color: 'bg-lime-400'
    },
    {
      title: 'Fast by Default',
      desc: 'Vite + React + Tailwind for instant feedback and blazing performance.',
      color: 'bg-cyan-300'
    },
    {
      title: '3D-Ready',
      desc: 'Native Spline support for immersive, interactive hero sections.',
      color: 'bg-amber-300'
    }
  ];

  return (
    <section id="features" className="relative w-full bg-white">
      <div className="container mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black drop-shadow-[4px_4px_0_#000]">
            Built to stand out
          </h2>
          <p className="mt-3 text-lg text-black/80">
            A design language that embraces simplicity, speed, and personality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div
              key={i}
              className={`group ${f.color} border-4 border-black p-6 shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform`}
            >
              <h3 className="text-xl font-extrabold text-black mb-2">{f.title}</h3>
              <p className="text-black/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
