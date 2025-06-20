
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CheckupPrograms = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Check-up Programs</h1>
          <p className="text-xl mb-8">Comprehensive health screenings for early detection and preventive care.</p>
          <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            <Link to="/contact-us">Book Check-up <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CheckupPrograms;
