import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const otherBeaches = [
  {
    title: 'Ölüdeniz Beach',
    desc: "Ölüdeniz is one of Turkey's most famous beaches, known for its crystal-clear turquoise sea and stunning natural beauty.",
    img: '/images/oludeniz.png',
    path: '/tours/beaches/oludeniz',
  },
  {
    title: 'İztuzu Beach',
    desc: 'İztuzu Beach is a long, natural beach known as a nesting area for loggerhead sea turtles (Caretta caretta).',
    img: '/images/iztuzu.png',
    path: '/tours/beaches/iztuzu',
  },
];

const Kaputas = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/beaches-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">KAPUTAŞ BEACH</h1>
          <div className="text-lg">Kaş, Antalya</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="text-green-600 font-semibold tracking-widest mb-2 uppercase">Kaputaş</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kaputaş Beach Travel Guide</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kaputaş Beach is a small and impressive beach, famous for its turquoise color and location between steep cliffs. It is a hidden gem on the Mediterranean coast of Turkey.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img src="/images/kaputaj.png" alt="Kaputaş Beach" className="w-full md:w-1/2 rounded-xl shadow-lg object-cover" style={{ minHeight: 280 }} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Overview of Kaputaş</h3>
            <p className="text-gray-700 mb-4">
              Kaputaş Beach is renowned for its turquoise sea, golden sands, and dramatic setting between steep cliffs. The beach is accessible by a staircase and offers a unique, tranquil atmosphere.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Famous for its turquoise sea and dramatic setting</li>
              <li>Ideal for swimming and sunbathing</li>
              <li>Natural beauty and peaceful environment</li>
              <li>Close to Kaş and Kalkan towns</li>
            </ul>
          </div>
        </div>
        {/* Discover Other Beaches */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Discover Other Beaches</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {otherBeaches.map((beach, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-80">
                <img src={beach.img} alt={beach.title} className="w-full h-40 object-cover rounded mb-4" />
                <div className="font-bold text-lg mb-2 text-gray-900">{beach.title}</div>
                <div className="text-gray-700 text-sm mb-4 text-center">{beach.desc}</div>
                <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(beach.path)}>
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Section */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2">Ready to experience Kaputaş?</h4>
          <p className="mb-4 text-gray-700">Contact us to plan your dream beach holiday in Turkey!</p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/contact-us')}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kaputas; 