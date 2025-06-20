
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Award, ArrowRight, CheckCircle } from 'lucide-react';

const DentalTourism = () => {
  const treatments = [
    {
      name: "Dental Implants",
      description: "High-quality titanium implants with lifetime warranty",
      price: "From $400",
      duration: "3-5 days"
    },
    {
      name: "Veneers & Crowns",
      description: "Porcelain veneers and zirconia crowns for perfect smile",
      price: "From $150",
      duration: "2-3 days"
    },
    {
      name: "Full Mouth Reconstruction",
      description: "Complete dental makeover with advanced techniques",
      price: "From $3,500",
      duration: "5-7 days"
    },
    {
      name: "Teeth Whitening",
      description: "Professional laser whitening for brilliant results",
      price: "From $200",
      duration: "1 day"
    }
  ];

  const benefits = [
    "Up to 70% cost savings compared to Western countries",
    "JCI accredited dental clinics with international standards",
    "Experienced dentists with international certifications",
    "Latest technology and advanced dental equipment",
    "Comprehensive aftercare and follow-up services",
    "Combine treatment with Turkish cultural experiences"
  ];

  const packageIncludes = [
    "Free initial consultation and treatment planning",
    "All dental treatments as prescribed",
    "Airport transfers and transportation",
    "4-star hotel accommodation",
    "City tour and cultural activities",
    "24/7 patient support and translation services",
    "Post-treatment care instructions and follow-up"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dental Tourism in Turkey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Experience world-class dental care at affordable prices while exploring 
              the beauty and culture of Turkey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact-us">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/medical-services/patient-testimonials">Patient Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Turkey for Dental Care */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Turkey for Dental Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turkey has become a global leader in dental tourism, offering exceptional 
              quality care at unbeatable prices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Dental Treatments
            </h2>
            <p className="text-lg text-gray-600">
              From routine care to complete smile makeovers, we offer comprehensive dental services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{treatment.name}</CardTitle>
                      <CardDescription className="mt-2">{treatment.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{treatment.price}</div>
                      <div className="text-sm text-gray-500">{treatment.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Includes */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Package Includes
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a worry-free dental tourism experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packageIncludes.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Treatment Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">Free online consultation and treatment planning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Arrival</h3>
              <p className="text-gray-600">Airport pickup and hotel accommodation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Treatment</h3>
              <p className="text-gray-600">Professional dental treatment by expert dentists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2">Recovery</h3>
              <p className="text-gray-600">Follow-up care and cultural activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "I saved over $15,000 on my dental implants compared to prices back home, 
                and the quality was exceptional. The doctors were professional, and I got 
                to explore beautiful Istanbul during my recovery. Highly recommended!"
              </blockquote>
              <div className="text-gray-600">
                <strong>Sarah M.</strong> - United Kingdom
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Perfect Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your dental tourism journey today. Get a free consultation 
            and personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/tours/medical-tourism-packages">View All Medical Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalTourism;