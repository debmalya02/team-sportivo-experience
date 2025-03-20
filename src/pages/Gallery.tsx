
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
      alt: 'Athletes celebrating a victory',
      category: 'Competitions'
    },
    {
      src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?auto=format&fit=crop&w=800&q=80',
      alt: 'Team training session',
      category: 'Training'
    },
    {
      src: 'https://images.unsplash.com/photo-1526676037777-05a232554d77?auto=format&fit=crop&w=800&q=80',
      alt: 'Team photo',
      category: 'Team'
    },
    {
      src: 'https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?auto=format&fit=crop&w=800&q=80',
      alt: 'Athletes in action',
      category: 'Competitions'
    },
    {
      src: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?auto=format&fit=crop&w=800&q=80',
      alt: 'Community event',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80',
      alt: 'Team huddle',
      category: 'Team'
    },
    {
      src: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=800&q=80',
      alt: 'Spectators at a game',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1566936440394-681046e0e75c?auto=format&fit=crop&w=800&q=80',
      alt: 'Championship trophy',
      category: 'Achievements'
    }
  ];
  
  const categories = ['All', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Gallery</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Capturing the moments of dedication, triumph, and teamwork that define Team Sportivo.
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover-scale group relative"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
