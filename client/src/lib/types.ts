export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ux' | 'engineering' | 'product';
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'design' | 'engineering';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'design' | 'engineering' | 'transition';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
