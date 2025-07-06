import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const hairTransplantSubpages = [
  { title: 'Stem Cell Hair Transplant In Turkey', path: 'stem-cell-hair-transplant' },
  { title: 'Sapphire Fue Hair Transplant', path: 'sapphire-fue-hair-transplant' },
  { title: 'Fue Hair Transplant', path: 'fue-hair-transplant' },
  { title: 'Direct Hair Implant', path: 'direct-hair-implant' },
  { title: 'Unshaven Hair Transplant', path: 'unshaven-hair-transplant' },
  { title: 'Female Hair Transplant', path: 'female-hair-transplant' },
  { title: 'Eyebrow Transplant', path: 'eyebrow-transplant' },
  { title: 'Beard Transplant', path: 'beard-transplant' },
  { title: 'Hair Graft Calculator', path: 'hair-graft-calculator' },
  { title: 'Ozone Therapy for Hair', path: 'ozone-therapy-for-hair' },
];

const HairTransplant = () => (
  <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6 uppercase">Hair Transplant</h1>
    <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
      We offer the most advanced and effective hair transplant techniques in Turkey. Our expert team is dedicated to providing you with natural-looking, permanent results in a safe and comfortable environment. Discover the best solutions for hair restoration and regain your confidence with us.
    </p>
    <div className="flex justify-center mb-10">
      <div className="w-[496px] h-[496px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/medical-services-images/landingpage-images/hair-transplant-image.png"
          alt="Hair Transplant"
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {hairTransplantSubpages.map((item) => (
        <Link key={item.path} to={item.path} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <span className="text-blue-600">View Details</span>
        </Link>
      ))}
    </div>
    <Outlet />
  </div>
);

export default HairTransplant; 