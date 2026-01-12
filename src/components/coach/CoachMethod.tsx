import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Início Simplificado',
    description: 'Processo de contratação direto e transparente. Após a confirmação, você recebe acesso imediato ao nosso atendimento personalizado.',
  },
  {
    number: '02',
    title: 'Diagnóstico Completo',
    description: 'Avaliamos seu gameplay em detalhes, identificando padrões e hábitos que limitam seu progresso. Cada erro vira uma oportunidade de melhoria.',
  },
  {
    number: '03',
    title: 'Progresso Garantido',
    description: 'Plano de desenvolvimento individual com acompanhamento constante. Trabalhamos juntos até você conquistar o ranking desejado.',
  },
];

const CoachMethod = () => {
  return (
    <section id="como-funciona" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">NOSSO MÉTODO</h2>
          <p className="text-muted-foreground text-lg">Um sistema estruturado para acelerar sua evolução no jogo.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              <span className="text-6xl font-display text-[#E340E2]/20 absolute top-4 right-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl mb-4 text-[#E340E2]">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachMethod;
