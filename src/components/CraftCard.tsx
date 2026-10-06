import BentoCard from "./BentoCard";

export default function CraftCard({ delay = 0 }: { delay?: number }) {
  return (
    <BentoCard className="h-full p-6 md:p-10 flex flex-col justify-between" delay={delay}>
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
          Craft
        </h3>
        <p className="text-xl md:text-2xl font-medium text-white/90 tracking-tight">
          DATA <span className="text-accent/50 mx-1">&times;</span> ML <span className="text-accent/50 mx-1">&times;</span> AI
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-8">
        {["Python", "C++", "SQL", "Pandas", "NumPy"].map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}