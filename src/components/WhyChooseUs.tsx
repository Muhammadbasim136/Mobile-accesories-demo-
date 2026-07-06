import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield, Truck, DollarSign, MessageCircle,
  RefreshCw, CreditCard
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    title: 'Quality You Can Trust',
    desc: 'All products are tested and verified for quality. We partner only with trusted manufacturers.',
  },
  {
    icon: Truck,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    title: 'Fast Nationwide Delivery',
    desc: 'Deliver to every city in Pakistan within 2–5 business days. Express options available.',
  },
  {
    icon: DollarSign,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    title: 'Affordable Premium Pricing',
    desc: 'Get top-tier accessories at prices that won\'t break the bank. Best value guaranteed.',
  },
  {
    icon: MessageCircle,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    title: '24/7 WhatsApp Support',
    desc: 'Our friendly support team is available around the clock on WhatsApp. We\'re always here.',
  },
  {
    icon: RefreshCw,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    title: '7-Day Easy Replacement',
    desc: 'Not satisfied? Get a hassle-free replacement within 7 days — no questions asked.',
  },
  {
    icon: CreditCard,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    title: 'Cash on Delivery',
    desc: 'Pay when you receive your order. We also accept JazzCash, EasyPaisa, and bank transfer.',
  },
];

const counters = [
  { label: 'Happy Customers', value: 50000, suffix: '+', prefix: '' },
  { label: 'Products Sold', value: 1000, suffix: '+', prefix: '' },
  { label: 'Cities Covered', value: 100, suffix: '+', prefix: '' },
  { label: 'Average Rating', value: 4.9, suffix: '⭐', prefix: '' },
];

// Animated Counter Hook
function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const start = Date.now();
    const isDecimal = !Number.isInteger(target);
    const startVal = 0;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (target - startVal) * eased;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return count;
}

const CounterItem: React.FC<{ counter: typeof counters[0]; isInView: boolean; index: number }> = ({ counter, isInView, index }) => {
  const count = useCounter(counter.value, isInView);

  const isDecimal = !Number.isInteger(counter.value);
  const display = isDecimal ? (count as number).toFixed(1) : (count as number).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
        {counter.prefix}{display}{counter.suffix}
      </div>
      <div className="text-sm text-indigo-200 font-medium mt-1">{counter.label}</div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterRef, { once: true, amount: 0.3 });

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Why Tech-Trends?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            The Tech-Trends Difference
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            We're not just selling accessories — we're delivering a premium experience backed by real service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 sm:p-6 rounded-2xl border ${f.border} ${f.bg} group cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={f.color} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counters */}
        <div
          ref={counterRef}
          className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {counters.map((c, i) => (
              <CounterItem key={c.label} counter={c} isInView={isCounterInView} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-8 pt-8 border-t border-indigo-600"
          >
            {['🚚 Free Delivery', '💳 Cash on Delivery', '⚡ JazzCash & EasyPaisa', '🔄 7-Day Replacement', '💬 24/7 WhatsApp'].map(badge => (
              <span key={badge} className="text-white/80 text-xs sm:text-sm font-medium bg-indigo-600/50 px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
