import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Music as MusicIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();
  
  const allAlbums = [
    {
      title: "Midnight Echoes",
      year: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "A collection of introspective ballads and energetic anthems."
    },
    {
      title: "Electric Dreams",
      year: "2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Synthesized melodies meet organic instruments in this genre-bending masterpiece."
    },
    {
      title: "Roots & Wings",
      year: "2022",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "A return to acoustic foundations with soaring vocal arrangements."
    },
    {
      title: "Urban Symphony",
      year: "2021",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "City sounds blend with classical orchestration in this innovative album."
    },
    {
      title: "Neon Nights",
      year: "2020",
      image: "https://images.unsplash.com/photo-1571609000481-5d6e29b2c7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Electronic beats and neon-soaked melodies capture the essence of nightlife."
    },
    {
      title: "Acoustic Soul",
      year: "2019",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Stripped-down arrangements highlight raw emotion and powerful vocals."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current 3 albums to display
  const getCurrentAlbums = () => {
    const albums = [];
    for (let i = 0; i < 3; i++) {
      albums.push(allAlbums[(currentIndex + i) % allAlbums.length]);
    }
    return albums;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % allAlbums.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000); // Change every 3 minutes (3000ms = 3 seconds for demo, change to 180000 for 3 minutes)

    return () => clearInterval(interval);
  }, [allAlbums.length]);

  const albums = getCurrentAlbums();

  return (
    <section id="music" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Latest Music
        </h2>
        
        <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          {albums.map((album, index) => (
            <Card key={`${album.title}-${currentIndex}`} className="bg-black/40 border-purple-500/30 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-scale-in" style={{animationDelay: `${index * 0.2}s`, animationFillMode: 'both'}}>
              <div className="relative group">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{album.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{album.year}</p>
                <p className="text-gray-300 text-sm mb-4">{album.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <MusicIcon className="mr-1 h-4 w-4" />
                    Listen
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Youtube className="mr-1 h-4 w-4" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
          <Button 
            onClick={() => navigate('/music')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View Full Discography
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Music;
