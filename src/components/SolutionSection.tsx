const SolutionSection = () => {
  const modules = [
    {
      number: "01",
      title: "O Filtro Mental",
      description: "Identifique os 3 atalhos neurológicos que mantêm seu cérebro viciado na zona de conforto e paralisam seu avanço.",
      image: "/Capa modulo 1 filtro mental.webp",
      tag: "SOFTWARE MENTAL",
    },
    {
      number: "02",
      title: "A Âncora Biológica",
      description: "O checklist somático. Descubra exatamente onde o seu corpo armazena o trauma e aplique o reset imediato do nervo vago.",
      image: "/Capa modulo 2 fisico.webp",
      tag: "HARDWARE BIOLÓGICO",
    },
    {
      number: "03",
      title: "A Bússola Existencial",
      description: "A ferramenta de mapeamento implacável para separar o seu verdadeiro desejo da tentativa inconsciente de agradar os outros.",
      image: "/Capa modulo 3 Espiritual.webp",
      tag: "PROPÓSITO EXISTENCIAL",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FFD700' }}>
            O QUE ESTÁ INCLUÍDO
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-white">
            A Solução: <span className="highlight">O Protocolo Tríade</span>
          </h2>
          <p className="text-zinc-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Uma intervenção de 90 minutos que atua com precisão cirúrgica no seu software mental,
            hardware biológico e propósito existencial. Nada de 'gratidão' forçada.
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-green transition-all duration-300 bg-zinc-900 shadow-xl hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)]"
            >
              {/* Cover Image — full portrait, no crop */}
              <div className="w-full flex-shrink-0 bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img
                  src={mod.image}
                  alt={`Capa ${mod.title}`}
                  className="w-full object-contain"
                  style={{ maxHeight: '380px' }}
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 border-t border-zinc-800">
                {/* Tag */}
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 inline-block"
                  style={{ color: '#FFD700' }}
                >
                  {mod.tag}
                </span>

                {/* Number + Title */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="text-3xl font-black leading-none"
                    style={{ color: 'rgba(255,215,0,0.25)' }}
                  >
                    {mod.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    {mod.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm font-medium">
            Os 3 módulos + bônus exclusivos desbloqueados de forma imediata após o acesso.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
