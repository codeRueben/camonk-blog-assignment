import { BlogPost } from '../types';

interface BlogDetailProps {
  blog: BlogPost;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  if (!blog) return null;

  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">{line.replace('### ', '')}</h3>;
      if (line.startsWith('* ')) return <li key={index} className="ml-4 mb-2 text-gray-700"><span className="mr-2 text-blue-500">•</span>{line.replace('* ', '')}</li>;
      if (line.startsWith('> ')) return <blockquote key={index} className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 rounded-r-lg text-gray-700 italic">{line.replace('> ', '').replace(/"/g, '')}</blockquote>;
      if (line.trim() === '') return <div key={index} className="h-4"></div>;
      return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="w-full h-64 md:h-80 relative">
        {/* Uses 'coverImage' instead of 'image' */}
        <img 
          src={blog.coverImage || 'https://via.placeholder.com/800x400'} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600 font-bold text-xs tracking-wider uppercase">
              {blog.category?.[0] || 'GENERAL'}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs">{blog.readTime || '5 min read'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">Share Article</button>
        </div>

        <div className="grid grid-cols-3 border-y border-gray-100 py-4 mb-8 text-center">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Category</p>
            <p className="font-medium text-gray-900">{blog.category?.[0] || 'General'}</p>
          </div>
          <div className="border-l border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Read Time</p>
            <p className="font-medium text-gray-900">{blog.readTime || '5 Mins'}</p>
          </div>
          <div className="border-l border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Date</p>
            <p className="font-medium text-gray-900">{new Date(blog.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="prose prose-blue max-w-none mb-12">
          {renderContent(blog.content)}
        </div>

        {blog.author && (
          <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={blog.author.avatar} alt={blog.author.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="font-bold text-gray-900">{blog.author.name}</p>
                <p className="text-xs text-blue-600">{blog.author.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogDetail;