import { motion } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';

const CoachNavbar = () => {
  const navItems = [
    { label: 'MÉTODO', href: '#como-funciona' },
    { label: 'INDIVIDUAL', href: '#coach-individual' },
    { label: 'CALCULADORA', href: '#calculadora' },
    { label: 'PLANOS', href: '#planos' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={wolfLogo} alt="Wolf Academy - Logo coaching de LoL" className="h-8 w-auto" />
          <span className="font-display text-xl text-foreground tracking-wide">
            WOLF<span className="text-[#E340E2]">ACADEMY</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#calculadora"
          className="bg-[#E340E2] hover:bg-[#E340E2]/80 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
        >
          SIMULAR ELO
        </a>
      </div>
    </motion.nav>
  );
};

export default CoachNavbar;
