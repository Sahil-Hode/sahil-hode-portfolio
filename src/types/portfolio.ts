export interface AboutData {
  name: string;
  role: string;
  highlight: string;
  bio: string;
  profileImage: string;
  resumeLink: string;
  location: string;
  education: string;
  stats: { val: string; label: string }[];
  awards: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  desc: string;
  thumbnail: string;
  tech: string[];
  featured: boolean;
  github: string;
  live: string;
  order: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  desc: string[];
  tech: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Language" | "Design";
  icon: string; // Key for iconMap
}

export interface Socials {
  github: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  email: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface PortfolioCMSData {
  about: AboutData;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  socials: Socials;
  contact: ContactInfo;
}
