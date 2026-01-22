import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreateBlogForm from './components/CreateBlogForm';
import Header from './components/Header';
import { BlogPost } from './types';
import { fetchBlogs } from './services/api';
// 1. IMPORT SHADCN BUTTON
import { Button } from "@/components/ui/button";

function App() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { data: blogs = [], isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <div className="p-10 text-center">Loading articles...</div>;
  if (error) return <div className="p-10 text-center text-red-500">Error connecting to server</div>;

  return (
    <div className="flex flex-col h-screen bg-white">
      
      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden border-t">
        
        {/* LEFT SIDEBAR */}
        <div className="w-1/3 border-r h-full flex flex-col bg-gray-50/30">
          <div className="p-4 flex justify-between items-center bg-white sticky top-0 z-10 border-b">
            <h1 className="font-bold text-xl text-gray-800">Latest Articles</h1>
            
            {/* 2. UPDATED BUTTON COMPONENT (Shadcn) */}
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="sm"
              className="text-xs font-bold bg-black text-white hover:bg-gray-800"
            >
              {showForm ? 'Close' : '+ New Post'}
            </Button>

          </div>
          <div className="overflow-y-auto flex-1">
            {showForm && <div className="p-2"><CreateBlogForm onClose={() => setShowForm(false)} /></div>}
            <BlogList 
              blogs={blogs} 
              onSelectBlog={(blog) => setSelectedBlog(blog)} 
              activeId={selectedBlog?.id}
            />
          </div>
        </div>

        {/* RIGHT MAIN PANEL */}
        <div className="w-2/3 h-full overflow-y-auto bg-white">
          {selectedBlog ? (
            <BlogDetail blog={selectedBlog} />
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-gray-400">
              <p>Select an article to read</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;