import Image from "next/image";
import BentoCard from "./BentoCard";

export default function ProfileCard({ delay = 0 }: { delay?: number }) {
  return (
    <BentoCard className="h-full relative p-2 min-h-[380px] md:min-h-[500px]" delay={delay}>
      <div className="w-full h-full relative rounded-2xl overflow-hidden group bg-background">
        <Image
          src="/profile.jpg"
          alt="Mina Raouf Profile"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-[center_15%] transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        {/* Editorial edge lighting and subtle gradient map to integrate image */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_var(--background)_130%)] pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
      </div>
    </BentoCard>
  );
}