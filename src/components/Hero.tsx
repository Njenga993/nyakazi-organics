'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PlayIcon, StarIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Nairobi",
      text: "These indigenous vegetables have transformed my family's health. The quality is exceptional!",
      rating: 5
    },
    {
      name: "John K.",
      location: "Mombasa",
      text: "Finally, authentic traditional vegetables that remind me of my grandmother's cooking.",
      rating: 5
    },
    {
      name: "Grace W.",
      location: "Kisumu",
      text: "I love supporting local farmers while getting nutritious food for my children.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image - Full width and height coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/incubation.webp"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
      
      {/* Floating badges - Hidden on small screens */}
      <div className="absolute top-10 left-10 z-20 hidden lg:block">
        <div className="bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse">
          <SparklesIcon className="w-5 h-5" />
          <span className="font-semibold">100% Organic & Traditional</span>
        </div>
      </div>
      
      <div className="absolute top-10 right-10 z-20 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <CheckCircleIcon className="w-5 h-5" />
          <span className="font-semibold">Free Delivery on Orders Over Ksh 1000</span>
        </div>
      </div>

      {/* Content - Adjusted for mobile responsiveness */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-20 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl xl:max-w-5xl mx-auto text-center">
          {/* Trust indicators - Smaller on mobile */}
          <div className="flex justify-center items-center gap-2 mb-4 sm:mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-medium text-sm sm:text-base">4.9/5 (500+ reviews)</span>
          </div>
          
          {/* Headline - Responsive sizing */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
            Rediscover the Power of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Indigenous African Vegetables
            </span>
          </h1>
          
          {/* Subheadline - Responsive sizing */}
          <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 drop-shadow-md max-w-3xl mx-auto">
            Sustainably grown using ancestral agroecological methods. Each leaf carries centuries of nutritional wisdom, 
            supporting both your health and local farming communities.
          </p>

          {/* Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
            <Link 
              href="/shop" 
              className="group px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Shop Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <button 
              onClick={() => setVideoModalOpen(true)}
              className="group px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-white/90 backdrop-blur-sm text-green-700 rounded-lg hover:bg-white transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <PlayIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Watch Our Story</span>
              <span className="sm:hidden">Story</span>
            </button>
          </div>

          {/* Testimonial Carousel - Hidden on very small screens */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 max-w-2xl mx-auto mb-6 sm:mb-8 hidden md:block">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <p className="text-white italic mb-3 text-sm sm:text-base">"{testimonials[currentTestimonial].text}"</p>
            <p className="text-white/80 text-sm">- {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}</p>
          </div>

          {/* Impact Metrics - Responsive layout */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 text-white max-w-2xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-transform duration-300 px-1 sm:px-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">500+</h2>
              <p className="text-xs sm:text-sm md:text-base">Farmers</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 px-1 sm:px-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">1000+</h2>
              <p className="text-xs sm:text-sm md:text-base">Kgs Sold</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 px-1 sm:px-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">50+</h2>
              <p className="text-xs sm:text-sm md:text-base">Communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Our Story</h3>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Video would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}