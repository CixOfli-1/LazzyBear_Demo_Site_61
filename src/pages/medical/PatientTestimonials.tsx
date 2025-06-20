
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PatientTestimonials = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-xl mb-8">Real stories from patients who experienced exceptional care and remarkable results.</p>
          <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            <Link to="/contact-us">Share Your Story <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PatientTestimonials;
