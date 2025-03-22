
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
      alt: 'Chess tournament',
      category: 'Chess'
    },
    {
      src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4e8?auto=format&fit=crop&w=800&q=80',
      alt: 'Badminton match',
      category: 'Badminton'
    },
    {
      src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
      alt: 'Cricket tournament',
      category: 'Cricket'
    },
    {
      src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      alt: 'Football match',
      category: 'Football'
    },
    {
      src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
      alt: 'Handball game',
      category: 'Handball'
    },
    {
      src: 'https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?auto=format&fit=crop&w=800&q=80',
      alt: 'Flash event',
      category: 'Flash events'
    },
    {
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      alt: 'Chess championship',
      category: 'Chess'
    },
    {
      src: 'https://images.unsplash.com/photo-1623796898624-d382e4fffce5?auto=format&fit=crop&w=800&q=80',
      alt: 'Football tournament',
      category: 'Football'
    }
  ];
  
  const categories = ['All', 'Chess', 'Badminton', 'Cricket', 'Football', 'Handball', 'Flash events'];
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
          
          <div className="flex justify-center mb-12">
            <ToggleGroup type="single" value={activeCategory} onValueChange={(value) => value && setActiveCategory(value)}>
              {categories.map((category) => (
                <ToggleGroupItem key={category} value={category} variant="outline" className="px-4 py-2 rounded-full">
                  {category}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover-scale relative"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
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
