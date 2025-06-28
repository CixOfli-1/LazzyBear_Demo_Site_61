import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherCulturalSpots = [
  {
    title: 'Ephesus Ancient City',
    desc: 'Ephesus is one of the best-preserved ancient cities in the world, famous for its grand theatre, Library of Celsus, and Temple of Artemis.',
    img: '/images/Ephesus-Ancient-City.png',
    path: '/tours/cultural/ephesus-ancient-city',
  },
  {
    title: 'Topkapı Palace',
    desc: 'Topkapı Palace, the heart of the Ottoman Empire for centuries, showcases imperial collections, architecture, and breathtaking views of Istanbul.',
    img: '/images/Topkapi-Palace.png',
    path: '/tours/cultural/topkapi-palace',
  },
];

const GobekliTepe = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Cultural-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Göbekli Tepe</h1>
          <div className="text-lg">Şanlıurfa</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="text-center mb-8">
        <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Göbekli Tepe</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Göbekli Tepe Travel Guide</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Göbekli Tepe is the world's oldest known temple complex, offering a unique glimpse into prehistoric civilization and spirituality. It is a UNESCO World Heritage Site and a must-see for history enthusiasts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center" style={{width:496, height:496}}>
          <img src="/images/Gobekli-Tepe.png" alt="Göbekli Tepe" className="w-[400px] h-[400px] object-cover rounded-xl" />
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl font-bold mb-2">Overview of Göbekli Tepe</h3>
          <p className="text-gray-700 mb-4">
            Dating back to the 10th millennium BC, Göbekli Tepe is considered the birthplace of religion and monumental architecture. Its massive stone pillars and carvings are a testament to early human ingenuity.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-left mx-auto max-w-md">
            <li>World's oldest known temple complex</li>
            <li>UNESCO World Heritage Site</li>
            <li>Massive T-shaped stone pillars</li>
            <li>Intricate animal carvings</li>
            <li>Revolutionized our understanding of prehistory</li>
          </ul>
        </div>
      </div>
      {/* Discover Other Cultural Spots */}
      <h3 className="text-2xl font-bold text-center mb-6">Discover Other Cultural Spots</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {otherCulturalSpots.map((spot, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80">
            <img src={spot.img} alt={spot.title} className="w-full h-40 object-cover rounded mb-4" />
            <div className="font-bold text-lg mb-2 text-gray-900">{spot.title}</div>
            <div className="text-gray-700 text-sm mb-4 text-center">{spot.desc}</div>
            <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(spot.path)}>
              Learn more
            </Button>
          </div>
        ))}
      </div>
      {/* Contact Section */}
      <div className="text-center mt-12">
        <h4 className="text-xl font-semibold mb-2">Ready to experience Göbekli Tepe?</h4>
        <p className="mb-4 text-gray-700">Contact us to plan your dream cultural tour in Turkey!</p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default GobekliTepe; 