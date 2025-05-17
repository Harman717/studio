"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollDownArrowProps {
  targetId: string;
}

export default function ScrollDownArrow({ targetId }: ScrollDownArrowProps) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full animate-bounce mt-8 bg-transparent border-primary text-primary hover:bg-primary/10"
      onClick={scrollToTarget}
      aria-label="Scroll to next section"
    >
      <ArrowDown className="h-6 w-6" />
    </Button>
  );
}
