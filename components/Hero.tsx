import React from 'react';
import { ArrowDown } from 'lucide-react';
import TechArtifact from './TechArtifact';

const Hero: React.FC = () => {
  const title = "Enotribe";
  const description = "We architect the invisible. Specialized software R&D and artificial intelligence solutions for the next generation of enterprise.";
  const descriptionWords = description.split(' ');

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 lg:px-40 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-eno-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Tech Artifact - Centered and slightly behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0 opacity-30 pointer-events-none scale-75 md:scale-100 lg:translate-x-0 lg:left-[45%]">
        <TechArtifact />
      </div>

      {/* Header Label - Bounce In with Cursor */}
      <h2 className="text-eno-accent font-mono text-xs md:text-sm tracking-[0.3em] mb-6 opacity-0 animate-[bounceIn_1s_ease-out_forwards] flex items-center gap-2 select-none z-10">
        <span className="text-gray-500">//</span> 
        <span>AN_R&D_COMPANY</span>
        <span className="animate-pulse text-eno-accent">_</span>
      </h2>
      
      {/* Title - Staggered Letter Slide Up */}
      <h1 className="text-5xl md:text-8xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight flex flex-wrap z-10 relative mix-blend-lighten">
        {title.split('').map((char, index) => (
          <span 
            key={index} 
            className="opacity-0 animate-[charSlideUp_0.8s_cubic-bezier(0.2,0.65,0.3,0.9)_forwards]"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
        <span 
          className="text-eno-accent opacity-0 animate-[charSlideUp_0.8s_cubic-bezier(0.2,0.65,0.3,0.9)_forwards]" 
          style={{ animationDelay: `${0.1 + title.length * 0.05}s` }}
        >
          .
        </span>
      </h1>
      
      {/* Paragraph - Staggered Word Fade In */}
      <p className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed flex flex-wrap gap-x-1.5 z-10 relative">
        {descriptionWords.map((word, index) => (
          <span
            key={index}
            className="opacity-0 animate-[slideUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${0.6 + index * 0.03}s` }}
          >
            {word}
          </span>
        ))}
      </p>

      {/* Button - Simple Fade In with Slide Hover Effect */}
      <div className="mt-12 flex items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.8s_forwards] z-10 relative">
         <button 
           onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
           className="px-8 py-3 border border-eno-accent text-eno-accent font-mono text-sm hover:text-black transition-colors duration-300 relative overflow-hidden group"
         >
           <span className="relative z-10">EXPLORE CAPABILITIES</span>
           <div className="absolute inset-0 bg-eno-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0"></div>
         </button>
      </div>

      <div className="absolute bottom-10 right-10 md:right-20 animate-bounce delay-1000 z-10">
         <ArrowDown className="text-gray-600 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;