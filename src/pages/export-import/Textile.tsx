import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherProducts = [
  {
    title: 'Cereals',
    desc: 'Reliable export and import solutions for cereals and grains, meeting global standards for quality and safety.',
    img: '/images/Cereals.jpeg',
    path: '/export-import/cereals',
  },
  {
    title: 'Coffee',
    desc: 'Premium quality coffee beans sourced from select regions, ensuring rich flavor and aroma for global markets.',
    img: '/images/coffee.jpeg',
    path: '/export-import/coffee',
  },
  {
    title: 'Mezcal & Tequila',
    desc: 'Source authentic mezcal and tequila from renowned producers. We facilitate international trade for premium spirits.',
    img: '/images/Mezcal-Tequila.jpeg',
    path: '/export-import/mezcal-tequila',
  },
];

const Textile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/export-import-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Textile Export & Import</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="text-center mb-8">
        <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Textile</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Textile Trade Services</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Access high-quality textile products for the international fashion and industry markets. We connect you with reliable suppliers and buyers worldwide.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center" style={{width:496, height:496}}>
          <img src="/images/Textile.jpeg" alt="Textile" className="w-[400px] h-[400px] object-cover rounded-xl" />
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl font-bold mb-2">Overview of Textile Export & Import</h3>
          <p className="text-gray-700 mb-4">
            Our export/import solutions cover raw materials, fabrics, garments, and finished textile goods. We ensure quality assurance, trend analysis, and compliance with global standards.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-left mx-auto max-w-md">
            <li>Raw materials, fabrics, garments, and finished goods</li>
            <li>Quality assurance and trend analysis</li>
            <li>Compliance with global standards</li>
            <li>Innovative sourcing and competitive pricing</li>
            <li>Expert support in the global textile market</li>
          </ul>
        </div>
      </div>
      {/* Discover Other Products */}
      <h3 className="text-2xl font-bold text-center mb-6">Discover Other Products</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {otherProducts.map((product, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80">
            <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
            <div className="font-bold text-lg mb-2 text-gray-900">{product.title}</div>
            <div className="text-gray-700 text-sm mb-4 text-center">{product.desc}</div>
            <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(product.path)}>
              Learn more
            </Button>
          </div>
        ))}
      </div>
      {/* Contact Section */}
      <div className="text-center mt-12">
        <h4 className="text-xl font-semibold mb-2">Ready to trade in textiles?</h4>
        <p className="mb-4 text-gray-700">Contact us to optimize your textile export/import operations!</p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Textile; 