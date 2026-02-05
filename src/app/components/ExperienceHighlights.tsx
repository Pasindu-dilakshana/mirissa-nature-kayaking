import { Waves, Shield, Leaf, Sunrise } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function ExperienceHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Waves,
      title: 'Calm Lagoon Waters',
      description: 'Serene, flat water perfect for a relaxing paddle through nature',
    },
    {
      icon: Shield,
      title: 'Safe for Beginners',
      description: 'Suitable for beginners with calm waters and safety guidance',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Experience',
      description: 'Sustainable tourism that respects and protects the natural environment',
    },
    {
      icon: Sunrise,
      title: 'Perfect for Sunrise & Sunset',
      description: 'Witness breathtaking colors reflecting on the calm lagoon waters',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            Why Choose Garanduwa Lagoon?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An unforgettable eco-tourism experience in the heart of Sri Lanka's natural beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-5"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <highlight.icon className="size-7 text-emerald-700" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}