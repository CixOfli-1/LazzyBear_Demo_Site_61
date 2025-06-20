
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AntalyaTours = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Antalya Tours</h1>
          <p className="text-xl mb-8">Enjoy the Mediterranean paradise with pristine beaches and ancient ruins in Antalya.</p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            <Link to="/contact-us">Discover Antalya <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AntalyaTours;
