// Definições de animações para o projeto usando Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const slideIn = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 500,
      damping: 30,
      duration: 0.3
    }
  },
  exit: { 
    x: -20, 
    opacity: 0,
    transition: { 
      duration: 0.2
    }
  }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

export const scale = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 30,
      duration: 0.4
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export const bounce = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 10,
      duration: 0.5
    }
  }
}; 