import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherVolcanoes = [
  {
    title: 'Erciyes Volcano',
    desc: 'Erciyes is an ancient stratovolcano and a popular destination for winter sports and mountaineering.',
    img: '/images/Erciyes-Volcano.png',
    path: '/tours/volcanoes/erciyes',
  },
  {
    title: 'Hasan Volcano',
    desc: 'Hasan Volcano is known for its scenic beauty and is a favorite among hikers and nature lovers.',
    img: '/images/Hasan-Volcano.png',
    path: '/tours/volcanoes/hasan',
  },
];

const Nemrut = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Volcanoes-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Nemrut Volcano</h1>
          <div className="text-lg">Bitlis</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Nemrut Volcano</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nemrut Volcano Travel Guide</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nemrut Volcano is one of Turkey's most famous volcanoes, featuring a large caldera, beautiful crater lakes, and unique geological formations. It is a paradise for hikers, nature lovers, and adventure seekers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img src="/images/Nemrut-Volcano.png" alt="Nemrut Volcano" className="w-full md:w-1/2 rounded-xl shadow-lg object-cover" style={{ minHeight: 280 }} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Overview of Nemrut Volcano</h3>
            <p className="text-gray-700 mb-4">
              Nemrut Volcano is renowned for its large caldera, stunning crater lakes, and panoramic views of Lake Van. The area is ideal for hiking, photography, and exploring unique volcanic landscapes.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Large caldera with beautiful crater lakes</li>
              <li>Popular for hiking and nature photography</li>
              <li>Rich in geological and historical significance</li>
              <li>Stunning views of Lake Van</li>
            </ul>
          </div>
        </div>
        {/* Discover Other Volcanoes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Discover Other Volcanoes</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {otherVolcanoes.map((volcano, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80">
                <img src={volcano.img} alt={volcano.title} className="w-full h-40 object-cover rounded mb-4" />
                <div className="font-bold text-lg mb-2 text-gray-900">{volcano.title}</div>
                <div className="text-gray-700 text-sm mb-4 text-center">{volcano.desc}</div>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(volcano.path)}>
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Section */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2">Ready to explore Nemrut Volcano?</h4>
          <p className="mb-4 text-gray-700">Contact us to plan your volcano adventure in Turkey!</p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nemrut; 