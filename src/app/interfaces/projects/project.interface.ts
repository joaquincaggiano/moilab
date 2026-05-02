export interface Project {
  id: string;
  title: string;
  type: 'own' | 'collaboration';
  collaborator?: string;
  website?: string;
  description?: string;
  image?: string;
}
