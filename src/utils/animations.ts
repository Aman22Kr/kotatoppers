export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
};

export const cardStrongVariants = {
  initial: { opacity: 0, scale: 0.95, y: 24 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: '0 20px 25px -5px rgba(15, 43, 92, 0.1), 0 8px 10px -6px rgba(15, 43, 92, 0.08)',
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }
  },
  tap: { scale: 0.98 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const popInVariant = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 24
    }
  }
};
