'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { XMarkIcon, TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const whatsappNumber = '+254712345678'; // Replace with your number

  // WhatsApp order message
  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map(
        (item) =>
          `🛒 ${item.name} (${item.selectedWeight}) x ${item.quantity} = Ksh ${
            item.price * item.quantity
          }`
      )
      .join('%0A');

    return `💚 Hello Nyakazi Organics!%0A
I would like to order the following items:%0A
 ${itemsText}%0A
✅ Total: Ksh ${total}%0A
Please confirm availability and I will provide delivery info. Thank you!`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Changed to dark blue for visibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: '#1e3a8a' }}
            onClick={onClose}
          />

          {/* Sidebar - Changed background to light blue */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 w-full sm:w-96 h-screen z-50 flex flex-col"
            style={{ 
              backgroundColor: '#dbeafe',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
              border: '2px solid #3b82f6'
            }}
          >
            {/* Header - Changed to darker blue */}
            <div 
              className="flex justify-between items-center p-5"
              style={{ 
                background: 'linear-gradient(to right, #1e40af, #2563eb)',
                borderBottom: '2px solid #1e40af'
              }}
            >
              <div>
                <h2 
                  className="text-xl font-bold"
                  style={{ color: '#ffffff !important' }}
                >
                  Your Cart
                </h2>
                <p 
                  className="text-sm mt-1"
                  style={{ color: '#ffffff !important' }}
                >
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full transition-colors duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <XMarkIcon className="w-6 h-6" style={{ color: '#ffffff !important' }} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#eff6ff' }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-12 w-12" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      style={{ color: '#3b82f6' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p 
                    className="mb-6 text-lg"
                    style={{ color: '#1e293b !important' }}
                  >
                    Your cart is empty
                  </p>
                  <Link
                    href="/shop"
                    className="px-6 py-3 rounded-lg transition-all duration-200 font-semibold shadow-md"
                    style={{ 
                      background: 'linear-gradient(to right, #dc2626, #ef4444)',
                      color: '#ffffff !important'
                    }}
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedWeight}`}
                    className="rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                    style={{ 
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={70}
                          height={70}
                          className="object-cover rounded-lg"
                        />
                        <span 
                          className="absolute -top-1 -right-1 text-xs px-2 py-1 rounded-full"
                          style={{ 
                            backgroundColor: '#dc2626',
                            color: '#ffffff !important'
                          }}
                        >
                          {item.selectedWeight}
                        </span>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 
                          className="font-semibold"
                          style={{ color: '#000000 !important' }}
                        >
                          {item.name}
                        </h3>
                        <p 
                          className="text-sm mt-1"
                          style={{ color: '#000000 !important' }}
                        >
                          Ksh {item.price} each
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <div 
                            className="flex items-center rounded-lg overflow-hidden"
                            style={{ border: '2px solid #d1d5db' }}
                          >
                            <button
                              className="p-1 transition-colors"
                              style={{ backgroundColor: '#f3f4f6' }}
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.selectedWeight,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                            >
                              <MinusIcon className="w-4 h-4" style={{ color: '#000000 !important' }} />
                            </button>
                            <span 
                              className="px-3 py-1 font-medium"
                              style={{ 
                                color: '#000000 !important',
                                backgroundColor: '#ffffff'
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              className="p-1 transition-colors"
                              style={{ backgroundColor: '#f3f4f6' }}
                              onClick={() =>
                                updateQuantity(item.id, item.selectedWeight, item.quantity + 1)
                              }
                            >
                              <PlusIcon className="w-4 h-4" style={{ color: '#000000 !important' }} />
                            </button>
                          </div>
                          
                          <button
                            className="p-2 rounded-lg transition-colors"
                            style={{ backgroundColor: '#fef2f2' }}
                            onClick={() => removeFromCart(item.id, item.selectedWeight)}
                          >
                            <TrashIcon className="w-5 h-5" style={{ color: '#dc2626 !important' }} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <p 
                          className="font-bold"
                          style={{ color: '#000000 !important' }}
                        >
                          Ksh {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div 
                className="p-5"
                style={{ 
                  background: 'linear-gradient(to right, #f1f5f9, #e2e8f0)',
                  borderTop: '2px solid #cbd5e1'
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span 
                    className="font-medium"
                    style={{ color: '#000000 !important' }}
                  >
                    Subtotal
                  </span>
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: '#000000 !important' }}
                  >
                    Ksh {total}
                  </span>
                </div>
                
                <a
                  href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                    generateWhatsAppMessage()
                  )}`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg transition-all duration-200 font-semibold shadow-md"
                  style={{ 
                    background: 'linear-gradient(to right, #059669, #10b981)',
                    color: '#ffffff !important'
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" /> Order via WhatsApp
                </a>
                
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={clearCart}
                    className="text-sm font-medium"
                    style={{ color: '#dc2626 !important' }}
                  >
                    Clear Cart
                  </button>
                  <Link
                    href="/shop"
                    className="text-sm font-medium"
                    style={{ color: '#059669 !important' }}
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}