import { MessageCircle, Clock, Users, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tourInfo = [
    {
      icon: Clock,
      title: 'Duration',
      description: '1-2 hours per tour',
      detail: 'Sunrise & sunset slots available',
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Group Size',
      description: 'Per kayak (max 2)',
      detail: 'Private tours available',
      color: 'emerald'
    },
    {
      icon: DollarSign,
      title: 'Pricing',
      description: 'Competitive rates',
      detail: 'Contact us for current pricing',
      color: 'emerald'
    },
    {
      icon: MessageCircle,
      title: 'Easy Booking',
      description: 'Chat directly on WhatsApp',
      detail: 'Quick responses guaranteed',
      color: 'emerald'
    }
  ];

  const included = [
    'Professional kayak & equipment',
    'Safety gear & life jackets',
    'Drinking water & snacks',
    'Photo opportunities',
    'Nature & wildlife insights',
    'A guide will be provided'
  ];

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
              Book Your Kayaking Experience
            </h2>
            <p className="text-lg text-gray-600">
              Instant booking via WhatsApp – no forms required
            </p>
          </motion.div>

          {/* Tour Information Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {tourInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="size-5 text-emerald-700" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900">{info.title}</h3>
                </div>
                <p className="text-gray-600">{info.description}</p>
                <p className="text-sm text-gray-500 mt-1">{info.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div 
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ready for an Unforgettable Experience?
            </motion.h3>
            <motion.p 
              className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Book your lagoon kayaking tour instantly via WhatsApp. We're here to answer 
              all your questions and help plan your perfect adventure.
            </motion.p>
            
            <motion.a
              href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 text-lg font-semibold rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="size-6" />
              Book via WhatsApp
            </motion.a>
            
            <motion.p 
              className="text-emerald-100 text-sm mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Available 7 days a week • Quick response time
            </motion.p>
          </motion.div>

          {/* What's Included */}
          <motion.div 
            className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {included.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.0 + (index * 0.05) }}
                >
                  <svg className="size-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}