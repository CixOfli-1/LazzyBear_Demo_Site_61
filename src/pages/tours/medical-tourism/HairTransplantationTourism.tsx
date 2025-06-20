
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HairTransplantationTourism = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hair Transplantation Tourism
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Regain your confidence with advanced hair transplantation techniques 
              at Turkey's leading clinics.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Advanced Hair Restoration Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Turkey is globally recognized for hair transplantation excellence, offering 
            FUE and DHI techniques with natural-looking results at affordable prices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">FUE Technique</h3>
              <p className="text-gray-600">Follicular Unit Extraction with minimal scarring</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">DHI Method</h3>
              <p className="text-gray-600">Direct Hair Implantation for precise placement</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sapphire FUE</h3>
              <p className="text-gray-600">Premium technique with sapphire blades</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairTransplantationTourism;
