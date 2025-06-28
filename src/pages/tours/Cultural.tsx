import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const culturalSpots = [
  {
    title: 'Ephesus Ancient City',
    desc: 'Ephesus is one of the best-preserved ancient cities in the world, famous for its grand theatre, Library of Celsus, and Temple of Artemis.',
    location: 'Selçuk, İzmir',
    img: '/images/Ephesus-Ancient-City.png',
    detailPath: '/tours/cultural/ephesus-ancient-city',
  },
  {
    title: 'Göbekli Tepe',
    desc: "Göbekli Tepe is the world's oldest known temple complex, offering a unique glimpse into prehistoric civilization and spirituality.",
    location: 'Şanlıurfa',
    img: '/images/Gobekli-Tepe.png',
    detailPath: '/tours/cultural/gobekli-tepe',
  },
  {
    title: 'Topkapı Palace',
    desc: 'Topkapı Palace, the heart of the Ottoman Empire for centuries, showcases imperial collections, architecture, and breathtaking views of Istanbul.',
    location: 'Istanbul',
    img: '/images/Topkapi-Palace.png',
    detailPath: '/tours/cultural/topkapi-palace',
  },
];

const Cultural = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Cultural-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CULTURAL TOURS</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Cultural</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cultural Tours in Turkey</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore Turkey's rich cultural heritage with our curated tours. From ancient wonders to Ottoman splendor, discover the stories and sites that shaped civilization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {culturalSpots.map((spot, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={spot.img} alt={spot.title} className="object-cover w-full h-full" />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{spot.title}</div>
              <div className="text-gray-700 text-sm mb-2 text-center">{spot.desc}</div>
              <div className="text-xs text-gray-500 mb-4">{spot.location}</div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(spot.detailPath)}>Learn more</Button>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/contact-us')}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
        {/* SEO-friendly text */}
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto">
          <p>
            Discover the most fascinating cultural destinations in Turkey. Plan your journey, immerse yourself in history, and experience the vibrant traditions of Anatolia. Contact us for tailor-made cultural tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cultural; 