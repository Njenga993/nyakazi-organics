"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    cartItems,
    bundleItems,
    removeFromCart,
    removeBundleFromCart,
    clearCart,
    updateQuantity,
    updateBundleQuantity,
  } = useCart();

  const total =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) +
    bundleItems.reduce(
      (sum, bundle) => sum + bundle.price * bundle.quantity,
      0,
    );

  const totalItems =
    cartItems.reduce((sum, item) => sum + item.quantity, 0) +
    bundleItems.reduce((sum, bundle) => sum + bundle.quantity, 0);

  const whatsappNumber = "+254792533935"; // Replace with your number

  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = Ksh ${item.price * item.quantity}`,
      )
      .join("\n");

    const bundlesText = bundleItems
      .map(
        (bundle) =>
          `${bundle.name} x ${bundle.quantity} = Ksh ${bundle.price * bundle.quantity}`,
      )
      .join("\n");

    return `Hello! I want to order the following items:\n${itemsText}\n${bundlesText}\nTotal: Ksh ${total}\nPlease confirm availability and provide delivery info.`;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Notification Bar - Dark Green */}
        <div
          className="hidden md:flex justify-between items-center px-6 md:px-10 py-3 text-sm text-white shadow-sm"
          style={{ backgroundColor: "#1B4D1B" }}
        >
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <PhoneIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">+254 792 533 935</span>
          </div>

          <div className="flex-1 text-center">
            <span className="inline-flex items-center px-4 py-1 bg-white/10 rounded-full font-medium text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              We deliver in 2 business days
            </span>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <EnvelopeIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">info@nyakazi.org</span>
          </div>
        </div>

        {/* Mobile Notification Bar - Dark Green */}
        <div
          className="md:hidden flex justify-between items-center px-4 py-2 text-white shadow-sm"
          style={{ backgroundColor: "#1B4D1B" }}
        >
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Call Us</span>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Email</span>
          </div>
        </div>

        {/* Navbar - Off-White/Cream Background */}
        <nav
          className={`w-full transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}
          style={{ backgroundColor: "#F5F5DC" }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20 relative">
            {/* Logo */}
            <Link
              href="/"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/logo_processed.jpg"
                alt="Nyakazi Organics"
                width={160}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative group py-2">
                <span
                  className="font-medium transition-colors"
                  style={{ color: "#1A1A1A" }}
                >
                  Home
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: "#DAA520" }}
                ></span>
              </Link>

              <Link href="/about" className="relative group py-2">
                <span
                  className="font-medium transition-colors"
                  style={{ color: "#1A1A1A" }}
                >
                  About
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: "#DAA520" }}
                ></span>
              </Link>

              <Link href="/shop" className="relative group py-2">
                <span
                  className="font-medium transition-colors"
                  style={{ color: "#1A1A1A" }}
                >
                  Shop
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: "#DAA520" }}
                ></span>
              </Link>

              <Link href="/contact" className="relative group py-2">
                <span
                  className="font-medium transition-colors"
                  style={{ color: "#1A1A1A" }}
                >
                  Contact
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: "#DAA520" }}
                ></span>
              </Link>
            </div>

            {/* Desktop CTA & Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/shop"
                className="px-6 py-2.5 rounded-lg text-white hover:opacity-90 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                Shop Now
              </Link>

              {/* Cart Icon */}
              <div
                className="relative cursor-pointer p-2 rounded-lg transition-all duration-200 group"
                style={{ backgroundColor: "#F5F5DC" }}
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCartIcon
                  className="w-6 h-6 transition-colors"
                  style={{ color: "#1A1A1A" }}
                />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow-md"
                    style={{ backgroundColor: "#DAA520" }}
                  >
                    {totalItems}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Hamburger & Cart */}
            <div className="md:hidden flex items-center gap-4">
              <div
                className="relative p-2 rounded-lg transition-all duration-200"
                style={{ backgroundColor: "#F5F5DC" }}
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCartIcon
                  className="w-6 h-6"
                  style={{ color: "#1A1A1A" }}
                />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"
                    style={{ backgroundColor: "#DAA520" }}
                  >
                    {totalItems}
                  </span>
                )}
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                {mobileOpen ? (
                  <XMarkIcon className="w-6 h-6" style={{ color: "#1A1A1A" }} />
                ) : (
                  <Bars3Icon className="w-6 h-6" style={{ color: "#1A1A1A" }} />
                )}
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
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed top-0 right-0 w-80 h-screen shadow-2xl z-40 p-6 flex flex-col"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-lg transition-colors"
                      style={{ backgroundColor: "#F5F5DC" }}
                    >
                      <XMarkIcon
                        className="w-6 h-6"
                        style={{ color: "#1A1A1A" }}
                      />
                    </button>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className="text-lg font-semibold transition-colors py-2 border-b"
                      style={{ color: "#1A1A1A", borderBottomColor: "#DAA520" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>

                    <Link
                      href="/about"
                      className="text-lg font-semibold transition-colors py-2 border-b"
                      style={{ color: "#1A1A1A", borderBottomColor: "#DAA520" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      About
                    </Link>

                    <Link
                      href="/shop"
                      className="text-lg font-semibold transition-colors py-2 border-b"
                      style={{ color: "#1A1A1A", borderBottomColor: "#DAA520" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Shop
                    </Link>

                    <Link
                      href="/contact"
                      className="text-lg font-semibold transition-colors py-2 border-b"
                      style={{ color: "#1A1A1A", borderBottomColor: "#DAA520" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>

                  <Link
                    href="/shop"
                    className="mt-auto px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-200 text-center font-semibold shadow-md"
                    style={{ backgroundColor: "#1B4D1B" }}
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

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setCartOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 sm:w-96 h-screen shadow-2xl z-50 flex flex-col"
              style={{
                backgroundColor: "#F5F5DC",
                boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Header */}
              <div
                className="flex justify-between items-center p-5 border-b"
                style={{ borderBottomColor: "#DAA520" }}
              >
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "#1B4D1B" }}
                  >
                    Your Cart
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#5C3A1E" }}>
                    {cartItems.length + bundleItems.length}{" "}
                    {cartItems.length + bundleItems.length === 1
                      ? "item"
                      : "items"}
                  </p>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <XMarkIcon className="w-6 h-6" style={{ color: "#1A1A1A" }} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.length === 0 && bundleItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#F5F5DC" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        style={{ color: "#5C3A1E" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <p className="mb-6 text-lg" style={{ color: "#5C3A1E" }}>
                      Your cart is empty
                    </p>
                    <Link
                      href="/shop"
                      className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-semibold shadow-md"
                      style={{ backgroundColor: "#1B4D1B" }}
                      onClick={() => setCartOpen(false)}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Individual Products */}
                    {cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.selectedWeight}`}
                        className="rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                        style={{ backgroundColor: "#F5F5DC" }}
                      >
                        <div className="flex gap-4">
                          <div className="relative">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={70}
                              height={70}
                              className="object-cover rounded-lg"
                            />
                            <span
                              className="absolute -top-1 -right-1 text-white text-xs px-2 py-1 rounded-full"
                              style={{ backgroundColor: "#DAA520" }}
                            >
                              {item.selectedWeight}
                            </span>
                          </div>

                          <div className="flex-1">
                            <h3
                              className="font-semibold"
                              style={{ color: "#1A1A1A" }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-sm mt-1"
                              style={{ color: "#5C3A1E" }}
                            >
                              Ksh {item.price} each
                            </p>

                            <div className="flex items-center gap-3 mt-3">
                              <div
                                className="flex items-center border rounded-lg overflow-hidden"
                                style={{ borderColor: "#DAA520" }}
                              >
                                <button
                                  className="p-1 transition-colors"
                                  style={{ backgroundColor: "#F5F5DC" }}
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.selectedWeight,
                                      Math.max(1, item.quantity - 1),
                                    )
                                  }
                                >
                                  <MinusIcon
                                    className="w-4 h-4"
                                    style={{ color: "#1A1A1A" }}
                                  />
                                </button>
                                <span
                                  className="px-3 py-1 font-medium"
                                  style={{ color: "#1A1A1A" }}
                                >
                                  {item.quantity}
                                </span>
                                <button
                                  className="p-1 transition-colors"
                                  style={{ backgroundColor: "#F5F5DC" }}
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.selectedWeight,
                                      item.quantity + 1,
                                    )
                                  }
                                >
                                  <PlusIcon
                                    className="w-4 h-4"
                                    style={{ color: "#1A1A1A" }}
                                  />
                                </button>
                              </div>

                              <button
                                className="p-2 rounded-lg transition-colors"
                                style={{ color: "#5C3A1E" }}
                                onClick={() =>
                                  removeFromCart(item.id, item.selectedWeight)
                                }
                              >
                                <TrashIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p
                              className="font-bold"
                              style={{ color: "#1B4D1B" }}
                            >
                              Ksh {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Bundle Items */}
                    {bundleItems.map((bundle) => (
                      <div
                        key={bundle.id}
                        className="rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border"
                        style={{
                          backgroundColor: "#F5F5DC",
                          borderColor: "#DAA520",
                        }}
                      >
                        <div className="flex gap-4">
                          <div className="relative">
                            <Image
                              src={bundle.image}
                              alt={bundle.name}
                              width={70}
                              height={70}
                              className="object-cover rounded-lg"
                            />
                            <span
                              className="absolute -top-1 -right-1 text-white text-xs px-2 py-1 rounded-full"
                              style={{ backgroundColor: "#5C3A1E" }}
                            >
                              Bundle
                            </span>
                          </div>

                          <div className="flex-1">
                            <h3
                              className="font-semibold"
                              style={{ color: "#1A1A1A" }}
                            >
                              {bundle.name}
                            </h3>
                            {bundle.savings > 0 && (
                              <p
                                className="text-sm mt-1"
                                style={{ color: "#1B4D1B" }}
                              >
                                Save Ksh {bundle.savings}
                              </p>
                            )}

                            <div
                              className="text-xs mt-1"
                              style={{ color: "#5C3A1E" }}
                            >
                              {bundle.products.join(", ")}
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                              <div
                                className="flex items-center border rounded-lg overflow-hidden"
                                style={{ borderColor: "#DAA520" }}
                              >
                                <button
                                  className="p-1 transition-colors"
                                  style={{ backgroundColor: "#F5F5DC" }}
                                  onClick={() =>
                                    updateBundleQuantity(
                                      bundle.id,
                                      Math.max(1, bundle.quantity - 1),
                                    )
                                  }
                                >
                                  <MinusIcon
                                    className="w-4 h-4"
                                    style={{ color: "#1A1A1A" }}
                                  />
                                </button>
                                <span
                                  className="px-3 py-1 font-medium"
                                  style={{ color: "#1A1A1A" }}
                                >
                                  {bundle.quantity}
                                </span>
                                <button
                                  className="p-1 transition-colors"
                                  style={{ backgroundColor: "#F5F5DC" }}
                                  onClick={() =>
                                    updateBundleQuantity(
                                      bundle.id,
                                      bundle.quantity + 1,
                                    )
                                  }
                                >
                                  <PlusIcon
                                    className="w-4 h-4"
                                    style={{ color: "#1A1A1A" }}
                                  />
                                </button>
                              </div>

                              <button
                                className="p-2 rounded-lg transition-colors"
                                style={{ color: "#5C3A1E" }}
                                onClick={() => removeBundleFromCart(bundle.id)}
                              >
                                <TrashIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p
                              className="font-bold"
                              style={{ color: "#1B4D1B" }}
                            >
                              Ksh {bundle.price * bundle.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Footer */}
              {(cartItems.length > 0 || bundleItems.length > 0) && (
                <div
                  className="p-5 border-t"
                  style={{ borderTopColor: "#DAA520" }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium" style={{ color: "#5C3A1E" }}>
                      Subtotal
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#1B4D1B" }}
                    >
                      Ksh {total}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-semibold shadow-md"
                    style={{ backgroundColor: "#1B4D1B" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.032 1.964c-5.524 0-10 4.476-10 10 0 1.774.462 3.516 1.338 5.04L1.52 22.48l5.611-1.702c1.476.829 3.156 1.266 4.901 1.266 5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.092c-1.476 0-2.922-.402-4.16-1.154l-.298-.177-3.313 1.005 1.04-3.291-.177-.298a7.964 7.964 0 01-1.236-4.285c0-4.412 3.589-8 8-8s8 3.588 8 8-3.589 8-8 8z" />
                      <path d="M16.488 13.374c-.247-.124-1.46-.721-1.687-.804-.226-.082-.392-.124-.557.124-.165.247-.64.804-.784.969-.145.165-.29.186-.537.062-.247-.124-1.043-.384-1.986-1.226-.734-.657-1.23-1.467-1.373-1.714-.144-.247-.015-.38.108-.503.11-.11.247-.288.371-.432.124-.144.165-.247.247-.412.083-.165.041-.309-.021-.433-.061-.124-.556-1.34-.762-1.835-.2-.48-.403-.414-.557-.422-.144-.008-.309-.008-.474-.008-.165 0-.432.062-.659.309-.226.247-.866.846-.866 2.064 0 1.218.887 2.394 1.011 2.559.124.165 1.747 2.667 4.232 3.74.591.255 1.052.408 1.412.522.593.186 1.133.16 1.56.097.476-.07 1.46-.597 1.666-1.173.206-.576.206-1.07.144-1.173-.062-.103-.227-.165-.474-.289z" />
                    </svg>
                    Order via WhatsApp
                  </a>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={clearCart}
                      className="text-sm font-medium transition-colors"
                      style={{ color: "#5C3A1E" }}
                    >
                      Clear Cart
                    </button>
                    <Link
                      href="/shop"
                      className="text-sm font-medium transition-colors"
                      style={{ color: "#1B4D1B" }}
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
