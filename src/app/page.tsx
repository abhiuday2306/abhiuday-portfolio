import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="text-black">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
