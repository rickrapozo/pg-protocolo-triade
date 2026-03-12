import { ShieldCheck, Clock, RotateCcw, Mail } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">

        {/* Outer ring — premium badge frame */}
        <div
          className="relative rounded-2xl p-px overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFE566, #FFD700, #B8860B, #5a4500, #FFD700)',
          }}
        >
          <div className="rounded-2xl bg-zinc-950 px-8 py-12 sm:px-14 sm:py-16 text-center relative overflow-hidden">

            {/* Subtle shine blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,215,0,0.07) 0%, transparent 70%)',
              }}
            />

            {/* Shield icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.2)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,229,102,0.15) 0%, rgba(255,215,0,0.08) 100%)',
                  border: '2px solid rgba(255,215,0,0.35)',
                }}
              >
                <ShieldCheck size={44} style={{ color: '#FFD700' }} />
              </div>
            </div>

            {/* Badge label */}
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#FFD700' }}>
              GARANTIA INCONDICIONAL CLÍNICA
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              7 Dias de Risco{' '}
              <span className="highlight">Zero.</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              O risco financeiro desta operação é <strong className="text-white">inteiramente nosso</strong>.
              Se você aplicar o protocolo e não sentir uma clareza brutal sobre os motivos da
              sua estagnação, basta um único e-mail para o nosso suporte — e reembolsaremos
              <strong className="text-white"> 100% do seu valor</strong>. Sem questionamentos.
              Sem letras miúdas.
            </p>

            {/* 3 pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Clock size={20} style={{ color: '#FFD700' }} />, label: '7 dias completos', sub: 'para testar sem pressa' },
                { icon: <RotateCcw size={20} style={{ color: '#FFD700' }} />, label: 'Reembolso 100%', sub: 'sem perguntas' },
                { icon: <Mail size={20} style={{ color: '#FFD700' }} />, label: '1 e-mail basta', sub: 'suporte direto e ágil' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl"
                  style={{
                    background: 'rgba(255,215,0,0.04)',
                    border: '1px solid rgba(255,215,0,0.12)',
                  }}
                >
                  {item.icon}
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-zinc-500 text-xs">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Fine print */}
            <p className="text-zinc-600 text-xs leading-relaxed">
              A garantia é válida por 7 dias corridos a partir da data de compra.
              Suporte via e-mail: <span className="text-zinc-400">suporte@protocolotriade.com</span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
