import BentoCard from "./BentoCard";

export default function NameCard({ delay = 0 }: { delay?: number }) {
  return (
    <BentoCard className="h-full p-6 md:p-10 flex flex-col justify-center" delay={delay}>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 md:mb-3 whitespace-nowrap">
        Mina Raouf
      </h1>
      
      <h2 className="text-base md:text-lg text-white/70 font-medium leading-relaxed">
        Data Scientist & Machine Learning Engineer
      </h2>
    </BentoCard>
  );
}