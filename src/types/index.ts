
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

// contactFormSchema and ContactFormState removed as they are no longer needed.
// Zod import removed as it's no longer used in this file.
