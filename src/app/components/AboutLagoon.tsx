import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about.jpeg';

export function AboutLagoon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={aboutImage}
              alt="My local image"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover Garanduwa Lagoon
            </motion.h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {[
                ` Discover Garanduwa LagoonGaranduwa Lagoon is a peaceful natural paradise located
                 near Mirissa and Matara in Sri Lanka’s Southern Province. Surrounded by calm
                  waters and rich greenery, it offers a refreshing escape from crowded tourist 
                  spots and busy beaches`,
                
                `Unlike the open ocean, the lagoon’s waters are gentle and serene, making it an 
                ideal place for kayaking, relaxation, and nature observation. Visitors can enjoy 
                the soothing atmosphere while spotting local birds and experiencing the beauty.`,
                
                `Whether you are seeking adventure on the water or a quiet moment surrounded by nature,
                 Thalaramba Lagoon offers a unique and unforgettable experience on Sri Lanka’s southern coast.`,
                
          
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Experience
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}