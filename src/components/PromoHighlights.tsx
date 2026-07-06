import React from 'react';
import { motion } from 'framer-motion';

const promos = [
  {
    id: 1,
    image: '/images/promo-powerbank.jpg',
    tag: 'BEST CHOICE',
    title: 'Power Banks',
    subtitle: 'From Rs.2,499',
    description: 'High-capacity portable chargers for every lifestyle',
    cta: 'Shop Power Banks',
    accent: 'from-indigo-900/70 via-indigo-800/40 to-transparent',
    tagColor: 'bg-indigo-600',
  },
  {
    id: 2,
    image: '/images/promo-earbuds.jpg',
    tag: 'EXCELLENT DESIGN',
    title: 'Earbuds',
    subtitle: 'From Rs.1,799',
    description: 'Crystal-clear audio with premium comfort and style',
    cta: 'Shop Earbuds',
    accent: 'from-orange-900/70 via-orange-800/40 to-transparent',
    tagColor: 'bg-orange-500',
  },
];

const PromoHighlights: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Hot Picks
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            Deals You'll Love
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              {/* Ken Burns Image */}
              <div className="h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover animate-kenburns"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.accent}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8">
                <span className={`inline-block ${promo.tagColor} text-white text-xs font-black px-3 py-1 rounded-full w-fit mb-3`}>
                  {promo.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-1 leading-tight">
                  {promo.title}
                </h3>
                <p className="text-white/80 text-sm mb-1">{promo.description}</p>
                <p className="text-white font-bold text-lg mb-4">{promo.subtitle}</p>
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl text-sm w-fit shadow-lg hover:shadow-xl transition-shadow"
                >
                  {promo.cta} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoHighlights;
