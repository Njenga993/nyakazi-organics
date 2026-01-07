'use client';

import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  TruckIcon, 
  HeartIcon,
  ArrowDownIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      {/* Hero section */}
      <Hero />

      {/* Introduction section with animated scroll indicator */}
      <section className="relative py-16 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              <SparklesIcon className="w-4 h-4 mr-2" />
              From Our Farms To Your Table
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Rediscover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Nutritional Power</span> of Indigenous Vegetables
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For generations, indigenous African vegetables have sustained communities with their exceptional nutritional value. 
              We're preserving this heritage while making it accessible to modern households.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
            >
              <ArrowDownIcon className="w-6 h-6 text-green-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="scroll-mt-20">
        <ProductsSection />
      </section>

      {/* Why Choose Us - Enhanced with more features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Nyakazi Organics?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional quality while supporting sustainable farming practices and local communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Organic</h3>
              <p className="text-gray-600">All our products are grown without harmful pesticides or chemical fertilizers, ensuring pure nutrition.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TruckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver nationwide within 2 business days, ensuring freshness and convenience.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <HeartIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Farmers</h3>
              <p className="text-gray-600">Every purchase directly supports local farmers and promotes sustainable agroecological practices.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <SparklesIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutrient Dense</h3>
              <p className="text-gray-600">Our indigenous vegetables contain higher concentrations of vitamins, minerals, and antioxidants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">From Farm to Table</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our transparent process ensures you receive the highest quality indigenous vegetables while supporting sustainable farming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sustainable Farming</h3>
                <p className="text-gray-600 text-center">
                  We partner with local farmers who use traditional agroecological methods that preserve biodiversity and soil health.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Careful Processing</h3>
                <p className="text-gray-600 text-center">
                  Our vegetables are harvested at peak nutrition and carefully dried using low-temperature methods to preserve nutrients.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Direct to You</h3>
                <p className="text-gray-600 text-center">
                  We package our products in eco-friendly materials and deliver them directly to your doorstep, ensuring freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Our Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Revitalize Indigenous Nutrition</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a mission to preserve Kenya's agricultural heritage, Nyakazi Organics connects modern consumers with the nutritional power of traditional vegetables. Watch our story to learn more about our impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Preserving Biodiversity</h4>
                    <p className="text-gray-600">We support the cultivation of indigenous vegetable varieties that are at risk of disappearing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Empowering Farmers</h4>
                    <p className="text-gray-600">We provide fair prices and training to help farmers transition to sustainable agroecological practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Improving Nutrition</h4>
                    <p className="text-gray-600">Our products make it easy to incorporate nutrient-dense indigenous vegetables into modern diets.</p>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                <PlayIcon className="w-5 h-5" />
                Watch Our Story
              </button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Health with Indigenous Vegetables?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of health-conscious individuals who are rediscovering the power of traditional African nutrition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/shop" 
              className="px-8 py-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Shop Now
            </a>
            <a 
              href="/about" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-700 transition-colors font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 z-40"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </main>
  );
}