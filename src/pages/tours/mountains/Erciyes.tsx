import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherMountains = [
  {
    title: 'Mount Ararat',
    desc: 'Mount Ararat is the highest peak in Turkey, famous for its biblical significance and breathtaking views.',
    img: '/images/Mount-Ararat.png',
    path: '/tours/mountains/ararat',
  },
  {
    title: 'Mount Kaçkar',
    desc: 'Mount Kaçkar is known for its lush green landscapes, alpine lakes, and trekking routes in the Black Sea region.',
    img: '/images/Mount-Kackar.png',
    path: '/tours/mountains/kackar',
  },
];

const Erciyes = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Mountains-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mount Erciyes</h1>
          <div className="text-lg">Kayseri</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Mount Erciyes</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mount Erciyes Travel Guide</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mount Erciyes is an ancient stratovolcano and the highest mountain in Central Anatolia. It is a popular destination for skiing, mountaineering, and offers spectacular views year-round.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img src="/images/Mount-Erciyes.png" alt="Mount Erciyes" className="w-full md:w-1/2 rounded-xl shadow-lg object-cover" style={{ minHeight: 280 }} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Overview of Mount Erciyes</h3>
            <p className="text-gray-700 mb-4">
              Mount Erciyes is renowned for its ski resorts, challenging climbing routes, and panoramic views. The mountain is a favorite among winter sports enthusiasts and adventure seekers.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Highest peak in Central Anatolia (3,917 m)</li>
              <li>Famous for ski resorts and winter sports</li>
              <li>Popular for mountaineering and trekking</li>
              <li>Stunning views of the Anatolian plateau</li>
            </ul>
          </div>
        </div>
        {/* Discover Other Mountains */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Discover Other Mountains</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {otherMountains.map((mountain, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80">
                <img src={mountain.img} alt={mountain.title} className="w-full h-40 object-cover rounded mb-4" />
                <div className="font-bold text-lg mb-2 text-gray-900">{mountain.title}</div>
                <div className="text-gray-700 text-sm mb-4 text-center">{mountain.desc}</div>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(mountain.path)}>
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Section */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2">Ready to explore Mount Erciyes?</h4>
          <p className="mb-4 text-gray-700">Contact us to plan your mountain adventure in Turkey!</p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Erciyes; 