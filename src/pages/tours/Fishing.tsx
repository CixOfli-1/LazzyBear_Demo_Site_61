import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fishingSpots = [
  {
    title: 'Bodrum',
    desc: 'Bodrum is a popular destination for fishing, offering crystal-clear waters and a variety of fish species in the Aegean Sea.',
    location: 'Muğla',
    img: '/images/Bodrum-fishing.png',
    detailPath: '/tours/fishing/bodrum',
  },
  {
    title: 'Çeşme',
    desc: 'Çeşme is known for its beautiful coastline and excellent fishing opportunities, especially for bluefish and sea bream.',
    location: 'İzmir',
    img: '/images/cesme-fishing.png',
    detailPath: '/tours/fishing/cesme',
  },
  {
    title: 'Göcek',
    desc: 'Göcek is famous for its calm bays and rich marine life, making it a favorite spot for both amateur and professional anglers.',
    location: 'Muğla',
    img: '/images/gocek-fishing.png',
    detailPath: '/tours/fishing/gocek',
  },
];

const Fishing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/fishing-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Fishing</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Fishing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fishing in Turkey</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Turkey offers a variety of fishing experiences along its beautiful coasts and bays. From the Aegean to the Mediterranean, discover the best fishing spots for your next adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {fishingSpots.map((spot, i) => (
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
            Discover the best fishing spots in Turkey. Whether you are a beginner or a pro, our destinations offer unforgettable fishing adventures. Book your fishing trip with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fishing; 