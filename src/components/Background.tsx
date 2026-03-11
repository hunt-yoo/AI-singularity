import { motion, useScroll, useTransform } from "motion/react";

export function Background() {
  const { scrollYProgress } = useScroll();
  
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "radial-gradient(circle at 50% 0%, #1a0b2e 0%, #050505 70%)",
      "radial-gradient(circle at 50% 50%, #0b1a2e 0%, #050505 70%)",
      "radial-gradient(circle at 50% 100%, #2e0b1a 0%, #050505 70%)"
    ]
  );

  return (
    <motion.div 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ background }}
    >
      {/* Subtle Grid Pattern with Radial Fade */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)'
        }}
      />

      <motion.div 
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-[60%] left-[50%] w-[30vw] h-[30vw] bg-emerald-600/10 rounded-full blur-[100px]"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
