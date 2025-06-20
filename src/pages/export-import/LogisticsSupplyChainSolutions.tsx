
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LogisticsSupplyChainSolutions = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Logistics & Supply Chain Solutions</h1>
          <p className="text-xl mb-8">Efficient logistics and supply chain management for healthcare industries.</p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link to="/contact-us">Optimize Supply Chain <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LogisticsSupplyChainSolutions;
