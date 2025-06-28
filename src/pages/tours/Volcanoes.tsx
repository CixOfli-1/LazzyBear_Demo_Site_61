import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const volcanoes = [
  {
    title: 'Nemrut Volcano',
    desc: "Nemrut Volcano is one of Turkey's most famous volcanoes, featuring a large caldera and beautiful crater lakes.",
    location: 'Bitlis',
    img: '/images/Nemrut-Volcano.png',
    detailPath: '/tours/volcanoes/nemrut',
  },
  {
    title: 'Erciyes Volcano',
    desc: 'Erciyes is an ancient stratovolcano and a popular destination for winter sports and mountaineering.',
    location: 'Kayseri',
    img: '/images/Erciyes-Volcano.png',
    detailPath: '/tours/volcanoes/erciyes',
  },
  {
    title: 'Hasan Volcano',
    desc: 'Hasan Volcano is known for its scenic beauty and is a favorite among hikers and nature lovers.',
    location: 'Aksaray',
    img: '/images/Hasan-Volcano.png',
    detailPath: '/tours/volcanoes/hasan',
  },
];

const Volcanoes = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Volcanoes-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Volcanoes</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Volcanoes</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Turkey's Volcanoes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Turkey is home to several impressive volcanoes, each offering unique landscapes, crater lakes, and adventure opportunities. Discover the volcanic wonders of the country.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {volcanoes.map((volcano, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={volcano.img} alt={volcano.title} className="object-cover w-full h-full" />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{volcano.title}</div>
              <div className="text-gray-700 text-sm mb-2 text-center">{volcano.desc}</div>
              <div className="text-xs text-gray-500 mb-4">{volcano.location}</div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(volcano.detailPath)}>Learn more</Button>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/contact-us')}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
        {/* SEO-friendly text */}
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto">
          <p>
            Discover the most fascinating volcanoes in Turkey. Plan your adventure, explore crater lakes and unique landscapes. Contact us for tailor-made volcano tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volcanoes; 