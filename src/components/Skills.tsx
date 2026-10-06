import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: ["Python", "C++", "SQL", "Dart"]
    },
    {
      title: "DATA & ML",
      skills: ["Pandas", "NumPy", "Jupyter Notebook", "Data Visualization"]
    },
    {
      title: "DATABASES & TOOLS",
      skills: ["MySQL", "Git", "GitHub", "Docker"]
    },
    {
      title: "DEVELOPMENT",
      skills: ["Flutter", "Android Studio", "OOP", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[600px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center relative pb-4">
            Technical Skills
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300">
              <h3 className="text-sm font-semibold tracking-widest text-zinc-500 mb-6 uppercase">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-4 py-2 bg-zinc-950/50 text-zinc-300 text-sm rounded-xl border border-white/5 shadow-sm hover:text-teal-400 hover:border-teal-500/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}