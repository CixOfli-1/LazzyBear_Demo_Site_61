import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CityDistrictFilter from '@/components/CityDistrictFilter';

const volcanoes = [
  {
    title: 'Nemrut Volcano',
    desc: "Nemrut Volcano is one of Turkey's most famous volcanoes, featuring a large caldera and beautiful crater lakes.",
    city: 'Bitlis',
    district: '',
    img: '/images/Nemrut-Volcano.png',
    detailPath: '/tours/volcanoes/nemrut',
  },
  {
    title: 'Erciyes Volcano',
    desc: 'Erciyes is an ancient stratovolcano and a popular destination for winter sports and mountaineering.',
    city: 'Kayseri',
    district: '',
    img: '/images/Erciyes-Volcano.png',
    detailPath: '/tours/volcanoes/erciyes',
  },
  {
    title: 'Hasan Volcano',
    desc: 'Hasan Volcano is known for its scenic beauty and is a favorite among hikers and nature lovers.',
    city: 'Aksaray',
    district: '',
    img: '/images/Hasan-Volcano.png',
    detailPath: '/tours/volcanoes/hasan',
  },
];

const Volcanoes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Volcanoes-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">VOLCANOES</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <CityDistrictFilter
          data={volcanoes}
          categoryTitle="Turkey's Volcanoes"
          categoryDescription="Turkey is home to several impressive volcanoes, each offering unique landscapes, crater lakes, and adventure opportunities. Discover the volcanic wonders of the country."
          onCardClick={(detailPath) => navigate(detailPath)}
          onBookNow={() => navigate('/contact-us')}
          ButtonComponent={Button}
        />
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