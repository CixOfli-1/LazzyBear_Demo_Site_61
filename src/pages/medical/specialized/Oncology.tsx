
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Oncology = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Oncology</h1>
          <p className="text-xl mb-8">Comprehensive cancer care with advanced treatment options and personalized support.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link to="/contact-us">Get Information <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Oncology;
