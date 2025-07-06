import React from 'react';

const relatedServices = [
  { name: 'Hair Transplant', link: '/medical-services/hair-transplant' },
  { name: 'Dental Treatment', link: '/medical-services/dental-treatment' },
  { name: 'Plastic Surgery', link: '/medical-services/plastic-surgery' },
  { name: 'Eye Surgery', link: '/medical-services/eye-surgery' },
  { name: 'Before & After Care', link: '/medical-services/before-after-care' },
];

const partnerLogos = [
  { src: '/images/partner1.png', alt: 'Acibadem Hospital' },
  { src: '/images/partner2.png', alt: 'Memorial Clinic' },
  { src: '/images/partner3.png', alt: 'Florence Nightingale Hospital' },
  { src: '/images/partner4.png', alt: 'Medicana Hospital' },
];

const OurPartners = () => (
  <div className="bg-[#f7f9fc] min-h-screen pb-12">
    {/* Hero Banner - Beaches style */}
    <div className="relative h-56 md:h-72 w-full flex items-center justify-center mb-8" style={{ backgroundImage: 'url(/images/hero-placeholder.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest">OUR PARTNER HOSPITALS & CLINICS</h1>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
      {/* Left: Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Trusted Partners for World-Class Care</h2>
        <p className="text-gray-700 mb-4">We collaborate with Turkey’s leading hospitals and clinics to provide you with the highest standards of healthcare. Our partners are internationally accredited, equipped with the latest technology, and staffed by experienced medical professionals.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 min-w-[180px] h-44 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-400 text-xl">[Hospital Image]</span>
          </div>
          <div className="flex-1 min-w-[180px] h-44 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-400 text-xl">[Clinic Image]</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 mt-8">What We Offer With Our Partners</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-8">
          <li>JCI and internationally accredited hospitals</li>
          <li>Modern medical equipment and infrastructure</li>
          <li>Experienced doctors and healthcare teams</li>
          <li>Wide range of specialties and treatments</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-8">
          <span className="font-semibold text-blue-700">Did you know?</span> Our partner hospitals are chosen for their commitment to patient safety, comfort, and outstanding results.
        </div>
        <h3 className="text-xl font-semibold mb-4 mt-10">Our Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {partnerLogos.map((logo, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow flex flex-col items-center justify-center h-32 p-4">
              {/* Placeholder image for now, replace src later */}
              <div className="w-16 h-16 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
                <img src={logo.src} alt={logo.alt} className="h-full object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-gray-700 text-sm font-semibold text-center mt-1">{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
        {/* Related Services */}
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <h4 className="font-bold text-lg mb-4 border-b pb-2 text-blue-700">Related Services</h4>
          <ul className="space-y-2">
            {relatedServices.map((service) => (
              <li key={service.link}>
                <a href={service.link} className="text-blue-700 hover:underline">{service.name}</a>
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

export default OurPartners; 