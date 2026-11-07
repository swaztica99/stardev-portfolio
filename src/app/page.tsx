import Masthead from "@/app/components/Masthead";
import Hero from "@/app/components/Hero";
import ProjectIndex from "@/app/components/ProjectIndex";
import AboutColophon from "@/app/components/AboutColophon";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Masthead />
      <Hero />
      <ProjectIndex />
      <AboutColophon />
      <Footer />
    </main>
  );
}