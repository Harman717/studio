
"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.label} variant="ghost" asChild onClick={() => setIsOpen(false)}>
          <Link href={link.href} className="text-foreground hover:text-primary transition-colors">
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Code2 className="h-7 w-7" />
          <span>Harmandeep Singh</span>
        </Link>
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] pt-10">
              <nav className="flex flex-col space-y-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center space-x-2">
            <NavItems />
          </nav>
        )}
      </div>
    </header>
  );
}
