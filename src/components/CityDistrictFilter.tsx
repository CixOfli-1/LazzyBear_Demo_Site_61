import React, { useState } from 'react';

interface Item {
  title: string;
  desc: string;
  city: string;
  district: string;
  img: string;
  detailPath: string;
}

interface Props {
  data: Item[];
  categoryTitle: string;
  categoryDescription: string;
  onCardClick: (detailPath: string) => void;
  onBookNow?: () => void;
  ButtonComponent?: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

const CityDistrictFilter: React.FC<Props> = ({ data, categoryTitle, categoryDescription, onCardClick, onBookNow, ButtonComponent }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Benzersiz şehirler
  const cities = Array.from(new Set(data.map(item => item.city)));
  // Seçilen ile göre benzersiz ilçeler
  const districts = selectedCity
    ? Array.from(new Set(data.filter(item => item.city === selectedCity).map(item => item.district)))
    : [];

  // Filtrelenmiş veri
  const filteredData = data.filter(item => {
    if (selectedCity && selectedDistrict) {
      return item.city === selectedCity && item.district === selectedDistrict;
    } else if (selectedCity) {
      return item.city === selectedCity;
    }
    return true;
  });

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict('');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="text-green-600 font-semibold tracking-widest mb-2">{categoryTitle.toUpperCase()}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{categoryTitle}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{categoryDescription}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <select
          className="border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={selectedCity}
          onChange={e => handleCitySelect(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <select
          className="border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={selectedDistrict}
          onChange={e => setSelectedDistrict(e.target.value)}
          disabled={!selectedCity}
        >
          <option value="">{selectedCity ? 'All Districts' : 'Select City First'}</option>
          {districts.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {filteredData.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No results found.</div>
        ) : (
          filteredData.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{item.title}</div>
              <div className="text-gray-700 text-sm mb-2 text-center">{item.desc}</div>
              <div className="text-xs text-gray-500 mb-4">{item.district}, {item.city}</div>
              <div className="flex gap-2">
                {ButtonComponent ? (
                  <ButtonComponent onClick={() => onCardClick(item.detailPath)} className="bg-green-500 text-white hover:bg-green-600">Learn more</ButtonComponent>
                ) : (
                  <button onClick={() => onCardClick(item.detailPath)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Learn more</button>
                )}
                {onBookNow && (ButtonComponent ? (
                  <ButtonComponent onClick={onBookNow} className="bg-green-500 text-white hover:bg-green-600">Book Now</ButtonComponent>
                ) : (
                  <button onClick={onBookNow} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Book Now</button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CityDistrictFilter; 