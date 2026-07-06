import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeItem, updateQty, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-indigo-600" />
                <span className="font-bold text-gray-900 text-base">Your Cart</span>
                {totalItems > 0 && (
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItems} item{totalItems > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close cart"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-16 px-6 text-center">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={36} className="text-indigo-300" />
                  </div>
                  <p className="font-semibold text-gray-700 mb-1">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mb-6">Start adding some amazing products!</p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={closeCart}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                            {item.name}
                          </p>
                          {item.color && (
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: item.color }} />
                              <span className="text-xs text-gray-400">Color selected</span>
                            </div>
                          )}
                          <p className="text-indigo-700 font-bold text-sm mt-1">
                            Rs.{(item.price * item.quantity).toLocaleString()}
                          </p>

                          {/* Qty Controls */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200">
                              <button
                                onClick={() => updateQty(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="p-1.5 hover:bg-gray-100 rounded-l-lg transition-colors disabled:opacity-40 min-h-[32px] min-w-[32px] flex items-center justify-center"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="px-2 text-sm font-semibold min-w-[24px] text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQty(item.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-gray-100 rounded-r-lg transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                              aria-label="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-4 space-y-3 flex-shrink-0">
                {/* Trust badges */}
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">🚚 Free Delivery</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">💳 Cash on Delivery</span>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium text-sm">Subtotal ({totalItems} items)</span>
                  <span className="font-black text-gray-900 text-lg">Rs.{totalPrice.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400">Shipping calculated at checkout</p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-base"
                >
                  Proceed to Checkout →
                </motion.button>
                <button
                  onClick={closeCart}
                  className="w-full py-3 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
