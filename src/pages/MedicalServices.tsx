import React, { useRef, useEffect, useState } from 'react';

const LOGO_COUNT = 10;
const LOGO_WIDTH = 112; // px, w-28
const GAP = 64; // px, gap-16
const TOTAL_WIDTH = LOGO_COUNT * (LOGO_WIDTH + GAP);

const MedicalServices = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const requestRef = useRef<number>();

  // Animasyon döngüsü
  useEffect(() => {
    if (isPaused) return;
    const step = () => {
      setOffset(prev => {
        let next = prev + 0.33;
        if (next >= TOTAL_WIDTH) {
          setIsInstant(true);
          setTimeout(() => setIsInstant(false), 20);
          return next - TOTAL_WIDTH; // Sıçrama olmadan sonsuz scroll
        }
        return next;
      });
      requestRef.current = requestAnimationFrame(step);
    };
    requestRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Sonsuz scroll efekti için, offset arttıkça translateX negatif yönde artar,
  // içerik iki katı uzunluğunda olduğu için, offset TOTAL_WIDTH'i geçince de kaymaya devam eder
  // ve logolar hiç bitmiyormuş gibi görünür.

  // Brand logos array
  const brandLogos = [
    '/images/medical-services-images/landingpage-logos/logo-1.png',
    '/images/medical-services-images/landingpage-logos/logo-2.png',
    '/images/medical-services-images/landingpage-logos/logo-3.png',
    '/images/medical-services-images/landingpage-logos/logo-4.png',
    '/images/medical-services-images/landingpage-logos/logo-5.png',
  ];
  const LOGO_WIDTH = 80; // px
  const GAP = 64; // px
  const REPEAT = 3; // Sonsuz scroll için 3 tekrar
  const TOTAL_WIDTH = brandLogos.length * REPEAT * (LOGO_WIDTH + GAP);

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero/Slider Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <p className="text-blue-600 font-semibold mb-2">Your Journey to Health Starts Here</p>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Expert Medical Care<br/>in Turkey for International Patients</h1>
          <p className="text-gray-600 mb-8">
            Discover world-class healthcare, advanced treatments, and personalized support in Turkey. Our experienced team is dedicated to your well-being, safety, and comfort—every step of the way.
          </p>
          <div className="flex gap-4">
            <a href="/contact-us" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get a Free Consultation</a>
            <a href="/medical-services" className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Explore Treatments</a>
          </div>
        </div>
        {/* Right: Image + Feature Cards */}
        <div className="flex-1 flex flex-col items-center relative max-w-xl">
          {/* Main Image - büyütüldü */}
          <div className="w-[480px] h-[360px] bg-gray-200 rounded-2xl overflow-hidden mb-0 flex items-center justify-center shadow-lg">
            <img
              src="/images/medical-services-images/landingpage-images/headimage-1.png"
              alt="Medical Services Hero"
              className="object-cover w-full h-full rounded-2xl"
              loading="lazy"
            />
          </div>
          {/* Feature Cards - görselin altına bindirildi */}
          <div className="flex gap-6 absolute left-1/2 -translate-x-1/2 -bottom-10 z-10">
            <div className="bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col items-center w-52">
              {/* Icon Placeholder */}
              <div className="bg-blue-100 rounded-full p-3 mb-2">
                <span className="text-blue-600 text-2xl">&#128222;</span>
              </div>
              <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
              <p className="text-gray-500 text-sm text-center">There are many variations of passages are valid.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col items-center w-52 justify-center text-center">
              {/* Icon Placeholder */}
              <div className="bg-blue-100 rounded-full p-3 mb-2 mx-auto">
                <span className="text-blue-600 text-2xl">&#128104;&#8205;&#127891;</span>
              </div>
              <h3 className="font-bold text-lg mb-1 w-full text-center">Qualified Doctors</h3>
              <p className="text-gray-500 text-sm w-full text-center">There are many variations of passages are valid.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section (keep as is) */}
      <section className="bg-blue-600 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 mb-2 shadow">
                <span className="text-blue-600 text-3xl">&#128221;</span>
              </div>
              <div className="text-3xl font-bold text-white">60 +</div>
              <div className="text-white text-lg">Project Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 mb-2 shadow">
                <span className="text-blue-600 text-3xl">&#128100;</span>
              </div>
              <div className="text-3xl font-bold text-white">99 %</div>
              <div className="text-white text-lg">Patients Satisfied</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 mb-2 shadow">
                <span className="text-blue-600 text-3xl">&#128719;</span>
              </div>
              <div className="text-3xl font-bold text-white">700 +</div>
              <div className="text-white text-lg">Medical Beds</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 mb-2 shadow">
                <span className="text-blue-600 text-3xl">&#128300;</span>
              </div>
              <div className="text-3xl font-bold text-white">70 +</div>
              <div className="text-white text-lg">Laboratory Experts</div>
            </div>
          </div>
          {/* Brand Logos Strip */}
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden select-none group" style={{height:'90px'}}>
            <div
              className="flex items-center gap-16 px-2 py-2"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: isPaused || isInstant ? 'none' : 'transform 0.03s linear',
                width: `${brandLogos.length * REPEAT * (LOGO_WIDTH + GAP)}px`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {Array.from({length: brandLogos.length * REPEAT}).map((_, i) => {
                const logo = brandLogos[i % brandLogos.length];
                return (
                  <img
                    key={logo + '-' + i}
                    src={logo}
                    alt={`Brand Logo ${i % brandLogos.length + 1}`}
                    className="h-16 w-auto object-contain opacity-60 group-hover:opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
                    loading="lazy"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Services Cards Section */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">Our Services</p>
            <h2 className="text-4xl font-bold mb-4">We're Providing Best Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our core medical services, each delivered with expertise and care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Hair Transplant */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/medical-services-images/landingpage-images/hair-transplant-image.png"
                  alt="Hair Transplant"
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Hair Transplant</h3>
              <p className="text-gray-500 text-center mb-4">Advanced hair restoration solutions for natural and lasting results.</p>
            </div>
            {/* Dental Treatment */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/medical-services-images/landingpage-images/dental-treatment-images.png"
                  alt="Dental Treatment"
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Dental Treatment</h3>
              <p className="text-gray-500 text-center mb-4">Comprehensive dental care with the latest technology and expert dentists.</p>
            </div>
            {/* Plastic Surgery */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/medical-services-images/landingpage-images/plastic-surgery-images.png"
                  alt="Plastic Surgery"
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Plastic Surgery</h3>
              <p className="text-gray-500 text-center mb-4">Modern plastic surgery for natural beauty and self-confidence.</p>
            </div>
            {/* Eye Surgery */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/medical-services-images/landingpage-images/eye-surgery-images.png"
                  alt="Eye Surgery"
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Eye Surgery</h3>
              <p className="text-gray-500 text-center mb-4">Cutting-edge eye surgery for clear and healthy vision.</p>
            </div>
          </div>
          <div className="text-center text-gray-700 mt-10 text-lg">
            Are you impressed with our amazing services? <span className="text-blue-600 underline cursor-pointer">View All Services</span>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Images */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/images/medical-services-images/landingpage-images/Why-Choose-1.png"
                alt="Why Choose Us"
                className="object-cover w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* Right: Text & List */}
          <div className="flex-1 text-white">
            <p className="font-semibold mb-2">Why Choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Best Services & Quite Popular Online Treatment</h2>
            <p className="mb-8 text-blue-100">We provide world-class medical care with a focus on patient satisfaction, safety, and comfort. Discover why thousands of patients choose us for their health journey.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-700 rounded-full p-2 mt-1">&#10003;</span>
                <div>
                  <span className="font-bold">Internationally Accredited Hospitals</span>
                  <div className="text-blue-100">We work with JCI-accredited and internationally recognized hospitals for the highest standards of care.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-700 rounded-full p-2 mt-1">&#10003;</span>
                <div>
                  <span className="font-bold">Experienced Medical Teams</span>
                  <div className="text-blue-100">Our doctors and surgeons are leaders in their fields with years of international experience.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-700 rounded-full p-2 mt-1">&#10003;</span>
                <div>
                  <span className="font-bold">Personalized Treatment Plans</span>
                  <div className="text-blue-100">Every patient receives a tailored treatment plan for the best possible results and comfort.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-700 rounded-full p-2 mt-1">&#10003;</span>
                <div>
                  <span className="font-bold">All-Inclusive Support</span>
                  <div className="text-blue-100">From your first inquiry to post-treatment care, we provide full support at every step.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Health Journey?</h2>
          <p className="mb-8 text-blue-100 text-lg">Contact us today for a free consultation and personalized treatment plan tailored to your needs.</p>
          <a href="/contact-us" className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-50 transition text-lg">Get a Free Consultation</a>
        </div>
      </section>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default MedicalServices;
