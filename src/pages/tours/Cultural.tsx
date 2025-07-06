import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CityDistrictFilter from '@/components/CityDistrictFilter';

const culturalSpots = [
  {
    title: 'Ephesus Ancient City',
    desc: 'Ephesus is one of the best-preserved ancient cities in the world, famous for its grand theatre, Library of Celsus, and Temple of Artemis.',
    city: 'İzmir',
    district: 'Selçuk',
    img: '/images/Ephesus-Ancient-City.png',
    detailPath: '/tours/cultural/ephesus-ancient-city',
  },
  {
    title: 'Göbekli Tepe',
    desc: "Göbekli Tepe is the world's oldest known temple complex, offering a unique glimpse into prehistoric civilization and spirituality.",
    city: 'Şanlıurfa',
    district: '',
    img: '/images/Gobekli-Tepe.png',
    detailPath: '/tours/cultural/gobekli-tepe',
  },
  {
    title: 'Topkapı Palace',
    desc: 'Topkapı Palace, the heart of the Ottoman Empire for centuries, showcases imperial collections, architecture, and breathtaking views of Istanbul.',
    city: 'Istanbul',
    district: '',
    img: '/images/Topkapi-Palace.png',
    detailPath: '/tours/cultural/topkapi-palace',
  },
];

const Cultural = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Cultural-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">CULTURAL TOURS</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <CityDistrictFilter
          data={culturalSpots}
          categoryTitle="Cultural Tours in Turkey"
          categoryDescription="Explore Turkey's rich cultural heritage with our curated tours. From ancient wonders to Ottoman splendor, discover the stories and sites that shaped civilization."
          onCardClick={(detailPath) => navigate(detailPath)}
          onBookNow={() => navigate('/contact-us')}
          ButtonComponent={Button}
        />
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