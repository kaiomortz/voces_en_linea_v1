export type Category = 
  | 'Noticias' 
  | 'Entrevistas' 
  | 'Cultura' 
  | 'Opinión' 
  | 'Convivencia' 
  | 'ESI' 
  | 'Ambiente' 
  | 'Deportes' 
  | 'Institucional';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string; // Student or Teacher name
  date: string;
  category: Category;
  imageUrl: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  category?: Category;
}