'use client';

import {
  ArrowRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 tracking-tighter">
                STAY IN THE LOOP
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe to our newsletter for exclusive drops, early access to
                collections, and behind-the-scenes content from our creative
                journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-gray-700 rounded-none px-4 py-3 text-sm 
                           focus:border-white focus:outline-none transition-colors duration-300
                           placeholder:text-gray-500"
                />
              </div>
              <button
                className="bg-white text-black px-6 sm:px-8 py-3 text-sm font-medium 
                               hover:bg-gray-200 transition-all duration-300 hover:scale-105
                               flex items-center justify-center gap-2 group"
              >
                SUBSCRIBE
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 tracking-tighter leading-none">
              SUMMER
              <br />
              THE
              <br />
              COLLECTION/
              <br />
              WEBSHOP
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 lg:mb-8 max-w-md">
              Curating exceptional pieces that tell stories. From limited
              collections to everyday essentials, we bring you carefully
              selected items that inspire and elevate your style.
            </p>

            <div className="flex space-x-3 lg:space-x-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2 lg:p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black 
                           transition-all duration-300 hover:scale-110 group"
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 tracking-wide">SHOP</h4>
            <ul className="space-y-3 lg:space-y-4 text-sm">
              {[
                'All Collections',
                'New Arrivals',
                'Clothing',
                'Accessories',
                'Music',
                'Print & Art',
                'Sale',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 
                                       relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 tracking-wide">CUSTOMER CARE</h4>
            <ul className="space-y-3 lg:space-y-4 text-sm">
              {[
                'Contact Us',
                'Size Guide',
                'Shipping Info',
                'Returns',
                'FAQ',
                'Track Order',
                'Gift Cards',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 
                                       relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 tracking-wide">CONNECT</h4>
            <div className="space-y-3 lg:space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  123 Creative Street
                  <br />
                  Design District
                  <br />
                  Barcelona, 08001
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+34123456789"
                  className="hover:text-white transition-colors duration-200"
                >
                  +34 123 456 789
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:hello@summer.shop"
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@summer.shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2 text-center md:text-left">
              <span>© 2025 Summer Collection. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Málaga, Spain.</span>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
