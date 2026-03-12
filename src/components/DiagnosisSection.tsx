import { CheckCircle2 } from 'lucide-react';

const DiagnosisSection = () => {
  const points = [
    {
      title: "O Padrão de Sobrevivência:",
      text: "A PNL tenta reprogramar sua mente, mas seu sistema nervoso continua em alerta constante, bloqueando a mudança real."
    },
    {
      title: "Medicina de Sintomas:",
      text: "A medicina foca quase exclusivamente no seu corpo fisiológico, ignorando a origem do vazio e da exaustão existencial."
    },
    {
      title: "Vício em Escassez:",
      text: "Você busca desesperadamente significado, mas sua neurobiologia está literalmente viciada no ciclo de estresse e falta."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Existe um teto invisível sobre você.
          </h2>
          <p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
            Você é inteligente. Já leu os livros certos, tentou organizar a rotina e talvez faça terapia. 
            Ainda assim, a conta bancária não reflete o esforço, o corpo vive tenso e a mente não desliga.
          </p>
        </div>

        <div className="mb-14">
           <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
             O mercado diz que você precisa de mais foco. A verdade é que você sofre de <span className="text-brand-green">Miopia Terapêutica.</span>
           </h3>

           <div className="space-y-4">
             {points.map((point, i) => (
               <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex gap-5 items-start">
                 <div className="shrink-0 mt-1">
                   <CheckCircle2 className="w-6 h-6 text-brand-green" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                   <p className="text-zinc-400 leading-relaxed">{point.text}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="text-center bg-brand-green/10 border border-brand-green/30 p-8 rounded-xl">
           <p className="text-xl sm:text-2xl font-bold text-white">
             "Enquanto você não alinhar <span className="highlight">estes 3 eixos</span>, a mudança será apenas temporária e exaustiva."
           </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
