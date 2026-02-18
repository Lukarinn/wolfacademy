import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';

// Import elo images
import ferroImg from '@/assets/elos/ferro.png';
import bronzeImg from '@/assets/elos/bronze.png';
import prataImg from '@/assets/elos/prata.png';
import ouroImg from '@/assets/elos/ouro.png';
import platinaImg from '@/assets/elos/platina.png';
import esmeraldaImg from '@/assets/elos/esmeralda.png';
import diamanteImg from '@/assets/elos/diamante.png';
import mestreImg from '@/assets/elos/mestre.png';
import graoMestreImg from '@/assets/elos/grao-mestre.png';

const elos = [
  { name: 'Ferro', img: ferroImg, value: 0 },
  { name: 'Bronze', img: bronzeImg, value: 1 },
  { name: 'Prata', img: prataImg, value: 2 },
  { name: 'Ouro', img: ouroImg, value: 3 },
  { name: 'Platina', img: platinaImg, value: 4 },
  { name: 'Esmeralda', img: esmeraldaImg, value: 5 },
  { name: 'Diamante', img: diamanteImg, value: 6 },
  { name: 'Mestre', img: mestreImg, value: 7 },
  { name: 'Grão Mestre', img: graoMestreImg, value: 8 },
];

const divisions = ['IV', 'III', 'II', 'I'];

const CoachCalculator = () => {
  const [currentElo, setCurrentElo] = useState(0);
  const [currentDiv, setCurrentDiv] = useState(0);
  const [targetElo, setTargetElo] = useState(1);
  const [targetDiv, setTargetDiv] = useState(0);
  const [serviceType, setServiceType] = useState<'basico' | 'pro'>('basico');
  const [coupon, setCoupon] = useState('');

  const price = useMemo(() => {
    const currentValue = currentElo * 4 + (3 - currentDiv);
    const targetValue = targetElo * 4 + (3 - targetDiv);
    const diff = Math.max(0, targetValue - currentValue);
    const basePrice = diff * 11.375;
    return serviceType === 'pro' ? basePrice * 1.3 : basePrice;
  }, [currentElo, currentDiv, targetElo, targetDiv, serviceType]);

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de contratar o coaching de ${elos[currentElo].name} ${divisions[currentDiv]} para ${elos[targetElo].name} ${divisions[targetDiv]}. Plano: ${serviceType === 'pro' ? 'Pro' : 'Básico'}. Valor: R$ ${price.toFixed(2)}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">SIMULE SEU COACHING</h2>
          <p className="text-muted-foreground text-lg">Calcule o investimento para evoluir com acompanhamento profissional.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Elo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-display text-xl mb-4">Elo Atual</h3>
            <div className="flex justify-center mb-4">
              <img src={elos[currentElo].img} alt={`Elo ${elos[currentElo].name} no League of Legends - Ranking atual`} className="w-24 h-24 object-contain" />
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Liga</label>
                <select
                  value={currentElo}
                  onChange={(e) => setCurrentElo(parseInt(e.target.value))}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#E340E2]"
                >
                  {elos.slice(0, -1).map((elo, i) => (
                    <option key={elo.name} value={i}>{elo.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Divisão</label>
                <div className="grid grid-cols-4 gap-2">
                  {divisions.map((div, i) => (
                    <button
                      key={div}
                      onClick={() => setCurrentDiv(i)}
                      className={`py-2 rounded font-medium transition-colors ${
                        currentDiv === i
                          ? 'bg-[#E340E2] text-white'
                          : 'bg-background border border-border hover:border-[#E340E2]'
                      }`}
                    >
                      {div}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Target Elo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-display text-xl mb-4">Elo Desejado</h3>
            <div className="flex justify-center mb-4">
              <img src={elos[targetElo].img} alt={`Elo ${elos[targetElo].name} no League of Legends - Ranking desejado`} className="w-24 h-24 object-contain" />
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Liga</label>
                <select
                  value={targetElo}
                  onChange={(e) => setTargetElo(parseInt(e.target.value))}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#E340E2]"
                >
                  {elos.slice(1).map((elo, i) => (
                    <option key={elo.name} value={i + 1}>{elo.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Divisão</label>
                <div className="grid grid-cols-4 gap-2">
                  {divisions.map((div, i) => (
                    <button
                      key={div}
                      onClick={() => setTargetDiv(i)}
                      className={`py-2 rounded font-medium transition-colors ${
                        targetDiv === i
                          ? 'bg-[#E340E2] text-white'
                          : 'bg-background border border-border hover:border-[#E340E2]'
                      }`}
                    >
                      {div}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={wolfLogo} alt="Wolf Academy" className="w-8 h-8" />
              <h3 className="font-display text-xl">Resumo do Pedido</h3>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <img src={elos[currentElo].img} alt={`Elo atual: ${elos[currentElo].name}`} className="w-12 h-12 object-contain mx-auto" />
                <span className="text-sm">{elos[currentElo].name} {divisions[currentDiv]}</span>
              </div>
              <span className="text-2xl text-[#E340E2]">→</span>
              <div className="text-center">
                <img src={elos[targetElo].img} alt={`Elo desejado: ${elos[targetElo].name}`} className="w-12 h-12 object-contain mx-auto" />
                <span className="text-sm">{elos[targetElo].name} {divisions[targetDiv]}</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">Tipo de Serviço</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setServiceType('basico')}
                  className={`py-2 rounded font-medium transition-colors ${
                    serviceType === 'basico'
                      ? 'bg-[#E340E2] text-white'
                      : 'bg-background border border-border hover:border-[#E340E2]'
                  }`}
                >
                  Básico
                </button>
                <button
                  onClick={() => setServiceType('pro')}
                  className={`py-2 rounded font-medium transition-colors ${
                    serviceType === 'pro'
                      ? 'bg-[#E340E2] text-white'
                      : 'bg-background border border-border hover:border-[#E340E2]'
                  }`}
                >
                  Pro (+30%)
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">Cupom de Desconto</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 bg-background border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-[#E340E2]"
                />
                <button className="bg-muted hover:bg-muted/80 px-4 py-2 rounded font-medium transition-colors">
                  Aplicar
                </button>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Valor base</span>
                <span>R$ {price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-[#E340E2]">R$ {price.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#E340E2] hover:bg-[#E340E2]/80 text-white py-4 rounded font-semibold transition-colors mb-2"
            >
              Contratar Agora
            </button>
            <p className="text-center text-xs text-muted-foreground">Pagamento Seguro via WhatsApp</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachCalculator;
