import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "O Protocolo a Tríade substitui a terapia tradicional?",
    answer: "Não, e desconfie de quem promete isso por R$ 37,90. O Protocolo é uma triagem clínica autoguiada. Ele funciona como um raio-X para mapear exatamente onde está o seu bloqueio — mental, físico ou espiritual. Ele te tira da \"miopia terapêutica\" e te dá direção. O trabalho de cura profunda e acompanhamento contínuo é o próximo passo natural após este diagnóstico.",
  },
  {
    question: "Como vou receber o acesso ao material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha pessoais. O acesso é feito através de uma plataforma segura, e você pode assistir às aulas e baixar o seu Mapa de Autodiagnóstico pelo celular, tablet ou computador, no seu próprio ritmo.",
  },
  {
    question: "Por que um diagnóstico embasado em neurociência e psicanálise custa tão pouco?",
    answer: "Uma sessão de avaliação direta conosco tem um valor de investimento substancialmente maior. No entanto, o Protocolo a Tríade foi desenhado para ser um \"quebra-gelo\". O objetivo é te entregar um nível de clareza tão alto sobre a sua própria vida que, quando você decidir dar um passo mais profundo em direção à sua evolução, nós seremos a sua única escolha lógica. É uma decisão de impacto e de negócios.",
  },
  {
    question: "Preciso ter conhecimento prévio em psicanálise, PNL ou neurociência para entender?",
    answer: "Absolutamente não. Nós, Ricardo e Carlos, traduzimos a complexidade clínica em um método prático e direto. O treinamento foi estruturado para ser consumido em cerca de 90 minutos, com exercícios de alívio imediato e checklists simples. Você não vai estudar teoria acadêmica; você vai aplicar um mapa na sua própria rotina.",
  },
  {
    question: "E se eu aplicar o Protocolo e achar que não serviu para mim?",
    answer: "O risco financeiro desta operação é inteiramente nosso. Você tem 7 dias de garantia incondicional clínica. Se você preencher o autodiagnóstico e sentir que não ganhou uma clareza brutal sobre os motivos da sua estagnação, basta enviar um único e-mail para o nosso suporte e reembolsaremos 100% do seu valor. Sem questionamentos.",
  },
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open
          ? 'border-brand-green bg-zinc-900 shadow-[0_0_20px_rgba(255,215,0,0.08)]'
          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="text-xs font-black tabular-nums shrink-0 w-6 text-right"
            style={{ color: open ? '#FFD700' : 'rgba(255,215,0,0.3)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-bold text-base leading-snug transition-colors duration-200 ${open ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
            {question}
          </span>
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: open ? '#FFD700' : '#71717a' }}
        />
      </button>

      {/* Drawer content — animated height via max-height trick */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="pl-10 border-l-2" style={{ borderColor: 'rgba(255,215,0,0.25)' }}>
            <p className="text-zinc-400 leading-relaxed text-[0.925rem]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FFD700' }}>
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Objeções Clínicas <span className="highlight">e Dúvidas</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            As perguntas que você está pensando, respondidas com a mesma honestidade clínica do protocolo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-zinc-600 text-sm">
            Ainda tem dúvidas?{' '}
            <a href="mailto:suporte@protocolotriade.com" className="underline underline-offset-2 transition-colors" style={{ color: '#FFD700' }}>
              Fale com nosso suporte.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
