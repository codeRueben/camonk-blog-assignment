export interface BlogPost {
  
  id: string; 
  title: string;
  category: string[]; 
  description: string; 
  date: string;
  coverImage: string; 
  content: string;

  
  readTime?: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
}