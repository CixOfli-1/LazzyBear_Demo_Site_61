import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityDistrictFilter from '@/components/CityDistrictFilter';
import { Button } from '@/components/ui/button';

const beaches = [
  {
    title: 'Ölüdeniz Beach',
    desc: "Ölüdeniz is one of Turkey's most famous beaches, known for its crystal-clear turquoise sea and stunning natural beauty.",
    city: 'Muğla',
    district: 'Fethiye',
    img: '/images/oludeniz.png',
    detailPath: '/tours/beaches/oludeniz',
  },
  {
    title: 'Kaputaş Beach',
    desc: 'Kaputaş Beach is a small and impressive beach, famous for its turquoise color and location between steep cliffs.',
    city: 'Antalya',
    district: 'Kaş',
    img: '/images/kaputaj.png',
    detailPath: '/tours/beaches/kaputas',
  },
  {
    title: 'İztuzu Beach',
    desc: 'İztuzu Beach is a long, natural beach known as a nesting area for loggerhead sea turtles (Caretta caretta).',
    city: 'Muğla',
    district: 'Dalyan',
    img: '/images/iztuzu.png',
    detailPath: '/tours/beaches/iztuzu',
  },
];

const Beaches = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/beaches-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">BEACHES</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <CityDistrictFilter
          data={beaches}
          categoryTitle="Turkey's Beaches"
          categoryDescription="Turkey is famous for its magnificent beaches along the Mediterranean and Aegean coasts. Each offers unique beauty and natural riches."
          onCardClick={(detailPath) => navigate(detailPath)}
          onBookNow={() => navigate('/contact-us')}
          ButtonComponent={Button}
        />
        {/* SEO-friendly text */}
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto mt-8">
          <p>
            Discover the most beautiful beaches in Turkey. Plan your holiday, enjoy the crystal-clear sea and golden sands. Contact us for tailor-made beach tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beaches; 