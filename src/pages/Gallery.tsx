
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { fetchImagesFromFolder } from '@/utils/storageUtils';
import { toast } from 'sonner';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<{src: string; alt: string; category: string}[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categories = ['All', 'Chess', 'Badminton', 'Cricket', 'Football', 'Handball', 'Flash events'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        // Fetch images from the gallery folder in Firebase Storage
        const fetchedImages = await fetchImagesFromFolder('gallery');
        
        // Add default category if missing
        const processedImages = fetchedImages.map(img => ({
          ...img,
          category: img.category || 'Other'
        }));
        
        setImages(processedImages);
      } catch (error) {
        console.error("Failed to load gallery images:", error);
        toast.error("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadImages();
  }, []);
  
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
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
          
          {filteredImages.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
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
