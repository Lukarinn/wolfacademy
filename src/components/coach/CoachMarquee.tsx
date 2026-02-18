import { motion } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';

const CoachMarquee = () => {
  const items = Array(14).fill(null);

  return (
    <div className="bg-[#E340E2] py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {items.map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={wolfLogo} alt="Wolf Academy - Coach profissional de League of Legends" className="h-6 w-auto" />
            <span className="font-display text-lg text-white tracking-wider">WOLF ACADEMY</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoachMarquee;
