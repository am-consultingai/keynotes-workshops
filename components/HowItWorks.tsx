import React from 'react';
import { MessageSquare, Settings, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      desc: "We discuss your goals, tech stack, and team challenges to identify the perfect fit."
    },
    {
      icon: Settings,
      title: "Customization",
      desc: "I build the curriculum or keynote specifically for your KPIs and organizational context."
    },
    {
      icon: Zap,
      title: "Delivery",
      desc: "High-impact session with actionable takeaways that your team can use immediately."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Seamless Delivery</h2>
          <p className="text-xl text-gray-600">Three steps to elevate your team's expertise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0 transform -translate-y-1/2 scale-x-75" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center mb-6 relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <step.icon className="w-10 h-10 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
