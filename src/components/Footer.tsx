'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaLeaf, 
  FaTruck, 
  FaShieldAlt,
  FaRecycle,
  FaHeart,
  FaArrowUp,
  FaCcVisa,
  FaCcMastercard,
  FaMobileAlt
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Show/hide back to top button based on scroll position
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white mt-20 w-full overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main footer content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand + Social */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FaLeaf className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Nyakazi Organics</h2>
              </div>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">
                We're committed to preserving Kenya's agricultural heritage by bringing you 
                indigenous vegetables grown using sustainable, agroecological methods. 
                Every purchase supports local farmers and promotes biodiversity.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <FaFacebookF className="w-5 h-5"/>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <FaInstagram className="w-5 h-5"/>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <FaTwitter className="w-5 h-5"/>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                  <FaWhatsapp className="w-5 h-5"/>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4 text-green-400" />
                  <span className="text-xs">100% Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRecycle className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Eco-Friendly</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-white/80">
                <li><Link href="/" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">About Us</Link></li>
                <li><Link href="/shop" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Shop</Link></li>
                <li><Link href="/blog" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Contact</Link></li>
              </ul>
            </div>

            {/* Shop Categories */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Shop</h3>
              <ul className="space-y-3 text-white/80">
                <li><Link href="/shop#leafy-greens" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Leafy Greens</Link></li>
                <li><Link href="/shop#powders" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Vegetable Powders</Link></li>
                <li><Link href="/shop#mushrooms" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Mushrooms</Link></li>
                <li><Link href="/shop#bundles" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Value Bundles</Link></li>
                <li><Link href="/shop#gifts" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Gift Boxes</Link></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Customer Support</h3>
              <ul className="space-y-3 text-white/80">
                <li><Link href="/shipping" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Returns & Refunds</Link></li>
                <li><Link href="/faq" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
                <FaHeart className="text-red-400" />
                Stay Connected
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Get exclusive offers, nutrition tips, and stories about our farming community.
              </p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-green-400 text-sm">Thank you for subscribing!</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
                <FaTruck className="text-green-400" />
                Get in Touch
              </h3>
              <div className="text-white/80 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span> info@nyakazi-organics.org
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span> +254 712 345 678
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Address:</span> Nairobi, Kenya
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Hours:</span> Mon-Fri: 9am-5pm
                </p>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                We accept secure payments through:
              </p>
              <div className="flex gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FaCcVisa className="w-8 h-8 text-white" />
                </div>
                <div className="p-2 bg-white/10 rounded-lg">
                  <FaCcMastercard className="w-8 h-8 text-white" />
                </div>
                <div className="p-2 bg-white/10 rounded-lg flex items-center justify-center">
                  <FaMobileAlt className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/20 py-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Nyakazi Organics. All rights reserved.</p>
          <p className="mt-2">Made with <FaHeart className="inline text-red-400 mx-1" /> in Kenya | Powered by K-Space</p>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 z-40"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}