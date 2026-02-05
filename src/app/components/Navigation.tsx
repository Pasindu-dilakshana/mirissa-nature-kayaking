import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '@/assets/logo.jpeg';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* COMBINED LOGO AND TITLE BUTTON */}
          <motion.button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3" // gap-3 creates a small, nice space
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={Logo} 
              alt="Mirissa Nature Kayaking Logo" 
              className="h-10 w-10 object-contain rounded-full" // Added rounded-full for better aesthetics if needed
            />
            <span className="text-lg sm:text-xl font-semibold text-emerald-800 hover:text-emerald-700 transition-colors">
              Mirissa Nature Kayaking
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['experience', 'about', 'gallery', 'location'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-emerald-700 transition-colors capitalize"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
            <motion.a 
              href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {['experience', 'about', 'gallery', 'location'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors capitalize"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section}
                </motion.button>
              ))}
              <motion.a 
                href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-emerald-600 text-white text-center rounded-lg hover:bg-emerald-700 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}