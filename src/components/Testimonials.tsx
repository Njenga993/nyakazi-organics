// src/components/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      location: "Nairobi, Kenya",
      avatar: "/images/Managu-600x400.png",
      rating: 5,
      text: "Nyakazi Organics has completely transformed my family's meals. The quality of their indigenous vegetables is exceptional - fresh, flavorful, and you can really taste the difference. My kids actually love eating vegetables now!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "John Kamau",
      location: "Mombasa, Kenya",
      avatar: "/images/Managu-600x400.png",
      rating: 5,
      text: "As someone who grew up eating traditional vegetables, I'm thrilled to find authentic, organic options. The dried managu tastes just like what my grandmother used to grow. Fast delivery and excellent packaging!",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Grace Wanjiru",
      location: "Kisumu, Kenya",
      avatar: "/images/Managu-600x400.png",
      rating: 5,
      text: "I love supporting local farmers while getting nutritious food for my family. The vegetable powders are so convenient - I add them to smoothies and soups. Great value for money and the health benefits are amazing!",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Michael Ochieng",
      location: "Nakuru, Kenya",
      avatar: "/images/Managu-600x400.png",
      rating: 4,
      text: "The quality is consistently good and I appreciate the agroecological farming practices. It's great to know I'm eating healthy while supporting sustainable agriculture in Kenya.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 5,
      name: "Esther Njoroge",
      location: "Eldoret, Kenya",
      avatar: "/images/Managu-600x400.png",
      rating: 5,
      text: "I've been a customer for 6 months now and I'm impressed with the consistency in quality. The mushrooms are my favorite - so flavorful! Customer service is also excellent.",
      date: "2 months ago",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const testimonialName = target.alt.replace(' portrait', '');
    target.src = `https://ui-avatars.com/api/?name=${testimonialName.replace(' ', '+')}&background=10b981&color=fff&size=96`;
  };

  const handleGridImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const testimonialName = target.alt.replace(' portrait', '');
    target.src = `https://ui-avatars.com/api/?name=${testimonialName.replace(' ', '+')}&background=10b981&color=fff&size=48`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            <StarIconSolid className="w-4 h-4 mr-2 text-yellow-500" />
            Customer Reviews
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Happy Customers</span> Say
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their health with our traditional African vegetables
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            {/* Quote icon - Using SVG instead of Heroicon */}
            <div className="absolute top-4 right-4 text-green-100">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-green-100">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={`${testimonials[currentIndex].name} portrait`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>

                {/* Customer info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h3>
                    {testimonials[currentIndex].verified && (
                      <div className="flex items-center gap-1 text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-green-600 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional testimonials grid for desktop */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-green-100">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} portrait`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={handleGridImageError}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Experience the difference that authentic, nutrient-dense indigenous vegetables can make in your life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-green-100">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-green-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}