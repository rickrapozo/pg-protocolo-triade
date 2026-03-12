import { ShieldCheck, CreditCard } from 'lucide-react';

const checkItems = [
  {
    title: 'Acesso Integral ao Protocolo a Tríade',
    desc: 'Treinamento clínico autoguiado (aprox. 90 minutos) direto ao ponto, sem enrolação motivacional.',
  },
  {
    title: 'O Mapa de Autodiagnóstico Oficial',
    desc: 'Ferramenta prática (em PDF) para mapear, no seu ritmo, a raiz exata da sua estagnação.',
  },
  {
    title: '\u201cO Filtro Mental\u201d \u2014 Ferramenta de Intervenção',
    desc: 'Acesso à técnica de quebra de padrão neurológico para interromper circuitos de ansiedade.',
  },
  {
    title: '\u201cA Âncora Biológica\u201d \u2014 Toolkit Somático',
    desc: 'O passo a passo prático para o reset do Nervo Vago e liberação da tensão acumulada no corpo.',
  },
  {
    title: '\u201cA Bússola Existencial\u201d \u2014 Guia Psicanalítico',
    desc: 'Exercício guiado para separar o seu desejo autêntico da necessidade de aprovação externa.',
  },
  {
    title: 'Acesso de 1 Ano a todo o material',
    desc: 'Para você refazer o diagnóstico sempre que sentir que a sua vida voltou a travar.',
  },
  {
    title: 'Garantia Clínica Incondicional de 7 Dias',
    desc: 'Seu risco financeiro é zero.',
  },
];

const GoldCheck = () => (
  <span
    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
    style={{ background: 'linear-gradient(135deg, #FFE566, #FFD700)', minWidth: '20px' }}
  >
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
      <path d="M1 4L3.8 7L10 1" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const OfferSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 relative overflow-hidden">

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 max-w-2xl mx-auto leading-tight">
          O mapeamento exato do seu bloqueio custaria R$ 1.500 no consultório físico.
        </h2>

        {/* Checkout Style Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-xl mx-auto shadow-2xl relative border-t-8 border-brand-green">
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-zinc-900 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
            ACESSO IMEDIATO LIBERADO
          </div>

          {/* Price block */}
          <div className="mt-4 mb-8">
            <span className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-2 block">
              Investimento Único
            </span>
            <div className="flex flex-col items-center justify-center">
              <span className="text-zinc-400 text-lg md:text-xl line-through font-semibold mb-1">
                De R$ 197,00
              </span>
              <div className="text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tighter">
                <span className="text-3xl align-top mr-1">R$</span>37,90
              </div>
              <span className="text-brand-green-dark font-bold text-sm mt-1">
                (Acesso vitalício ao Protocolo)
              </span>
            </div>
          </div>

          {/* What you receive checklist */}
          <div className="mb-8 text-left">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4 text-center">
              O QUE VOCÊ RECEBE IMEDIATAMENTE HOJE:
            </p>
            <ul className="space-y-3">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck />
                  <span className="text-sm text-zinc-700 leading-snug">
                    <strong className="text-zinc-900">{item.title}:</strong>{' '}{item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-zinc-200" />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center mb-6">
            <button className="btn-primary w-full text-lg sm:text-xl py-5 shadow-[0_8px_30px_rgba(255,215,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.6)]">
              SIM, QUERO MEU ACESSO AGORA
            </button>

            {/* Payment Options */}
            <div className="flex items-center gap-4 mt-6 text-zinc-400 justify-center">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-semibold">Pagamento via PIX ou Cartão em até 12x</span>
            </div>
          </div>

          {/* Security badge */}
          <div className="bg-zinc-50 rounded-xl p-4 flex items-start gap-3 text-left border border-zinc-200">
            <ShieldCheck className="w-8 h-8 text-brand-green shrink-0 mt-1" />
            <p className="text-sm text-zinc-600 font-medium leading-relaxed">
              Compra criptografada e 100% segura. Suas informações estão protegidas sob as diretrizes do banco central.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection;
