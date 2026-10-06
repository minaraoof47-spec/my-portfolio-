import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Data Scientist Trainee - IBM Track",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      date: "Aug 2026 - Present",
      points: [
        "Developed a strong foundation in Python for data analysis and machine learning.",
        "Worked with SQL and relational databases for data management and querying.",
        "Used Pandas for data cleaning and data wrangling, and NumPy for numerical computing.",
        "Applied data visualization techniques to explore and communicate insights from data.",
        "Studied Data Science Methodology and fundamental Machine Learning concepts.",
        "Explored Hugging Face, MLflow, MLOps fundamentals, and Prompt Engineering.",
        "Working on a Capstone Project to apply the concepts and tools learned throughout the track."
      ]
    },
    {
      role: "Data Science Trainee",
      organization: "Matsuo-Iwasawa Lab, The University of Tokyo",
      date: "Sep 2026 - Present",
      points: [
        "Studying fundamental Data Science concepts, from data handling to predictive modeling.",
        "Developing Python skills with a focus on Data Science applications.",
        "Studying Statistics and Machine Learning fundamentals to understand how models work and how they are applied to data."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[600px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center relative pb-4">
            Experience
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle hover effect light */}
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500/20 group-hover:bg-teal-500/50 transition-colors"></div>
              
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-teal-400 font-medium mt-1">{exp.organization}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-teal-500 mt-1 flex-shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}