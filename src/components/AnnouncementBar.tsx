import React from 'react';
import { X } from 'lucide-react';

const messages = [
  '🚚 Free Delivery Nationwide on All Orders',
  '💳 Cash on Delivery Available Across Pakistan',
  '🎉 Flat 15% Off — Use Code: TECH15',
  '📦 7-Day Easy Replacement Guarantee',
  '⚡ JazzCash & EasyPaisa Accepted',
];

const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <div className="bg-indigo-700 text-white text-sm py-2 relative overflow-hidden z-50">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...messages, ...messages].map((msg, i) => (
              <span key={i} className="mx-8 font-medium tracking-wide">{msg}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 ml-2 mr-3 hover:opacity-75 transition-opacity"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
