
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import CreateEventButton from "@/components/CreateEventButton";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Eventify - Create and Discover Amazing Events";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section className="section">
          <div className="section-inner text-center mb-20">
            <h2 className="heading-2 mb-4">How It Works</h2>
            <p className="subtitle mx-auto">
              Organizing events has never been easier. Our platform simplifies every step of the process.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">Create Your Event</h3>
                <p className="text-muted-foreground">
                  Set up your event details, add descriptions, location, time, and customize to your needs.
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">Invite Attendees</h3>
                <p className="text-muted-foreground">
                  Send invitations, manage guest lists, and track RSVPs all in one place.
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">Host Your Event</h3>
                <p className="text-muted-foreground">
                  Use our tools to check in guests, send updates, and make your event a success.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedEvents />
        
        <section className="section">
          <div className="section-inner">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069" 
                alt="Create your own event" 
                className="w-full h-full object-cover max-h-[500px]"
              />
              <div className="relative z-10 py-16 px-6 md:px-12 lg:py-24 lg:px-20 text-white max-w-3xl">
                <h2 className="heading-2 mb-4">Ready to Create Your Own Event?</h2>
                <p className="text-white/90 text-lg md:text-xl mb-8">
                  Start planning your next gathering with our comprehensive set of tools and make it an unforgettable experience.
                </p>
                <button 
                  className="bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-colors text-base"
                  onClick={() => navigate('/create-event')}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CreateEventButton />
      <Footer />
    </div>
  );
};

export default Index;
