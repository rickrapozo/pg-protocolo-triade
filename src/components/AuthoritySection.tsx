const AuthoritySection = () => {
  const experts = [
    {
      name: "Ricardo Borges",
      role: "Terapeuta Emocional",
      credentials: ["Neurociência Clínica", "Psicanálise Aplicada", "PNL Avançada"],
      description:
        "Especialista na resolução de processos de estagnação profunda. Através da convergência cirúrgica entre neurobiologia, psicanálise e PNL, não apenas reprograma sistemas de crenças, mas alinha os eixos mental, biológico e existencial em uma intervenção terapêutica integral.",
      image: "/Ricardo_11zon.webp",
    },
    {
      name: "Carlos Carvalho",
      role: "Neuropsicopedagogo Clínico",
      credentials: ["Reprogramação Somática", "Mapeamento Cognitivo", "Medicina de Evidências"],
      description:
        "Especialista em mapeamento de bloqueios cognitivos e reprogramação somática. Desenvolve protocolos rigorosamente embasados em evidência científica para identificar e neutralizar padrões de sabotagem inconsciente.",
      image: "/carlos_11zon.webp",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FFD700' }}>
            QUEM CRIOU O PROTOCOLO
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            A ciência por trás do <span className="highlight">diagnóstico.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            O Protocolo a Tríade não é autoajuda. É aplicação direta de neurobiologia e prática clínica avançada.
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((person, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-green transition-all duration-300 bg-zinc-900 shadow-xl hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)]"
            >
              {/* Photo — full image visible, no crop */}
              <div className="w-full bg-zinc-800 flex items-center justify-center">
                <img
                  src={person.image}
                  alt={`Foto de ${person.name}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-6 border-t border-zinc-800">
                {/* Role tag */}
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#FFD700' }}
                >
                  {person.role}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-white mt-1 mb-1">
                  {person.name}
                </h3>



                {/* Credentials pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {person.credentials.map((c, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        borderColor: 'rgba(255,215,0,0.3)',
                        color: 'rgba(255,215,0,0.8)',
                        backgroundColor: 'rgba(255,215,0,0.05)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 rounded-xl p-6 text-center border"
          style={{
            borderColor: 'rgba(255,215,0,0.15)',
            background: 'rgba(255,215,0,0.04)',
          }}
        >
          <p className="text-zinc-300 font-semibold">
            Juntos, Ricardo e Carlos já atenderam mais de{' '}
            <span style={{ color: '#FFD700' }} className="font-black">700 pacientes</span>{' '}
            em processos clínicos de alto impacto.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
