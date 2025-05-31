
import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";

const About = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "YB Jarred performing"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "YB Jarred in studio"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "YB Jarred portrait"
    }
  ];

  const musicVideos = [
    {
      title: "Midnight Echoes",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "3:45"
    },
    {
      title: "Electric Dreams",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4:12"
    },
    {
      title: "Urban Symphony",
      thumbnail: "https://images.unsplash.com/photo-1571609000481-5d6e29b2c7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "5:28"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              About YB Jarred
            </h2>
            <p className="text-gray-300 text-lg mb-6 font-inter leading-relaxed">
              Born from the rhythm of the city and the whispers of the wind, YB Jarred has been crafting melodies that resonate with the human experience for over a decade.
            </p>
            <p className="text-gray-300 text-lg mb-6 font-inter leading-relaxed">
              With influences ranging from classic rock to modern electronic, YB Jarred's sound is a unique blend of raw emotion and polished production. Each song tells a story, each album is a journey.
            </p>
            <p className="text-gray-300 text-lg font-inter leading-relaxed">
              When not in the studio, YB Jarred can be found collaborating with other artists, mentoring young musicians, and exploring new sounds that push the boundaries of contemporary music.
            </p>
          </div>
          
          {/* 3-Grid Photo Layout */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
            <div className="space-y-4">
              <div className="relative group animate-float" style={{animationDelay: '0s'}}>
                <img 
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="rounded-lg shadow-2xl w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group animate-float" style={{animationDelay: '1s'}}>
                <img 
                  src={photos[1].src}
                  alt={photos[1].alt}
                  className="rounded-lg shadow-2xl w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative group animate-float" style={{animationDelay: '0.5s'}}>
              <img 
                src={photos[2].src}
                alt={photos[2].alt}
                className="rounded-lg shadow-2xl w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Music Videos Section */}
        <div className="animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-playfair">
            Latest Music Videos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {musicVideos.map((video, index) => (
              <div 
                key={video.title} 
                className="relative group cursor-pointer animate-zoom-in" 
                style={{animationDelay: `${0.8 + index * 0.2}s`, animationFillMode: 'both'}}
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-purple-600/80 backdrop-blur-sm rounded-full p-4 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-sm font-poppins">
                    {video.duration}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-white mb-2 font-poppins group-hover:text-purple-300 transition-colors">
                    {video.title}
                  </h4>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105 font-inter">
                    <Music className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
