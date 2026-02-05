import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            Garanduwa Lagoon – Kayaking Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easily accessible from major tourist destinations in Sri Lanka
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7936.698171989406!2d80.47293643620925!3d5.946539197302477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fcb1dbc9a5d%3A0xcd8c340551147f9b!2sMirrissa%20Nature%20Kayaking!5e0!3m2!1sen!2slk!4v1769851218182!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Garanduwa Lagoon Location Map"
            ></iframe>
          </motion.div>

          {/* Location Details */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-emerald-50 p-6 sm:p-8 rounded-2xl border border-emerald-100"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="size-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Garanduwa Lagoon<br />
                    Western Province, Sri Lanka
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Navigation className="size-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    How to Get There
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• Approximately 10 km (20 minutes) from Mirissa</li>
                    <li>• Just 2 km (5 minutes) from Kamburugamuwa Junction</li>
                    <li>• Only 5 km (10–15 minutes) from Matara Town</li>
                    <li>• Easily accessible via the main coastal highway</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://maps.app.goo.gl/HshoD2HbM2zRmwxD7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="size-5" />
              Open in Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}