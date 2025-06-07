
"use client";

import React from 'react';

const AiCoreAnimation: React.FC = () => {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        aria-label="Animated AI Core"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <circle 
          cx="100" 
          cy="100" 
          r="80" 
          stroke="hsl(var(--primary) / 0.4)" 
          strokeWidth="2" 
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="90s"
            repeatCount="indefinite"
          />
        </circle>

        <circle 
          cx="100" 
          cy="100" 
          r="65" 
          stroke="hsl(var(--accent) / 0.5)" 
          strokeWidth="1.5" 
          fill="none"
          strokeDasharray="8 4"
        >
           <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 100 100"
            to="0 100 100"
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>

        <circle 
          cx="100" 
          cy="100" 
          r="40" 
          fill="hsl(var(--primary) / 0.2)"
          filter="url(#glow)"
        >
          <animate 
            attributeName="r" 
            values="40;43;40" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="opacity" 
            values="0.6;1;0.6" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle 
          cx="100" 
          cy="100" 
          r="38" 
          fill="hsl(var(--primary) / 0.6)"
        >
          <animate 
            attributeName="r" 
            values="38;41;38" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
        </circle>

        <circle cx="100" cy="100" r="10" fill="hsl(var(--accent))">
            <animate 
            attributeName="r" 
            values="9;11;9" 
            dur="3s" 
            repeatCount="indefinite" 
            begin="0.3s"
          />
           <animate 
            attributeName="opacity" 
            values="0.8;1;0.8" 
            dur="3s" 
            repeatCount="indefinite" 
            begin="0.3s"
          />
        </circle>

        {[...Array(10)].map((_, i) => {
          const angle = (i / 10) * 2 * Math.PI;
          const radius = 55 + Math.random() * 5;
          const baseX = 100 + radius * Math.cos(angle);
          const baseY = 100 + radius * Math.sin(angle);
          const duration = 3 + Math.random() * 3;
          const delay = Math.random() * 2;
          return (
            <circle
              key={`particle-${i}`}
              cx={baseX}
              cy={baseY}
              r="1.2"
              fill="hsl(var(--accent) / 0.7)"
            >
              <animate 
                attributeName="opacity" 
                values="0;0.7;0" 
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite" 
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0 0; ${Math.cos(angle + Math.PI/2) * (2 + Math.random()*3)} ${Math.sin(angle + Math.PI/2) * (2 + Math.random()*3)}; 0 0`}
                dur={`${duration+1}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

export default AiCoreAnimation;
