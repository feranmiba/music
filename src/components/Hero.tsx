
import { Button } from "@/components/ui/button";
import { Youtube, Music } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
      <img 
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Music background" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in font-headline">
          YOUNG BOY <br /> JARED
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-slide-up font-handwritten" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          Singer • Songwriter • Producer
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up font-body" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
          Creating music that touches souls and moves hearts. Experience the journey through sound and emotion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in font-body" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a  href="https://open.spotify.com/artist/407eU5fCNE2DudVUMvYK59?si=gUZbBelWTNCUUo1x88dQSw"  className="flex gap-2 items-center"
             target="_blank"
         rel="noopener noreferrer"
            >
                 <Music className="mr-2 h-5 w-5" />
                 Listen Now
            </a>
         
          </Button>
          <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black px-8 font-body py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <a 
              href="https://music.youtube.com/channel/UCZxk61aPjhjI-WYqbeGwbcA?si=P5NIZmdp8B-xonbv" 
                target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
              aria-label="Watch on YouTube"
            >
            <Youtube className="mr-2 h-5 w-5" />
            Watch Videos
            </a>
          </Button>
        </div>

        {/* Music Platform Icons */}
        <div className="flex justify-center items-center gap-6 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
          <p className="text-gray-300 text-sm mb-2 mr-4">Listen on:</p>
          <div className="flex gap-4">
            <a 
              href="https://open.spotify.com/artist/407eU5fCNE2DudVUMvYK59?si=gUZbBelWTNCUUo1x88dQSw" 
              className="group bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              aria-label="Listen on Spotify"
                target="_blank"
         rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a 
              href="https://music.apple.com/us/artist/young-boy-jared/1785633136" 
                target="_blank"
         rel="noopener noreferrer"
              className="group bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              aria-label="Listen on Apple Music"
            >
              <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.14C15.645.01 15.133 0 12.004 0s-3.642.01-6.132.024C5.366.029 4.847.071 4.33.164 3.657.285 3.027.517 2.453.891 1.335 1.624.59 2.624.273 3.934.098 4.654.033 5.386.033 6.124v11.752c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.036.135 1.562.14 2.49.014 3.002.024 6.131.024s3.641-.01 6.131-.024c.526-.005 1.045-.047 1.562-.14.673-.121 1.303-.353 1.877-.727 1.118-.733 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zM12.004 18.15c-3.396 0-6.146-2.75-6.146-6.146s2.75-6.146 6.146-6.146 6.146 2.75 6.146 6.146-2.75 6.146-6.146 6.146z"/>
                <circle cx="12.004" cy="12.004" r="4.9"/>
              </svg>
            </a>
            <a 
              href="https://music.youtube.com/channel/UCZxk61aPjhjI-WYqbeGwbcA?si=P5NIZmdp8B-xonbv" 
                target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              aria-label="Watch on YouTube"
            >
              <Youtube className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
