import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const mountains = [
  {
    title: 'Mount Ararat',
    desc: "Mount Ararat is the highest peak in Turkey, famous for its biblical significance and breathtaking views.",
    location: 'Ağrı',
    img: '/images/Mount-Ararat.png',
    detailPath: '/tours/mountains/ararat',
  },
  {
    title: 'Mount Erciyes',
    desc: 'Mount Erciyes is a popular destination for skiing and mountaineering, located in Central Anatolia.',
    location: 'Kayseri',
    img: '/images/Mount-Erciyes.png',
    detailPath: '/tours/mountains/erciyes',
  },
  {
    title: 'Mount Kaçkar',
    desc: 'Mount Kaçkar is known for its lush green landscapes, alpine lakes, and trekking routes in the Black Sea region.',
    location: 'Rize',
    img: '/images/Mount-Kackar.png',
    detailPath: '/tours/mountains/kackar',
  },
];

const Mountains = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Mountains-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mountains</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Mountains</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Turkey's Majestic Mountains</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Turkey is home to impressive mountain ranges, offering adventure, hiking, and breathtaking scenery. Each mountain has its own unique ecosystem and spectacular views.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {mountains.map((mountain, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={mountain.img} alt={mountain.title} className="object-cover w-full h-full" />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{mountain.title}</div>
              <div className="text-gray-700 text-sm mb-2 text-center">{mountain.desc}</div>
              <div className="text-xs text-gray-500 mb-4">{mountain.location}</div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(mountain.detailPath)}>Learn more</Button>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/contact-us')}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
        {/* SEO-friendly text */}
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto">
          <p>
            Discover the most beautiful mountains in Turkey. Plan your adventure, enjoy breathtaking views and unique nature. Contact us for tailor-made mountain tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mountains; 