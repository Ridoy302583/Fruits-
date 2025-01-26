import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 bg-opacity-90 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Fruity Fresh</h3>
            <p>Bringing the freshest fruits to your doorstep.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-green-200">Home</a></li>
              <li><a href="#" className="hover:text-green-200">Products</a></li>
              <li><a href="#" className="hover:text-green-200">About Us</a></li>
              <li><a href="#" className="hover:text-green-200">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>123 Fruit Street, Orchard City, FC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@fruityfresh.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Fruity Fresh. All rights reserved.</p>
          <p>Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
