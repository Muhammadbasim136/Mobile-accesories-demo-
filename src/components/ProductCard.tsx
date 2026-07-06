import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  image2?: string;
  badge?: string;
  colors?: string[];
  category?: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [imgError, setImgError] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const savings = product.originalPrice - product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const badgeColors: Record<string, string> = {
    'BEST SELLER': 'bg-amber-400 text-slate-950',
    'HOT': 'bg-amber-400 text-slate-950',
    'NEW': 'bg-amber-400 text-slate-950',
    'PREMIUM': 'bg-amber-400 text-slate-950',
  };

  const badgeColor = product.badge
    ? badgeColors[product.badge] || 'bg-amber-400 text-slate-950'
    : 'bg-amber-400 text-slate-950';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm shadow-black/20 hover:shadow-xl transition-shadow duration-300 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-slate-800">
        {/* Main Image */}
        <motion.img
          src={imgError ? product.image : (isHovered && product.image2 ? product.image2 : product.image)}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
        />

        {/* Shimmer overlay while loading */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
            {product.discount > 0 && product.badge.includes('%')
              ? product.badge
              : product.badge}
            {product.badge !== 'BEST SELLER' && product.badge !== 'HOT' && product.badge !== 'NEW' && product.badge !== 'PREMIUM' && ` ${product.discount}%`}
          </div>
        )}
        {!product.badge && product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}

        {/* Savings badge */}
        <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-sm text-xs font-semibold text-slate-200 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Save Rs.{savings.toLocaleString()}
        </div>

        {/* Wishlist */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setWishlisted(v => !v)}
          className="absolute top-3 right-3 p-2 bg-slate-800 rounded-full shadow-md shadow-black/30 hover:shadow-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={wishlisted ? 'fill-red-500 text-red-500' : 'text-slate-400'}
          />
        </motion.button>

        {/* Quick View */}
        <motion.button
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 right-3 p-2 bg-slate-800 rounded-full shadow-md shadow-black/30 hover:shadow-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
          aria-label="Quick view"
        >
          <Eye size={14} className="text-slate-300" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 mb-2 flex-1">
          {product.name}
        </h3>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1.5 mb-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  selectedColor === color ? 'border-amber-400 scale-110' : 'border-transparent hover:border-slate-400'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-amber-300">
            Rs.{product.price.toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
            Rs.{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAddToCart}
          className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 min-h-[44px] ${
            added
              ? 'bg-emerald-500 text-white'
              : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
          }`}
        >
          {added ? (
            <>✓ Added to Cart</>
          ) : product.colors && product.colors.length > 0 ? (
            <>
              <ShoppingCart size={15} />
              Select Options
            </>
          ) : (
            <>
              <ShoppingCart size={15} />
              Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
