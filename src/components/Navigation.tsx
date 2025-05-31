
import { useState } from "react";
import { Music, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-purple-400 transition-transform duration-300 hover:scale-110" />
            <span className="text-white font-bold text-xl">YB JARRED</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-400 transition-all duration-300 hover:scale-105">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-400 transition-all duration-300 hover:scale-105">
                About
              </button>
              <button onClick={() => scrollToSection('music')} className="text-white hover:text-purple-400 transition-all duration-300 hover:scale-105">
                Music
              </button>
              <button onClick={() => scrollToSection('tours')} className="text-white hover:text-purple-400 transition-all duration-300 hover:scale-105">
                Tours
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-400 transition-all duration-300 hover:scale-105">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <button onClick={() => scrollToSection('home')} className="block text-white hover:text-purple-400 px-3 py-2 w-full text-left transition-all duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-white hover:text-purple-400 px-3 py-2 w-full text-left transition-all duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('music')} className="block text-white hover:text-purple-400 px-3 py-2 w-full text-left transition-all duration-300">
                Music
              </button>
              <button onClick={() => scrollToSection('tours')} className="block text-white hover:text-purple-400 px-3 py-2 w-full text-left transition-all duration-300">
                Tours
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-purple-400 px-3 py-2 w-full text-left transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
