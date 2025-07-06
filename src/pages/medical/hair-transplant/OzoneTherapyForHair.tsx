import React from 'react';

const hairTransplantServices = [
  { name: 'Stem Cell Hair Transplant', link: '/medical-services/hair-transplant/stem-cell-hair-transplant' },
  { name: 'Sapphire FUE Hair Transplant', link: '/medical-services/hair-transplant/sapphire-fue-hair-transplant' },
  { name: 'FUE Hair Transplant', link: '/medical-services/hair-transplant/fue-hair-transplant' },
  { name: 'Direct Hair Implant', link: '/medical-services/hair-transplant/direct-hair-implant' },
  { name: 'Unshaven Hair Transplant', link: '/medical-services/hair-transplant/unshaven-hair-transplant' },
  { name: 'Female Hair Transplant', link: '/medical-services/hair-transplant/female-hair-transplant' },
  { name: 'Eyebrow Transplant', link: '/medical-services/hair-transplant/eyebrow-transplant' },
  { name: 'Beard Transplant', link: '/medical-services/hair-transplant/beard-transplant' },
  { name: 'Ozone Therapy for Hair', link: '/medical-services/hair-transplant/ozone-therapy-for-hair' },
  { name: 'Hair Graft Calculator', link: '/medical-services/hair-transplant/hair-graft-calculator' },
];

const OzoneTherapyForHair = () => (
  <div className="bg-[#f7f9fc] min-h-screen pb-12">
    {/* Hero Banner - Beaches style */}
    <div className="relative h-64 md:h-80 w-full flex items-center justify-center mb-8" style={{ backgroundImage: 'url(/images/medical-services-images/medical-herobanner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest">OZONE THERAPY FOR HAIR</h1>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
      {/* Left: Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Complete Ozone Therapy for Hair Solutions</h2>
        <p className="text-gray-700 mb-4">Ozone therapy for hair is a non-surgical treatment that revitalizes the scalp and stimulates hair growth. It improves blood circulation, strengthens hair follicles, and promotes healthier, thicker hair. Our clinic in Turkey offers advanced ozone therapy with proven results and personalized care for every patient.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 min-w-[220px] h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/medical-services-images/services-images/ozone-therapy-for-hair-1.png"
              alt="Ozone Therapy for Hair 1"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-[220px] h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/medical-services-images/services-images/ozone-therapy-for-hair-2.png"
              alt="Ozone Therapy for Hair 2"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 mt-8">What We Offer Under This Service</h3>
        <p className="text-gray-700 mb-4">Our ozone therapy for hair service includes a comprehensive approach to scalp and hair health, ensuring natural results and patient satisfaction:</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-1 mb-8">
          <li>Non-invasive and painless ozone therapy sessions.</li>
          <li>Boosts hair growth and improves scalp health.</li>
          <li>Suitable for both men and women.</li>
          <li>Performed by experienced professionals.</li>
          <li>Comprehensive aftercare and follow-up support.</li>
        </ol>
      </div>
      {/* Right: Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
        {/* Top Services */}
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <h4 className="font-bold text-lg mb-4 border-b pb-2 text-blue-700">Top Services</h4>
          <ul className="space-y-2">
            {hairTransplantServices.map((service) => (
              <li key={service.link}>
                <a href={service.link} className={`text-blue-700 hover:underline ${service.name === 'Ozone Therapy for Hair' ? 'font-semibold' : ''}`}>{service.name}</a>
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

export default OzoneTherapyForHair; 