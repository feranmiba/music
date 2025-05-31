
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Music as MusicIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MusicPage = () => {
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
    },
    {
      title: "Digital Horizon",
      year: "2018",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Exploring the intersection of technology and human emotion."
    },
    {
      title: "Silent Thunder",
      year: "2017",
      image: "https://images.unsplash.com/photo-1571609000481-5d6e29b2c7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Powerful ballads that speak to the soul with quiet intensity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center mb-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 animate-fade-in">
          Full Discography
        </h1>
        <p className="text-xl text-purple-200 text-center mb-12 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          Explore YB Jarred's complete musical journey
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAlbums.map((album, index) => (
            <Card key={album.title} className="bg-black/40 border-purple-500/30 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-scale-in" style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'both'}}>
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
      </div>
    </div>
  );
};

export default MusicPage;
