export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-slate-950 text-white">
      <div className="container mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="border-4 border-black bg-lime-400 text-black p-8 md:p-10 shadow-[8px_8px_0_0_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-[4px_4px_0_#000]">Make it unapologetically yours</h3>
            <p className="mt-2 text-black/90">Deploy faster, customize visuals, and keep the vibe consistent.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-4 bg-black text-white font-extrabold border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
