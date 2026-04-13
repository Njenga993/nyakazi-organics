("use client");

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
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
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<"50g" | "100g">("50g");
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);

  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (product) {
      // Find related products (same category or similar)
      const related = products
        .filter((p) => p.id !== product.id)
        .filter((p) => {
          // Simple logic: if it's a leafy green, show other leafy greens
          if (["Managu", "Saaga", "Amaranthth"].includes(product.name)) {
            return ["Managu", "Saaga", "Amaranthth"].includes(p.name);
          }
          // If it's a powder, show other powders
          if (product.name.includes("Powder")) {
            return p.name.includes("Powder");
          }
          // If it's a mushroom, show other mushrooms
          if (product.name.includes("Mushroom")) {
            return p.name.includes("Mushroom");
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
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
            Product Not Found
          </h1>
          <p className="mb-6" style={{ color: "#5C3A1E" }}>
            The product you are looking for does not exist.
          </p>
          <Link
            href="/shop"
            className="px-6 py-3 rounded-lg transition-colors"
            style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const price = selectedWeight === "50g" ? product.price50 : product.price100;

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
      alert("Link copied to clipboard");
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="py-4" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <Link
                  href="/"
                  className="hover:underline"
                  style={{ color: "#5C3A1E" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#5C3A1E" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:underline"
                  style={{ color: "#5C3A1E" }}
                >
                  Shop
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#5C3A1E" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
              <li aria-current="page">
                <span className="font-medium" style={{ color: "#1A1A1A" }}>
                  {product.name}
                </span>
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
              <div
                className="aspect-square rounded-lg overflow-hidden"
                style={{ backgroundColor: "#F5F5DC" }}
              >
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
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                  >
                    Only {product.inStock} left
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  {isFavorited ? (
                    <HeartIconSolid
                      className="w-5 h-5"
                      style={{ color: "#1B4D1B" }}
                    />
                  ) : (
                    <HeartIcon
                      className="w-5 h-5"
                      style={{ color: "#5C3A1E" }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#1A1A1A" }}
                >
                  {product.name}
                </h1>
                <p
                  className="text-lg font-medium italic"
                  style={{ color: "#1B4D1B" }}
                >
                  "{product.localName}"
                </p>
              </div>

              <button
                onClick={handleShare}
                className="p-2 rounded-full transition-colors"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <ShareIcon className="w-5 h-5" style={{ color: "#5C3A1E" }} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span style={{ color: "#5C3A1E" }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#1A1A1A" }}
                >
                  Ksh {price}
                </span>
                <span className="ml-1" style={{ color: "#5C3A1E" }}>
                  /{selectedWeight}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-6" style={{ color: "#5C3A1E" }}>
              {product.description}
            </p>

            {/* Weight Selection */}
            <div className="mb-6">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                Select Weight
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedWeight("50g")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    selectedWeight === "50g" ? "text-white" : ""
                  }`}
                  style={{
                    borderColor:
                      selectedWeight === "50g" ? "#1B4D1B" : "#DAA520",
                    backgroundColor:
                      selectedWeight === "50g" ? "#1B4D1B" : "#F5F5DC",
                    color: selectedWeight === "50g" ? "#F5F5DC" : "#1A1A1A",
                  }}
                >
                  <span className="font-medium">50g</span>
                  <span
                    className="block text-sm"
                    style={{
                      color: selectedWeight === "50g" ? "#F5F5DC" : "#5C3A1E",
                    }}
                  >
                    Trial Pack
                  </span>
                </button>
                <button
                  onClick={() => setSelectedWeight("100g")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    selectedWeight === "100g" ? "text-white" : ""
                  }`}
                  style={{
                    borderColor:
                      selectedWeight === "100g" ? "#1B4D1B" : "#DAA520",
                    backgroundColor:
                      selectedWeight === "100g" ? "#1B4D1B" : "#F5F5DC",
                    color: selectedWeight === "100g" ? "#F5F5DC" : "#1A1A1A",
                  }}
                >
                  <span className="font-medium">100g</span>
                  <span
                    className="block text-sm"
                    style={{
                      color: selectedWeight === "100g" ? "#F5F5DC" : "#5C3A1E",
                    }}
                  >
                    Best Value
                  </span>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                Quantity
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-l-md transition-colors"
                  style={{ borderColor: "#DAA520", backgroundColor: "#F5F5DC" }}
                >
                  <MinusIcon className="w-5 h-5" style={{ color: "#1A1A1A" }} />
                </button>
                <span
                  className="px-4 py-2 border-t border-b w-16 text-center"
                  style={{
                    borderColor: "#DAA520",
                    backgroundColor: "#F5F5DC",
                    color: "#1A1A1A",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-r-md transition-colors"
                  style={{ borderColor: "#DAA520", backgroundColor: "#F5F5DC" }}
                >
                  <PlusIcon className="w-5 h-5" style={{ color: "#1A1A1A" }} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.inStock === 0}
              className="w-full px-6 py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                backgroundColor: product.inStock === 0 ? "#5C3A1E" : "#1B4D1B",
                color: "#F5F5DC",
              }}
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <TruckIcon className="w-5 h-5" style={{ color: "#1B4D1B" }} />
                <span style={{ color: "#5C3A1E" }}>
                  Free delivery on orders over Ksh 10,000
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon
                  className="w-5 h-5"
                  style={{ color: "#1B4D1B" }}
                />
                <span style={{ color: "#5C3A1E" }}>
                  100 percent organic guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b" style={{ borderColor: "#DAA520" }}>
          <nav className="-mb-px flex space-x-8">
            {["description", "benefits", "nutrition", "origin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab ? "" : "border-transparent"
                }`}
                style={{
                  borderBottomColor:
                    activeTab === tab ? "#1B4D1B" : "transparent",
                  color: activeTab === tab ? "#1B4D1B" : "#5C3A1E",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p style={{ color: "#5C3A1E" }}>{product.description}</p>
            </div>
          )}

          {activeTab === "benefits" && (
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                Health Benefits
              </h3>
              <ul className="space-y-3">
                {product.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "#1B4D1B" }}
                    />
                    <span style={{ color: "#5C3A1E" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                Nutritional Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.nutritionalInfo).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: "#F5F5DC",
                        border: `1px solid ${"#DAA520"}`,
                      }}
                    >
                      <div
                        className="text-sm capitalize"
                        style={{ color: "#5C3A1E" }}
                      >
                        {key}
                      </div>
                      <div
                        className="text-lg font-semibold"
                        style={{ color: "#1A1A1A" }}
                      >
                        {value}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {activeTab === "origin" && (
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "#1A1A1A" }}
              >
                Origin and Farming
              </h3>
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "#1B4D1B" }}
                  >
                    <InformationCircleIcon
                      className="w-6 h-6"
                      style={{ color: "#DAA520" }}
                    />
                  </div>
                  <div>
                    <p className="mb-2">
                      <span
                        className="font-medium"
                        style={{ color: "#1A1A1A" }}
                      >
                        Origin:
                      </span>{" "}
                      <span style={{ color: "#5C3A1E" }}>{product.origin}</span>
                    </p>
                    <p>
                      <span
                        className="font-medium"
                        style={{ color: "#1A1A1A" }}
                      >
                        Farming Method:
                      </span>{" "}
                      <span style={{ color: "#5C3A1E" }}>
                        Agroecological farming without harmful pesticides or
                        chemical fertilizers
                      </span>
                    </p>
                    <p className="mt-2">
                      <span
                        className="font-medium"
                        style={{ color: "#1A1A1A" }}
                      >
                        Processing:
                      </span>{" "}
                      <span style={{ color: "#5C3A1E" }}>
                        Carefully dried at low temperatures to preserve
                        nutrients and flavor
                      </span>
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
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
          Customer Reviews
        </h2>

        {/* Review Summary */}
        <div
          className="p-6 rounded-lg mb-8"
          style={{
            backgroundColor: "#F5F5DC",
            border: `1px solid ${"#DAA520"}`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
                {product.rating}
              </span>
              <span style={{ color: "#5C3A1E" }}>out of 5</span>
            </div>
            <div style={{ color: "#5C3A1E" }}>
              Based on {product.reviews} reviews
            </div>
          </div>
        </div>

        {/* Sample Reviews */}
        <div className="space-y-6">
          {[
            {
              name: "Sarah M.",
              rating: 5,
              date: "2 weeks ago",
              comment:
                "Excellent quality. The flavor is authentic and the packaging keeps it fresh. Will definitely order again.",
            },
            {
              name: "John K.",
              rating: 4,
              date: "1 month ago",
              comment:
                "Great product. I love the convenience of having traditional vegetables available year-round.",
            },
            {
              name: "Grace W.",
              rating: 5,
              date: "3 weeks ago",
              comment:
                "I am so happy to find these indigenous vegetables. They remind me of my childhood and are so nutritious.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-sm"
              style={{
                backgroundColor: "#F5F5DC",
                border: `1px solid ${"#DAA520"}`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold" style={{ color: "#1A1A1A" }}>
                    {review.name}
                  </p>
                  <p className="text-sm" style={{ color: "#5C3A1E" }}>
                    {review.date}
                  </p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p style={{ color: "#5C3A1E" }}>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div
                  className="aspect-square relative"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#1B4D1B" }}>
                    {relatedProduct.localName}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#1A1A1A" }}
                    >
                      Ksh {relatedProduct.price50}
                    </span>
                    <Link
                      href={`/shop/${relatedProduct.id}`}
                      className="font-medium text-sm hover:underline"
                      style={{ color: "#1B4D1B" }}
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
