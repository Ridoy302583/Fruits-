import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import PromoPopup from './components/PromoPopup';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://media.giphy.com/media/3o7TKDEhaHWJpBs2Xu/giphy.gif')`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <main className="flex-grow container mx-auto px-4 py-8">
          <ProductList />
        </main>
        <Footer />
      </div>
      <PromoPopup />
    </div>
  );
};

export default App;
