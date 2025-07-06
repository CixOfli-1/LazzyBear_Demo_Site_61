import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const eyeSurgerySubpages = [
  { title: 'Femto Lasik Laser', path: 'femto-lasik-laser' },
  { title: 'Refractive Surgery', path: 'refractive-surgery' },
  { title: 'Smile Laser', path: 'smile-laser' },
  { title: 'Trifocal Lens', path: 'trifocal-lens' },
];

const EyeSurgery = () => (
  <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6 uppercase">Eye Surgery</h1>
    <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
      We offer advanced technology and expert surgeons in eye surgery to help you achieve clear and healthy vision. Benefit from innovative treatments, personalized care, and a commitment to your eye health. See the world with confidence and comfort.
    </p>
    <div className="flex justify-center mb-10">
      <div className="w-[496px] h-[496px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/medical-services-images/landingpage-images/eye-surgery-images.png"
          alt="Eye Surgery"
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {eyeSurgerySubpages.map((item) => (
        <Link key={item.path} to={item.path} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <span className="text-blue-600">View Details</span>
        </Link>
      ))}
    </div>
    <Outlet />
  </div>
);

export default EyeSurgery; 