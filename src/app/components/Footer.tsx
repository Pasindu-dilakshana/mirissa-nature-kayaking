import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Garanduwa Lagoon</h3>
            <p className="text-emerald-100 leading-relaxed mb-4">
              Experience the serene beauty of Sri Lanka's mangrove ecosystems through 
              eco-friendly kayaking tours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('experience');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  About the Lagoon
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('gallery');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('location');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-emerald-300 flex-shrink-0" />
                <a href="tel:+94777931611" className="text-emerald-100 hover:text-white transition-colors">
                  +94 777 931 611
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-emerald-300 flex-shrink-0" />
                <a href="mailto:info@thalaramba.com" className="text-emerald-100 hover:text-white transition-colors">
                  info@thalaramba.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-100">
                  Garanduwa Lagoon<br />
                  Western Province, Sri Lanka
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Booking - MODIFIED SECTION */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6 justify-center">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@mirissa.nature.ka?_r=1&_t=ZS-93WORusVjkK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="size-5" />
              </a>
            </div>
            
            <a
              href="https://wa.me/94777931611?text=Hi,%20I'd%20like%20to%20book%20a%20kayaking%20tour%20at%20Garanduwa%20Lagoon,%20Mirissa.%20Please%20share%20the%20details.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-10 pt-8 text-center">
          <p className="text-emerald-200 text-sm">
            © {currentYear} Garanduwa Lagoon Kayaking. All rights reserved.
          </p>
          <p className="text-emerald-300 text-xs mt-2">
            Eco-friendly tourism in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}