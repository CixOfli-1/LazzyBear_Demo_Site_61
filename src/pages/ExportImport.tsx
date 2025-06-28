import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Droplet, Wheat, Shirt } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExportImport = () => {
  const products = [
    {
      img: '/images/coffee.jpeg',
      title: 'Coffee',
      desc: 'Premium quality coffee beans sourced from select regions, ensuring rich flavor and aroma for global markets.',
      detailPath: '/export-import/coffee',
    },
    {
      img: '/images/Mezcal-Tequila.jpeg',
      title: 'Mezcal & Tequila',
      desc: 'Authentic mezcal and tequila, directly imported from renowned producers for international distribution.',
      detailPath: '/export-import/mezcal-tequila',
    },
    {
      img: '/images/Cereals.jpeg',
      title: 'Cereals',
      desc: 'High-standard cereals and grains, exported/imported with full compliance to global quality regulations.',
      detailPath: '/export-import/cereals',
    },
    {
      img: '/images/Textile.jpeg',
      title: 'Textile',
      desc: 'Superior textile products, from raw materials to finished goods, for the international fashion and industry markets.',
      detailPath: '/export-import/textile',
    }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/export-import-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Export / Import Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Unlock global trade opportunities with our expert export and import services for coffee, mezcal & tequila, cereals, and textile products.
          </p>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Export / Import Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We connect you to the world's finest products and reliable supply chains, ensuring quality, compliance, and timely delivery for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow bg-white/90 border-2 border-pastelPink">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img src={product.img} alt={product.title} className="w-20 h-20 object-cover rounded-lg shadow" />
                  </div>
                  <CardTitle className="text-xl text-turquoise">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-700">{product.desc}</CardDescription>
                  <div className="flex flex-col gap-2 items-center mt-4">
                    <Button asChild size="sm" className="bg-green-500 text-white hover:bg-green-600 w-32">
                      <Link to={product.detailPath}>Learn more</Link>
                    </Button>
                    <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-700 w-32">
                      <Link to="/contact-us">Contact us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Uyumlu Açıklama */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Us for Your Export & Import Needs?</h2>
          <p className="text-gray-700 text-lg mb-4">
            As a trusted partner in international trade, we offer comprehensive export and import solutions tailored to your business. Our expertise covers sourcing, quality control, logistics, and regulatory compliance for coffee, mezcal, tequila, cereals, and textile products. With a global network and a commitment to excellence, we ensure your products reach their destination safely, efficiently, and on time. Whether you are looking to expand your market, secure reliable suppliers, or streamline your supply chain, our team is ready to support your growth in the global marketplace.
          </p>
          <p className="text-gray-700 text-base">
            Partner with us for seamless trade operations, competitive pricing, and personalized service. From Turkey to the world, we connect you with opportunity.
          </p>
        </div>
      </section>

      {/* Which is your need? CTA */}
      <section className="py-16 bg-gradient-to-r from-pastelPink via-pastelYellow to-pastelOrange text-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center rounded-2xl shadow-lg py-12">
          <h2 className="text-3xl font-bold mb-4">Which is your need?</h2>
          <p className="text-lg mb-8">Let us know your requirements and we'll help you find the best export/import solution for your business.</p>
          <Button asChild size="lg" className="bg-turquoise text-white hover:bg-pastelPink">
            <Link to="/contact-us">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExportImport;
