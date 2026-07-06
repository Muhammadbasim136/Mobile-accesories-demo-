import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, TrendingUp } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingTags = ['Wireless Earbuds', 'Power Bank', 'GaN Charger', 'Phone Case', 'Bluetooth Speaker', 'Screen Protector', 'USB-C Cable', 'Smartwatch'];

const popularProducts = [
  { name: 'TT AirBeat Pro Earbuds', price: 3499, img: '/images/cat-earbuds.jpg' },
  { name: 'TT PowerMax 20000mAh', price: 4999, img: '/images/cat-powerbank.jpg' },
  { name: 'TT RapidCharge 65W GaN', price: 2799, img: '/images/cat-chargers.jpg' },
  { name: 'TT BassBoom Speaker', price: 3999, img: '/images/cat-speakers.jpg' },
];

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="max-w-3xl mx-auto px-4 pt-24 pb-8">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={onClose}
              aria-label="Close search"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Search Input */}
            <motion.div
              className="relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-indigo-300 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors bg-white shadow-lg"
              />
              {query && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setQuery('')}
                >
                  <X size={18} />
                </button>
              )}
            </motion.div>

            {/* Trending Tags */}
            <motion.div
              className="mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={16} className="text-indigo-600" />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trending Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full transition-colors border border-indigo-200 hover:border-indigo-400"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Popular Products */}
            <motion.div
              className="mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Popular Products</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {popularProducts.map((p) => (
                  <a
                    key={p.name}
                    href="#products"
                    onClick={onClose}
                    className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {p.name}
                      </p>
                      <p className="text-xs font-bold text-indigo-600 mt-1">Rs.{p.price.toLocaleString()}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
