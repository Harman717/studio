
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  companyLogoHint: string;
  duration: string;
  dates: string;
  location: string;
  skills: string[];
  certificateText?: string;
  certificateImageUrl?: string;
  certificateImageHint?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Summer Internship",
    company: "Diginique TechLabs",
    companyLogoUrl: "https://media.licdn.com/dms/image/v2/C510BAQESCMZVWcVopA/company-logo_200_200/company-logo_200_200/0/1630624943898?e=2147483647&v=beta&t=JKpGL3Kfbuu1Qgt-oghEMUPKlJ1cxksIYis9ZPAUdzM",
    companyLogoHint: "tech logo",
    duration: "2 mos",
    dates: "Jun 2023 - Jul 2023",
    location: "Jalandhar, Punjab, India · Remote",
    skills: ["Data Structures", "C++"],
  },
  {
    id: "2",
    title: "Deep Learning Intern",
    company: "ResoluteAI.in",
    companyLogoUrl: "https://resoluteaisoftware.in/static/media/logo.eebe05c78fec55d8a0b7.webp",
    companyLogoHint: "AI company logo",
    duration: "4 mos",
    dates: "Nov 2022 - Feb 2023",
    location: "India",
    skills: ["Deep Learning", "Machine Learning", "YOLO", "Python", "EasyOCR", "Data Annotation"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          <Briefcase className="inline-block h-10 w-10 mr-2 text-accent" />
          Experience
        </h2>
        <div className="space-y-12">
          {experienceData.map((exp) => (
            <Card key={exp.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Image
                    src={exp.companyLogoUrl}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-md object-contain"
                    data-ai-hint={exp.companyLogoHint}
                  />
                  <div className="flex-grow">
                    <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-lg text-foreground/90">{exp.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground space-y-2 sm:space-y-0">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    <span>{exp.dates} ({exp.duration})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
