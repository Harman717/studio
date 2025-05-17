import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          My Resume
        </h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Interested in learning more about my professional experience and qualifications? Download my resume to get a comprehensive overview.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
          <a href="/resume_harmandeep_singh.pdf" download="Harmandeep_Singh_Resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </a>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          (Note: This is a placeholder link. Please replace `public/resume_harmandeep_singh.pdf` with your actual resume.)
        </p>
      </div>
    </section>
  );
}
