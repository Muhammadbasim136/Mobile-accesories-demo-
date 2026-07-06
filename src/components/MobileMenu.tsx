import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Headphones, Zap, Shield, MapPin, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop All', href: '#products' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#best-selling' },
  { label: 'Track Order', href: '#footer' },
  { label: 'Contact', href: '#footer' },
];

const categories = [
  { label: 'Audio (Earbuds & Speakers)', icon: Headphones, color: 'text-indigo-600' },
  { label: 'Power (Banks, Chargers, Cables)', icon: Zap, color: 'text-orange-500' },
  { label: 'Protection (Cases & Glass)', icon: Shield, color: 'text-emerald-600' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col overflow-y-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-indigo-700 text-white flex-shrink-0">
              <div>
                <span className="font-black text-lg tracking-tight">Tech-Trends</span>
                <p className="text-xs text-indigo-200 mt-0.5">Power Up Your Everyday</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-indigo-600 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="px-4 py-4 flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                  className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-medium transition-colors min-h-[44px] group"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-indigo-500 transition-colors" />
                </motion.a>
              ))}

              <div className="my-4 border-t border-gray-100" />

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Categories</p>
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.a
                    key={cat.label}
                    href="#"
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + i) * 0.06 + 0.1, duration: 0.3 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[44px]"
                  >
                    <Icon size={18} className={cat.color} />
                    <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                  </motion.a>
                );
              })}

              <div className="my-4 border-t border-gray-100" />

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-3 space-y-3"
              >
                <a href="https://wa.me/923001234567" className="flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 transition-colors">
                  <Phone size={16} className="text-green-500 flex-shrink-0" />
                  <span>WhatsApp: +92 300 1234567</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-indigo-500 flex-shrink-0" />
                  <span>Pakistan · Nationwide Delivery</span>
                </div>
              </motion.div>
            </nav>

            {/* Bottom CTA */}
            <div className="px-4 py-4 border-t border-gray-100 flex-shrink-0">
              <a
                href="#products"
                onClick={onClose}
                className="block w-full text-center py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Shop Now
              </a>
              <p className="text-center text-xs text-gray-400 mt-2">🚚 Free Delivery • 💳 Cash on Delivery</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
