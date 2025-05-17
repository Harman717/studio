import { GraduationCap, Code, Gamepad2, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "Python", "JavaScript", "SQL", "Docker", "Kubernetes", 
  "React", "Spring Boot", "TensorFlow", "Java", "C++", "Next.js", "Tailwind CSS"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-10 w-10 text-accent" />
              <CardTitle className="text-2xl text-primary">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div>
                <h3 className="font-semibold text-lg text-foreground">Master of Computer Engineering</h3>
                <p>University of Guelph, Canada</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Bachelor of Technology (B.Tech)</h3>
                <p>NIT Jalandhar, India</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Brain className="h-10 w-10 text-accent" />
              <CardTitle className="text-2xl text-primary">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm bg-accent/10 text-accent-foreground hover:bg-accent/20 px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Gamepad2 className="h-10 w-10 text-accent" />
              <CardTitle className="text-2xl text-primary">Hobbies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-foreground/80">
              <p>Exploring new technologies and AI advancements.</p>
              <p>Playing and watching football (soccer).</p>
              <p>Immersing myself in fantasy shows and movies.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
