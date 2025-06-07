import Image from "next/image";
import ScrollDownArrow from "./ScrollDownArrow";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 pt-32 md:pt-20 text-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden"
    >
      {/* Background Graphic 1: Abstract Network Lines (Top-Left) */}
      <svg 
        width="600" 
        height="600" 
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute -top-24 -left-24 w-[500px] h-[500px] md:w-[600px] md:h-[600px] text-primary opacity-[0.07] pointer-events-none transform rotate-[-15deg]"
        aria-hidden="true"
      >
        <path d="M100 500 C150 400 250 450 400 350 C450 250 550 300 580 280" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M50 100 C100 200 200 150 350 250 C400 350 500 300 550 320" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M150 50 C250 150 300 100 450 200 C500 300 580 250 590 260" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
        <circle cx="100" cy="500" r="3" fill="currentColor"/>
        <circle cx="400" cy="350" r="3" fill="currentColor"/>
        <circle cx="580" cy="280" r="2" fill="currentColor"/>
        <circle cx="50" cy="100" r="3" fill="currentColor"/>
        <circle cx="350" cy="250" r="3" fill="currentColor"/>
        <circle cx="550" cy="320" r="2" fill="currentColor"/>
        <circle cx="150" cy="50" r="3" fill="currentColor"/>
        <circle cx="450" cy="200" r="3" fill="currentColor"/>
        <circle cx="590" cy="260" r="2" fill="currentColor"/>
      </svg>

      {/* Background Graphic 2: Abstract Grid/Dots (Bottom-Right) */}
      <svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] text-accent opacity-[0.07] pointer-events-none transform rotate-[10deg]"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" opacity="0.4"/>
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        
        <rect x="150" y="150" width="10" height="10" fill="currentColor" opacity="0.3"/>
        <rect x="170" y="150" width="10" height="10" fill="currentColor" opacity="0.2"/>
        <rect x="190" y="150" width="10" height="10" fill="currentColor" opacity="0.4"/>
        <rect x="150" y="170" width="10" height="10" fill="currentColor" opacity="0.2"/>
        <rect x="170" y="170" width="10" height="10" fill="currentColor" opacity="0.4"/>
        <rect x="190" y="170" width="10" height="10" fill="currentColor" opacity="0.3"/>

        <path d="M250 50 L350 150 L250 250 L150 150 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <line x1="50" y1="300" x2="300" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary flex-shrink-0">
              <Image
                src="/profile-harmandeep.jpg"
                alt="Harmandeep Singh"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Hi, I’m Harmandeep
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                A passionate tech explorer who loves building smart systems, playing football, and watching fantasy shows like Game of Thrones.
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="mt-12">
         <ScrollDownArrow targetId="about" />
        </div>
      </div>
    </section>
  );
}
