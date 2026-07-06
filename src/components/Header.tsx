import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, ShoppingCart, Menu, MapPin, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MegaMenu from './MegaMenu';

interface HeaderProps {
  onSearchOpen: () => void;
  onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchOpen, onMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const megaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleMegaEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    timerRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-white py-3'
      }`}
      initial={false}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0 mr-2">
          <div className="bg-indigo-700 text-white rounded-xl px-3 py-2 font-black text-sm tracking-tight leading-none">
            <span className="text-orange-400">TT</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-gray-900 text-sm leading-none tracking-tight">Tech-Trends</p>
            <p className="text-indigo-600 text-xs font-medium">Mobile Accessories</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {/* Categories Mega Menu Trigger */}
          <div
            ref={megaRef}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
            className="relative"
          >
            <button
              onClick={() => setMegaOpen(v => !v)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
            >
              Categories
              <motion.div
                animate={{ rotate: megaOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={15} />
              </motion.div>
            </button>

            <MegaMenu isOpen={megaOpen} onClose={() => setMegaOpen(false)} />
          </div>

          <a href="#best-selling" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors">
            Best Sellers
          </a>
          <a href="#new-arrivals" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors">
            New Arrivals
          </a>
          <a href="#footer" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors">
            Track Order
          </a>
          <a href="#footer" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Region Badge */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 mr-1">
            <MapPin size={12} className="text-indigo-500" />
            <span>Pakistan · PKR ₨</span>
          </div>

          {/* Search */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSearchOpen}
            className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-700" />
          </motion.button>

          {/* Wishlist */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] hidden sm:flex items-center justify-center"
            aria-label="Wishlist"
          >
            <Heart size={20} className="text-gray-700" />
          </motion.button>

          {/* Cart */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
            className="relative p-2.5 rounded-xl hover:bg-indigo-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Cart"
          >
            <ShoppingCart size={20} className="text-gray-700" />
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
              >
                {totalItems > 9 ? '9+' : totalItems}
              </motion.span>
            )}
          </motion.button>

          {/* Hamburger (mobile) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onMenuOpen}
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ml-1"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-gray-700" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
