
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Award, Share2, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SocialShare from "@/components/ui/SocialShare";
import CustomButton from "@/components/ui/CustomButton";

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: '1',
    notes: ''
  });

  // Simulated events data - in a real application, this would come from an API
  const events = [
    {
      id: 'event1',
      title: 'Annual Championship Finals',
      date: 'June 15, 2023',
      time: '3:00 PM - 6:00 PM',
      location: 'Main Stadium, Sports City',
      description: 'The culmination of this year\'s tournament with the top teams competing for the championship title.',
      fullDescription: 'Join us for the spectacular conclusion to our annual championship series. After months of intense competition, our top teams will battle for the prestigious championship title. This event features elite athleticism, live entertainment, and the electric atmosphere that only finals day can deliver. Don\'t miss the opportunity to witness sporting history being made!',
      image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=800&q=80',
      teams: ['Xaplotes', 'External Team'],
      featured: true,
      category: 'Competition',
      capacity: 2000,
      organizer: 'Team Sportivo Championship Committee',
      price: '$25',
      registration: true
    },
    {
      id: 'event2',
      title: 'Youth Training Camp',
      date: 'July 10-15, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Training Grounds',
      description: 'A week-long training camp for young athletes to develop their skills under professional coaching.',
      fullDescription: 'Our immersive week-long youth training camp provides aspiring athletes aged 8-16 with professional-level coaching in a supportive environment. Participants will receive personalized instruction on technique, strategy, and athletic development. The program includes daily training sessions, team-building activities, nutritional guidance, and a special awards ceremony on the final day. All skill levels are welcome!',
      image: 'https://images.unsplash.com/photo-1648496550566-ef44748fc1c1?auto=format&fit=crop&w=800&q=80',
      teams: ['Youth Division'],
      featured: false,
      category: 'Training',
      capacity: 75,
      organizer: 'Team Sportivo Youth Development',
      price: '$150',
      registration: true
    },
    {
      id: 'event3',
      title: 'Charity Tournament',
      date: 'August 5, 2023',
      time: '1:00 PM - 7:00 PM',
      location: 'Community Arena',
      description: 'A special tournament to raise funds for local children\'s sports programs.',
      fullDescription: 'This special charity tournament brings together teams from across the region to raise essential funds for underprivileged youth sports programs. The day features competitive matches, exhibition games with professional athletes, a silent auction with sports memorabilia, and family-friendly activities. All proceeds will help provide equipment, coaching, and opportunities for children who otherwise wouldn\'t have access to sports programs.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
      teams: ['Vibgyor', 'Partner Teams'],
      featured: false,
      category: 'Community',
      capacity: 300,
      organizer: 'Team Sportivo Community Outreach',
      price: 'Free (Donations Welcome)',
      registration: true
    },
    {
      id: 'event4',
      title: 'Team Sportivo Open House',
      date: 'September 2, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'Team Sportivo Headquarters',
      description: 'An opportunity for prospective members to tour our facilities, meet our team, and learn about our programs.',
      fullDescription: 'Curious about joining Team Sportivo? Our Open House event provides the perfect opportunity to explore our state-of-the-art facilities, meet coaches and current members, and learn about all our programs and membership options. The day includes facility tours, demonstration sessions, meet-and-greets with athletes, and information booths for each of our sports programs. Staff will be available to answer questions about memberships, training schedules, and community involvement.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      teams: ['All Teams'],
      featured: false,
      category: 'Community',
      capacity: 'Unlimited',
      organizer: 'Team Sportivo Membership Division',
      price: 'Free',
      registration: false
    },
    {
      id: 'event5',
      title: 'Winter Training Workshop',
      date: 'December 10-12, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'Indoor Arena',
      description: 'Intensive training sessions focusing on technique refinement during the off-season.',
      fullDescription: 'Our three-day Winter Training Workshop is designed to help athletes maintain and improve their skills during the off-season. Led by our expert coaching staff, these intensive sessions focus on technical refinement, strength conditioning, and mental preparation strategies. The workshop includes specialized equipment training, video analysis of technique, personalized feedback sessions, and collaborative problem-solving challenges. This is an excellent opportunity for serious athletes to gain an edge for the upcoming season.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
      teams: ['Xaplotes', 'Vibgyor'],
      featured: false,
      category: 'Training',
      capacity: 50,
      organizer: 'Team Sportivo Performance Division',
      price: '$120',
      registration: true
    }
  ];

  // Find the event that matches the URL parameter
  const event = events.find(e => e.id === eventId);

  // If event not found, redirect to events page
  if (!event) {
    navigate('/events');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to a server
    console.log('Registration submitted:', formData);
    
    // Close the dialog
    setIsRegistrationOpen(false);
    
    // Show success toast
    toast({
      title: "Registration Successful!",
      description: `You have registered for ${event.title}. Check your email for details.`,
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      participants: '1',
      notes: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary mb-4">
              <span className="text-xs font-semibold text-white">{event.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:gap-16">
            {/* Main Content */}
            <div className="md:w-2/3">
              <CustomButton 
                to="/events"
                variant="ghost"
                className="mb-8"
                icon={<ArrowLeft className="h-4 w-4" />}
                iconPosition="left"
              >
                Back to Events
              </CustomButton>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Calendar className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-gray-500">Date</span>
                    <span className="font-medium text-center">{event.date}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-gray-500">Time</span>
                    <span className="font-medium text-center">{event.time}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPin className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="font-medium text-center">{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-700">{event.fullDescription}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Capacity</span>
                      <p className="text-gray-700">{event.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Organized by</span>
                      <p className="text-gray-700">{event.organizer}</p>
                    </div>
                  </div>
                  
                  {event.teams && event.teams.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <span className="font-medium">Teams</span>
                        <div className="flex flex-wrap gap-2 mt-1">
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
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">Price</h3>
                  <p className="text-2xl font-bold text-primary">{event.price}</p>
                </div>
                
                {event.registration ? (
                  <Button 
                    className="w-full mb-4" 
                    size="lg"
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    Register Now
                  </Button>
                ) : (
                  <Button 
                    className="w-full mb-4" 
                    size="lg"
                    disabled
                  >
                    Registration Closed
                  </Button>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Share this event:</span>
                  <SocialShare 
                    title={`Join us for ${event.title} at Team Sportivo`}
                    variant="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events
              .filter(e => e.id !== eventId)
              .slice(0, 3)
              .map(relatedEvent => (
                <div 
                  key={relatedEvent.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover-scale group"
                >
                  <div className="relative h-48">
                    <img 
                      src={relatedEvent.image} 
                      alt={relatedEvent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedEvent.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedEvent.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-gray-700">{relatedEvent.date}</span>
                      </div>
                    </div>
                    
                    <CustomButton 
                      to={`/events/${relatedEvent.id}`}
                      size="sm"
                      className="w-full"
                    >
                      View Details
                    </CustomButton>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for {event.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to secure your spot at this event.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRegistration} className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="participants">Number of Participants</Label>
                <Input
                  id="participants"
                  name="participants"
                  type="number"
                  min="1"
                  value={formData.participants}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special requirements or information we should know"
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancel</Button>
              </DialogClose>
              <Button type="submit">Complete Registration</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetails;
