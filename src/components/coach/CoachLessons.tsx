import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Video, Brain, Target } from 'lucide-react';

const features = [
  { icon: Video, title: 'Revisão de Partidas', description: 'Correção detalhada de jogadas.' },
  { icon: Target, title: 'Fundamentos Avançados', description: 'Mecânicas e estratégias de mapa.' },
  { icon: Brain, title: 'Mindset Competitivo', description: 'Foco e consistência na ranked.' },
  { icon: Clock, title: '55 Minutos', description: 'Sessão completa e produtiva.' },
];

const CoachLessons = () => {
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState('');
  const pricePerLesson = 30;
  const total = quantity * pricePerLesson;

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de agendar ${quantity} aula(s) particular(es) de LoL. Valor total: R$ ${total.toFixed(2)}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="coach-individual" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">AULAS PARTICULARES</h2>
          <p className="text-muted-foreground text-lg">Treinamento personalizado para elevar seu nível de jogo</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl mb-6">Aprimore suas Habilidades</h3>
            <p className="text-muted-foreground mb-8">
              Domine os fundamentos da sua lane, aprenda a ler o mapa e tome decisões mais inteligentes com orientação especializada.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="bg-background border border-border rounded-lg p-4">
                  <feature.icon className="w-6 h-6 text-[#E340E2] mb-3" />
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-2xl mb-6">Monte seu Pacote</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Quantidade de Aulas</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#E340E2]"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Cupom de Desconto</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Digite seu cupom"
                    className="flex-1 bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#E340E2]"
                  />
                  <button className="bg-muted hover:bg-muted/80 px-4 py-3 rounded font-medium transition-colors">
                    Aplicar
                  </button>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Preço unitário</span>
                  <span>R$ {pricePerLesson.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#E340E2]">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#E340E2] hover:bg-[#E340E2]/80 text-white py-4 rounded font-semibold transition-colors"
              >
                Agendar Aulas
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachLessons;
