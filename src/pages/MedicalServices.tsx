import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Shield, Star, ArrowRight, Award } from 'lucide-react';

const MedicalServices = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Specialized Treatments",
      description: "World-class medical treatments across multiple specialties with cutting-edge technology.",
      specialties: ["Oncology", "Cardiology", "Orthopedics", "Neurology", "Fertility", "Check-ups"],
      link: "/medical-services/specialized-treatments"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Partner Hospitals & Clinics",
      description: "Access to Turkey's leading medical institutions with international accreditations.",
      specialties: ["JCI Accredited", "International Standards", "Expert Physicians", "Modern Facilities"],
      link: "/medical-services/our-partners"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Medical Second Opinion",
      description: "Get expert second opinions from Turkey's leading specialists for informed decisions.",
      specialties: ["Expert Consultation", "Detailed Analysis", "Treatment Options", "Remote Consultation"],
      link: "/medical-services/medical-second-opinion"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "Before & After Care",
      description: "Comprehensive care support throughout your medical journey in Turkey.",
      specialties: ["Pre-treatment Planning", "Post-treatment Support", "Recovery Monitoring", "Follow-up Care"],
      link: "/medical-services/before-after-care"
    }
  ];

  const stats = [
    { number: "50+", label: "Partner Hospitals" },
    { number: "200+", label: "Specialist Doctors" },
    { number: "15+", label: "Medical Specialties" },
    { number: "98%", label: "Patient Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              World-Class Medical Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Access Turkey's leading healthcare providers and receive exceptional medical care 
              with international standards at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-turquoise text-white hover:bg-pastelPink">
                <Link to="/medical-services/specialized-treatments">
                  View Treatments
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-pastelPink text-white border-pastelPink hover:bg-white hover:text-pastelPink">
                <Link to="/contact-us">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet your medical needs 
              with the highest standards of care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-3 h-3 text-blue-500 mr-2" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Healthcare Excellence by Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of patients worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Medical Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">International Standards</h3>
              <p className="text-gray-600">JCI accredited hospitals with world-class facilities and international quality standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Physicians</h3>
              <p className="text-gray-600">Highly qualified doctors with international training and extensive experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">Full-service medical tourism with complete support from consultation to recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Link */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Read real stories from patients who have experienced exceptional medical care through our services.
          </p>
          <Button asChild size="lg">
            <Link to="/medical-services/patient-testimonials">
              Read Patient Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Medical Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you access 
            world-class medical care in Turkey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-turquoise text-white hover:bg-pastelPink">
              <Link to="/contact-us">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-pastelPink text-white border-pastelPink hover:bg-white hover:text-pastelPink">
              <Link to="/medical-services/medical-second-opinion">Get Second Opinion</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalServices;
