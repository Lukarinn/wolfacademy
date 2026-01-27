import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Plano Essencial',
    description: 'Ideal para quem busca evolução consistente.',
    badge: 'PADRÃO',
    features: [
      'Orientação focada em objetivos',
      'Rotina de treinos estruturada',
      'Comunicação direta via WhatsApp/Discord',
      'Monitoramento do seu desenvolvimento',
    ],
    recommended: false,
  },
  {
    name: 'Plano Avançado',
    description: 'Para quem quer dominar completamente sua role.',
    badge: '+30% NO VALOR',
    features: [
      'Todos os benefícios do plano essencial',
      'Foco em um campeão específico',
      'Transmissão de partidas comentadas',
      'Orientação em tempo real nas partidas',
      'Revisão de gameplay a cada 15 jogos',
      'Grupo de networking com alunos',
    ],
    recommended: true,
  },
];

const CoachPlans = () => {
  return (
    <section id="planos" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">Planos de Coaching League of Legends</h2>
          <p className="text-muted-foreground text-lg">Selecione o pacote que melhor se adapta aos seus objetivos.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-background border rounded-lg p-8 relative ${
                plan.recommended ? 'border-[#E340E2]' : 'border-border'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E340E2] text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Recomendado
                </div>
              )}
              
              <h3 className="font-display text-2xl mb-2" itemProp="name">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E340E2] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-block bg-[#E340E2]/10 border border-[#E340E2]/30 rounded px-3 py-1 text-[#E340E2] text-sm font-medium">
                {plan.badge}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-background border border-border rounded-lg p-8 max-w-2xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl mb-4">Compromisso Wolf</h3>
          <p className="text-muted-foreground mb-6">
            Nosso trabalho só é concluído quando você alcança o elo dos seus sonhos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-muted-foreground">✓ Nosso trabalho só acaba quando você atinge sua meta.</span>
            <span className="text-muted-foreground">✓ Sem taxas extras</span>
            <span className="text-muted-foreground">✓ Sem enrolação</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachPlans;
