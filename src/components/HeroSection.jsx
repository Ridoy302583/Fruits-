import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Fresh Fruits Delivered to Your Doorstep</h1>
            <p className="text-xl text-green-700 mb-6">Discover the juiciest and freshest fruits from our orchards!</p>
            <button className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Fresh Fruits"
              className="rounded-lg shadow-lg"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
