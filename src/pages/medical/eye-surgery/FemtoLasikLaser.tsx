import React from 'react';

const eyeSurgeryServices = [
  { name: 'Femto Lasik Laser', link: '/medical-services/eye-surgery/femto-lasik-laser' },
  { name: 'Refractive Surgery', link: '/medical-services/eye-surgery/refractive-surgery' },
  { name: 'Smile Laser', link: '/medical-services/eye-surgery/smile-laser' },
  { name: 'Trifocal Lens', link: '/medical-services/eye-surgery/trifocal-lens' },
];

const FemtoLasikLaser = () => (
  <div className="bg-[#f7f9fc] min-h-screen pb-12">
    {/* Hero Banner - Beaches style */}
    <div className="relative h-64 md:h-80 w-full flex items-center justify-center mb-8" style={{ backgroundImage: 'url(/images/hero-placeholder.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* TODO: Replace /images/hero-placeholder.png with your actual hero image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest">FEMTO LASIK LASER</h1>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
      {/* Left: Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Advanced Femto Lasik Laser Solutions</h2>
        <p className="text-gray-700 mb-4">Femto Lasik Laser is a cutting-edge vision correction procedure that uses femtosecond laser technology for precise and safe results. It is ideal for patients seeking freedom from glasses and contact lenses, offering a blade-free, all-laser experience with rapid recovery.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 min-w-[220px] h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-400 text-2xl">[Hero Banner Image]</span>
          </div>
          <div className="flex-1 min-w-[220px] h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-400 text-2xl">[Image 2]</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 mt-8">What We Offer Under This Service</h3>
        <p className="text-gray-700 mb-4">Our Femto Lasik Laser service includes a comprehensive approach to vision correction, ensuring safety, comfort, and excellent outcomes:</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-1 mb-8">
          <li>Personalized consultation and eye analysis by expert ophthalmologists.</li>
          <li>Blade-free, all-laser procedure for maximum safety.</li>
          <li>Quick recovery and minimal discomfort.</li>
          <li>Advanced technology for high precision and visual clarity.</li>
          <li>Comprehensive aftercare and follow-up support.</li>
        </ol>
      </div>
      {/* Right: Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
        {/* Top Services */}
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <h4 className="font-bold text-lg mb-4 border-b pb-2 text-blue-700">Top Services</h4>
          <ul className="space-y-2">
            {eyeSurgeryServices.map((service) => (
              <li key={service.link}>
                <a href={service.link} className={`text-blue-700 hover:underline ${service.name === 'Femto Lasik Laser' ? 'font-semibold' : ''}`}>{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="font-bold text-lg mb-4 border-b pb-2 text-blue-700">Contact us</h4>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input type="email" placeholder="Email" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <textarea placeholder="Your Message" rows={3} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Send Now</button>
          </form>
        </div>
      </aside>
    </div>
  </div>
);

export default FemtoLasikLaser; 