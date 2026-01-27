import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const CoachHero = () => {
  const features = ['Sigilo Total', 'Coaches Experientes', 'Atendimento Dedicado'];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#E340E2]/10 border border-[#E340E2]/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-[#E340E2] rounded-full animate-pulse"></span>
          <span className="text-[#E340E2] text-sm font-medium">TREINAMENTO ESPECIALIZADO EM LOL</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-6xl md:text-8xl tracking-wide mb-6"
        >
          Coach Individual de <span className="text-[#E340E2]">League of Legends</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Desenvolvemos um método exclusivo para identificar seus pontos fracos e transformá-los em vantagens competitivas no League of Legends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#coach-individual"
            className="bg-[#E340E2] hover:bg-[#E340E2]/80 text-white px-8 py-4 rounded font-semibold transition-colors text-lg"
          >
            COMEÇAR AGORA
          </a>
          <a
            href="#como-funciona"
            className="border border-muted-foreground/30 hover:border-foreground text-foreground px-8 py-4 rounded font-semibold transition-colors text-lg"
          >
            ENTENDA O PROCESSO
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-[#E340E2]" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default CoachHero;
