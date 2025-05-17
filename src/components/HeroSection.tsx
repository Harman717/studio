import Image from "next/image";
import ScrollDownArrow from "./ScrollDownArrow";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-20 pt-32 md:pt-20 text-center bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary flex-shrink-0">
              <Image
                src="https://placehold.co/300x300.png"
                alt="Harmandeep Singh"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile portrait"
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
