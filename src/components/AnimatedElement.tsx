import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'zoomIn' | 'rotate';
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.3, // Reduced from 0.5s to 0.3s for snappier animations
  className = '',
  animation = 'fadeIn'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05, // Reduced threshold so animations trigger earlier
    rootMargin: '-20px 0px' // Changed from -50px to -20px to trigger sooner
  });
  
  // Define animation variants
  const variants = {
    fadeIn: {
      visible: { 
        opacity: 1, 
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0 
      }
    },
    slideUp: {
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0, 
        y: 50 
      }
    },
    slideRight: {
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0, 
        x: -50 
      }
    },
    slideLeft: {
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0, 
        x: 50 
      }
    },
    zoomIn: {
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0, 
        scale: 0.8 
      }
    },
    rotate: {
      visible: { 
        opacity: 1, 
        rotate: 0,
        transition: { duration, delay } 
      },
      hidden: { 
        opacity: 0, 
        rotate: -10 
      }
    }
  };

  const selectedAnimation = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
