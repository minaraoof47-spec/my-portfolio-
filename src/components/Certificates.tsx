import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  const certificates = [
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM / Coursera",
      date: "September 13, 2026",
      imageSrc: "/images/ibm.jpg",
      verifyLink: "https://coursera.org/verify/848TQRN5UR80"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford / DeepLearning.AI",
      date: "October 3, 2026",
      imageSrc: "/images/stanford.jpg", // Make sure to add this image
      verifyLink: "https://coursera.org/verify/LO9ZWKUUZM2S"
    }
  ];

  return (
    <section id="certificates" className="py-24 relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center relative pb-4">
            Certificates
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {certificates.map((cert, index) => (
            <div key={index} className="group flex flex-col bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2">
              
              <div className="relative h-56 w-full overflow-hidden bg-zinc-950 p-4 flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                  <Image 
                    src={cert.imageSrc} 
                    alt={cert.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-center items-center">
                <span className="text-xs font-semibold tracking-widest text-teal-400 mb-3 uppercase">{cert.issuer}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-6">Issued: {cert.date}</p>
                
                <div className="mt-auto pt-4 w-full border-t border-white/5">
                  <Link 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 hover:text-teal-400 transition-colors w-full"
                  >
                    Verify Certificate <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}