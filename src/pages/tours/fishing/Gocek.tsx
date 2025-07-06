import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherFishingSpots = [
  {
    title: 'Bodrum',
    desc: 'Bodrum is a popular destination for fishing, offering crystal-clear waters and a variety of fish species in the Aegean Sea.',
    img: '/images/Bodrum-fishing.png',
    path: '/tours/fishing/bodrum',
  },
  {
    title: 'Çeşme',
    desc: 'Çeşme is known for its beautiful coastline and excellent fishing opportunities, especially for bluefish and sea bream.',
    img: '/images/cesme-fishing.png',
    path: '/tours/fishing/cesme',
  },
];

const Gocek = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/fishing-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">GÖCEK</h1>
          <div className="text-lg">Muğla</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Göcek</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Göcek Fishing Guide</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Göcek is famous for its calm bays and rich marine life, making it a favorite spot for both amateur and professional anglers. The region offers a peaceful fishing experience surrounded by natural beauty.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img src="/images/gocek-fishing.png" alt="Göcek" className="w-full md:w-1/2 rounded-xl shadow-lg object-cover" style={{ minHeight: 280 }} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Overview of Göcek Fishing</h3>
            <p className="text-gray-700 mb-4">
              Göcek is well-known for its calm waters, abundant fish species, and beautiful natural surroundings. It is ideal for boat fishing, yachting, and enjoying the tranquil bays.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Calm bays and rich marine life</li>
              <li>Ideal for boat fishing and yachting</li>
              <li>Popular among both amateurs and professionals</li>
              <li>Stunning natural scenery</li>
            </ul>
          </div>
        </div>
        {/* Discover Other Fishing Spots */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Discover Other Fishing Spots</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {otherFishingSpots.map((spot, i) => (
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
        </div>
        {/* Contact Section */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2">Ready for a fishing adventure in Göcek?</h4>
          <p className="mb-4 text-gray-700">Contact us to plan your fishing trip in Turkey!</p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gocek; 