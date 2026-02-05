import { motion } from 'framer-motion';
import heroImage from '@/assets/hero1.jpeg';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage}
          alt="Kayaking through the peaceful mangroves of Granduwa Lagoon, Sri Lanka"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6 sm:space-y-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lagoon Kayaking in Mirissa, Sri Lanka
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Peaceful kayaking experience through mangroves and calm waters
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book via WhatsApp
            </motion.a>
            
            <motion.button 
              onClick={() => {
                const element = document.getElementById('experience');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white/30 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}