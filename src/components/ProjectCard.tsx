
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
      <div className="relative w-full h-48 md:h-56 bg-muted/30 group-hover:bg-muted/40 transition-colors">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: "contain" }}
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start space-x-2 pt-4">
        {project.liveLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
