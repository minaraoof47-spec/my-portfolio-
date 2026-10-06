import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  );
}