import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bestSelling } from '../data/products';
import ProductCard from './ProductCard';

const tabs = [
  { key: 'earbuds', label: '🎧 Earbuds' },
  { key: 'powerbanks', label: '⚡ Power Banks' },
  { key: 'speakers', label: '🔊 Speakers' },
] as const;

type TabKey = typeof tabs[number]['key'];

const BestSellingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('earbuds');
  const [direction, setDirection] = useState(1);

  const handleTabChange = (key: TabKey) => {
    const currentIdx = tabs.findIndex(t => t.key === activeTab);
    const newIdx = tabs.findIndex(t => t.key === key);
    setDirection(newIdx > currentIdx ? 1 : -1);
    setActiveTab(key);
  };

  const products = bestSelling[activeTab];

  return (
    <section id="best-selling" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
            🏆 Top Performers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            Best Selling Products
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="relative flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 z-10 min-h-[44px] ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid with animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BestSellingTabs;
