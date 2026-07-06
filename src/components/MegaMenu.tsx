import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Zap, Shield, ChevronRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = [
  {
    title: 'Audio',
    icon: Headphones,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    items: [
      { name: 'Wireless Earbuds', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=60&q=80', count: 24 },
      { name: 'Bluetooth Speakers', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=60&q=80', count: 15 },
      { name: 'Neckbands & IEM', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=60&q=80', count: 18 },
    ],
  },
  {
    title: 'Power',
    icon: Zap,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    items: [
      { name: 'Power Banks', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=60&q=80', count: 18 },
      { name: 'Fast Chargers', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=60&q=80', count: 20 },
      { name: 'Cables & Adapters', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=60&q=80', count: 32 },
    ],
  },
  {
    title: 'Protection',
    icon: Shield,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    items: [
      { name: 'Phone Cases', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=60&q=80', count: 56 },
      { name: 'Screen Protectors', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=60&q=80', count: 28 },
      { name: 'Car Mounts', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=60&q=80', count: 20 },
    ],
  },
];

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 z-30 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Menu Panel */}
          <motion.div
            className="fixed top-[68px] left-0 right-0 bg-white shadow-2xl rounded-b-2xl z-40 border-t border-gray-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-8">
                {menuData.map((col) => {
                  const Icon = col.icon;
                  return (
                    <div key={col.title}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`p-2 rounded-lg ${col.bg}`}>
                          <Icon size={18} className={col.color} />
                        </div>
                        <h3 className={`font-bold text-gray-800 text-sm uppercase tracking-wider`}>
                          {col.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href="#products"
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                              onClick={onClose}
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 transition-colors truncate">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-400">{item.count} Products</p>
                              </div>
                              <ChevronRight size={14} className="text-gray-300 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
                            </a>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#products"
                        className={`mt-4 block text-xs font-semibold ${col.color} hover:underline`}
                        onClick={onClose}
                      >
                        View All {col.title} →
                      </a>
                    </div>
                  );
                })}
              </div>
              {/* Bottom promo strip */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex gap-6 text-xs text-gray-500">
                  <span>🚚 Free Delivery Nationwide</span>
                  <span>💳 Cash on Delivery Available</span>
                  <span>🔄 7-Day Replacement</span>
                </div>
                <a href="#products" className="text-xs font-semibold text-indigo-600 hover:underline" onClick={onClose}>
                  View All Products →
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
