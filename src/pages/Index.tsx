
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Tours from "@/components/Tours";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 font-body">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Tours />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
