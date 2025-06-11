// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="dark:bg-black dark:text-white transition-all">
      {/* <Navbar /> */}
      <Hero />
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
