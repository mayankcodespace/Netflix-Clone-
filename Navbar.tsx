import  { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, ChevronDown, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';
  const navLinks = !isHomePage ? [
    { name: 'Home', path: '/browse' },
    { name: 'TV Shows', path: '/browse?category=tv' },
    { name: 'Movies', path: '/browse?category=movies' },
    { name: 'New & Popular', path: '/browse?category=new' },
    { name: 'My List', path: '/browse?category=mylist' },
  ] : [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled || showSearch || isHomePage ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to={isHomePage ? '/' : '/browse'} className="flex-shrink-0">
              <div className="text-red-600 font-bold text-3xl">Netflix</div>
            </Link>
            
            {!isHomePage && (
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {!isHomePage && (
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                {showSearch ? (
                  <div className="flex items-center bg-black border border-white px-2">
                    <Search size={20} className="text-white" />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Titles, people, genres"
                      className="bg-black text-white px-2 py-1 outline-none w-48"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={() => !searchQuery && setShowSearch(false)}
                    />
                  </div>
                ) : (
                  <button className="text-gray-300 hover:text-white" onClick={toggleSearch}>
                    <Search size={20} />
                  </button>
                )}
              </div>
              
              <button className="text-gray-300 hover:text-white relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center text-gray-300 hover:text-white"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="w-8 h-8 rounded bg-blue-500 mr-1 flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-800 rounded shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-800">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
                          <User size={18} className="text-white" />
                        </div>
                        <span className="font-medium">Profile 1</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 rounded bg-green-500 flex items-center justify-center">
                          <User size={18} className="text-white" />
                        </div>
                        <span>Profile 2</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded bg-yellow-500 flex items-center justify-center">
                          <User size={18} className="text-white" />
                        </div>
                        <span>Kids</span>
                      </div>
                    </div>
                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-800">Account</Link>
                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-800">Help Center</Link>
                    <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-800">Sign out of Netflix</Link>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {isHomePage && (
            <div className="flex items-center">
              <Link to="/login" className="text-white font-medium hover:text-gray-300 mr-4">
                Sign In
              </Link>
              <Link to="/browse" className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700">
                Get Started
              </Link>
            </div>
          )}
          
          {!isHomePage && (
            <div className="md:hidden flex items-center space-x-4">
              {showSearch ? (
                <div className="flex items-center bg-black border border-white px-2">
                  <Search size={18} className="text-white" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search"
                    className="bg-black text-white px-2 py-1 outline-none w-32"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => !searchQuery && setShowSearch(false)}
                  />
                </div>
              ) : (
                <button className="text-gray-300 hover:text-white" onClick={toggleSearch}>
                  <Search size={18} />
                </button>
              )}
              
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="w-7 h-7 rounded bg-blue-500 flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 