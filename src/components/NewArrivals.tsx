import React from 'react';
import { motion } from 'framer-motion';
import { newArrivals } from '../data/products';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  return (
    <section id="new-arrivals" className="py-14 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-2">
              ✨ Just In
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              New Arrivals
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg">
              The latest additions to our collection — fresh tech, premium quality.
            </p>
          </div>
          <a
            href="#new-arrivals"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl font-semibold text-sm transition-colors"
          >
            View All New →
          </a>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {newArrivals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
