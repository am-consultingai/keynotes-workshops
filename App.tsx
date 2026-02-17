import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ServiceGrid from './components/ServiceGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import SlideOver from './components/SlideOver';
import { ServiceItem } from './types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  const handleSelectService = (item: ServiceItem) => {
    setSelectedItem(item);
    setIsSlideOverOpen(true);
  };

  const handleCloseService = () => {
    setIsSlideOverOpen(false);
    // Small timeout to clear data after animation finishes
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main>
        <Hero />
        <ProblemSolution />
        <ServiceGrid onSelect={handleSelectService} />
        <HowItWorks />
      </main>

      <Footer />

      <SlideOver 
        isOpen={isSlideOverOpen} 
        onClose={handleCloseService} 
        item={selectedItem} 
      />
    </div>
  );
};

export default App;
