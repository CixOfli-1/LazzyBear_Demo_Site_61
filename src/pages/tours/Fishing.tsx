import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CityDistrictFilter from '@/components/CityDistrictFilter';

const fishingSpots = [
  {
    title: 'Bodrum',
    desc: 'Bodrum is a popular destination for fishing, offering crystal-clear waters and a variety of fish species in the Aegean Sea.',
    city: 'Muğla',
    district: 'Bodrum',
    img: '/images/Bodrum-fishing.png',
    detailPath: '/tours/fishing/bodrum',
  },
  {
    title: 'Çeşme',
    desc: 'Çeşme is known for its beautiful coastline and excellent fishing opportunities, especially for bluefish and sea bream.',
    city: 'İzmir',
    district: 'Çeşme',
    img: '/images/cesme-fishing.png',
    detailPath: '/tours/fishing/cesme',
  },
  {
    title: 'Göcek',
    desc: 'Göcek is famous for its calm bays and rich marine life, making it a favorite spot for both amateur and professional anglers.',
    city: 'Muğla',
    district: 'Fethiye',
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
        <CityDistrictFilter
          data={fishingSpots}
          categoryTitle="Fishing in Turkey"
          categoryDescription="Turkey offers a variety of fishing experiences along its beautiful coasts and bays. From the Aegean to the Mediterranean, discover the best fishing spots for your next adventure."
          onCardClick={(detailPath) => navigate(detailPath)}
          onBookNow={() => navigate('/contact-us')}
          ButtonComponent={Button}
        />
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