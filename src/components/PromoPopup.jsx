import React, { useState, useEffect } from 'react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-green-600 mb-4">Special Offer!</h2>
        <p className="text-lg mb-6">Get 20% off on your first order with code: <span className="font-bold">FRESH20</span></p>
        <button
          onClick={closePopup}
          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoPopup;
