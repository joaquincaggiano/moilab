export interface Project {
  id: string;
  title: string;
  type: 'own' | 'collaboration';
  website?: string;
  github?: string;
  description?: string;
}
