import { Play, ShieldCheck } from 'lucide-react';
import NeuralBackground from './NeuralBackground';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-20 px-4 sm:px-6 overflow-hidden section-dark">
      <NeuralBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-300 uppercase">
            Atenção: Apenas para quem sente que vive com o 'freio de mão puxado'.
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          O Verdadeiro Motivo Pelo Qual Anos de Terapia, Livros e 'Hacks' <br className="hidden md:block" />
          <span className="highlight mt-2">Não Destravaram Sua Vida.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          E como o protocolo clínico de 90 minutos é capaz de mapear a origem exata da sua estagnação financeira, física, emocional e espiritual.
        </p>

        {/* Video Player Container (9:16 Portrait) */}
        <div className="max-w-sm mx-auto mb-12 group cursor-pointer">
          <div className="aspect-[9/16] bg-zinc-900 rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-zinc-800 group-hover:border-brand-green transition-colors duration-300 shadow-2xl">
            {/* Play Button Overlay */}
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(190,239,0,0.4)]">
              <Play className="fill-black text-black w-8 h-8 ml-1" />
            </div>
            
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 -z-10" />
            
            {/* Fake Video Controls for realism */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
               <div className="h-full bg-brand-green w-1/3" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <button className="btn-primary group w-full sm:w-auto text-lg sm:text-xl px-10 py-5">
             QUERO DESCOBRIR MEU BLOQUEIO AGORA
          </button>
          
          {/* Trust indicators */}
          <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            Compra 100% Segura. Acesso imediato.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
