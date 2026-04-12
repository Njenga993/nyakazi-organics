// ProductsSection.jsx
"use client";

import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Toaster } from "react-hot-toast";

export default function ProductsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#F5F5DC" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
          >
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: "#DAA520" }}
            ></span>
            100 Percent Organic and Traditional
          </div>

          <h2 className="text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            Discover Our{" "}
            <span style={{ color: "#1B4D1B" }}>Heritage Vegetables</span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#5C3A1E" }}
          >
            Rediscover the power of traditional African nutrition. Our
            indigenous vegetables are cultivated using ancestral agroecological
            methods, preserving both biodiversity and cultural heritage.
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: "#1B4D1B" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium" style={{ color: "#1A1A1A" }}>
                No Preservatives
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: "#1B4D1B" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium" style={{ color: "#1A1A1A" }}>
                Rich in Nutrients
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                style={{ color: "#1B4D1B" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium" style={{ color: "#1A1A1A" }}>
                Sustainably Sourced
              </span>
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

        {/* Trust Banner - no gradient */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#DAA520" }}>
            Join Our Community of Health-Conscious Consumers
          </h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: "#F5F5DC" }}>
            Over 5,000 families have transformed their health with our
            traditional vegetables. Experience the difference that authentic,
            nutrient-dense foods can make.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#DAA520" }}>
                5K+
              </div>
              <div style={{ color: "#F5F5DC" }}>Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#DAA520" }}>
                4.9
              </div>
              <div style={{ color: "#F5F5DC" }}>Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#DAA520" }}>
                100%
              </div>
              <div style={{ color: "#F5F5DC" }}>Organic</div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}
