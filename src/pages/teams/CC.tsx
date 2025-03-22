
import React from 'react';
import CustomButton from '@/components/ui/CustomButton';

const CC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 mb-2">
                <span className="text-xs font-medium text-primary">TEAM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Core Committee
              </h1>
              <p className="text-lg text-gray-600">
                The leadership team driving the vision and strategic direction of Team Sportivo.
              </p>
              <div className="pt-4">
                <CustomButton to="/contact">
                  Join Our Team
                </CustomButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full -z-10" />
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                  alt="Core Committee team"
                  className="w-full hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-xl text-center hover-scale">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 10}.jpg`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Team Member {item}</h3>
                <p className="text-primary font-medium mb-3">Leadership Role</p>
                <p className="text-gray-600">Passionate team leader with expertise in sports management and event coordination.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CC;
