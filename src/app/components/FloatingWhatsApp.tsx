import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all group"
        aria-label="Book via WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="size-7 sm:size-8 text-white fill-white" />
        
        {/* Pulse Animation */}
        <motion.span 
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ 
            scale: [1, 1.3, 1.3, 1],
            opacity: [0.7, 0, 0, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            className="fixed bottom-6 right-24 sm:right-28 z-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-4 pr-10 max-w-[250px] border border-gray-100 relative">
              <motion.button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close tooltip"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="size-4" />
              </motion.button>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Need help booking?
              </p>
              <p className="text-xs text-gray-600">
                Chat with us on WhatsApp for instant booking!
              </p>
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}