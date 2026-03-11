import { aiEvents } from "../data";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <div className="relative w-full py-32">
      {/* Central Line (Desktop Only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-900/30 -translate-x-1/2 overflow-hidden">
        <div className="absolute left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-flow blur-[1px]" />
      </div>
      
      <div className="flex flex-col gap-32 px-6 md:px-12">
        {aiEvents.map((event, index) => (
          <TimelineItem key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
