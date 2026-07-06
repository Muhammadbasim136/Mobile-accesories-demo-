import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // On desktop, show 3 at a time; on mobile, show 1
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(c => Math.min(c + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => Math.max(c - 1, 0));
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setCurrent(c => {
        if (c >= maxIndex) return 0;
        return c + 1;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [isPaused, maxIndex]);

  const visibleItems = testimonials.slice(current, current + itemsPerView);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            ⭐ Customer Love
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Real reviews from real customers across Pakistan. Their words, not ours.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-5 ${
                itemsPerView === 3 ? 'grid-cols-3' :
                itemsPerView === 2 ? 'grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {visibleItems.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow relative"
                >
                  {/* Quote icon */}
                  <Quote size={28} className="text-indigo-100 absolute top-4 right-4 rotate-180" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.location}, Pakistan</p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              disabled={current === 0}
              className={`p-3 rounded-full border-2 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                current === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className={`p-3 rounded-full border-2 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                current >= maxIndex
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
