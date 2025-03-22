
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Teams', path: '#', dropdown: true, items: [
      { name: 'CC', path: '/teams/cc' },
      { name: 'WC', path: '/teams/wc' },
      { name: 'Mentors', path: '/teams/mentors' },
      { name: 'Volunteers', path: '/teams/volunteers' },
    ]},
    { name: 'Events', path: '#', dropdown: true, items: [
      { name: 'Xaplotes', path: '/xaplotes' },
      { name: 'Vibgyor', path: '/vibgyor' },
    ]},
    { name: 'Gallery', path: '/gallery' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-sm" 
          : "bg-white/40 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <span className="font-display text-2xl font-bold text-primary tracking-tight">
            Team Sportivo
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            !link.dropdown ? (
              <Link
                key={index}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path 
                    ? "text-primary font-semibold" 
                    : "text-gray-800 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <div key={index} className="relative group">
                <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-800 hover:text-primary hover:bg-primary/5 flex items-center gap-1">
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  <div className="py-1 rounded-md bg-white overflow-hidden">
                    {link.items?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 rounded-md text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Join Us
          </Link>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src="https://placehold.co/200x200/primary/white?text=TS" 
              alt="Team Sportivo Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 hover:text-primary focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-6 px-6 lg:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            !link.dropdown ? (
              <Link
                key={index}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.path 
                    ? "text-primary bg-primary/5" 
                    : "text-gray-800 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <div key={index} className="flex flex-col">
                <div className="px-4 py-3 rounded-md text-base font-medium text-gray-800">
                  {link.name}
                </div>
                <div className="pl-4 flex flex-col gap-1 ml-2 border-l border-gray-100">
                  {link.items?.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col gap-3">
          <Link
            to="/signin"
            className="w-full px-4 py-3 rounded-md text-base font-medium text-primary border border-primary/30 hover:bg-primary/5 text-center transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="w-full px-4 py-3 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90 text-center transition-colors"
          >
            Join Us
          </Link>
          <div className="flex justify-center mt-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                src="https://placehold.co/200x200/primary/white?text=TS" 
                alt="Team Sportivo Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
