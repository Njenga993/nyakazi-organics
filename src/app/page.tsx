"use client";

import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SparklesIcon,
  ShieldCheckIcon,
  TruckIcon,
  HeartIcon,
  ArrowDownIcon,
  PlayIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full">
      {/* Hero section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="scroll-mt-20">
        <ProductsSection />
      </section>

      {/* Why Choose Us - Enhanced with more features */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Why Choose Nyakazi Organics?
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              We are committed to delivering exceptional quality while
              supporting sustainable farming practices and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#F5F5DC",
                border: "1px solid #DAA520",
              }}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <ShieldCheckIcon
                  className="w-8 h-8"
                  style={{ color: "#DAA520" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                100 Percent Organic
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                All our products are grown without harmful pesticides or
                chemical fertilizers, ensuring pure nutrition.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#F5F5DC",
                border: "1px solid #DAA520",
              }}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <TruckIcon className="w-8 h-8" style={{ color: "#DAA520" }} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Fast Delivery
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                We deliver nationwide within 2 business days, ensuring freshness
                and convenience.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#F5F5DC",
                border: "1px solid #DAA520",
              }}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <HeartIcon className="w-8 h-8" style={{ color: "#DAA520" }} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Support Farmers
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                Every purchase directly supports local farmers and promotes
                sustainable agroecological practices.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#F5F5DC",
                border: "1px solid #DAA520",
              }}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <SparklesIcon
                  className="w-8 h-8"
                  style={{ color: "#DAA520" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Nutrient Dense
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                Our indigenous vegetables contain higher concentrations of
                vitamins, minerals, and antioxidants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              From Farm to Table
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              Our transparent process ensures you receive the highest quality
              indigenous vegetables while supporting sustainable farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div
                className="rounded-xl p-8 shadow-lg h-full"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: "1px solid #DAA520",
                }}
              >
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  1
                </div>
                <h3
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: "#1A1A1A" }}
                >
                  Sustainable Farming
                </h3>
                <p className="text-center text-sm" style={{ color: "#5C3A1E" }}>
                  We partner with local farmers who use traditional
                  agroecological methods that preserve biodiversity and soil
                  health.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-xl p-8 shadow-lg h-full"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: "1px solid #DAA520",
                }}
              >
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  2
                </div>
                <h3
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: "#1A1A1A" }}
                >
                  Careful Processing
                </h3>
                <p className="text-center text-sm" style={{ color: "#5C3A1E" }}>
                  Our vegetables are harvested at peak nutrition and carefully
                  dried using low-temperature methods to preserve nutrients.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-xl p-8 shadow-lg h-full"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: "1px solid #DAA520",
                }}
              >
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  3
                </div>
                <h3
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: "#1A1A1A" }}
                >
                  Direct to You
                </h3>
                <p className="text-center text-sm" style={{ color: "#5C3A1E" }}>
                  We package our products in eco-friendly materials and deliver
                  them directly to your doorstep, ensuring freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Our Journey to{" "}
                <span style={{ color: "#1B4D1B" }}>
                  Revitalize Indigenous Nutrition
                </span>
              </h2>
              <p className="text-lg mb-6" style={{ color: "#5C3A1E" }}>
                Founded with a mission to preserve Kenya's agricultural
                heritage, Nyakazi Organics connects modern consumers with the
                nutritional power of traditional vegetables. Watch our story to
                learn more about our impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Preserving Biodiversity
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      We support the cultivation of indigenous vegetable
                      varieties that are at risk of disappearing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Empowering Farmers
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      We provide fair prices and training to help farmers
                      transition to sustainable agroecological practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Improving Nutrition
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      Our products make it easy to incorporate nutrient-dense
                      indigenous vegetables into modern diets.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-semibold"
                style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
              >
                <PlayIcon className="w-5 h-5" style={{ color: "#DAA520" }} />
                Watch Our Story
              </button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div
                className="aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#5C3A1E" }}
              >
                <p style={{ color: "#F5F5DC" }}>Video placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action Section - no gradient */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: "#1B4D1B" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#DAA520" }}
          >
            Ready to Transform Your Health with Indigenous Vegetables?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#F5F5DC" }}>
            Join our community of health-conscious individuals who are
            rediscovering the power of traditional African nutrition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-3 rounded-lg transition-colors font-semibold"
              style={{ backgroundColor: "#F5F5DC", color: "#1B4D1B" }}
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 rounded-lg transition-colors font-semibold"
              style={{ borderColor: "#F5F5DC", color: "#F5F5DC" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-200 z-40"
          style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
