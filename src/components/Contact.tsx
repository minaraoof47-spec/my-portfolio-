import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80%] h-[400px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">intelligent.</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
          Open to exciting opportunities in data science, machine learning, and AI solutions. Let's build the future together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="mailto:minaraoof47@gmail.com" 
            className="px-8 py-4 bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-full font-medium hover:bg-teal-500 hover:text-zinc-950 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
          </Link>
          
          <Link 
            href="https://github.com/minaraoof47-spec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-900/50 text-zinc-300 border border-white/10 rounded-full font-medium hover:border-teal-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            GitHub
          </Link>

          <Link 
            href="https://www.linkedin.com/in/mina-raouf-4164b6364/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-900/50 text-zinc-300 border border-white/10 rounded-full font-medium hover:border-teal-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      
      <div className="mt-24 text-center pb-8">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Mina Raouf. All rights reserved.</p>
      </div>
    </section>
  );
}