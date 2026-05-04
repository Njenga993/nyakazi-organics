"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  PlayIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TruckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Nairobi",
      text: "The dried managu and terere are a game changer for my busy schedule. Traditional taste, ready in minutes.",
      rating: 5,
      verifiedPurchase: true,
    },
    {
      name: "John K.",
      location: "Mombasa",
      text: "Finally, authentic traditional vegetables that I can store for months. The oyster mushrooms are exceptional.",
      rating: 5,
      verifiedPurchase: true,
    },
    {
      name: "Grace W.",
      location: "Kisumu",
      text: "I love supporting local farmers while having nutritious indigenous vegetables available year-round.",
      rating: 5,
      verifiedPurchase: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const benefits = [
    { icon: TruckIcon, text: "Free delivery on orders over Ksh 10,000" },
    { icon: ShieldCheckIcon, text: "Quality guaranteed or your money back" },
    { icon: CurrencyDollarIcon, text: "Fair prices directly from farmers" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mercyy.jpg"
          alt="Dried indigenous African vegetables and oyster mushrooms from Nyakazi Organics"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Overlay layers for text readability - reduced opacity */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "#1B4D1B", opacity: 0.4 }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "#1A1A1A", opacity: 0.2 }}
      ></div>

      {/* Top Benefits Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{ backgroundColor: "#1B4D1B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-white text-sm">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <benefit.icon
                  className="w-4 h-4"
                  style={{ color: "#DAA520" }}
                />
                <span className="hidden sm:inline text-white/90">
                  {benefit.text}
                </span>
                <span className="sm:hidden text-xs text-white/90">
                  {benefit.text.split(" ").slice(0, 3).join(" ")}...
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Social Proof Badge - no border */}
          <div
            className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: "#1B4D1B" }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid
                  key={i}
                  className="w-4 h-4"
                  style={{ color: "#DAA520" }}
                />
              ))}
            </div>
            <span className="font-medium text-sm text-white">
              Rated 4.9 out of 5
            </span>
            <span className="text-white/60 text-sm">|</span>
            <span className="text-white/90 text-sm">500+ happy customers</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Preserving Kenya's Heritage
            <span className="block mt-2" style={{ color: "#DAA520" }}>
              Dried & Frozen Indigenous Vegetables
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Nutrient-rich managu, terere, sagaa, and dried oyster mushrooms.
            <span
              className="block font-medium mt-2"
              style={{ color: "#DAA520" }}
            >
              Solar-dehydrated to lock in flavor. 15-month shelf life. Ready in
              minutes.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link
              href="/shop"
              className="px-8 py-4 rounded-lg transition-all duration-300 font-bold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 min-w-[200px]"
              style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
            >
              Shop Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#1A1A1A" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Guarantee - no border */}
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2"
              style={{ backgroundColor: "#1B4D1B" }}
            >
              <CheckCircleIcon
                className="w-5 h-5"
                style={{ color: "#DAA520" }}
              />
              <span className="text-sm text-white/90">
                30-Day Satisfaction Guarantee
              </span>
            </div>
          </div>

          {/* Testimonial Carousel - no border */}
          <div className="max-w-2xl mx-auto mb-10 hidden md:block">
            <div
              className="rounded-xl p-5 transition-all duration-500"
              style={{ backgroundColor: "#1B4D1B" }}
            >
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <StarIconSolid
                      key={i}
                      className="w-4 h-4"
                      style={{ color: "#DAA520" }}
                    />
                  ),
                )}
              </div>
              <p className="text-white/90 text-base italic mb-3 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="font-medium text-sm text-white/90">
                  - {testimonials[currentTestimonial].name},{" "}
                  {testimonials[currentTestimonial].location}
                </p>
                {testimonials[currentTestimonial].verifiedPurchase && (
                  <span
                    className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#5C3A1E", color: "#DAA520" }}
                  >
                    <CheckCircleIcon className="w-3 h-3" />
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === idx ? "w-6" : "w-1.5"
                  }`}
                  style={{
                    backgroundColor:
                      currentTestimonial === idx ? "#DAA520" : "#F5F5DC",
                  }}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {
                value: "150+",
                label: "Partner Farmers",
                description: "Supporting local agriculture",
              },
              {
                value: "10+",
                label: "Tonnes Processed",
                description: "Annually",
              },
              {
                value: "15",
                label: "Month Shelf Life",
                description: "Dried vegetables stay fresh",
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-3 rounded-lg transition-all duration-300 cursor-default"
                onMouseEnter={() => setActiveMetric(idx)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: "#DAA520" }}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/70">
                  {metric.label}
                </div>
                {activeMetric === idx && (
                  <div className="text-white/40 text-[10px] mt-1 transition-opacity duration-200">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Free Shipping Offer - no border 
          <div
            className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ backgroundColor: "#1B4D1B" }}
          >
            <span
              className="text-xs font-semibold"
              style={{ color: "#DAA520" }}
            >
              First Order:
            </span>
            <span className="text-xs text-white/80">
              Free delivery with code: NYAKAZI
            </span>
          </div>*/}
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "#1A1A1A", opacity: 0.95 }}
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#F5F5DC" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-4 border-b flex justify-between items-center"
              style={{ borderBottomColor: "#DAA520" }}
            >
              <h3 className="text-lg font-bold" style={{ color: "#1B4D1B" }}>
                Our Story
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: "#F5F5DC" }}
                aria-label="Close video"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#1A1A1A" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="aspect-video flex items-center justify-center"
              style={{ backgroundColor: "#1B4D1B" }}
            >
              <div className="text-center p-8">
                <p className="mb-4 text-white/70">
                  From farm to dehydration - preserving Kenya's indigenous
                  vegetables
                </p>
                <Link
                  href="/shop"
                  className="inline-block px-6 py-2 rounded-lg transition-colors"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                  onClick={() => setVideoModalOpen(false)}
                >
                  Shop Dried Vegetables
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
