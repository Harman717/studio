
import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "mailto:harmansingh.717210@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/Harman717", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/harman710/", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#home" className="flex items-center gap-2 text-xl font-semibold text-primary mb-2">
              <Code2 className="h-7 w-7" />
              <span>Harmandeep Singh</span>
            </Link>
            <p className="text-sm">Passionate Computer Engineer & Tech Explorer.</p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Quick Links</h5>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Connect</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} Harmandeep Singh. All rights reserved.</p>
          <p>Designed with care and a touch of code.</p>
        </div>
      </div>
    </footer>
  );
}
