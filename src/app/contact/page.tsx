// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon as MapPinSolid } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+254 718 105 412",
      description: "Mon-Fri: 9AM - 5PM",
      action: "tel:+254718105412",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "info@nyakazi.org",
      description: "We respond within 24 hours",
      action: "mailto:info@nyakazi.org",
    },
    {
      icon: MapPinIcon,
      label: "Visit Us",
      value: "Gilgil Kariandusi, Kenya",
      description: "Welcome to our farm",
      action: "#location",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: "WhatsApp",
      value: "+254 718 105 412",
      description: "Chat with us instantly",
      action: "https://wa.me/254718105412",
    },
  ];

  const faqs = [
    {
      question: "Do you deliver outside Nairobi?",
      answer:
        "Yes, we deliver nationwide across Kenya. Delivery times may vary for locations outside Nairobi.",
    },
    {
      question: "How can I become a partner farmer?",
      answer:
        "We welcome small-scale farmers practicing agroecological methods. Please contact us with details about your farm.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer competitive pricing for bulk orders. Please contact us for a customized quote.",
    },
    {
      question: "Are your products certified organic?",
      answer:
        "Yes, all our products are grown using agroecological methods without harmful pesticides or chemical fertilizers.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "#1B4D1B" }}
        ></div>
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "#1A1A1A", opacity: 0.3 }}
        ></div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#F5F5DC" }}
          >
            Get in <span style={{ color: "#DAA520" }}>Touch</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#F5F5DC" }}>
            We would love to hear from you. Whether you are a customer, farmer,
            or partner, we are here to help.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Reach Out Anytime
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              Multiple ways to connect with us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: "#1B4D1B" }}
                >
                  <method.icon
                    className="w-6 h-6"
                    style={{ color: "#DAA520" }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1A1A1A" }}
                >
                  {method.label}
                </h3>
                <p className="font-medium mb-1" style={{ color: "#1B4D1B" }}>
                  {method.value}
                </p>
                <p className="text-sm" style={{ color: "#5C3A1E" }}>
                  {method.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Send Us a Message
              </h2>
              <p className="mb-8" style={{ color: "#5C3A1E" }}>
                Have questions about our products? Want to partner with us? Fill
                out the form and we will get back to you soon.
              </p>

              {submitStatus === "success" && (
                <div
                  className="mb-6 p-4 rounded-lg flex items-center gap-2"
                  style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
                >
                  <CheckCircleIcon
                    className="w-5 h-5"
                    style={{ color: "#DAA520" }}
                  />
                  Thank you for your message. We will get back to you within 24
                  hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="mb-6 p-4 rounded-lg"
                  style={{
                    backgroundColor: "#F5F5DC",
                    border: `1px solid ${"#DAA520"}`,
                    color: "#5C3A1E",
                  }}
                >
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{
                        border: `1px solid ${"#DAA520"}`,
                        backgroundColor: "#F5F5DC",
                        color: "#1A1A1A",
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{
                        border: `1px solid ${"#DAA520"}`,
                        backgroundColor: "#F5F5DC",
                        color: "#1A1A1A",
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1A1A1A" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      border: `1px solid ${"#DAA520"}`,
                      backgroundColor: "#F5F5DC",
                      color: "#1A1A1A",
                    }}
                    placeholder="+254 712 345 678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1A1A1A" }}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      border: `1px solid ${"#DAA520"}`,
                      backgroundColor: "#F5F5DC",
                      color: "#1A1A1A",
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Related</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="farmer">Farmer Registration</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1A1A1A" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      border: `1px solid ${"#DAA520"}`,
                      backgroundColor: "#F5F5DC",
                      color: "#1A1A1A",
                    }}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Visit Our Farmers
              </h2>
              <div
                className="rounded-xl p-6 shadow-lg mb-6"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <MapPinSolid
                    className="w-6 h-6 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Our Farmers Location
                    </h3>
                    <p style={{ color: "#5C3A1E" }}>
                      Nakuru County, Kenya
                      <br />
                      Kakamega County, Kenya
                      <br />
                      Bungoma County, Kenya
                      <br />
                      Kisumu County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <ClockIcon
                    className="w-6 h-6 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Business Hours
                    </h3>
                    <p style={{ color: "#5C3A1E" }}>
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TruckIcon
                    className="w-6 h-6 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Delivery Information
                    </h3>
                    <p style={{ color: "#5C3A1E" }}>
                      • Nairobi: Same day delivery (order before 12 PM)
                      <br />
                      • Major towns: 1-2 business days
                      <br />• Nationwide: 2-3 business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                className="rounded-xl h-64 flex items-center justify-center"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div className="text-center">
                  <MapPinIcon
                    className="w-12 h-12 mx-auto mb-2"
                    style={{ color: "#5C3A1E" }}
                  />
                  <p style={{ color: "#5C3A1E" }}>Interactive Map</p>
                  <p className="text-sm" style={{ color: "#5C3A1E" }}>
                    Farm location will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              Quick answers to common questions about Nyakazi Organics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <h3 className="font-semibold mb-3" style={{ color: "#1A1A1A" }}>
                  {faq.question}
                </h3>
                <p style={{ color: "#5C3A1E" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16" style={{ backgroundColor: "#1B4D1B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#DAA520" }}
          >
            Partner With Us
          </h2>
          <p className="text-xl mb-8" style={{ color: "#F5F5DC" }}>
            Whether you are a farmer, retailer, or organization, we would love
            to work together to promote sustainable agriculture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                <BuildingOfficeIcon
                  className="w-8 h-8"
                  style={{ color: "#1B4D1B" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#DAA520" }}
              >
                Farmers
              </h3>
              <p style={{ color: "#F5F5DC" }}>
                Join our network of sustainable farmers
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                <TruckIcon className="w-8 h-8" style={{ color: "#1B4D1B" }} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#DAA520" }}
              >
                Retailers
              </h3>
              <p style={{ color: "#F5F5DC" }}>
                Stock our products in your store
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                <GlobeAltIcon
                  className="w-8 h-8"
                  style={{ color: "#1B4D1B" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#DAA520" }}
              >
                Organizations
              </h3>
              <p style={{ color: "#F5F5DC" }}>
                Collaborate on community projects
              </p>
            </div>
          </div>
          <a
            href="mailto:info@nyakazi.org"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-colors font-semibold"
            style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
          >
            <EnvelopeIcon className="w-5 h-5" />
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
}
