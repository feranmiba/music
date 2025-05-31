
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Tours from "@/components/Tours";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Tours />
      <Contact />
    </div>
  );
};

export default Index;
