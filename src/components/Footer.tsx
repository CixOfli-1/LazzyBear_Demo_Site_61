import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/LazzyBear-Logo.png"
                alt="LazzyBear Logo"
                className="w-10 h-10 object-contain rounded-lg shadow bg-white"
              />
              <span className="text-xl font-bold">LazzyBear</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for health and travel experiences. Combining world-class medical services with unforgettable travel adventures.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Istanbul, Turkey</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+90 212 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@lazzybear.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Clock className="w-4 h-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/medical-services" className="text-gray-300 hover:text-white transition-colors">Medical Services</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Tours</Link></li>
              <li><Link to="/export-import" className="text-gray-300 hover:text-white transition-colors">Export/Import</Link></li>
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Medical Services</h3>
            <ul className="space-y-2">
              <li><Link to="/medical-services/hair-transplant" className="text-gray-300 hover:text-white transition-colors">Hair Transplant</Link></li>
              <li><Link to="/medical-services/dental-treatment" className="text-gray-300 hover:text-white transition-colors">Dental Treatment</Link></li>
              <li><Link to="/medical-services/plastic-surgery" className="text-gray-300 hover:text-white transition-colors">Plastic Surgery</Link></li>
              <li><Link to="/medical-services/eye-surgery" className="text-gray-300 hover:text-white transition-colors">Eye Surgery</Link></li>
              <li><Link to="/medical-services/before-after-care" className="text-gray-300 hover:text-white transition-colors">Before & After Care</Link></li>
              <li><Link to="/medical-services/our-partners" className="text-gray-300 hover:text-white transition-colors">Our Partner Hospitals & Clinics</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/tours/beaches" className="text-gray-300 hover:text-white transition-colors">Beaches</Link></li>
              <li><Link to="/tours/mountains" className="text-gray-300 hover:text-white transition-colors">Mountains</Link></li>
              <li><Link to="/tours/volcanoes" className="text-gray-300 hover:text-white transition-colors">Volcanoes</Link></li>
              <li><Link to="/tours/cultural" className="text-gray-300 hover:text-white transition-colors">Cultural Tours</Link></li>
              <li><Link to="/tours/fishing" className="text-gray-300 hover:text-white transition-colors">Fishing Tours</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 LazzyBear Health & Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
