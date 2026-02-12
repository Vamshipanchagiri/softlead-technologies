import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path, sectionId) => {
    setIsMobileMenuOpen(false);
    if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const navItems = [
    { name: 'Home', path: '/', sectionId: 'hero' },
    { name: 'Services', path: '/', sectionId: 'services' },
    { name: 'Why Choose Us', path: '/', sectionId: 'why-choose-us' },
    { name: 'Unique', path: '/', sectionId: 'unique' },
    { name: 'Careers', path: '/careers', sectionId: null },
    { name: 'Contact', path: '/contact', sectionId: null }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-600 rounded-sm flex items-center justify-center shadow-lg group-hover:shadow-gold/20 transition-all duration-300">
              <span className="text-navy font-serif font-bold text-xl">S</span>
            </div>
            <span className="text-white font-serif font-bold text-xl tracking-wide">
              SOFTLEAD <span className="text-gold font-light">TECH</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300 uppercase tracking-widest relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path, item.sectionId)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-gold hover:bg-white/5 rounded-lg transition-all uppercase tracking-widest"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;