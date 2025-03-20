
import React from 'react';
import CustomButton from '@/components/ui/CustomButton';

const Xaplotes = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 mb-2">
                <span className="text-xs font-medium text-blue-600">TEAM PROFILE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Xaplotes Team
              </h1>
              <p className="text-lg text-gray-600">
                Our premier team specializing in high-intensity tactical sports, known for their precision and teamwork.
              </p>
              <div className="pt-4">
                <CustomButton to="/contact">
                  Join Xaplotes
                </CustomButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600/10 rounded-full -z-10" />
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1526232686172-8ac86591661f?auto=format&fit=crop&w=800&q=80" 
                  alt="Xaplotes team in action"
                  className="w-full hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Team Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're currently updating this page with comprehensive information about our Xaplotes team.
            Please check back soon for team members, achievements, and upcoming events.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Xaplotes;
