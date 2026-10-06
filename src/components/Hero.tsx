import NameCard from "./NameCard";
import ProfileCard from "./ProfileCard";
import CraftCard from "./CraftCard";
import StatementCard from "./StatementCard";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[minmax(240px,1fr)_minmax(240px,1fr)] gap-4 md:gap-6">
          {/* Mobile Order: Name, Profile, Statement, Craft */}
          {/* Desktop Order: Name/Statement (left), Profile (center), Craft (right) */}
          
          <div className="md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-1 h-full">
            <NameCard delay={100} />
          </div>
          
          <div className="md:col-start-5 md:col-span-5 md:row-start-1 md:row-span-2 h-full">
            <ProfileCard delay={200} />
          </div>

          <div className="md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-1 h-full">
            <StatementCard delay={300} />
          </div>

          <div className="md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-2 h-full">
            <CraftCard delay={400} />
          </div>
          
        </div>
      </div>
    </section>
  );
}
