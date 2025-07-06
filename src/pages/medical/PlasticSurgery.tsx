import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const plasticSurgerySubpages = [
  { title: 'Tummy Tuck (Abdominoplasty)', path: 'tummy-tuck' },
  { title: 'Liposuction', path: 'liposuction' },
  { title: 'Rhinoplasty (Nose Job)', path: 'rhinoplasty' },
  { title: 'Breast Augmentation', path: 'breast-augmentation' },
  { title: 'Breast Lift', path: 'breast-lift' },
  { title: 'Facelift', path: 'facelift' },
  { title: 'Otoplasty (Ear Surgery)', path: 'otoplasty' },
  { title: 'Lip Augmentation', path: 'lip-augmentation' },
];

const PlasticSurgery = () => (
  <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6 uppercase">Plastic Surgery</h1>
    <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
      We provide the latest techniques in aesthetic and plastic surgery to deliver natural and safe results. Our experienced surgeons are committed to helping you achieve your beauty goals with personalized care and advanced procedures. Discover a new you with confidence and peace of mind.
    </p>
    <div className="flex justify-center mb-10">
      <div className="w-[496px] h-[496px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/medical-services-images/landingpage-images/plastic-surgery-images.png"
          alt="Plastic Surgery"
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {plasticSurgerySubpages.map((item) => (
        <Link key={item.path} to={item.path} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <span className="text-blue-600">View Details</span>
        </Link>
      ))}
    </div>
    <Outlet />
  </div>
);

export default PlasticSurgery; 