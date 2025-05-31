
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're interested in collaborations, bookings, or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Management</h4>
                <p className="text-gray-300">management@alexrivera.com</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Booking</h4>
                <p className="text-gray-300">booking@alexrivera.com</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Press</h4>
                <p className="text-gray-300">press@alexrivera.com</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-black/40 border-purple-500/30">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Your message..." 
                  rows={5}
                  className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
