import React, { useRef, useEffect, useState } from 'react';
import { Mic, Workflow, LayoutDashboard, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    icon: <Mic className="w-8 h-8 md:w-10 md:h-10 text-eno-accent" />,
    title: "VOICE AI",
    description: "Replace static phone trees with intelligent voice agents capable of fluid, human-like conversation. Our systems handle appointment setting, inbound support, and lead qualification round-the-clock, ensuring you never miss an opportunity.",
    features: [
      "Provide 24/7 Customer Support",
      "Qualify Leads Automatically",
      "Book Appointments Instantly",
      "Seamless CRM Integration"
    ]
  },
  {
    icon: <Workflow className="w-8 h-8 md:w-10 md:h-10 text-eno-accent" />,
    title: "AUTOMATION",
    description: "Eliminate repetitive manual data entry by interconnecting your entire software ecosystem. We architect invisible pipelines that automatically move data between your CRM, email, and project management tools instantly and error-free.",
    features: [
      "Eliminate Manual Data Entry",
      "Connect Disconnected Apps",
      "Automate Follow-ups",
      "Streamline Complex Workflows"
    ]
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 md:w-10 md:h-10 text-eno-accent" />,
    title: "INTERNAL TOOLS",
    description: "Bridge the gap between your raw data and decision-making. We engineer bespoke admin panels, client portals, and operational dashboards tailored strictly to your unique business logic, giving you full control over your operations.",
    features: [
      "Custom Admin Panels",
      "Secure Client Portals",
      "Inventory Management Systems",
      "Real-time Data Dashboards"
    ]
  }
];

const Solutions: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="min-h-screen py-24 px-6 md:px-20 lg:px-40 bg-eno-black relative border-t border-white/5">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eno-accent/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className={`mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-eno-accent font-mono text-sm tracking-[0.3em] mb-2">BUSINESS_SOLUTIONS</h2>
        <h3 className="text-3xl md:text-5xl font-sans font-bold text-white max-w-2xl">
          Applied Intelligence.
          <span className="block text-gray-500 text-2xl md:text-3xl mt-2 font-light">Turn-key systems for modern operations.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {solutions.map((sol, index) => (
          <div 
            key={index}
            className={`flex flex-col p-8 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md rounded-sm hover:border-eno-accent/40 transition-all duration-500 group relative overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Top scanning line effect on hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eno-accent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="mb-6 p-4 bg-eno-black/50 rounded-full w-fit border border-white/10 group-hover:border-eno-accent/30 transition-colors">
              {sol.icon}
            </div>
            
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white font-mono tracking-wider">{sol.title}</h4>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 flex-grow font-light border-b border-white/5 pb-8">
              {sol.description}
            </p>

            <ul className="space-y-3">
              {sol.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-eno-accent mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;