import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950" />
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,158,11,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(15,23,42,0.3) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-amber-400/15 border border-amber-300/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Mail size={28} className="text-amber-300" />
          </div>

          {/* Headline */}
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-widest block mb-3">
            Newsletter
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and flash sales. Unsubscribe anytime.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3.5 rounded-xl bg-slate-900/75 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/60 text-sm backdrop-blur-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px] ${
                submitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-orange-500 hover:bg-orange-400 text-white'
              }`}
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  Subscribed!
                </>
              ) : (
                'Get 10% Off →'
              )}
            </motion.button>
          </form>

          <p className="text-white/40 text-xs mt-4">
            No spam ever. By subscribing you agree to our Privacy Policy.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-amber-400/15">
            {['50,000+ Subscribers', 'Weekly Deals', 'Exclusive Offers', 'Easy Unsubscribe'].map(item => (
              <span key={item} className="text-amber-200 text-xs font-medium flex items-center gap-1">
                <Check size={12} className="text-amber-300" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
