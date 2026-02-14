import React, { useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App: React.FC = () => {

  // Add some global keyframes dynamically to avoid CSS files
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes charSlideUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bounceIn {
        0% { opacity: 0; transform: translateY(20px); }
        60% { opacity: 1; transform: translateY(-5px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes cardPop {
        0% { opacity: 0; transform: translateY(50px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes spinReverse {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="relative text-white selection:bg-eno-accent selection:text-black">
      <BackgroundCanvas />
      
      {/* Navigation - Minimal fixed header */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-40 mix-blend-difference">
        <div className="text-white font-mono font-bold text-xl tracking-tighter">
          ENO<span className="text-eno-accent">TRIBE</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-wider">
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-eno-accent transition-colors">HOME</button>
           <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-eno-accent transition-colors">SERVICES</button>
           <button onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-eno-accent transition-colors">SOLUTIONS</button>
           <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-eno-accent transition-colors">CONTACT</button>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <Services />
        <Solutions />
        <Contact />
      </div>

      <Terminal />
    </main>
  );
};

export default App;