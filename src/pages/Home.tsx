import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Heart, Globe, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Medical Tourism",
      description: "World-class healthcare combined with exceptional travel experiences.",
      link: "/tours/medical-tourism-packages"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Cultural Tours",
      description: "Discover Turkey's rich history and vibrant culture through our guided tours.",
      link: "/tours/cultural-leisure-tours"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Medical Services",
      description: "Comprehensive healthcare services with internationally accredited hospitals.",
      link: "/medical-services"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Export/Import",
      description: "Medical equipment and pharmaceutical products trade solutions.",
      link: "/export-import"
    }
  ];

  const features = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Award-Winning Service",
      description: "Recognized excellence in medical tourism and travel services"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Fully Insured",
      description: "Complete insurance coverage for peace of mind"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-gray-900 flex items-center justify-center min-h-[450px] md:min-h-[600px]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url(/images/hero-banner-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Your Gateway to
            <span className="block text-turquoise">Health & Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 drop-shadow">
            Experience world-class medical care and unforgettable travel adventures in Turkey. 
            Your health and happiness are our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-turquoise text-white hover:bg-pastelPink">
              <Link to="/tours/medical-tourism-packages">
                Explore Medical Tourism
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
              <Link to="/tours/cultural-leisure-tours">
                Discover Cultural Tours
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pastelOrange via-pastelPink to-pastelPurple opacity-60 pointer-events-none"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-pastelYellow/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From comprehensive medical care to enriching cultural experiences, 
              we offer a complete range of services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 border-2 border-pastelPink">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {React.cloneElement(service.icon, { className: 'w-8 h-8', style: { color: '#2ec4c6' } })}
                  </div>
                  <CardTitle className="text-xl text-turquoise">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-700">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LazzyBear?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, care, and excellence to deliver unmatched experiences 
              in health and travel services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Tour Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">
              What Our <span className="text-pastelPink">Patients</span> Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real stories from real people who experienced exceptional care with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <div className="font-bold text-lg mb-1">Sarah Johnson</div>
              <div className="text-turquoise text-sm mb-2">🇺🇸 USA • <span className="underline">Dental Tourism</span></div>
              <div className="italic text-gray-700">"Amazing experience! The medical care was top-notch and the cultural tours were unforgettable."</div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <div className="font-bold text-lg mb-1">Michael Chen</div>
              <div className="text-turquoise text-sm mb-2">🇨🇦 Canada • <span className="underline">Hair Transplant</span></div>
              <div className="italic text-gray-700">"Professional service from start to finish. Turkey exceeded all my expectations."</div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <div className="font-bold text-lg mb-1">Emma Wilson</div>
              <div className="text-turquoise text-sm mb-2">🇬🇧 UK • <span className="underline">Wellness Retreat</span></div>
              <div className="italic text-gray-700">"Perfect combination of health and travel. Highly recommend LazzyBear!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to plan your personalized health and travel experience. 
            Our expert team is here to make your dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact-us">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-pastelPink text-white border-pastelPink hover:bg-white hover:text-pastelPink">
              <Link to="/about-us">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
