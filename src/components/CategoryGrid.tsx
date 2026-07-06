import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-widest mb-2">
            Browse By Category
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            Shop Your Favorites
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
            Explore our wide range of premium mobile accessories, curated for every need.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#products"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 block"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[5/4]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.08]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2">
                      {cat.name}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5">{cat.count} Products</p>
                  </motion.div>

                      {/* Explore link */}
                  <div className="flex items-center gap-1 text-orange-400 text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Collection</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
