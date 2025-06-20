
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowRight, Star } from 'lucide-react';

const MedicalTourismPackages = () => {
  const packages = [
    {
      title: "Dental Tourism",
      description: "Complete dental care with significant cost savings",
      savings: "Up to 70%",
      duration: "3-7 days",
      image: "🦷",
      link: "/tours/medical-tourism-packages/dental-tourism"
    },
    {
      title: "Hair Transplantation Tourism",
      description: "Advanced hair restoration techniques with natural results",
      savings: "Up to 60%",
      duration: "2-4 days",
      image: "💇‍♂️",
      link: "/tours/medical-tourism-packages/hair-transplantation-tourism"
    },
    {
      title: "Eye Surgery Tourism",
      description: "LASIK and other eye procedures with latest technology",
      savings: "Up to 50%",
      duration: "2-3 days",
      image: "👁️",
      link: "/tours/medical-tourism-packages/eye-surgery-tourism"
    },
    {
      title: "Aesthetic & Cosmetic Surgery",
      description: "Professional cosmetic procedures with world-class surgeons",
      savings: "Up to 65%",
      duration: "5-10 days",
      image: "✨",
      link: "/tours/medical-tourism-packages/aesthetic-cosmetic-surgery-tourism"
    },
    {
      title: "Wellness & Spa Retreats",
      description: "Rejuvenating spa treatments and wellness programs",
      savings: "Up to 40%",
      duration: "3-14 days",
      image: "🧘‍♀️",
      link: "/tours/medical-tourism-packages/wellness-spa-retreats"
    },
    {
      title: "Rehabilitation & Recovery",
      description: "Comprehensive rehabilitation programs for various conditions",
      savings: "Up to 55%",
      duration: "7-21 days",
      image: "🏥",
      link: "/tours/medical-tourism-packages/rehabilitation-recovery-programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medical Tourism Packages
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Combine world-class medical treatments with unforgettable travel experiences 
              in Turkey at unbeatable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Medical Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All packages include medical treatment, accommodation, transfers, 
              and cultural activities for a complete experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save {pkg.savings}
                </div>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{pkg.image}</div>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>Duration: {pkg.duration}</span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      Premium Care
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={pkg.link}>
                      Explore Package
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every Package Includes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Medical Treatment</h3>
              <p className="text-gray-600">Complete medical care by certified specialists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏨
              </div>
              <h3 className="text-lg font-semibold mb-2">Accommodation</h3>
              <p className="text-gray-600">4-star hotel stay with all amenities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🚗
              </div>
              <h3 className="text-lg font-semibold mb-2">Transportation</h3>
              <p className="text-gray-600">Airport transfers and medical appointments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏛️
              </div>
              <h3 className="text-lg font-semibold mb-2">Cultural Tours</h3>
              <p className="text-gray-600">Guided tours of Turkey's beautiful attractions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a personalized treatment plan and quote for your medical tourism package.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact-us">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MedicalTourismPackages;
