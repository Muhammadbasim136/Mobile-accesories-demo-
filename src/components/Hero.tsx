import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    badge: '🎧 NEW ARRIVAL',
    headline: 'Power Up Your',
    highlight: 'Everyday',
    subtext: 'Premium wireless audio that redefines your listening experience. Starting from just Rs.1,799.',
    cta: 'Shop Earbuds',
    ctaHref: '#products',
    accent: 'from-slate-950/90 via-slate-900/60 to-transparent',
    badgeColor: 'bg-amber-500/95',
    ctaColor: 'bg-amber-300 hover:bg-amber-200',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    badge: '⚡ BEST SELLER',
    headline: 'Stay Charged,',
    highlight: 'Stay Ahead',
    subtext: 'High-capacity power banks with fast charging. Never run out of battery again. From Rs.2,499.',
    cta: 'Shop Power Banks',
    ctaHref: '#products',
    accent: 'from-slate-950/90 via-slate-900/55 to-transparent',
    badgeColor: 'bg-amber-500/95',
    ctaColor: 'bg-amber-300 hover:bg-amber-200',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    badge: '🛡️ PREMIUM PROTECTION',
    headline: 'Protect What',
    highlight: 'Matters Most',
    subtext: 'Military-grade cases and 9H tempered glass. Your phone, fully protected — stylishly. From Rs.599.',
    cta: 'Shop Protection',
    ctaHref: '#products',
    accent: 'from-slate-950/90 via-slate-900/55 to-transparent',
    badgeColor: 'bg-amber-500/95',
    ctaColor: 'bg-amber-300 hover:bg-amber-200',
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, isPaused]);

  const slide = slides[current];

  const textVariants = {
    hidden: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    visible: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Images */}
      <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[680px]">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
              loading={current === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`content-${slide.id}`}
                  custom={direction}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="space-y-3 sm:space-y-4"
                >
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className={`inline-block text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full ${slide.badgeColor}`}
                  >
                    {slide.badge}
                  </motion.span>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg"
                  >
                    {slide.headline}
                    <br />
                    <span className="text-amber-200">{slide.highlight}</span>
                  </motion.h1>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-white/90 text-sm sm:text-base md:text-lg max-w-sm font-medium drop-shadow"
                  >
                    {slide.subtext}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="flex gap-3 flex-wrap"
                  >
                    <motion.a
                      href={slide.ctaHref}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={`${slide.ctaColor} text-slate-950 font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-colors`}
                    >
                      {slide.cta} →
                    </motion.a>
                    <motion.a
                      href="#categories"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/90 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base border border-amber-400/25 transition-colors"
                    >
                      Browse All
                    </motion.a>
                  </motion.div>

                  {/* Trust Badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="hidden sm:flex gap-4 flex-wrap"
                  >
                    {['🚚 Free Delivery', '💳 Cash on Delivery', '🔄 7-Day Replacement'].map(badge => (
                      <span key={badge} className="text-xs text-amber-200 font-medium">
                        {badge}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full transition-all border border-white/30 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full transition-all border border-white/30 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full min-h-[8px] min-w-[8px]"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.5)',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {current + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
};

export default Hero;
