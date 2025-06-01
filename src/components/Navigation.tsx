
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
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10 animate-fade-in font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
          <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.43945 7.7998C7.81264 7.7998 7.99985 7.94616 8 8.23926C8 8.53259 7.77267 8.69306 7.31934 8.71973L6.55957 8.7998C6.10643 8.82649 5.78627 8.97274 5.59961 9.23926C5.41295 9.50591 5.4531 9.91954 5.71973 10.4795L10.6396 20.96C10.7463 21.1465 10.8801 21.2393 11.04 21.2393C11.1998 21.2391 11.3329 21.1463 11.4395 20.96L16.1602 11.3193C16.5067 10.6262 16.586 10.0662 16.3994 9.63965C16.2394 9.18635 15.8526 8.91984 15.2393 8.83984L14.3594 8.71973C13.9063 8.63971 13.6797 8.4792 13.6797 8.23926C13.6798 7.94628 13.8664 7.79993 14.2393 7.7998H19.7197V8.76758L19.5596 8.7998C19.1863 8.87984 18.8529 9.10622 18.5596 9.47949C18.2929 9.85281 17.9328 10.4794 17.4795 11.3594L12.2393 21.8799C12.0527 22.2531 11.9198 22.6134 11.8398 22.96C11.7599 23.2799 11.7197 23.6535 11.7197 24.0801V33.8398C11.7198 34.3997 11.8134 34.7867 12 35C12.2134 35.1865 12.5737 35.3195 13.0801 35.3994L14.8799 35.6797C15.2263 35.7064 15.3992 35.8662 15.3994 36.1592C15.3994 36.4525 15.1998 36.5996 14.7998 36.5996H5.7998C5.3998 36.5996 5.2002 36.4525 5.2002 36.1592C5.20036 35.8661 5.37323 35.7063 5.71973 35.6797L7.51953 35.3994C8.05262 35.3195 8.41287 35.1865 8.59961 35C8.78625 34.7867 8.87986 34.3997 8.87988 33.8398V24.3994C8.87985 23.8128 8.74613 23.2396 8.47949 22.6797L2.59961 10.3594C2.41297 9.90616 2.19992 9.55929 1.95996 9.31934C1.72 9.07939 1.37313 8.90647 0.919922 8.7998L0.55957 8.71973C0.18632 8.63971 0 8.46586 0 8.19922C0.000194583 7.93284 0.199882 7.79983 0.599609 7.7998H7.43945Z" fill="url(#paint0_linear_6_112)"/>
<path d="M17.4805 0C18.8136 6.55166e-05 20.0002 0.27991 21.04 0.839844C22.08 1.39984 22.8938 2.16013 23.4805 3.12012C24.0936 4.07991 24.4003 5.17309 24.4004 6.39941C24.4004 7.59935 24.0402 8.71981 23.3203 9.75977C22.627 10.773 21.6134 11.626 20.2803 12.3193C20.1203 12.3993 20.0401 12.5064 20.04 12.6396C20.04 12.773 20.1336 12.8666 20.3203 12.9199C22.1334 13.5332 23.5329 14.5201 24.5195 15.8799C25.5062 17.2132 26 18.7997 26 20.6396C26 22.213 25.6399 23.6265 24.9199 24.8799C24.1999 26.1065 23.1999 27.0665 21.9199 27.7598C20.6666 28.4531 19.2396 28.7998 17.6396 28.7998H10V27.7539L10.2002 27.7197C10.7599 27.6131 11.1202 27.4669 11.2803 27.2803C11.4669 27.0936 11.5595 26.72 11.5596 26.1602V20.8496L14.4004 17.2988V25.04C14.4005 26.8799 15.3069 27.7998 17.1201 27.7998C18.8534 27.7998 20.267 27.1465 21.3604 25.8398C22.4536 24.5065 23 22.7328 23 20.5195C23 18.3066 22.44 16.5602 21.3203 15.2803C20.227 14.0003 18.7465 13.3594 16.8799 13.3594C16.5545 13.3594 16.2613 13.3859 16 13.4365V12.3271C16.1608 12.3486 16.334 12.3594 16.5195 12.3594C17.9329 12.3594 19.1067 11.8131 20.04 10.7197C21 9.59974 21.4805 8.21287 21.4805 6.55957C21.4804 4.90634 21.0267 3.57286 20.1201 2.55957C19.2135 1.51962 18.0128 1 16.5195 1C15.1066 1.00012 14.4005 1.53319 14.4004 2.59961V3.7998H11.5596V2.63965C11.5596 2.07974 11.4669 1.70618 11.2803 1.51953C11.1203 1.3329 10.76 1.18674 10.2002 1.08008L9.28027 0.919922C8.93361 0.839921 8.75977 0.679453 8.75977 0.439453C8.75992 0.146353 8.96051 0 9.36035 0H17.4805Z" fill="url(#paint1_linear_6_112)"/>
<defs>
<linearGradient id="paint0_linear_6_112" x1="9.85986" y1="7.7998" x2="9.85986" y2="36.5996" gradientUnits="userSpaceOnUse">
<stop offset="0.264423" stop-color="#0000FF"/>
<stop offset="0.764423" stop-color="#4848A3"/>
</linearGradient>
<linearGradient id="paint1_linear_6_112" x1="17.3799" y1="0" x2="17.3799" y2="28.7998" gradientUnits="userSpaceOnUse">
<stop offset="0.264423" stop-color="#0000FF"/>
<stop offset="0.764423" stop-color="#4848A3"/>
</linearGradient>
</defs>
</svg>
            <span className="text-white font-bold text-xl font-headline">JARED</span>
          </div>
          
          <div className="hidden md:block font-body">
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
          <div className="md:hidden animate-slide-up font-body">
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
