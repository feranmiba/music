
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Tours = () => {
  const tourDates = [
    {
      date: "Mar 15, 2024",
      venue: "Madison Square Garden",
      city: "New York, NY",
      status: "On Sale"
    },
    {
      date: "Mar 22, 2024",
      venue: "The Hollywood Bowl",
      city: "Los Angeles, CA",
      status: "Sold Out"
    },
    {
      date: "Apr 5, 2024",
      venue: "Red Rocks Amphitheatre",
      city: "Morrison, CO",
      status: "On Sale"
    },
    {
      date: "Apr 12, 2024",
      venue: "The Royal Albert Hall",
      city: "London, UK",
      status: "On Sale"
    },
    {
      date: "Apr 20, 2024",
      venue: "Sydney Opera House",
      city: "Sydney, AU",
      status: "On Sale"
    }
  ];

  return (
    <section id="tours" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Tour Dates
        </h2>
        
        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <Card key={index} className="bg-black/40 border-purple-500/30 hover:bg-black/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <span className="text-purple-400 font-semibold text-lg">{show.date}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{show.venue}</h3>
                        <p className="text-gray-300">{show.city}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      show.status === 'Sold Out' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {show.status}
                    </span>
                    <Button 
                      disabled={show.status === 'Sold Out'}
                      className={
                        show.status === 'Sold Out' 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-purple-600 hover:bg-purple-700'
                      }
                    >
                      {show.status === 'Sold Out' ? 'Sold Out' : 'Get Tickets'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3">
            View All Tour Dates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
