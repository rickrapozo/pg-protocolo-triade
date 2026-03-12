export const ScrollingMarquee = () => {
  const wordsRow1 = [
    "MAPEAMENTO NEUROBIOLÓGICO",
    "RESET DO NERVO VAGO",
    "MIOPIA TERAPÊUTICA",
    "PERFORMANCE COGNITIVA",
    "DESTRAVE SEU POTENCIAL",
    "REPROGRAMAÇÃO SOMÁTICA",
  ];

  const wordsRow2 = [
    "FOCO IMPLACÁVEL",
    "CLAREZA EXISTENCIAL",
    "FIM DA ESTAGNAÇÃO",
    "VÍCIO EM ESCASSEZ",
    "O FILTRO MENTAL",
    "BLINDAGEM EMOCIONAL",
  ];

  // x3 is enough for seamless loop
  const r1 = [...wordsRow1, ...wordsRow1, ...wordsRow1];
  const r2 = [...wordsRow2, ...wordsRow2, ...wordsRow2];

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 border-y border-zinc-900"
      style={{ height: '90px' }}
    >
      {/* Absolute container centered vertically */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ gap: '0px' }}>

        {/* Band 1: Gold, rotated slightly down (\) */}
        <div
          className="w-full flex whitespace-nowrap overflow-hidden relative z-10 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FFE566 0%, #FFD700 50%, #B8860B 100%)',
            transform: 'rotate(2deg) scaleX(1.1)',
            padding: '7px 0',
          }}
        >
          <div className="animate-marquee flex gap-8 items-center">
            {r1.map((word, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-extrabold uppercase text-zinc-900 tracking-tight whitespace-nowrap">
                  {word}
                </span>
                <div className="w-2 h-2 rounded-full bg-zinc-900/40 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Band 2: Dark gold/bronze — clearly visible, rotated up (/) */}
        <div
          className="w-full flex whitespace-nowrap overflow-hidden relative z-20 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #3d2e00 0%, #5a4500 50%, #2d1a00 100%)',
            transform: 'rotate(-2deg) scaleX(1.1)',
            padding: '7px 0',
            marginTop: '-12px',
            borderTop: '1px solid rgba(255,215,0,0.2)',
            borderBottom: '1px solid rgba(255,215,0,0.2)',
          }}
        >
          <div className="animate-marquee-reverse flex gap-8 items-center">
            {r2.map((word, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-extrabold uppercase tracking-tight whitespace-nowrap" style={{ color: '#FFD700' }}>
                  {word}
                </span>
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'rgba(255,215,0,0.4)' }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScrollingMarquee;
