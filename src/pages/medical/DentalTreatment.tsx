import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const dentalSubpages = [
  { title: 'Dental Implants', path: 'dental-implants' },
  { title: 'Dental Laser', path: 'dental-laser' },
  { title: 'Hollywood Smile', path: 'hollywood-smile' },
  { title: 'Teeth Whitening', path: 'teeth-whitening' },
  { title: 'Endodontic', path: 'endodontic' },
  { title: 'Zirconium', path: 'zirconium' },
  { title: 'Periodontology', path: 'periodontology' },
  { title: 'Orthodontics', path: 'orthodontics' },
];

const DentalTreatment = () => (
  <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6 uppercase">Dental Treatment</h1>
    <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
      We offer healthy smiles with the latest technologies and expert dentists in Turkey. Experience world-class dental care, advanced treatment options, and personalized solutions for your oral health. Let us help you achieve the confident, beautiful smile you deserve.
    </p>
    <div className="flex justify-center mb-10">
      <div className="w-[496px] h-[496px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/medical-services-images/landingpage-images/dental-treatment-images.png"
          alt="Dental Treatment"
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dentalSubpages.map((item) => (
        <Link key={item.path} to={item.path} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <span className="text-blue-600">View Details</span>
        </Link>
      ))}
    </div>
    <Outlet />
  </div>
);

export default DentalTreatment; 