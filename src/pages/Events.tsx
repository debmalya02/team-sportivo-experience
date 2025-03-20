
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import SocialShare from '@/components/ui/SocialShare';

const Events = () => {
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
      featured: true,
      category: 'Competition'
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
      featured: false,
      category: 'Training'
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
      featured: false,
      category: 'Community'
    },
    {
      id: 'event4',
      title: 'Team Sportivo Open House',
      date: 'September 2, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'Team Sportivo Headquarters',
      description: 'An opportunity for prospective members to tour our facilities, meet our team, and learn about our programs.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      teams: ['All Teams'],
      featured: false,
      category: 'Community'
    },
    {
      id: 'event5',
      title: 'Winter Training Workshop',
      date: 'December 10-12, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'Indoor Arena',
      description: 'Intensive training sessions focusing on technique refinement during the off-season.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
      teams: ['Xaplotes', 'Vibgyor'],
      featured: false,
      category: 'Training'
    }
  ];
  
  const categories = ['All', ...new Set(events.map(event => event.category))];
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Upcoming Events</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Join us for exciting competitions, training sessions, and community events throughout the year.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid gap-8">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-scale group"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-primary">
                        <span className="text-xs font-semibold text-white">FEATURED</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 md:col-span-2 flex flex-col">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 mb-3">
                        <span className="text-xs font-medium text-gray-800">{event.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.teams.map((team, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <CustomButton 
                        to={`/events/${event.id}`}
                        size="sm"
                      >
                        Event Details
                      </CustomButton>
                      
                      <SocialShare 
                        title={`Join us for ${event.title} at Team Sportivo`}
                        variant="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Host Your Event With Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Looking for a venue for your next sports event? Our facilities are available for rent.
          </p>
          <CustomButton 
            to="/contact"
            variant="ghost"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary"
          >
            Contact Us
          </CustomButton>
        </div>
      </section>
    </div>
  );
};

export default Events;
