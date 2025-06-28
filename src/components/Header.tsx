import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (parentPath: string) => location.pathname.startsWith(parentPath);

  const navigationItems = [
    {
      name: 'Tours',
      path: '/tours',
      children: [
        { name: 'Beaches', path: '/tours/beaches' },
        { name: 'Mountains', path: '/tours/mountains' },
        { name: 'Volcanoes', path: '/tours/volcanoes' },
        { name: 'Fishing', path: '/tours/fishing' },
        { name: 'Cultural', path: '/tours/cultural' },
      ]
    },
    {
      name: 'Medical Services',
      path: '/medical-services',
      children: [
        {
          name: 'Specialized Treatments',
          path: '/medical-services/specialized-treatments',
          children: [
            { name: 'Oncology', path: '/medical-services/specialized-treatments/oncology' },
            { name: 'Cardiology', path: '/medical-services/specialized-treatments/cardiology' },
            { name: 'Orthopedics', path: '/medical-services/specialized-treatments/orthopedics' },
            { name: 'Neurology', path: '/medical-services/specialized-treatments/neurology' },
            { name: 'Fertility Treatments', path: '/medical-services/specialized-treatments/fertility-treatments' },
            { name: 'Check-up Programs', path: '/medical-services/specialized-treatments/check-up-programs' },
          ]
        },
        { name: 'Our Partner Hospitals & Clinics', path: '/medical-services/our-partners' },
        { name: 'Medical Second Opinion', path: '/medical-services/medical-second-opinion' },
        { name: 'Before & After Care', path: '/medical-services/before-after-care' },
        { name: 'Patient Testimonials', path: '/medical-services/patient-testimonials' },
      ]
    },
    {
      name: 'Export/Import',
      path: '/export-import',
      children: [
        { name: 'Coffee', path: '/export-import/coffee' },
        { name: 'Mezcal & Tequila', path: '/export-import/mezcal-tequila' },
        { name: 'Cereals', path: '/export-import/cereals' },
        { name: 'Textile', path: '/export-import/textile' },
      ]
    },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/LazzyBear-Logo.png"
              alt="LazzyBear Logo"
              className="w-10 h-10 object-contain rounded-lg shadow"
            />
            <span className="text-xl font-bold text-gray-900">LazzyBear Health & Travel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path) || isParentActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div
                    className="absolute left-0 top-full w-80 bg-white rounded-lg shadow-xl border z-50"
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <div key={child.name} className="relative group/child">
                          <Link
                            to={child.path}
                            className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                              isActive(child.path) || isParentActive(child.path)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                          >
                            <span>{child.name}</span>
                            {child.children && <ChevronDown className="w-4 h-4 rotate-[-90deg]" />}
                          </Link>
                          {/* Sub-dropdown */}
                          {child.children && (
                            <div className="absolute left-full top-0 ml-1 w-72 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200">
                              <div className="py-2">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.name}
                                    to={subChild.path}
                                    className={`block px-4 py-2 text-sm transition-colors ${
                                      isActive(subChild.path)
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                  >
                                    {subChild.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path) || isParentActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.name}>
                          <Link
                            to={child.path}
                            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                              isActive(child.path) || isParentActive(child.path)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                          {child.children && (
                            <div className="ml-4 space-y-1">
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.name}
                                  to={subChild.path}
                                  className={`block px-3 py-2 rounded-md text-xs transition-colors ${
                                    isActive(subChild.path)
                                      ? 'text-blue-600 bg-blue-50'
                                      : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subChild.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;