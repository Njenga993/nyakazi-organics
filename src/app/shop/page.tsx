'use client';

import { useState, useEffect, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { 
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  FunnelIcon,
  XMarkIcon,
  SparklesIcon,
  StarIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ShopPage() {
  const { addBundleToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Categories based on product data
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'leafy-greens', name: 'Leafy Greens', count: products.filter(p => ['Managu', 'Saaga', 'Amaranthth'].includes(p.name)).length },
    { id: 'powders', name: 'Vegetable Powders', count: products.filter(p => p.name.includes('Powder')).length },
    { id: 'mushrooms', name: 'Mushrooms', count: products.filter(p => p.name.includes('Mushroom')).length }
  ];

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.localName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'leafy-greens') {
        filtered = filtered.filter(p => ['Managu', 'Saaga', 'Amaranthth'].includes(p.name));
      } else if (selectedCategory === 'powders') {
        filtered = filtered.filter(p => p.name.includes('Powder'));
      } else if (selectedCategory === 'mushrooms') {
        filtered = filtered.filter(p => p.name.includes('Mushroom'));
      }
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      if (selectedPriceRange === '0-200') {
        filtered = filtered.filter(p => p.price50 <= 200);
      } else if (selectedPriceRange === '200-400') {
        filtered = filtered.filter(p => p.price50 > 200 && p.price50 <= 400);
      } else if (selectedPriceRange === '400+') {
        filtered = filtered.filter(p => p.price50 > 400);
      }
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price50 - b.price50);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price50 - a.price50);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  // Featured products (top rated)
  const featuredProducts = useMemo(() => 
    products.filter(p => p.rating >= 4.7).slice(0, 3),
    []
  );

  // Special bundles
  const bundles = [
    {
      id: 'starter-pack',
      name: 'Starter Pack',
      description: 'Perfect for trying our indigenous vegetables',
      products: ['Managu', 'Saaga'],
      price: 350,
      originalPrice: 400,
      savings: 50,
      image: '/images/Managu-600x400.png'
    },
    {
      id: 'family-pack',
      name: 'Family Pack',
      description: 'Great value for families',
      products: ['Managu', 'Saaga', 'Amaranthth'],
      price: 550,
      originalPrice: 600,
      savings: 50,
      image: '/images/Managu-600x400.png'
    },
    {
      id: 'complete-nutrition',
      name: 'Complete Nutrition',
      description: 'All our premium products',
      products: ['Managu', 'Saaga', 'Amaranthth', 'Mushrooms', 'Pumpkin Powder'],
      price: 900,
      originalPrice: 1000,
      savings: 100,
      image: '/images/Managu-600x400.png'
    }
  ];

  return (
    <div className="w-full">
      {/* Shop Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600"></div>
        </div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            100% Organic & Traditional
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200">Shop</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover the nutritional power of indigenous African vegetables. 
            Sustainably grown and carefully processed to preserve their natural goodness.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">{products.length}+</div>
              <div className="text-sm opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">🔥 Special Offers!</h2>
              <p className="text-white/90">Save up to Ksh 100 on our nutrition bundles</p>
            </div>
            <button 
              onClick={() => document.getElementById('bundles')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Bundles
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A-Z</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <FunnelIcon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700">Filters</span>
              {selectedCategory !== 'all' || selectedPriceRange !== 'all' ? (
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              ) : null}
            </button>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'all' || selectedPriceRange !== 'all' || searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm('')}>
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Category: {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('all')}>
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filter Panel - Fixed text colors */}
      {showFilters && (
        <section className="py-6 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: '0-200', label: 'Under Ksh 200' },
                    { id: '200-400', label: 'Ksh 200 - Ksh 400' },
                    { id: '400+', label: 'Above Ksh 400' }
                  ].map(range => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedPriceRange === range.id
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {searchTerm ? `Search Results (${filteredProducts.length})` : 
               selectedCategory !== 'all' ? `${categories.find(c => c.id === selectedCategory)?.name} (${filteredProducts.length})` :
               `All Products (${filteredProducts.length})`}
            </h2>
            <div className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Favorites</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most loved products based on customer reviews and repeat purchases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                      <StarIconSolid className="w-3 h-3 mr-1" />
                      Top Rated
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-green-600 mb-2">{product.localName}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">Ksh {product.price50}</span>
                      <span className="text-sm text-gray-500">/50g</span>
                    </div>
                    <Link 
                      href={`/shop/${product.id}`}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Bundles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Save more with our carefully curated bundles. Perfect for families or those wanting to try multiple products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 relative overflow-hidden">
                {bundle.savings > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save Ksh {bundle.savings}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{bundle.name}</h3>
                <p className="text-gray-600 mb-4">{bundle.description}</p>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-2">Includes:</div>
                  {bundle.products.map((product, index) => (
                    <div key={index} className="flex items-center gap-2 py-1">
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-800">Ksh {bundle.price}</span>
                    {bundle.originalPrice > bundle.price && (
                      <span className="text-lg text-gray-500 line-through ml-2">Ksh {bundle.originalPrice}</span>
                    )}
                  </div>
                </div>

                <button 
                  onClick={() => addBundleToCart({
                    id: bundle.id,
                    name: bundle.name,
                    price: bundle.price,
                    quantity: 1,
                    image: bundle.image,
                    products: bundle.products,
                    savings: bundle.savings
                  })}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold"
                >
                  Add Bundle to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">2 business days nationwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">100% organic and fresh</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowPathIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCartIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">M-Pesa, Card & more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}