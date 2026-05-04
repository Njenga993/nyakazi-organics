"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Replace this with your actual portfolio URL
  const portfolioUrl = "https://njenga993.github.io/kspace/";

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // Handle subscription logic here
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!mounted) {
    return (
      <footer
        className="relative mt-20 w-full"
        style={{ backgroundColor: "#1B4D1B" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          {/* Placeholder content while mounting */}
          <div style={{ minHeight: "600px" }} />
        </div>
      </footer>
    );
  }

  return (
    <>
      <footer
        className="relative mt-20 w-full"
        style={{ backgroundColor: "#1B4D1B", marginTop: "1rem" }}
      >
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand + Social */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#1B4D1B" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h2
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "#F5F5DC" }}
                >
                  Nyakazi Organics
                </h2>
              </div>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#F5F5DC" }}
              >
                We are committed to preserving Kenya's agricultural heritage by
                bringing you indigenous vegetables grown using sustainable,
                agroecological methods. Every purchase supports local farmers
                and promotes biodiversity.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: "#F5F5DC" }}
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#1B4D1B" }}
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: "#F5F5DC" }}
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#1B4D1B" }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: "#F5F5DC" }}
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#1B4D1B" }}
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.183-11.692c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: "#F5F5DC" }}
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#1B4D1B" }}
                  >
                    <path d="M12.032 1.964c-5.524 0-10 4.476-10 10 0 1.774.462 3.516 1.338 5.04L1.52 22.48l5.611-1.702c1.476.829 3.156 1.266 4.901 1.266 5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.092c-1.476 0-2.922-.402-4.16-1.154l-.298-.177-3.313 1.005 1.04-3.291-.177-.298a7.964 7.964 0 01-1.236-4.285c0-4.412 3.589-8 8-8s8 3.588 8 8-3.589 8-8 8z" />
                    <path d="M16.488 13.374c-.247-.124-1.46-.721-1.687-.804-.226-.082-.392-.124-.557.124-.165.247-.64.804-.784.969-.145.165-.29.186-.537.062-.247-.124-1.043-.384-1.986-1.226-.734-.657-1.23-1.467-1.373-1.714-.144-.247-.015-.38.108-.503.11-.11.247-.288.371-.432.124-.144.165-.247.247-.412.083-.165.041-.309-.021-.433-.061-.124-.556-1.34-.762-1.835-.2-.48-.403-.414-.557-.422-.144-.008-.309-.008-.474-.008-.165 0-.432.062-.659.309-.226.247-.866.846-.866 2.064 0 1.218.887 2.394 1.011 2.559.124.165 1.747 2.667 4.232 3.74.591.255 1.052.408 1.412.522.593.186 1.133.16 1.56.097.476-.07 1.46-.597 1.666-1.173.206-.576.206-1.07.144-1.173-.062-.103-.227-.165-.474-.289z" />
                  </svg>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#DAA520" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-xs" style={{ color: "#F5F5DC" }}>
                    100% Organic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#DAA520" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="text-xs" style={{ color: "#F5F5DC" }}>
                    Eco-Friendly
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#DAA520" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs" style={{ color: "#F5F5DC" }}>
                    Timely Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="font-semibold text-lg mb-4 pl-3"
                style={{
                  color: "#DAA520",
                  borderLeft: `2px solid ${"#DAA520"}`,
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shop Categories */}
            <div>
              <h3
                className="font-semibold text-lg mb-4 pl-3"
                style={{
                  color: "#DAA520",
                  borderLeft: `2px solid ${"#DAA520"}`,
                }}
              >
                Shop
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/shop#leafy-greens"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Leafy Greens
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop#powders"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Vegetable Powders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop#mushrooms"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Mushrooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop#bundles"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Value Bundles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop#gifts"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Gift Boxes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3
                className="font-semibold text-lg mb-4 pl-3"
                style={{
                  color: "#DAA520",
                  borderLeft: `2px solid ${"#DAA520"}`,
                }}
              >
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/shipping"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors duration-200 text-sm"
                    style={{ color: "#F5F5DC" }}
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div
            className="mt-12 pt-8 border-t grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ borderTopColor: "#DAA520" }}
          >
            <div>
              <h3
                className="font-semibold text-lg mb-4"
                style={{ color: "#DAA520" }}
              >
                Stay Connected
              </h3>
              <p className="text-sm mb-4" style={{ color: "#F5F5DC" }}>
                Get exclusive offers, nutrition tips, and stories about our
                farming community.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    backgroundColor: "#F5F5DC",
                    borderColor: "#DAA520",
                    color: "#1A1A1A",
                  }}
                  required
                  autoComplete="email"
                  name="email"
                  id="footer-email"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm shadow-md"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-sm" style={{ color: "#DAA520" }}>
                  Thank you for subscribing. Check your inbox soon.
                </p>
              )}
            </div>

            <div>
              <h3
                className="font-semibold text-lg mb-4"
                style={{ color: "#DAA520" }}
              >
                Get in Touch
              </h3>
              <div className="text-sm space-y-3" style={{ color: "#F5F5DC" }}>
                <p>
                  <span className="font-medium" style={{ color: "#DAA520" }}>
                    Email:
                  </span>{" "}
                  info@nyakazi.org
                </p>
                <p>
                  <span className="font-medium" style={{ color: "#DAA520" }}>
                    Phone:
                  </span>{" "}
                  +254 792 533 935 
                </p>
                <p>
                  <span className="font-medium" style={{ color: "#DAA520" }}>
                    Address:
                  </span>{" "}
                  Gilgil Kariandusi, Kenya
                </p>
                <p>
                  <span className="font-medium" style={{ color: "#DAA520" }}>
                    Hours:
                  </span>{" "}
                  Monday - Friday, 9am - 5pm
                </p>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderTopColor: "#DAA520" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs" style={{ color: "#F5F5DC" }}>
                Secure payment methods
              </p>
              <div className="flex gap-3">
                <div
                  className="px-3 py-1.5 rounded-md text-xs font-mono"
                  style={{ backgroundColor: "#F5F5DC", color: "#1B4D1B" }}
                >
                  VISA
                </div>
                <div
                  className="px-3 py-1.5 rounded-md text-xs font-mono"
                  style={{ backgroundColor: "#F5F5DC", color: "#1B4D1B" }}
                >
                  MASTERCARD
                </div>
                <div
                  className="px-3 py-1.5 rounded-md text-xs font-mono"
                  style={{ backgroundColor: "#F5F5DC", color: "#1B4D1B" }}
                >
                  M-PESA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="border-t py-6 text-center"
          style={{ borderTopColor: "#DAA520" }}
        >
          <p className="text-sm" style={{ color: "#F5F5DC" }}>
            Copyright (c) {new Date().getFullYear()} Nyakazi Organics. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs" style={{ color: "#F5F5DC" }}>
            Designed and built with care in Kenya | Powered by{" "}
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 underline"
              style={{ color: "#DAA520" }}
            >
              K-Space
            </a>
          </p>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-200 z-40"
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
    </>
  );
}
