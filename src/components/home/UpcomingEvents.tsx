
import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import SocialShare from '../ui/SocialShare';

const UpcomingEvents = () => {
  const events = [
    {
      id: 'event1',
      title: 'Annual Championship Finals',
      date: 'June 15, 2023',
      time: '3:00 PM - 6:00 PM',
      location: 'Main Stadium, Sports City',
      description: 'The culmination of this year\'s tournament with the top teams competing for the championship title.',
      image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=800&q=80',
      teams: ['Xaplotes', 'External Team'],
      featured: true
    },
    {
      id: 'event2',
      title: 'Youth Training Camp',
      date: 'July 10-15, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Training Grounds',
      description: 'A week-long training camp for young athletes to develop their skills under professional coaching.',
      image: 'https://images.unsplash.com/photo-1648496550566-ef44748fc1c1?auto=format&fit=crop&w=800&q=80',
      teams: ['Youth Division'],
      featured: false
    },
    {
      id: 'event3',
      title: 'Charity Tournament',
      date: 'August 5, 2023',
      time: '1:00 PM - 7:00 PM',
      location: 'Community Arena',
      description: 'A special tournament to raise funds for local children\'s sports programs.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
      teams: ['Vibgyor', 'Partner Teams'],
      featured: false
    }
  ];

  const featuredEvent = events.find(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600">
            Join us for exciting competitions, training sessions, and community events.
          </p>
        </div>
        
        {featuredEvent && (
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-16 group hover-scale">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            <div className="relative h-[500px] w-full">
              <img 
                src={featuredEvent.image} 
                alt={featuredEvent.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary mb-4">
                <span className="text-xs font-semibold text-white">FEATURED EVENT</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {featuredEvent.title}
              </h3>
              
              <p className="text-white/90 mb-6 max-w-2xl">
                {featuredEvent.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-white">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-white">{featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-white">{featuredEvent.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <CustomButton 
                  to={`/events/${featuredEvent.id}`}
                  size="lg"
                >
                  Event Details
                </CustomButton>
                
                <SocialShare 
                  title={`Join us for ${featuredEvent.title} at Team Sportivo`}
                  variant="icon"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8">
          {regularEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover-scale group"
            >
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Link 
                    to={`/events/${event.id}`}
                    className="text-primary font-medium flex items-center gap-1 group/link"
                  >
                    Event Details
                    <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  
                  <SocialShare 
                    title={`Join us for ${event.title} at Team Sportivo`}
                    variant="icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CustomButton to="/events">
            View All Events
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
