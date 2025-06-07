
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

const projectsData: Project[] = [
  {
    id: "1",
    title: "Manufacturing Data Synthesis & Wear Prediction",
    description: "Processed and transformed 165+ time-series sensor files into frequency-domain features using FFT, extracting 2,000+ features across 6 Sensors. Designed and trained a Conditional GAN (CGAN) to generate synthetic sensor data from a dataset provided by NASA, expanding the dataset by 100% and achieving 90%+ statistical similarity to real data. Integrated synthetic data into a newly created flank wear prediction model (using RFregressor, Gaussian Process Classifier, SVM for comparison), improving F1-score by 12-15% and enhancing robustness against class imbalance.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*ZKUo2QtHasnr8-RiqeJ_YA.png",
    imageHint: "GAN diagram",
    tags: ["Python", "Conditional GAN", "CGAN", "RFregressor", "Gaussian Process Classifier", "SVM", "FFT", "Machine Learning", "Data Synthesis"],
  },
  {
    id: "2",
    title: "Training & Placement Web App",
    description: "A web application for managing training and placement activities, connecting students with companies. Built using Spring Boot and React.",
    imageUrl: "https://mrakgpp.edu.in/wp-content/uploads/2022/04/TPO.jpg",
    imageHint: "job portal",
    tags: ["Spring Boot", "React", "Java", "MySQL"],
  },
  {
    id: "3",
    title: "YOLO Mask Detection",
    description: "A real-time mask detection system using YOLO (You Only Look Once) algorithm to identify people wearing or not wearing face masks.",
    imageUrl: "https://satorianalytics.com/images/news/mask-detection/mask%20detection-first.png",
    imageHint: "mask detection interface",
    tags: ["Python", "OpenCV", "YOLO", "Deep Learning"],
  },
  {
    id: "4",
    title: "Handwriting Recognition",
    description: "A TensorFlow-based model for recognizing handwritten digits and characters, trained on the MNIST dataset.",
    imageUrl: "https://b2633864.smushcdn.com/2633864/wp-content/uploads/2020/08/ocr_keras_tensorflow_datasets.png?lossy=2&strip=1&webp=1",
    imageHint: "neural network",
    tags: ["TensorFlow", "Python", "Keras", "Machine Learning"],
  },
  {
    id: "5",
    title: "Huffman Coding Implementation",
    description: "An implementation of the Huffman coding algorithm for lossless data compression. This project demonstrates understanding of priority queues and tree data structures to achieve efficient data encoding.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "data compression algorithm",
    tags: ["JavaScript", "Data Structures", "Algorithms", "Huffman Coding"],
    repoLink: "", 
  },
  {
    id: "6",
    title: "Asymptotic Genius",
    description: "A project focused on the analysis and understanding of algorithmic complexity (Big O notation). Explores various algorithms and their performance characteristics. Implemented in JavaScript.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "algorithmic analysis",
    tags: ["JavaScript", "Algorithms", "Complexity Analysis", "Data Structures"],
    repoLink: "https://github.com/Harman717/Asymptotic-genius",
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

