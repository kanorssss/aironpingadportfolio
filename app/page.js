import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function Home() {
  return (
    <>
      {/* Navbar sa labas ng main - full width */}
      <div className="w-full">
        <Navbar />
        <About />
      </div>

      {/* Original main content */}
      <main className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 lg:mx-auto">
        <div className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <div>
            <Skills />
            <Experience />
            <Projects />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
