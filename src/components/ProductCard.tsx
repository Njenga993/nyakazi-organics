// ProductCard.jsx
"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import {
  StarIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  image,
  price50,
  price100,
  localName,
  description,
  healthBenefits,
  nutritionalInfo,
  origin,
  inStock,
  rating,
  reviews,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<"50g" | "100g">("50g");
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const price = selectedWeight === "50g" ? price50 : price100;
  const isLowStock = inStock < 10;

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      image,
      price,
      localName,
      quantity: 1,
      selectedWeight,
    });
    toast.success(`${name} (${selectedWeight}) added to cart`);
  };

  return (
    <div
      className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      style={{ backgroundColor: "#F5F5DC", border: "1px solid #DAA520" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#1B4D1B" }}
        >
          Organic
        </span>
        {isLowStock && (
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: "#5C3A1E" }}
          >
            Only {inStock} left
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        style={{ backgroundColor: "#F5F5DC" }}
      >
        {isFavorited ? (
          <HeartIconSolid className="w-5 h-5" style={{ color: "#5C3A1E" }} />
        ) : (
          <HeartIcon className="w-5 h-5" style={{ color: "#1A1A1A" }} />
        )}
      </button>

      {/* Product Image */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ backgroundColor: "#F5F5DC" }}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-contain p-6 transition-transform duration-700 ${isHovered ? "scale-110 rotate-3" : "scale-100"}`}
        />

        {/* Quick View Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute bottom-4 right-4 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "#F5F5DC" }}
        >
          <InformationCircleIcon
            className="w-5 h-5"
            style={{ color: "#1A1A1A" }}
          />
        </button>
      </div>

      {/* Product Content */}
      <div className="p-6">
        {/* Name & Local Name */}
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-1" style={{ color: "#1A1A1A" }}>
            {name}
          </h3>
          <p
            className="text-sm font-medium italic"
            style={{ color: "#1B4D1B" }}
          >
            "{localName}" - Traditional Name
          </p>
        </div>

        {/* Origin */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-4 h-4"
            style={{ color: "#1B4D1B" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm" style={{ color: "#5C3A1E" }}>
            Sourced from {origin}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIconSolid
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm" style={{ color: "#5C3A1E" }}>
            ({rating} · {reviews} reviews)
          </span>
        </div>

        {/* Description Preview */}
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "#5C3A1E" }}>
          {description}
        </p>

        {/* Expandable Details */}
        {showDetails && (
          <div
            className="mb-4 p-4 rounded-lg space-y-3 animate-in slide-in-from-top duration-300"
            style={{ backgroundColor: "#F5F5DC", border: "1px solid #DAA520" }}
          >
            <div>
              <h4
                className="font-semibold mb-1 flex items-center gap-2"
                style={{ color: "#1A1A1A" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: "#1B4D1B" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Health Benefits
              </h4>
              <ul className="text-sm space-y-1" style={{ color: "#5C3A1E" }}>
                {healthBenefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: "#1B4D1B" }}>
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="font-semibold mb-1 flex items-center gap-2"
                style={{ color: "#1A1A1A" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: "#1B4D1B" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h2a1 1 0 100 2 2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                    clipRule="evenodd"
                  />
                </svg>
                Nutrition Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(nutritionalInfo)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize" style={{ color: "#5C3A1E" }}>
                        {key}:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "#1A1A1A" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Weight Selection */}
        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all ${
              selectedWeight === "50g" ? "text-white shadow-md" : ""
            }`}
            style={{
              backgroundColor: selectedWeight === "50g" ? "#1B4D1B" : "#F5F5DC",
              color: selectedWeight === "50g" ? "#F5F5DC" : "#1A1A1A",
              border: selectedWeight === "50g" ? "none" : "1px solid #DAA520",
            }}
            onClick={() => setSelectedWeight("50g")}
          >
            50g
            <span className="block text-xs opacity-75">Trial Pack</span>
          </button>
          <button
            className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all ${
              selectedWeight === "100g" ? "text-white shadow-md" : ""
            }`}
            style={{
              backgroundColor:
                selectedWeight === "100g" ? "#1B4D1B" : "#F5F5DC",
              color: selectedWeight === "100g" ? "#F5F5DC" : "#1A1A1A",
              border: selectedWeight === "100g" ? "none" : "1px solid #DAA520",
            }}
            onClick={() => setSelectedWeight("100g")}
          >
            100g
            <span className="block text-xs opacity-75">Best Value</span>
          </button>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs uppercase tracking-wide"
              style={{ color: "#5C3A1E" }}
            >
              Price
            </p>
            <p className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
              Ksh {price}
              <span
                className="text-sm font-normal"
                style={{ color: "#5C3A1E" }}
              >
                /{selectedWeight}
              </span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ stroke: "#F5F5DC" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
