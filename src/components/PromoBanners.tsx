import React from 'react';
import { motion } from 'framer-motion';

const banners = [
  {
    id: 1,
    gradient: 'from-indigo-900 via-indigo-700 to-indigo-500',
    emoji: '⚡',
    tag: 'LIMITED OFFER',
    headline: 'SAVE 30–50%',
    subheadline: 'Power Banks',
    description: 'Starting at Rs.2,499',
    note: 'Nationwide Cash on Delivery',
    cta: 'Shop Power Banks',
    ctaStyle: 'bg-orange-500 hover:bg-orange-400 text-white',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.4) 0%, transparent 60%)',
  },
  {
    id: 2,
    gradient: 'from-slate-900 via-slate-700 to-slate-600',
    emoji: '🔊',
    tag: 'EXPERIENCE AUDIO',
    headline: 'Stereo Sound',
    subheadline: 'Bluetooth Speakers',
    description: 'Starting at Rs.1,799',
    note: 'Premium Audio Quality',
    cta: 'Shop Speakers',
    ctaStyle: 'bg-white text-slate-900 hover:bg-gray-100',
    pattern: 'radial-gradient(circle at 20% 80%, rgba(251,146,60,0.3) 0%, transparent 60%)',
  },
];

const PromoBanners: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {banners.map((banner, i) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-gradient-to-br ${banner.gradient} rounded-2xl overflow-hidden p-6 sm:p-8`}
              style={{ backgroundImage: banner.pattern }}
            >
              {/* Decorative Circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{banner.emoji}</div>
                <span className="inline-block text-white/70 text-xs font-bold tracking-widest uppercase mb-2">
                  {banner.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-1">
                  {banner.headline}
                </h3>
                <p className="text-white/80 font-semibold text-lg mb-1">{banner.subheadline}</p>
                <p className="text-orange-400 font-bold text-xl mb-1">{banner.description}</p>
                <p className="text-white/50 text-xs mb-5">🚚 {banner.note}</p>

                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-colors ${banner.ctaStyle}`}
                >
                  {banner.cta} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
