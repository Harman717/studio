
import Image from "next/image";
import ScrollDownArrow from "./ScrollDownArrow";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 pt-32 md:pt-20 text-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden"
    >
      {/* Background Graphic 1: Enhanced Abstract Network Lines (Top-Left) */}
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-24 -left-24 w-[500px] h-[500px] md:w-[600px] md:h-[600px] text-primary opacity-30 pointer-events-none transform rotate-[-15deg]"
        aria-hidden="true"
      >
        <path d="M100 500 C150 400 250 450 400 350 C450 250 550 300 580 280" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 5">
          <animate attributeName="stroke-dashoffset" values="25;0;25" dur="7s" repeatCount="indefinite" />
        </path>
        <path d="M50 100 C100 200 200 150 350 250 C400 350 500 300 550 320" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="8 8">
          <animate attributeName="stroke-dashoffset" values="0;-32;0" dur="8s" repeatCount="indefinite" begin="1s" />
        </path>
        <path d="M150 50 C250 150 300 100 450 200 C500 300 580 250 590 260" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6 3">
          <animate attributeName="stroke-dashoffset" values="18;0;18" dur="6s" repeatCount="indefinite" begin="0.5s"/>
        </path>
        
        {/* Nodes with more varied and pronounced animations */}
        <circle cx="100" cy="500" r="4" fill="currentColor">
          <animate attributeName="r" values="3;7;3" dur="4.5s" repeatCount="indefinite" begin="0.2s" />
          <animate attributeName="opacity" values="1;0.4;1" dur="4.5s" repeatCount="indefinite" begin="0.2s" />
        </circle>
        <circle cx="400" cy="350" r="4" fill="currentColor">
          <animate attributeName="r" values="4;8;4" dur="5.5s" repeatCount="indefinite" begin="0.7s" />
          <animate attributeName="opacity" values="1;0.3;1" dur="5.5s" repeatCount="indefinite" begin="0.7s" />
        </circle>
        <circle cx="580" cy="280" r="3" fill="currentColor">
          <animate attributeName="r" values="2;6;2" dur="4s" repeatCount="indefinite" begin="1.2s" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" begin="1.2s" />
        </circle>
         <circle cx="50" cy="100" r="3.5" fill="currentColor">
          <animate attributeName="r" values="2.5;6.5;2.5" dur="5s" repeatCount="indefinite" begin="0.4s" />
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="5s" repeatCount="indefinite" begin="0.4s" />
        </circle>
        <circle cx="350" cy="250" r="4" fill="currentColor">
          <animate attributeName="r" values="3;7;3" dur="6s" repeatCount="indefinite" begin="0.9s" />
          <animate attributeName="opacity" values="1;0.2;1" dur="6s" repeatCount="indefinite" begin="0.9s" />
        </circle>
         <circle cx="550" cy="320" r="2.5" fill="currentColor">
          <animate attributeName="r" values="2;5;2" dur="4.2s" repeatCount="indefinite" begin="1.4s" />
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="4.2s" repeatCount="indefinite" begin="1.4s" />
        </circle>
        <circle cx="150" cy="50" r="3" fill="currentColor">
           <animate attributeName="r" values="3;6;3" dur="4.8s" repeatCount="indefinite" begin="0.6s" />
           <animate attributeName="opacity" values="1;0.3;1" dur="4.8s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle cx="450" cy="200" r="3.5" fill="currentColor">
          <animate attributeName="r" values="3;7.5;3" dur="6.2s" repeatCount="indefinite" begin="1.1s" />
          <animate attributeName="opacity" values="1;0.25;1" dur="6.2s" repeatCount="indefinite" begin="1.1s" />
        </circle>
        <circle cx="590" cy="260" r="3" fill="currentColor">
          <animate attributeName="r" values="2;5.5;2" dur="3.8s" repeatCount="indefinite" begin="1.6s" />
          <animate attributeName="opacity" values="0.8;0.35;0.8" dur="3.8s" repeatCount="indefinite" begin="1.6s" />
        </circle>
      </svg>

      {/* Background Graphic 2: Enhanced Abstract Grid/Dots (Bottom-Right) */}
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] text-accent opacity-25 pointer-events-none transform rotate-[10deg]"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5">
           <animate attributeName="opacity" values="0.4;1;0.4" dur="7s" repeatCount="indefinite" />
           <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="120s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="6s" repeatCount="indefinite" begin="1.5s" />
          <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="90s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5">
           <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" begin="2.5s" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="-360 100 100" dur="150s" repeatCount="indefinite" />
        </circle>

        {/* Rects with more pronounced and varied flicker */}
        <rect x="150" y="150" width="12" height="12" fill="currentColor">
          <animate attributeName="opacity" values="0.1;0.9;0.1;0.7;0.2" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="170" y="150" width="12" height="12" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.6;0.2;0.8;0.1" dur="3.3s" begin="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="190" y="150" width="12" height="12" fill="currentColor">
           <animate attributeName="opacity" values="0.15;0.95;0.1;0.75;0.25" dur="2.5s" begin="1.3s" repeatCount="indefinite" />
        </rect>
        <rect x="150" y="170" width="12" height="12" fill="currentColor">
           <animate attributeName="opacity" values="0.25;0.7;0.1;0.6;0.3" dur="3.8s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="170" y="170" width="12" height="12" fill="currentColor">
           <animate attributeName="opacity" values="0.1;0.8;0.2;0.9;0.15" dur="3.1s" begin="1.1s" repeatCount="indefinite" />
        </rect>
        <rect x="190" y="170" width="12" height="12" fill="currentColor">
           <animate attributeName="opacity" values="0.3;0.65;0.15;0.85;0.2" dur="2.6s" begin="1.6s" repeatCount="indefinite" />
        </rect>

        <path d="M250 50 L350 150 L250 250 L150 150 Z" stroke="currentColor" strokeWidth="0.75" fill="none" strokeDasharray="40 10" strokeDashoffset="0">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="8s" repeatCount="indefinite" begin="1.2s" />
          <animate attributeName="stroke-dashoffset" values="0;50;0" dur="10s" repeatCount="indefinite" />
        </path>
        <line x1="50" y1="300" x2="300" y2="50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="60 20" strokeDashoffset="0">
           <animate attributeName="opacity" values="0.15;0.6;0.15" dur="9s" repeatCount="indefinite" begin="0.5s" />
           <animate attributeName="stroke-dashoffset" values="80;0;80" dur="12s" repeatCount="indefinite" />
        </line>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto py-8 md:py-12">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-primary flex-shrink-0 bg-background/30 backdrop-blur-sm">
            <Image
              src="/profile-harmandeep.jpg"
              alt="Harmandeep Singh"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
          <div className="text-center md:text-left mt-6 md:mt-0 md:ml-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4">
              Hi, I’m Harmandeep
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg">
              A passionate tech explorer who loves building smart systems, playing football, and watching fantasy shows like Game of Thrones.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
         <ScrollDownArrow targetId="about" />
        </div>
      </div>
    </section>
  );
}
