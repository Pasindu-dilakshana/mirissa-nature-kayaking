import { Play, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import video1 from '@/assets/video1.mp4';
import video2 from '@/assets/video2.mp4';
import video3 from '@/assets/video3.mp4';
import image1 from '@/assets/image1.jpeg';
import image2 from '@/assets/image2.jpeg';
import image3 from '@/assets/image3.jpeg';

export function VideoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'video',
      src: video1,
      title: 'Kayaking Through Mangroves',
      alt: 'Peaceful kayaking journey through tropical mangrove tunnels',
    },
    {
      type: 'video',
      src: video2,
      title: 'Serene Water Exploration',
      alt: 'Exploring the calm waters of Thalaramba Lagoon',
    },
    {
      type: 'video',
      src: video3,
      title: 'Sunset Kayaking',
      alt: 'Stunning sunset views while kayaking in the lagoon',
    },
    {
      type: 'image',
      src: image1,
      title: 'Wildlife Encounters',
      alt: 'Rich birdlife and wildlife around the lagoon',
    },
    {
      type: 'image',
      src: image2,
      title: 'Golden Hour Magic',
      alt: 'Golden sunrise reflections on lagoon waters',
    },
    {
      type: 'image',
      src: image3,
      title: 'Mangrove Forest Beauty',
      alt: 'Lush mangrove forest ecosystems',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-emerald-50/30 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
            Lagoon Kayaking Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Thalaramba through these moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => item.type === 'video' && setSelectedVideo(item.src)}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              {/* Overlay */}
              {item.type === 'video' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 transform group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="size-8 text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Title */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            />
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
            >
              <X className="size-6 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}