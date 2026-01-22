import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BlogPost } from '../types';
import { deleteBlog } from '../services/api';

interface BlogListProps {
  blogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
  activeId?: string;
}

const BlogList = ({ blogs, onSelectBlog, activeId }: BlogListProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this article?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="space-y-4 p-4">
      {blogs.map((blog) => (
        <div 
          key={blog.id}
          onClick={() => onSelectBlog(blog)}
          className={`
            group relative cursor-pointer p-4 rounded-xl border transition-all duration-200 
            ${activeId === blog.id 
              ? 'bg-white border-blue-500 shadow-sm' 
              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }
          `}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-2">
              {/* Uses 'category' instead of 'tags' */}
              {blog.category.map((cat, index) => (
                <span key={index} className="px-2 py-1 text-[10px] font-bold bg-gray-100 rounded text-gray-600">
                  {cat}
                </span>
              ))}
            </div>
            
            <button
              onClick={(e) => handleDelete(e, blog.id)}
              className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
              title="Delete Article"
            >
              🗑️
            </button>
          </div>

          <h3 className="font-bold text-gray-800 mb-2 pr-6">{blog.title}</h3>
          
          <div className="flex justify-between items-end">
            {/* Uses 'description' instead of 'excerpt' */}
            <p className="text-sm text-gray-500 line-clamp-2 flex-1">{blog.description}</p>
            <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
              {new Date(blog.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogList;