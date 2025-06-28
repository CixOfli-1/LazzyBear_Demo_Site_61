import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const beaches = [
  {
    title: 'Ölüdeniz Beach',
    desc: "Ölüdeniz is one of Turkey's most famous beaches, known for its crystal-clear turquoise sea and stunning natural beauty.",
    location: 'Fethiye, Muğla',
    img: '/images/oludeniz.png',
    detailPath: '/tours/beaches/oludeniz',
  },
  {
    title: 'Kaputaş Beach',
    desc: 'Kaputaş Beach is a small and impressive beach, famous for its turquoise color and location between steep cliffs.',
    location: 'Kaş, Antalya',
    img: '/images/kaputaj.png',
    detailPath: '/tours/beaches/kaputas',
  },
  {
    title: 'İztuzu Beach',
    desc: 'İztuzu Beach is a long, natural beach known as a nesting area for loggerhead sea turtles (Caretta caretta).',
    location: 'Dalyan, Muğla',
    img: '/images/iztuzu.png',
    detailPath: '/tours/beaches/iztuzu',
  },
];

const Beaches = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/beaches-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">BEACHES</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2">BEACHES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Turkey's Beaches</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Turkey is famous for its magnificent beaches along the Mediterranean and Aegean coasts. Each offers unique beauty and natural riches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {beaches.map((beach, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={beach.img} alt={beach.title} className="object-cover w-full h-full" />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{beach.title}</div>
              <div className="text-gray-700 text-sm mb-2 text-center">{beach.desc}</div>
              <div className="text-xs text-gray-500 mb-4">{beach.location}</div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(beach.detailPath)}>Learn more</Button>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/contact-us')}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
        {/* SEO-friendly text */}
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto">
          <p>
            Discover the most beautiful beaches in Turkey. Plan your holiday, enjoy the crystal-clear sea and golden sands. Contact us for tailor-made beach tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beaches; 