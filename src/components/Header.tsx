const Header = () => {
  return (
    <div className="bg-white border-b">
      {/* 1. Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded">
            CA
          </div>
          MONK
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900">Tools</a>
          <a href="#" className="hover:text-gray-900">Practice</a>
          <a href="#" className="hover:text-gray-900">Events</a>
          <a href="#" className="hover:text-gray-900">Job Board</a>
          <a href="#" className="hover:text-gray-900">Points</a>
        </nav>

        {/* Profile Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Profile
        </button>
      </div>

      {/* 2. Hero Title Section */}
      <div className="text-center py-10 pb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          CA Monk Blog
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </div>
    </div>
  );
};

export default Header;