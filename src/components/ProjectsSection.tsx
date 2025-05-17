import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce React App",
    description: "A full-featured e-commerce platform built with React, Redux, and Node.js, supporting product listings, cart management, and user authentication.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "ecommerce website",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveLink: "#", // Placeholder
    repoLink: "https://github.com/Harman717/E-Commerce-React-App",
  },
  {
    id: "2",
    title: "Training & Placement Web App",
    description: "A web application for managing training and placement activities, connecting students with companies. Built using Spring Boot and React.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "web application",
    tags: ["Spring Boot", "React", "Java", "MySQL"],
    repoLink: "https://github.com/Harman717/Training-Placement-Portal",
  },
  {
    id: "3",
    title: "YOLO Mask Detection",
    description: "A real-time mask detection system using YOLO (You Only Look Once) algorithm to identify people wearing or not wearing face masks.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "AI detection",
    tags: ["Python", "OpenCV", "YOLO", "Deep Learning"],
    repoLink: "https://github.com/Harman717/YOLO-Mask-Detection",
  },
  {
    id: "4",
    title: "Handwriting Recognition",
    description: "A TensorFlow-based model for recognizing handwritten digits and characters, trained on the MNIST dataset.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "machine learning",
    tags: ["TensorFlow", "Python", "Keras", "Machine Learning"],
    repoLink: "https://github.com/Harman717/Handwriting-Recognition-TF",
  },
  {
    id: "5",
    title: "REST API with CI/CD",
    description: "A scalable RESTful API developed with Spring Boot, containerized with Docker, and orchestrated with Kubernetes, including a CI/CD pipeline.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "API microservices",
    tags: ["Spring Boot", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
    repoLink: "https://github.com/Harman717/REST-API-CICD-K8s",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
