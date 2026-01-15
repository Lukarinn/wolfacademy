import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ChampionCardProps {
  image: string;
  tag: string;
  tagColor?: string;
  title: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'accent' | 'warning';
  link?: string;
  imagePosition?: string;
  grayscale?: boolean;
  disabled?: boolean;
}

const buttonStyles = {
  primary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-muted-foreground/30',
  accent: 'bg-accent hover:bg-accent/90 text-accent-foreground',
  warning: 'bg-warning hover:bg-warning/90 text-warning-foreground',
};

const ChampionCard = ({ image, tag, tagColor, title, buttonText, buttonVariant, link = '#', imagePosition = 'center top', grayscale = false, disabled = false }: ChampionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  const scale = useSpring(isHovered ? 1.02 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex-1 h-screen overflow-hidden cursor-pointer"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: imagePosition,
        }}
        animate={{
          scale: isHovered && !disabled ? 1.1 : 1,
          filter: grayscale 
            ? 'grayscale(100%) brightness(0.4)' 
            : (isHovered ? 'brightness(1)' : 'brightness(0.5)'),
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20"
        animate={{
          opacity: isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ transform: 'translateZ(50px)' }}
      >
        <motion.span 
          className="text-xs sm:text-sm tracking-[0.3em] mb-4 uppercase font-body font-medium"
          style={{ color: tagColor || 'hsl(var(--muted-foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {tag}
        </motion.span>
        
        <motion.h2 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight max-w-xs uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        <motion.a
          href={disabled ? undefined : link}
          className={`px-8 py-3 text-sm uppercase tracking-[0.2em] font-medium rounded transition-all duration-300 ${buttonStyles[buttonVariant]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={disabled ? {} : { scale: 1.05 }}
          whileTap={disabled ? {} : { scale: 0.95 }}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
        >
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ChampionCard;
