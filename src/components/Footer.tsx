import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 text-white rounded-xl px-3 py-2 font-black text-sm">
                <span className="text-orange-400">TT</span>
              </div>
              <div>
                <p className="font-black text-white text-sm leading-none">Tech-Trends</p>
                <p className="text-indigo-400 text-xs">Mobile Accessories</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Pakistan's trusted destination for premium mobile accessories. Quality you can feel, prices you'll love.
            </p>
            <p className="text-orange-400 font-semibold text-sm italic mb-5">"Power Up Your Everyday"</p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  ),
                  href: '#', label: 'Instagram', color: 'hover:bg-pink-600'
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  ),
                  href: '#', label: 'Facebook', color: 'hover:bg-blue-600'
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.38a8.28 8.28 0 004.85 1.54V7.38a4.83 4.83 0 01-1.08-.69z"/>
                    </svg>
                  ),
                  href: '#', label: 'TikTok', color: 'hover:bg-black'
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                  href: 'https://wa.me/923001234567', label: 'WhatsApp', color: 'hover:bg-green-600'
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-slate-800 ${social.color} text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-colors min-h-[36px] min-w-[36px]`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact */}
            <div className="mt-5 space-y-2">
              <a href="https://wa.me/923001234567" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                +92 300 1234567 (WhatsApp)
              </a>
              <a href="mailto:support@techtrends.pk" className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail size={14} className="text-indigo-400 flex-shrink-0" />
                support@techtrends.pk
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-orange-400 flex-shrink-0" />
                Pakistan — Nationwide Delivery
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Contact Us', href: '#footer' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '#' },
                { label: 'Track Order', href: '#' },
                { label: 'Sitemap', href: '#' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1"
                  >
                    <span className="text-gray-600">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Collections */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Top Collections</h3>
            <ul className="space-y-2">
              {[
                'Wireless Earbuds',
                'Power Banks',
                'GaN Chargers',
                'Phone Cases',
                'Bluetooth Speakers',
                'Screen Protectors',
                'Car Mounts',
                'Smartwatches',
              ].map(cat => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1">
                    <span className="text-gray-600">›</span> {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Policies & Info</h3>
            <ul className="space-y-2 mb-6">
              {[
                'Shipping Policy',
                'Return & Refund Policy',
                'Warranty Policy',
                'Terms of Service',
                'Privacy Policy',
                'Cookie Policy',
              ].map(policy => (
                <li key={policy}>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1">
                    <span className="text-gray-600">›</span> {policy}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="space-y-2">
              <span className="bg-emerald-900/50 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                ✓ Cash on Delivery
              </span>
              <br/>
              <span className="bg-indigo-900/50 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                🔄 7-Day Replacement
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Accepted Payment Methods</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'COD', bg: 'bg-emerald-800/60', text: 'text-emerald-300', prefix: '💵' },
                  { label: 'JazzCash', bg: 'bg-red-900/60', text: 'text-red-300', prefix: '📱' },
                  { label: 'EasyPaisa', bg: 'bg-green-900/60', text: 'text-green-300', prefix: '📲' },
                  { label: 'Visa', bg: 'bg-blue-900/60', text: 'text-blue-300', prefix: '💳' },
                  { label: 'Mastercard', bg: 'bg-orange-900/60', text: 'text-orange-300', prefix: '💳' },
                  { label: 'Bank Transfer', bg: 'bg-slate-700', text: 'text-gray-300', prefix: '🏦' },
                ].map(p => (
                  <span key={p.label} className={`${p.bg} ${p.text} text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1`}>
                    {p.prefix} {p.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs text-gray-400">🔒 Secure & Trusted Shopping</p>
              <p className="text-xs text-gray-500 mt-1">Pakistan's #1 Mobile Accessories Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Tech-Trends Mobile Accessories. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with ❤️ in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
