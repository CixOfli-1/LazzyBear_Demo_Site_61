import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Globe, ArrowRight, Shield } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Patient-Centered Care",
      description: "Every decision we make is focused on providing the best possible experience and outcomes for our patients."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication and transparent pricing with no hidden costs."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Excellence in Service",
      description: "We strive for excellence in every aspect of our service delivery, from medical care to travel experiences."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Standards",
      description: "We maintain international quality standards while providing personalized, culturally sensitive care."
    }
  ];

  const team = [
    {
      name: "Dr. Mehmet Özkan",
      role: "Medical Director",
      description: "20+ years of experience in international healthcare and medical tourism coordination."
    },
    {
      name: "Sarah Johnson",
      role: "International Relations Manager",
      description: "Specializes in patient coordination and cross-cultural healthcare communication."
    },
    {
      name: "Ahmet Yılmaz",
      role: "Travel & Tours Director",
      description: "Expert in Turkish tourism with extensive knowledge of cultural and historical sites."
    },
    {
      name: "Dr. Elena Petrov",
      role: "Patient Care Coordinator",
      description: "Ensures seamless patient experience from consultation through recovery."
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
              About LazzyBear Health & Travel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Your trusted partner in combining world-class healthcare with unforgettable 
              travel experiences in Turkey since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2009, LazzyBear Health & Travel began with a simple mission: 
                  to make world-class healthcare accessible to everyone while showcasing 
                  the beauty and culture of Turkey.
                </p>
                <p>
                  Over the years, we have grown from a small startup to a leading medical 
                  tourism facilitator, helping thousands of patients from around the world 
                  access high-quality medical care in Turkey's top hospitals and clinics.
                </p>
                <p>
                  Today, we are proud to offer comprehensive services that combine medical 
                  excellence with cultural exploration, creating life-changing experiences 
                  for our clients.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Partner Hospitals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  To provide accessible, high-quality healthcare services combined with 
                  enriching travel experiences, making Turkey a preferred destination 
                  for medical tourism and cultural exploration while ensuring every 
                  patient receives personalized, compassionate care.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  To be the leading bridge between international patients and Turkey's 
                  exceptional healthcare system, setting the standard for medical tourism 
                  excellence while promoting Turkey's rich cultural heritage and natural beauty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment 
              to providing exceptional service to every patient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated professionals bring together medical expertise, 
              cultural knowledge, and passion for exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Accreditations & Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">JCI Accredited Partners</h3>
              <p className="text-blue-100 text-sm">International healthcare standards</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">ISO Certified</h3>
              <p className="text-blue-100 text-sm">Quality management systems</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">TURSAB Licensed</h3>
              <p className="text-blue-100 text-sm">Official Turkish tourism authority</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Medical Tourism Certified</h3>
              <p className="text-blue-100 text-sm">Specialized healthcare travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have trusted us with 
            their health and travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-pastelPink text-white border-pastelPink hover:bg-white hover:text-pastelPink">
              <Link to="/medical-services/patient-testimonials">Read Patient Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;