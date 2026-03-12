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
    <section
      className="py-20 px-4 sm:px-6 border-t border-zinc-200"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23d4d4d8' fill-opacity='0.45'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#B8860B' }}>
            QUEM CRIOU O PROTOCOLO
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-5">
            A ciência por trás do <span className="highlight">diagnóstico.</span>
          </h2>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            O Protocolo a Tríade não é autoajuda. É aplicação direta de neurobiologia e prática clínica avançada.
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((person, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-200 hover:border-brand-green transition-all duration-300 bg-white shadow-lg hover:shadow-[0_8px_30px_rgba(184,134,11,0.15)]"
            >
              {/* Photo — full image visible, no crop */}
              <div className="w-full bg-zinc-100 flex items-center justify-center">
                <img
                  src={person.image}
                  alt={`Foto de ${person.name}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-6 border-t border-zinc-100">
                {/* Role tag */}
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#B8860B' }}
                >
                  {person.role}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-zinc-900 mt-1 mb-1">
                  {person.name}
                </h3>



                {/* Credentials pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {person.credentials.map((c, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        borderColor: 'rgba(184,134,11,0.35)',
                        color: '#92700a',
                        backgroundColor: 'rgba(184,134,11,0.07)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-zinc-500 leading-relaxed text-sm">
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
            borderColor: 'rgba(184,134,11,0.2)',
            background: 'rgba(184,134,11,0.06)',
          }}
        >
          <p className="text-zinc-700 font-semibold">
            Juntos, Ricardo e Carlos já atenderam mais de{' '}
            <span style={{ color: '#B8860B' }} className="font-black">700 pacientes</span>{' '}
            em processos clínicos de alto impacto.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
