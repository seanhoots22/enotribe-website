import React, { useRef, useEffect, useState } from 'react';
import { Cpu, Code2, Network, BrainCircuit } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Software R&D",
    desc: "We tackle the problems others can't. Custom algorithms, performance optimization, and proof-of-concept development."
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "AI & Machine Learning",
    desc: "LLM integration, predictive models, and intelligent automation systems tailored to your proprietary data."
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Enterprise Architecture",
    desc: "Scalable, resilient microservices and cloud-native infrastructure design for high-growth environments."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Technical Consultancy",
    desc: "Strategic guidance on tech stack selection, digital transformation, and legacy system modernization."
  }
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Increased threshold slightly to ensure user definitely sees it
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="min-h-screen py-20 px-6 md:px-20 lg:px-40 bg-eno-black/50 flex flex-col justify-center">
      <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-eno-accent font-mono text-sm tracking-[0.3em] mb-2">CAPABILITIES</h2>
        <h3 className="text-3xl md:text-5xl font-sans font-bold text-white">What We Build</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`group p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-eno-accent/50 transition-all duration-500 hover:-translate-y-2 cursor-default ${
              isVisible ? 'animate-[cardPop_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-gray-400 group-hover:text-eno-accent transition-colors duration-300 mb-6">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 font-mono">{service.title}</h4>
            <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;