
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Compass, MapPin, ArrowRight } from 'lucide-react';

const Tours = () => {
  const tourCategories = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Medical Tourism Packages",
      description: "Combine world-class medical treatments with unforgettable travel experiences in Turkey.",
      features: ["Dental Tourism", "Hair Transplantation", "Aesthetic Surgery", "Wellness Retreats"],
      link: "/tours/medical-tourism-packages",
      badge: "Most Popular"
    },
    {
      icon: <Compass className="w-12 h-12 text-blue-500" />,
      title: "Cultural & Leisure Tours",
      description: "Discover Turkey's rich heritage, stunning landscapes, and vibrant culture.",
      features: ["Historical Tours", "Adventure Tours", "Nature & Ecotourism", "Custom Packages"],
      link: "/tours/cultural-leisure-tours",
      badge: "Cultural Experience"
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-500" />,
      title: "Popular Destinations",
      description: "Explore Turkey's most beautiful and historically significant destinations.",
      features: ["Istanbul Tours", "Cappadocia Tours", "Antalya Tours", "More Destinations"],
      link: "/tours/popular-destinations",
      badge: "Top Destinations"
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
              Discover Turkey Through Our Tours
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              From life-changing medical treatments to breathtaking cultural journeys, 
              explore all that Turkey has to offer with our expertly crafted tour packages.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're seeking medical care, cultural enrichment, or adventure, 
              we have the perfect tour package for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourCategories.map((category, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300">
                {category.badge && (
                  <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {category.badge}
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={category.link}>
                      Explore Tours
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Tours?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Professional medical and tour guidance throughout your journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customized Packages</h3>
              <p className="text-gray-600">Tailored experiences designed to meet your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Access to Turkey's most beautiful and significant destinations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seamless Experience</h3>
              <p className="text-gray-600">End-to-end service from arrival to departure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Turkish Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our expert team to create a personalized tour package that perfectly matches your interests and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">
                Plan My Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/tours/medical-tourism-packages">View Medical Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
