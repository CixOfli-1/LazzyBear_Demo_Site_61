
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FertilityTreatments = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Fertility Treatments</h1>
          <p className="text-xl mb-8">Comprehensive fertility solutions to help you build the family of your dreams.</p>
          <Button asChild size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
            <Link to="/contact-us">Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FertilityTreatments;
