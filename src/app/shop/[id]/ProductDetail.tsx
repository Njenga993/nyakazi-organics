"use client";

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

  const getCategory = (name: string) => {
    if (["Managu", "Saaga", "Amaranthth"].includes(name))
      return "Indigenous Leafy Greens";
    if (name.includes("Powder")) return "Natural Powder";
    if (name.includes("Mushroom")) return "Wild Mushrooms";
    return "Organic Product";
  };

  useEffect(() => {
    if (product) {
      const related = products
        .filter((p) => p.id !== product.id)
        .filter((p) => {
          if (["Managu", "Saaga", "Amaranthth"].includes(product.name)) {
            return ["Managu", "Saaga", "Amaranthth"].includes(p.name);
          }
          if (product.name.includes("Powder")) {
            return p.name.includes("Powder");
          }
          if (product.name.includes("Mushroom")) {
            return p.name.includes("Mushroom");
          }
          return true;
        })
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [product]);

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F5F5DC" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
            Product Not Found
          </h1>
          <p className="mb-6" style={{ color: "#5C3A1E" }}>
            The product you are looking for does not exist.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
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
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#F5F5DC" }}>
      {/* Breadcrumb */}
      <div className="border-b" style={{ borderColor: "#DAA520" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav
            className="flex items-center text-xs tracking-wide uppercase"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-opacity hover:opacity-60"
              style={{ color: "#5C3A1E" }}
            >
              Home
            </Link>
            <span className="mx-2" style={{ color: "#DAA520" }}>
              /
            </span>
            <Link
              href="/shop"
              className="transition-opacity hover:opacity-60"
              style={{ color: "#5C3A1E" }}
            >
              Shop
            </Link>
            <span className="mx-2" style={{ color: "#DAA520" }}>
              /
            </span>
            <span className="font-medium" style={{ color: "#1A1A1A" }}>
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-10 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: "#5C3A1E" }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Shop
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div
              style={{
                padding: "8px",
                border: "1px solid #DAA520",
                backgroundColor: "#F5F5DC",
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {product.inStock < 10 && product.inStock > 0 && (
              <div className="absolute top-5 left-5">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  Only {product.inStock} left
                </span>
              </div>
            )}

            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="absolute top-5 right-5 p-2 rounded-full transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#F5F5DC",
                border: "1px solid #DAA520",
              }}
            >
              {isFavorited ? (
                <HeartIconSolid
                  className="w-5 h-5"
                  style={{ color: "#1B4D1B" }}
                />
              ) : (
                <HeartIcon className="w-5 h-5" style={{ color: "#5C3A1E" }} />
              )}
            </button>
          </div>

          {/* Product Info - Sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Category Tag */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
            >
              {getCategory(product.name)}
            </span>

            {/* Name */}
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-1"
              style={{ color: "#1A1A1A" }}
            >
              {product.name}
            </h1>
            <p className="text-lg italic mb-5" style={{ color: "#1B4D1B" }}>
              &ldquo;{product.localName}&rdquo;
            </p>

            {/* Divider */}
            <div className="h-px mb-5" style={{ backgroundColor: "#DAA520" }} />

            {/* Rating + Share */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: "#5C3A1E" }}>
                {product.rating} &middot; {product.reviews} reviews
              </span>
              <button
                onClick={handleShare}
                className="ml-auto p-1.5 rounded transition-opacity hover:opacity-60"
                style={{ border: "1px solid #DAA520" }}
              >
                <ShareIcon className="w-4 h-4" style={{ color: "#5C3A1E" }} />
              </button>
            </div>

            {/* Price */}
            <div className="mb-5">
              <div
                className="text-xs uppercase tracking-widest font-medium mb-1"
                style={{ color: "#5C3A1E" }}
              >
                Price
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#5C3A1E" }}
                >
                  Ksh
                </span>
                <span
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: "#1A1A1A" }}
                >
                  {price}
                </span>
                <span className="text-sm" style={{ color: "#5C3A1E" }}>
                  / {selectedWeight}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-5" style={{ backgroundColor: "#DAA520" }} />

            {/* Quick Details */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div
                className="text-center py-3 px-2 rounded-lg"
                style={{ border: "1px solid #DAA520" }}
              >
                <div
                  className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "#5C3A1E" }}
                >
                  Origin
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "#1A1A1A" }}
                >
                  {product.origin}
                </div>
              </div>
              <div
                className="text-center py-3 px-2 rounded-lg"
                style={{ border: "1px solid #DAA520" }}
              >
                <div
                  className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "#5C3A1E" }}
                >
                  Type
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "#1A1A1A" }}
                >
                  Dried
                </div>
              </div>
              <div
                className="text-center py-3 px-2 rounded-lg"
                style={{ border: "1px solid #DAA520" }}
              >
                <div
                  className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "#5C3A1E" }}
                >
                  Stock
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: product.inStock > 0 ? "#1B4D1B" : "#5C3A1E" }}
                >
                  {product.inStock > 0 ? `${product.inStock} left` : "Sold out"}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-5" style={{ backgroundColor: "#DAA520" }} />

            {/* Short Description */}
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#5C3A1E" }}
            >
              {product.description}
            </p>

            {/* Weight Selection */}
            <div className="mb-5">
              <div
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: "#5C3A1E" }}
              >
                Select Weight
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedWeight("50g")}
                  className="py-3 px-4 rounded-lg border-2 text-left transition-opacity hover:opacity-90"
                  style={{
                    borderColor:
                      selectedWeight === "50g" ? "#1B4D1B" : "#DAA520",
                    backgroundColor:
                      selectedWeight === "50g" ? "#1B4D1B" : "#F5F5DC",
                    color: selectedWeight === "50g" ? "#F5F5DC" : "#1A1A1A",
                  }}
                >
                  <span className="block text-sm font-semibold">50g</span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{
                      color: selectedWeight === "50g" ? "#DAA520" : "#5C3A1E",
                    }}
                  >
                    Trial Pack
                  </span>
                </button>
                <button
                  onClick={() => setSelectedWeight("100g")}
                  className="py-3 px-4 rounded-lg border-2 text-left transition-opacity hover:opacity-90 relative"
                  style={{
                    borderColor:
                      selectedWeight === "100g" ? "#1B4D1B" : "#DAA520",
                    backgroundColor:
                      selectedWeight === "100g" ? "#1B4D1B" : "#F5F5DC",
                    color: selectedWeight === "100g" ? "#F5F5DC" : "#1A1A1A",
                  }}
                >
                  <span className="block text-sm font-semibold">100g</span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{
                      color: selectedWeight === "100g" ? "#DAA520" : "#5C3A1E",
                    }}
                  >
                    Best Value
                  </span>
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-stretch gap-3 mb-6">
              <div
                className="flex items-center rounded-lg overflow-hidden flex-shrink-0"
                style={{ border: "1px solid #DAA520" }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 transition-opacity hover:opacity-60"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <MinusIcon className="w-4 h-4" style={{ color: "#1A1A1A" }} />
                </button>
                <span
                  className="w-12 text-center text-sm font-semibold"
                  style={{
                    color: "#1A1A1A",
                    borderLeft: "1px solid #DAA520",
                    borderRight: "1px solid #DAA520",
                    backgroundColor: "#F5F5DC",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 transition-opacity hover:opacity-60"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <PlusIcon className="w-4 h-4" style={{ color: "#1A1A1A" }} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.inStock === 0}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg font-semibold text-sm tracking-wide transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                style={{
                  backgroundColor:
                    product.inStock === 0 ? "#5C3A1E" : "#1B4D1B",
                  color: "#F5F5DC",
                }}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

            {/* Divider */}
            <div className="h-px mb-5" style={{ backgroundColor: "#DAA520" }} />

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 p-1.5 rounded"
                  style={{ backgroundColor: "#1B4D1B" }}
                >
                  <TruckIcon className="w-4 h-4" style={{ color: "#DAA520" }} />
                </div>
                <span
                  className="text-xs leading-tight"
                  style={{ color: "#5C3A1E" }}
                >
                  Free delivery on orders over Ksh 10,000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 p-1.5 rounded"
                  style={{ backgroundColor: "#1B4D1B" }}
                >
                  <ShieldCheckIcon
                    className="w-4 h-4"
                    style={{ color: "#DAA520" }}
                  />
                </div>
                <span
                  className="text-xs leading-tight"
                  style={{ color: "#5C3A1E" }}
                >
                  100% organic guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: "#DAA520" }} />
      </div>

      {/* Product Details Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-b-2" style={{ borderColor: "#DAA520" }}>
          <nav className="flex gap-8 -mb-px">
            {["description", "benefits", "nutrition", "origin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="pb-3 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #1B4D1B"
                      : "2px solid transparent",
                  color: activeTab === tab ? "#1B4D1B" : "#5C3A1E",
                  marginBottom: activeTab === tab ? "-2px" : "0",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-8">
          {activeTab === "description" && (
            <div className="max-w-2xl">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#5C3A1E" }}
              >
                {product.description}
              </p>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="max-w-2xl">
              <h3
                className="text-lg font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Health Benefits
              </h3>
              <ul className="space-y-4">
                {product.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1B4D1B" }}
                    >
                      <CheckCircleIcon
                        className="w-3 h-3"
                        style={{ color: "#DAA520" }}
                      />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "#5C3A1E" }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div>
              <h3
                className="text-lg font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Nutritional Information
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(product.nutritionalInfo).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="py-4 px-4 rounded-lg text-center"
                      style={{
                        border: "1px solid #DAA520",
                      }}
                    >
                      <div
                        className="text-[10px] uppercase tracking-widest font-semibold mb-2"
                        style={{ color: "#5C3A1E" }}
                      >
                        {key}
                      </div>
                      <div
                        className="text-xl font-bold"
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
            <div className="max-w-2xl">
              <h3
                className="text-lg font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Origin and Farming
              </h3>
              <div
                className="p-6 rounded-lg"
                style={{ border: "1px solid #DAA520" }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1B4D1B" }}
                    >
                      <InformationCircleIcon
                        className="w-4 h-4"
                        style={{ color: "#DAA520" }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                        style={{ color: "#5C3A1E" }}
                      >
                        Origin
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "#1A1A1A" }}
                      >
                        {product.origin}
                      </div>
                    </div>
                  </div>
                  <div
                    className="h-px"
                    style={{ backgroundColor: "#DAA520" }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1B4D1B" }}
                    >
                      <ShieldCheckIcon
                        className="w-4 h-4"
                        style={{ color: "#DAA520" }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                        style={{ color: "#5C3A1E" }}
                      >
                        Farming Method
                      </div>
                      <div className="text-sm" style={{ color: "#1A1A1A" }}>
                        Agroecological farming without harmful pesticides or
                        chemical fertilizers
                      </div>
                    </div>
                  </div>
                  <div
                    className="h-px"
                    style={{ backgroundColor: "#DAA520" }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1B4D1B" }}
                    >
                      <TruckIcon
                        className="w-4 h-4"
                        style={{ color: "#DAA520" }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                        style={{ color: "#5C3A1E" }}
                      >
                        Processing
                      </div>
                      <div className="text-sm" style={{ color: "#1A1A1A" }}>
                        Carefully dried at low temperatures to preserve
                        nutrients and flavor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: "#DAA520" }} />
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
          {/* Review Summary */}
          <div className="md:sticky md:top-28 md:self-start">
            <div
              className="p-6 rounded-lg text-center"
              style={{ border: "1px solid #DAA520" }}
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                {product.rating}
              </div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#5C3A1E" }}
              >
                {product.reviews} Reviews
              </div>
            </div>
          </div>

          {/* Review List */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
              Customer Reviews
            </h2>
            <div className="space-y-0">
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
                <div key={index}>
                  <div className="py-5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#1A1A1A" }}
                        >
                          {review.name}
                        </span>
                        <span
                          className="text-xs ml-2"
                          style={{ color: "#5C3A1E" }}
                        >
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIconSolid
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5C3A1E" }}
                    >
                      {review.comment}
                    </p>
                  </div>
                  {index < 2 && (
                    <div
                      className="h-px"
                      style={{ backgroundColor: "#DAA520" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: "#DAA520" }} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div
                className="text-xs uppercase tracking-widest font-semibold mb-2"
                style={{ color: "#5C3A1E" }}
              >
                Explore More
              </div>
              <h2 className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
                You Might Also Like
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs uppercase tracking-widest font-semibold transition-opacity hover:opacity-60 hidden sm:block"
              style={{ color: "#1B4D1B" }}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/shop/${relatedProduct.id}`}
                className="group block"
              >
                <div
                  className="aspect-square overflow-hidden relative mb-3"
                  style={{ border: "1px solid #DAA520" }}
                >
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-1">
                  <h3
                    className="text-sm font-semibold mb-0.5 transition-opacity group-hover:opacity-70"
                    style={{ color: "#1A1A1A" }}
                  >
                    {relatedProduct.name}
                  </h3>
                  <p
                    className="text-xs italic mb-2"
                    style={{ color: "#1B4D1B" }}
                  >
                    {relatedProduct.localName}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#1A1A1A" }}
                    >
                      Ksh {relatedProduct.price50}
                    </span>
                    <span
                      className="text-xs uppercase tracking-widest font-semibold transition-opacity group-hover:opacity-70"
                      style={{ color: "#1B4D1B" }}
                    >
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-block text-xs uppercase tracking-widest font-semibold"
              style={{ color: "#1B4D1B" }}
            >
              View All Products
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
