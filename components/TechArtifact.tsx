import React from 'react';

const TechArtifact: React.FC = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center select-none pointer-events-none opacity-90">
      
      {/* SVG Layer for clean lines */}
      <svg className="absolute w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Outer thin dashed ring */}
         <circle cx="250" cy="250" r="240" stroke="#333" strokeWidth="1" strokeDasharray="10 30" />
         
         {/* Segmented technological ring */}
         <circle cx="250" cy="250" r="180" stroke="#00ff9d" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="100 250" className="animate-[spin_10s_linear_infinite]" />
      </svg>

      {/* Counter Rotating Ring */}
      <svg className="absolute w-full h-full animate-[spinReverse_40s_linear_infinite]" viewBox="0 0 500 500" fill="none">
         <circle cx="250" cy="250" r="210" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
         <path d="M250 40 A210 210 0 0 1 460 250" stroke="#00ff9d" strokeWidth="1" strokeOpacity="0.4" />
      </svg>

      {/* Inner fast spinner */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/40"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/40"></div>
      </div>

      {/* Orbital Object 1 */}
      <div className="absolute w-[360px] h-[360px] animate-[spin_8s_linear_infinite]">
         <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
      </div>

      {/* Orbital Object 2 */}
      <div className="absolute w-[120px] h-[120px] animate-[spinReverse_5s_linear_infinite]">
         <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-eno-accent rounded-full"></div>
      </div>

      {/* Central Core */}
      <div className="relative z-10 flex items-center justify-center">
         <div className="w-4 h-4 bg-eno-accent rounded-full animate-pulse shadow-[0_0_30px_5px_rgba(0,255,157,0.5)]"></div>
         <div className="absolute w-8 h-8 border border-eno-accent/50 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Data Overlay */}
      <div className="absolute top-[20%] right-[15%] font-mono text-[9px] text-eno-accent/70 flex flex-col items-end gap-1">
         <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-eno-accent rounded-full animate-pulse"></span>
            <span>NODE_01 ACTIVE</span>
         </div>
         <div className="opacity-50">34.882.11</div>
      </div>

      {/* Vertical scanning line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-eno-accent/5 to-transparent h-[10%] w-full animate-[slideUp_4s_linear_infinite] opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default TechArtifact;