export interface Project {
  id: string;
  title: string;
  type: 'own' | 'collaboration';
  collaborator?: string;
  website?: string;
  description?: string;
  image?: string;
  // Detail page fields
  year?: string;
  category?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  tools?: string[];
  highlights?: string[];
}
