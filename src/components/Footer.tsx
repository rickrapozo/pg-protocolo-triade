import { ShieldCheck, Lock, CreditCard, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#040404] border-t border-zinc-900 text-zinc-500">

      {/* Trust strip */}
      <div
        className="border-b border-zinc-900 py-5 px-4"
        style={{ background: 'rgba(255,215,0,0.03)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { icon: <Lock size={15} style={{ color: '#FFD700' }} />, label: 'Pagamento 100% Seguro' },
            { icon: <ShieldCheck size={15} style={{ color: '#FFD700' }} />, label: 'Garantia de 7 Dias' },
            { icon: <CreditCard size={15} style={{ color: '#FFD700' }} />, label: 'PIX · Cartão em 12x' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.icon}
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand column */}
        <div className="sm:col-span-1">
          <p className="text-white font-black text-lg tracking-tight mb-2">
            Protocolo <span style={{ color: '#FFD700' }}>a Tríade</span>
          </p>
          <p className="text-xs leading-relaxed text-zinc-500 max-w-xs">
            O diagnóstico clínico autoguiado de 90 minutos que mapeia a origem exata da sua
            estagnação financeira, física, emocional e espiritual.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {[
              { icon: <Instagram size={16} />, label: 'Instagram' },
              { icon: <Youtube size={16} />, label: 'YouTube' },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-zinc-800 hover:border-brand-green hover:text-brand-green transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links column */}
        <div>
          <p className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-4">Navegação</p>
          <ul className="space-y-3">
            {[
              'O Diagnóstico',
              'O Protocolo',
              'Especialistas',
              'Oferta',
              'Garantia',
              'FAQ',
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-brand-green transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Contact column */}
        <div>
          <p className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-4">Suporte & Legal</p>
          <ul className="space-y-3">
            {[
              { label: 'Política de Privacidade', href: '#' },
              { label: 'Termos de Uso', href: '#' },
              { label: 'Política de Reembolso', href: '#' },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="text-sm text-zinc-500 hover:text-brand-green transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2">
            <Mail size={14} style={{ color: '#FFD700' }} />
            <a
              href="mailto:suporte@protocolotriade.com"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              suporte@protocolotriade.com
            </a>
          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-900 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-700 font-bold">
            © {new Date().getFullYear()} Protocolo a Tríade · Todos os direitos reservados
          </p>
          <p className="text-[11px] text-zinc-700">
            CNPJ: 00.000.000/0001-00 · Produto digital — acesso imediato
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
