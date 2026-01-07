// ProductsSection.jsx
'use client';

import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { Toaster } from 'react-hot-toast';

export default function ProductsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            100% Organic & Traditional
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Heritage Vegetables</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rediscover the power of traditional African nutrition. Our indigenous vegetables are 
            cultivated using ancestral agroecological methods, preserving both biodiversity and cultural heritage.
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">No Preservatives</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Rich in Nutrients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Sustainably Sourced</span>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price50={product.price50}
              price100={product.price100}
              localName={product.localName}
              description={product.description}
              healthBenefits={product.healthBenefits}
              nutritionalInfo={product.nutritionalInfo}
              origin={product.origin}
              inStock={product.inStock}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
        
        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Community of Health-Conscious Consumers</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Over 5,000 families have transformed their health with our traditional vegetables. 
            Experience the difference that authentic, nutrient-dense foods can make.
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">5K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-green-100">Organic</div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}