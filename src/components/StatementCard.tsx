import BentoCard from "./BentoCard";
import { ArrowUpRight } from "lucide-react";

export default function StatementCard({ delay = 0 }: { delay?: number }) {
  return (
    <BentoCard className="h-full p-8 flex flex-col justify-between group" delay={delay}>
      <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
        Statement
      </h3>
      
      <p className="text-xl md:text-2xl font-medium leading-snug text-white/90">
        Building <span className="text-accent font-semibold">intelligent solutions</span> through data, machine learning, and code.
      </p>
      
      <div className="mt-6 flex justify-end">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent/20 group-hover:border-accent/30 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-accent" />
        </div>
      </div>
    </BentoCard>
  );
}
