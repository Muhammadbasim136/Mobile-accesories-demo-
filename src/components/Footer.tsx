import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-400 text-slate-950 rounded-xl px-3 py-2 font-black text-sm shadow-lg shadow-amber-500/20">
                <span className="text-slate-950">TT</span>
              </div>
              <div>
                <p className="font-black text-white text-sm leading-none">Tech-Trends</p>
                <p className="text-amber-300 text-xs">Mobile Accessories</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-5 max-w-xs">
              Karachi’s elite mobile accessories showroom—stylish cases, fast chargers, audio, and premium phone essentials.
            </p>
            <p className="text-amber-300 font-semibold text-sm italic mb-5">"Luxury Mobile Gear. Delivered Fast."</p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.896 0H5.104C2.289 0 0 2.289 0 5.104v13.792C0 21.711 2.289 24 5.104 24h6.692V14.705h-2.274v-3.617h2.274V8.302c0-2.255 1.378-3.484 3.392-3.484.962 0 1.79.072 2.03.104v2.356h-1.394c-1.094 0-1.307.52-1.307 1.283v1.682h2.614l-.34 3.617h-2.274V24h4.463C21.711 24 24 21.711 24 18.896V5.104C24 2.289 21.711 0 18.896 0z" />
                    </svg>
                  ),
                  href: 'https://www.facebook.com/TechTrendsMobileAccessories',
                  label: 'Facebook',
                  color: 'hover:bg-blue-600',
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.77 1.03 4.92 4.92 0 011.03 1.77c.163.457.35 1.257.403 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.924 4.924 0 01-1.03 1.77 4.924 4.924 0 01-1.77 1.03c-.457.163-1.257.35-2.427.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.77-1.03 4.92 4.92 0 01-1.03-1.77c-.163-.457-.35-1.257-.403-2.427C2.175 15.584 2.163 15.2 2.163 12s.012-3.583.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 011.03-1.77 4.92 4.92 0 011.77-1.03c.457-.163 1.257-.35 2.427-.403C8.416 2.175 8.8 2.163 12 2.163zm0-2.163C8.734 0 8.332.013 7.052.072 5.77.131 4.66.352 3.705.68a7.15 7.15 0 00-2.605 1.663A7.147 7.147 0 00.68 4.948c-.328.955-.549 2.065-.608 3.347C.013 8.332 0 8.734 0 12c0 3.266.013 3.668.072 4.948.059 1.282.28 2.392.608 3.347a7.13 7.13 0 001.663 2.605 7.13 7.13 0 002.605 1.663c.955.328 2.065.549 3.347.608 1.28.059 1.682.072 4.948.072s3.668-.013 4.948-.072c1.282-.059 2.392-.28 3.347-.608a7.128 7.128 0 002.605-1.663 7.128 7.128 0 001.663-2.605c.328-.955.549-2.065.608-3.347.059-1.28.072-1.682.072-4.948s-.013-3.668-.072-4.948c-.059-1.282-.28-2.392-.608-3.347a7.128 7.128 0 00-1.663-2.605A7.128 7.128 0 0020.295.68C19.34.352 18.23.131 16.948.072 15.668.013 15.266 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                  ),
                  href: 'https://www.instagram.com/techtrendsmobileaccessories',
                  label: 'Instagram',
                  color: 'hover:bg-pink-600',
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184C18.45 2.574 12 2.574 12 2.574s-6.45 0-7.615.61C2.565 3.25 2 4.692 2 7.5v9c0 2.809.565 4.25 2.385 4.917C5.55 21.426 12 21.426 12 21.426s6.45 0 7.615-.61C21.435 20.75 22 19.308 22 16.5v-9c0-2.808-.565-4.25-2.385-4.316zM9.7 16.6V7.4l7.4 4.6-7.4 4.6z" />
                    </svg>
                  ),
                  href: 'https://www.youtube.com/@TechTrendsMobileAccessories',
                  label: 'YouTube',
                  color: 'hover:bg-red-600',
                },
                {
                  icon: Globe2,
                  href: 'https://techtrends.pk',
                  label: 'Website',
                  color: 'hover:bg-amber-500',
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9.5 3.5h5v5h-5v-5zM4 8.5h5v12H4v-12zm11 0h5v12h-5v-12zm-2.5 7.5h-5v-5h5v5z" />
                    </svg>
                  ),
                  href: 'https://www.tiktok.com/@TechTrendsMobileAccessories',
                  label: 'TikTok',
                  color: 'hover:bg-black',
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-slate-800 ${social.color} text-amber-300 hover:text-white rounded-xl flex items-center justify-center transition-colors min-h-[36px] min-w-[36px]`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact */}
            <div className="mt-5 space-y-2">
              <a href="https://wa.me/923232255520" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-amber-200 hover:text-amber-300 transition-colors">
                <Phone size={14} className="text-amber-300 flex-shrink-0" />
                +92 323 2255520 (WhatsApp)
              </a>
              <a href="mailto:support@techtrends.pk" className="flex items-center gap-2 text-sm text-amber-200 hover:text-amber-300 transition-colors">
                <Mail size={14} className="text-amber-300 flex-shrink-0" />
                support@techtrends.pk
              </a>
              <div className="flex items-start gap-2 text-sm text-amber-200">
                <MapPin size={14} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Shop #129, West Point Tower, Phase 2 EXT, Karachi</span>
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
                    className="text-sm text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span className="text-amber-300">›</span> {link.label}
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
                  <a href="#" className="text-sm text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                    <span className="text-amber-300">›</span> {cat}
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
                    <a href="#" className="text-sm text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                    <span className="text-amber-300">›</span> {policy}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="space-y-2">
              <span className="bg-amber-900/50 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                ✓ Cash on Delivery
              </span>
              <br/>
              <span className="bg-amber-900/50 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                🔄 7-Day Replacement
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-amber-300 mb-3 font-medium uppercase tracking-wider">Accepted Payment Methods</p>
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
              <p className="text-xs text-amber-300">🔒 Secure & Trusted Shopping</p>
              <p className="text-xs text-amber-300 mt-1">Pakistan's #1 Mobile Accessories Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-amber-300">
            © {new Date().getFullYear()} Tech-Trends Mobile Accessories. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Made with ❤️ in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
