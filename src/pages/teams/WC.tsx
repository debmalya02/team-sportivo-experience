
import React from 'react';
import CustomButton from '@/components/ui/CustomButton';

const WC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 mb-2">
                <span className="text-xs font-medium text-blue-500">TEAM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Working Committee
              </h1>
              <p className="text-lg text-gray-600">
                The executive team responsible for planning, organizing, and executing all Team Sportivo events and initiatives.
              </p>
              <div className="pt-4">
                <CustomButton to="/contact">
                  Join Our Team
                </CustomButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full -z-10" />
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Working Committee team"
                  className="w-full hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-xl text-center hover-scale">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Team Member {item}</h3>
                <p className="text-blue-500 font-medium mb-3">Committee Role</p>
                <p className="text-gray-600">Dedicated team member working to create exceptional sports experiences.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WC;
