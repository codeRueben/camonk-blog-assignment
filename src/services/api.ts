import axios from 'axios';
import { BlogPost } from '../types';


const API_URL = 'http://localhost:3001/blogs'; 

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const createBlog = async (newBlog: Omit<BlogPost, 'id'>) => {
  const response = await axios.post(API_URL, newBlog);
  return response.data;
};


export const deleteBlog = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};