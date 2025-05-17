import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "mailto:harmansingh.717210@gmail.com",
    icon: Mail,
    label: "Email",
    text: "harmansingh.717210@gmail.com",
  },
  {
    href: "https://github.com/Harman717",
    icon: Github,
    label: "GitHub",
    text: "github.com/Harman717",
  },
  {
    href: "https://www.linkedin.com/in/harman710/",
    icon: Linkedin,
    label: "LinkedIn",
    text: "linkedin.com/in/harman710",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
            </p>
            <div className="space-y-6">
              {socialLinks.map((linkInfo) => {
                const Icon = linkInfo.icon;
                return (
                  <div key={linkInfo.label} className="flex items-center gap-4">
                     <Link href={linkInfo.href} target="_blank" rel="noopener noreferrer" passHref>
                       <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10 rounded-full">
                          <Icon className="h-6 w-6" />
                       </Button>
                     </Link>
                    <div>
                      <h4 className="font-semibold text-foreground">{linkInfo.label}</h4>
                      <Link href={linkInfo.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {linkInfo.text}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
