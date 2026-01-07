'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems, totalItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const whatsappNumber = '+254712345678';

  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map((item) => `${item.name} x ${item.quantity} = Ksh ${item.price * item.quantity}`)
      .join('\n');
    return `Hello! I want to order the following items:\n${itemsText}\nTotal: Ksh ${total}\nPlease confirm availability and provide delivery info.`;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Notification Bar - Modern Design */}
        <div className="hidden md:flex justify-between items-center px-6 md:px-10 py-3 text-sm bg-gradient-to-r from-green-700 to-emerald-700 text-white shadow-sm">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <PhoneIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">+254 712 345 678</span>
          </div>
          
          <div className="flex-1 text-center">
            <span className="inline-flex items-center px-4 py-1 bg-white/20 rounded-full font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              We deliver in 2 business days
            </span>
          </div>
          
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <EnvelopeIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">info@nyakazi-organics.org</span>
          </div>
        </div>

        {/* Mobile Notification Bar */}
        <div className="md:hidden flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-700 to-emerald-700 text-white shadow-sm">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Call Us</span>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Email</span>
          </div>
        </div>

        {/* Navbar - Modern Design */}
        <nav className={`w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20 relative">
            {/* Logo */}
            <Link href="/" className="transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/logo_processed.jpg"
                alt="Nyakazi Organics Logo"
                width={160}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative group py-2">
                <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="relative group py-2">
                <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Shop Dropdown */}
              <div className="relative group">
                <Link href="/shop" className="relative group py-2 flex items-center">
                  <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">Shop</span>
                  <svg className="w-4 h-4 ml-1 text-gray-700 group-hover:text-green-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white shadow-xl rounded-lg mt-2 py-2 w-48 border border-gray-100">
                    <Link href="/shop#honey" className="block px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium">
                      🍯 Honey
                    </Link>
                    <Link href="/shop#seeds" className="block px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium">
                      🌱 Seeds
                    </Link>
                    <Link href="/shop#products" className="block px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium">
                      🛍️ All Products
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative group py-2">
                <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Desktop CTA & Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/shop" 
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Shop Now
              </Link>

              {/* Cart Icon */}
              <div 
                className="relative cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group" 
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-700 group-hover:text-green-700 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow-md">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Hamburger & Cart */}
            <div className="md:hidden flex items-center gap-4">
              {/* Cart Icon */}
              <div 
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200" 
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* Hamburger */}
              <button 
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? 
                  <XMarkIcon className="w-6 h-6 text-gray-700" /> : 
                  <Bars3Icon className="w-6 h-6 text-gray-700" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-30"
                  onClick={() => setMobileOpen(false)}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl z-40 p-6 flex flex-col"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button 
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <XMarkIcon className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="/" 
                      className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/shop" 
                      className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      Shop
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                  
                  <Link 
                    href="/shop" 
                    className="mt-auto px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-center font-semibold shadow-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    Shop Now
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Cart Sidebar - Updated with 80% width on small screens */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              onClick={() => setCartOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 sm:w-96 h-screen bg-white shadow-2xl z-50 flex flex-col"
              style={{ boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-100" style={{ background: 'linear-gradient(to right, #f0fdf4, #d1fae5)' }}>
                <div>
                  <h2 className="text-xl font-bold text-black">Your Cart</h2>
                  <p className="text-sm text-black mt-1">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
                </div>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6 text-black" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-black mb-6 text-lg">Your cart is empty</p>
                    <Link
                      href="/shop"
                      className="px-6 py-3 text-white rounded-lg transition-all duration-200 font-semibold shadow-md"
                      style={{ background: 'linear-gradient(to right, #16a34a, #10b981)' }}
                      onClick={() => setCartOpen(false)}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedWeight}`}
                      className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                      style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}
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
                          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                            {item.selectedWeight}
                          </span>
                        </div>
                        
                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-black">{item.name}</h3>
                          <p className="text-sm text-black mt-1">Ksh {item.price} each</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                className="p-1 hover:bg-gray-100 transition-colors"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.selectedWeight,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                              >
                                <MinusIcon className="w-4 h-4 text-black" />
                              </button>
                              <span className="px-3 py-1 font-medium text-black">{item.quantity}</span>
                              <button
                                className="p-1 hover:bg-gray-100 transition-colors"
                                onClick={() =>
                                  updateQuantity(item.id, item.selectedWeight, item.quantity + 1)
                                }
                              >
                                <PlusIcon className="w-4 h-4 text-black" />
                              </button>
                            </div>
                            
                            <button
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              onClick={() => removeFromCart(item.id, item.selectedWeight)}
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Item Total */}
                        <div className="text-right">
                          <p className="font-bold text-black">Ksh {item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-gray-100" style={{ background: 'linear-gradient(to right, #f9fafb, #f3f4f6)' }}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-black font-medium">Subtotal</span>
                    <span className="text-2xl font-bold text-black">Ksh {total}</span>
                  </div>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber.replace('+','')}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-white rounded-lg transition-all duration-200 font-semibold shadow-md"
                    style={{ background: 'linear-gradient(to right, #16a34a, #10b981)' }}
                  >
                    <FaWhatsapp className="w-5 h-5" /> Order via WhatsApp
                  </a>
                  
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Clear Cart
                    </button>
                    <Link
                      href="/shop"
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                      onClick={() => setCartOpen(false)}
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
    </>
  );
}