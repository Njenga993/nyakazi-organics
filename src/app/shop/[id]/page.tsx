'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { 
  StarIcon, 
  ShoppingCartIcon, 
  HeartIcon, 
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  PlusIcon,
  MinusIcon,
  CheckCircleIcon,
  SparklesIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<'50g' | '100g'>('50g');
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);

  const productId = parseInt(params.id as string);
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    if (product) {
      // Find related products (same category or similar)
      const related = products
        .filter(p => p.id !== product.id)
        .filter(p => {
          // Simple logic: if it's a leafy green, show other leafy greens
          if (['Managu', 'Saaga', 'Amaranthth'].includes(product.name)) {
            return ['Managu', 'Saaga', 'Amaranthth'].includes(p.name);
          }
          // If it's a powder, show other powders
          if (product.name.includes('Powder')) {
            return p.name.includes('Powder');
          }
          // If it's a mushroom, show other mushrooms
          if (product.name.includes('Mushroom')) {
            return p.name.includes('Mushroom');
          }
          // Otherwise, just show any other product
          return true;
        })
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            href="/shop"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const price = selectedWeight === '50g' ? product.price50 : product.price100;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      localName: product.localName,
      image: product.image,
      price,
      quantity,
      selectedWeight,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name} from Nyakazi Organics`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </li>
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-gray-700">
                  Shop
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </li>
              <li aria-current="page">
                <span className="text-gray-700 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {product.inStock < 10 && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Only {product.inStock} left!
                  </span>
                </div>
              )}
              
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  {isFavorited ? (
                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Image Thumbnails */}
            {/*<div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden border-2 border-transparent hover:border-green-500 transition-colors"
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} thumbnail ${i}`}
                    fill
                    className="object-fit"
                  />
                </button>
              ))}
            </div>*/}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-lg text-green-600 font-medium italic">"{product.localName}"</p>
              </div>
              
              <button
                onClick={handleShare}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ShareIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">Ksh {price}</span>
                <span className="text-gray-500 ml-1">/{selectedWeight}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Weight Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Weight</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedWeight('50g')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    selectedWeight === '50g'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <span className="font-medium">50g</span>
                  <span className="block text-sm text-gray-500">Trial Pack</span>
                </button>
                <button
                  onClick={() => setSelectedWeight('100g')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    selectedWeight === '100g'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <span className="font-medium">100g</span>
                  <span className="block text-sm text-gray-500">Best Value</span>
                </button>
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-50 transition-colors"
                >
                  <MinusIcon className="w-5 h-5 text-gray-600" />
                </button>
                <span className="px-4 py-2 border-t border-b border-gray-300 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-50 transition-colors"
                >
                  <PlusIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.inStock === 0}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {product.inStock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TruckIcon className="w-5 h-5 text-green-600" />
                <span>Free delivery on orders over Ksh 1000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                <span>100% organic guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['description', 'benefits', 'nutrition', 'origin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700"> {product.description}</p>
            </div>
          )}
          
          {activeTab === 'benefits' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Benefits</h3>
              <ul className="space-y-3">
                {product.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'nutrition' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutritional Information</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.nutritionalInfo).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 capitalize">{key}</div>
                    <div className="text-lg font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'origin' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Origin & Farming</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <InformationCircleIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Origin:</span> {product.origin}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Farming Method:</span> Agroecological farming without harmful pesticides or chemical fertilizers
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Processing:</span> Carefully dried at low temperatures to preserve nutrients and flavor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        
        {/* Review Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
              <span className="text-gray-600">out of 5</span>
            </div>
            <div className="text-gray-600">Based on {product.reviews} reviews</div>
          </div>
        </div>
        
        {/* Sample Reviews */}
        <div className="space-y-6">
          {[
            {
              name: "Sarah M.",
              rating: 5,
              date: "2 weeks ago",
              comment: "Excellent quality! The flavor is authentic and the packaging keeps it fresh. Will definitely order again."
            },
            {
              name: "John K.",
              rating: 4,
              date: "1 month ago",
              comment: "Great product. I love the convenience of having traditional vegetables available year-round."
            },
            {
              name: "Grace W.",
              rating: 5,
              date: "3 weeks ago",
              comment: "I'm so happy to find these indigenous vegetables. They remind me of my childhood and are so nutritious."
            }
          ].map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 relative">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{relatedProduct.name}</h3>
                  <p className="text-sm text-green-600 mb-2">{relatedProduct.localName}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">Ksh {relatedProduct.price50}</span>
                    <Link 
                      href={`/shop/${relatedProduct.id}`}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}