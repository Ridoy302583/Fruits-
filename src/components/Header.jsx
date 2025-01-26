import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-500 bg-opacity-90 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fruity Fresh</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-green-200">Home</a></li>
            <li><a href="#" className="hover:text-green-200">Products</a></li>
            <li><a href="#" className="hover:text-green-200">About</a></li>
            <li><a href="#" className="hover:text-green-200">Contact</a></li>
          </ul>
        </nav>
        <button className="flex items-center space-x-1 bg-white text-green-500 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">
          <ShoppingCart size={20} />
          <span>Cart (0)</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
