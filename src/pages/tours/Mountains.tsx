import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CityDistrictFilter from '@/components/CityDistrictFilter';

const mountains = [
  {
    title: 'Mount Ararat',
    desc: "Mount Ararat is the highest peak in Turkey, famous for its biblical significance and breathtaking views.",
    city: 'Ağrı',
    district: '',
    img: '/images/Mount-Ararat.png',
    detailPath: '/tours/mountains/ararat',
  },
  {
    title: 'Mount Erciyes',
    desc: 'Mount Erciyes is a popular destination for skiing and mountaineering, located in Central Anatolia.',
    city: 'Kayseri',
    district: '',
    img: '/images/Mount-Erciyes.png',
    detailPath: '/tours/mountains/erciyes',
  },
  {
    title: 'Mount Kaçkar',
    desc: 'Mount Kaçkar is known for its lush green landscapes, alpine lakes, and trekking routes in the Black Sea region.',
    city: 'Rize',
    district: '',
    img: '/images/Mount-Kackar.png',
    detailPath: '/tours/mountains/kackar',
  },
];

const Mountains = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Mountains-herobanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">MOUNTAINS</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <CityDistrictFilter
          data={mountains}
          categoryTitle="Turkey's Majestic Mountains"
          categoryDescription="Turkey is home to impressive mountain ranges, offering adventure, hiking, and breathtaking scenery. Each mountain has its own unique ecosystem and spectacular views."
          onCardClick={(detailPath) => navigate(detailPath)}
          onBookNow={() => navigate('/contact-us')}
          ButtonComponent={Button}
        />
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