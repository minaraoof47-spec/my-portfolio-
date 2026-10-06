import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      {/* Glow Background Effect for Projects Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center relative pb-4">
            Featured Projects
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project Card: Phone Directory System */}
          <div className="group flex flex-col bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(20,184,166,0.3)]">
            
            {/* Project Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-zinc-950">
              <Image 
                src="/images/phone-directory-system.png" 
                alt="Phone Directory System Interface" 
                fill 
                className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
              
              {/* Top Left Tag */}
              <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-teal-400 tracking-wider">
                01 - CONSOLE APP
              </div>
            </div>

            {/* Project Info Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Phone Directory System
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                A console-based phone directory application built in C++ that allows users to add, search, display, sort, and delete contacts. Uses file handling to save and load contact information.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['C++', 'OOP', 'File I/O', 'Algorithms'].map((tech) => (
                  <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-zinc-300 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* GitHub Link */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                  href="https://github.com/minaraoof47-spec/Phone-Directory-System" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-teal-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                  View Repository
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}