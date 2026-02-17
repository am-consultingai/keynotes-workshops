import React from 'react';
import { ArrowUpRight, Presentation, Laptop } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICE_ITEMS } from '../constants';

interface ServiceGridProps {
  onSelect: (item: ServiceItem) => void;
}

interface CardProps {
  item: ServiceItem;
  icon: React.ElementType;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ item, icon: Icon, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-6 h-6 text-blue-500" />
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
      {item.title}
    </h3>
    
    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
      {item.shortDescription}
    </p>

    <div className="mt-auto pt-4 border-t border-gray-100">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Audience: {item.targetAudience}
      </span>
    </div>
  </div>
);

const ServiceGrid: React.FC<ServiceGridProps> = ({ onSelect }) => {
  const keynotes = SERVICE_ITEMS.filter(i => i.category === 'Keynote');
  const workshops = SERVICE_ITEMS.filter(i => i.category === 'Workshop');

  return (
    <section id="offerings" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Keynotes */}
        <div className="mb-20" id="keynotes">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Keynote Topics</h2>
            <div className="h-px bg-gray-200 flex-grow" />
            <span className="text-sm font-medium text-gray-500 hidden sm:block">High-energy, visionary sessions</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keynotes.map(item => (
              <Card 
                key={item.id} 
                item={item} 
                icon={Presentation} 
                onClick={() => onSelect(item)}
              />
            ))}
          </div>
        </div>

        {/* Workshops */}
        <div id="workshops">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Custom Workshops</h2>
            <div className="h-px bg-gray-200 flex-grow" />
            <span className="text-sm font-medium text-gray-500 hidden sm:block">Deep-dive, hands-on sessions</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map(item => (
              <Card 
                key={item.id} 
                item={item} 
                icon={Laptop} 
                onClick={() => onSelect(item)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;