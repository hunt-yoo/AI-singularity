import { motion } from "motion/react";
import { useState } from "react";
import { Search } from "lucide-react";
import { AIEvent } from "../data";
import { ChartComponent } from "./ChartComponent";
import { cn } from "../utils";

function TechIllustration({ event, index }: { event: AIEvent, index: number }) {
  const colors = [
    "text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]",
    "text-purple-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]",
    "text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.8)]",
    "text-fuchsia-400 drop-shadow-[0_0_25px_rgba(232,121,249,0.8)]",
  ];
  const glowColors = [
    "bg-cyan-500/20",
    "bg-purple-500/20",
    "bg-blue-500/20",
    "bg-fuchsia-500/20",
  ];
  const colorClass = colors[index % colors.length];
  const glowClass = glowColors[index % glowColors.length];

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center group" style={{ perspective: '1200px' }}>
      
      {/* Background Ambient Glow */}
      <div className={cn("absolute w-[80%] h-[80%] rounded-full blur-[80px] transition-colors duration-1000", glowClass)} />

      {/* Outer Rotating Ring */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
      
      {/* Inner Rotating Ring */}
      <div className="absolute w-[65%] h-[65%] rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
      
      {/* Tech Nodes on Ring */}
      <div className="absolute w-[90%] h-[90%] animate-[spin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* 3D Isometric Container */}
      <div 
        className="relative w-48 h-48 md:w-64 md:h-64 transition-transform duration-1000 ease-out group-hover:-translate-y-4"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'rotateX(60deg) rotateZ(-45deg)' 
        }}
      >
        
        {/* Base Platform (Glassmorphism) */}
        <div 
          className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Grid Pattern on Platform */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '1.5rem 1.5rem',
              maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)'
            }}
          />
        </div>

        {/* Platform Depth / Shadow */}
        <div 
          className="absolute inset-0 rounded-3xl bg-black/50 blur-xl"
          style={{ transform: 'translateZ(-40px)' }}
        />
        
        {/* Glowing Edge Underneath */}
        <div 
          className={cn("absolute inset-0 rounded-3xl opacity-50 blur-md", glowClass)}
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Floating Event Icon (Counter-rotated to face camera) */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-110"
          style={{ transform: 'translateZ(80px) rotateZ(45deg) rotateX(-60deg)' }}
        >
          <event.icon className={cn("w-24 h-24 md:w-32 md:h-32", colorClass)} strokeWidth={1} />
        </div>

        {/* Floating Tech Elements (Nodes) */}
        <div 
          className="absolute top-[20%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] animate-pulse"
          style={{ transform: 'translateZ(40px)' }}
        />
        <div 
          className="absolute bottom-[20%] right-[20%] w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc] animate-bounce"
          style={{ transform: 'translateZ(60px)' }}
        />
        <div 
          className="absolute top-[80%] left-[50%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
          style={{ transform: 'translateZ(30px)' }}
        />
        <div 
          className="absolute top-[30%] right-[10%] w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_10px_#f472b6]"
          style={{ transform: 'translateZ(70px)' }}
        />

        {/* Connecting SVG Lines (Data Flow) */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'translateZ(20px)' }}>
          <path d="M 20% 20% L 50% 50% L 80% 80%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 50% 50% L 50% 80%" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" />
          <path d="M 80% 20% L 50% 50%" stroke="rgba(192,132,252,0.3)" strokeWidth="2" fill="none" />
        </svg>

        {/* Floating Year Text */}
        <div 
          className="absolute -right-4 -bottom-4 text-5xl font-mono font-black text-white/5"
          style={{ transform: 'translateZ(10px) rotateZ(45deg) rotateX(-60deg)' }}
        >
          {event.year}
        </div>

      </div>
    </div>
  );
}

export function TimelineItem({ event, index }: { event: AIEvent; index: number; key?: string }) {
  const isEvenLayout = index % 2 === 0;
  
  // 確保左半邊的元素從左邊滑入 (-100 -> 0)
  // 確保右半邊的元素從右邊滑入 (100 -> 0)
  const textInitialX = isEvenLayout ? -100 : 100;
  const illusInitialX = isEvenLayout ? 100 : -100;

  return (
    <div
      className={cn(
        "relative flex w-full max-w-6xl mx-auto mb-32 items-center justify-between flex-col md:flex-row gap-12 md:gap-0",
        !isEvenLayout && "md:flex-row-reverse"
      )}
    >
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: textInitialX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.3 }}
        className="w-full md:w-[45%] z-10"
      >
        <div className="glass-panel p-8 rounded-3xl glass-panel-hover transition-all duration-500 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] shrink-0">
              <event.icon className="w-7 h-7 text-gray-200" strokeWidth={1.5} />
            </div>
            <span className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-cyan-300 tracking-tight">
              {event.year}
            </span>
            <div className={cn("h-px flex-1 bg-gradient-to-r from-white/20 to-transparent", !isEvenLayout && "bg-gradient-to-l")} />
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-400 leading-relaxed font-light">
            {event.description}
          </p>
          
          <ChartComponent type={event.chartType} data={event.chartData} config={event.chartConfig} />

          <a 
            href={`https://www.google.com/search?q=${encodeURIComponent(event.title + ' 歷史 秘辛 AI')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-100 transition-all duration-300 group/btn"
          >
            <Search className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            挖掘歷史密幸
          </a>
        </div>
      </motion.div>

      {/* Center Timeline Node (Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center z-20"
      >
        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] border-2 border-[#050505] relative z-10 group-hover:scale-150 transition-transform" />
        <div className="absolute w-12 h-12 rounded-full border border-cyan-400/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
      </motion.div>

      {/* Illustration Side */}
      <motion.div 
        initial={{ opacity: 0, x: illusInitialX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.3 }}
        className="w-full md:w-[45%] z-10"
      >
        <TechIllustration event={event} index={index} />
      </motion.div>
    </div>
  );
}
