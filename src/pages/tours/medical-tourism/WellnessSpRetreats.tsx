import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WellnessSpaRetreats = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wellness & Spa Retreats</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Rejuvenate your body and mind with luxury spa treatments and wellness programs.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">Book Retreat <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Holistic Wellness Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Traditional Turkish baths, thermal springs, massage therapies, and holistic healing treatments.</p>
        </div>
      </section>
    </div>
  );
};

export default WellnessSpaRetreats;
