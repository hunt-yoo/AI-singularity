import { Background } from "./components/Background";
import { Timeline } from "./components/Timeline";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500/30">
      <Background />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono tracking-[0.2em] text-gray-300 uppercase">
              Technological Singularity
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-[6rem] font-bold tracking-tight text-white mb-2 leading-tight">
            AI 歷史
          </h1>
          <h2 className="text-7xl md:text-[8rem] font-bold tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 animate-text-gradient leading-tight pb-2">
            30大關鍵時刻
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            從圖靈的構想到通用人工智慧（AGI）的曙光。<br />
            向下滾動，探索人類與機器智慧交織的偉大旅程。
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <Timeline />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/50 backdrop-blur-md">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {new Date().getFullYear()} 科技奇點 | Designed by Ethan Works
        </p>
      </footer>
    </div>
  );
}
