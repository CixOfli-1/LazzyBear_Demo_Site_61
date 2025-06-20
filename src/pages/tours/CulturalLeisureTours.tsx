
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Compass, Camera } from 'lucide-react';

const CulturalLeisureTours = () => {
  const tours = [
    { title: "Historical City Tours", desc: "Explore ancient civilizations and Ottoman heritage", icon: <MapPin className="w-8 h-8 text-blue-500" />, link: "/tours/cultural-leisure-tours/historical-city-tours" },
    { title: "Adventure Tours", desc: "Thrilling outdoor activities and extreme sports", icon: <Compass className="w-8 h-8 text-green-500" />, link: "/tours/cultural-leisure-tours/adventure-tours" },
    { title: "Nature & Ecotourism", desc: "Pristine landscapes and wildlife experiences", icon: <Camera className="w-8 h-8 text-purple-500" />, link: "/tours/cultural-leisure-tours/nature-ecotourism" },
    { title: "Customized Packages", desc: "Tailored experiences based on your interests", icon: <ArrowRight className="w-8 h-8 text-orange-500" />, link: "/tours/cultural-leisure-tours/customized-tour-packages" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cultural & Leisure Tours</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Discover Turkey's rich heritage, stunning landscapes, and vibrant culture through our expertly crafted tours.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {tour.icon}
                    <div>
                      <CardTitle className="text-xl">{tour.title}</CardTitle>
                      <CardDescription>{tour.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={tour.link}>Explore Tours <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CulturalLeisureTours;
