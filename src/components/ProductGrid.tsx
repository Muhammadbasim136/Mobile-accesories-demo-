import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-14 sm:py-20 bg-slate-950">
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
            <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-widest mb-2">
              ⚡ Featured Products
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Shop By Favorites
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-lg">
              Hand-picked premium accessories at unbeatable prices with genuine quality guarantee.
            </p>
          </div>
          <a
            href="#best-selling"
            className="flex-shrink-0 text-sm font-semibold text-amber-300 hover:text-amber-100 underline underline-offset-4 transition-colors"
          >
            View All Products →
          </a>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href="#best-selling"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-400/20 transition-colors text-base"
          >
            View All Products
          </motion.a>
          <p className="text-gray-400 text-xs mt-3">1,000+ products available in stock</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
