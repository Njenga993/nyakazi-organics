// src/app/about/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HeartIcon,
  UsersIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  TrophyIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const achievements = [
    {
      icon: UsersIcon,
      number: "200+",
      label: "Farmers Empowered",
      description: "Small-scale farmers trained in sustainable practices",
    },
    {
      icon: MapPinIcon,
      number: "5+",
      label: "Indigenous Varieties",
      description: "Traditional vegetable varieties preserved and promoted",
    },
    {
      icon: MapPinIcon,
      number: "50+",
      label: "Communities Reached",
      description: "Across Kenya benefiting from our programs",
    },
    {
      icon: TrophyIcon,
      number: "5+",
      label: "Awards Won",
      description: "Recognition for sustainable agriculture",
    },
  ];

  const values = [
    {
      title: "Sustainability First",
      description:
        "Every farming decision is made with long-term environmental impact in mind.",
      icon: GlobeAltIcon,
    },
    {
      title: "Community Empowerment",
      description:
        "We believe in lifting communities through fair trade and knowledge sharing.",
      icon: UsersIcon,
    },
    {
      title: "Cultural Preservation",
      description:
        "Protecting and promoting Kenya's rich agricultural heritage for future generations.",
      icon: HeartIcon,
    },
    {
      title: "Quality & Freshness",
      description:
        "From farm to table, we maintain the highest standards of quality.",
      icon: ShieldCheckIcon,
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Founded with 5 partner farmers and a vision to revive indigenous vegetables.",
    },
    {
      year: "2024",
      title: "Expansion",
      description:
        "Grew to 100 farmers and launched our first dried vegetable products.",
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description:
        "Opened our solar dehydration facility to preserve nutrients and extend shelf life.",
    },
    {
      year: "2026",
      title: "National Reach",
      description:
        "Now serving customers across Kenya with over 200 partner farmers.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/incubation.webp"
            alt="Nyakazi Organics Farm"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "#1B4D1B", opacity: 0.6 }}
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
            Our <span style={{ color: "#DAA520" }}>Story</span>
          </h1>
          <p className="text-xl" style={{ color: "#F5F5DC" }}>
            Cultivating change, preserving heritage, and nourishing communities
            through sustainable indigenous agriculture.
          </p>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Our Purpose
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              Driven by a passion for sustainable agriculture and cultural
              preservation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div
              className="rounded-lg p-1 inline-flex"
              style={{
                backgroundColor: "#F5F5DC",
                border: `1px solid ${"#DAA520"}`,
              }}
            >
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab ? "text-white shadow-sm" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === tab ? "#1B4D1B" : "transparent",
                    color: activeTab === tab ? "#F5F5DC" : "#5C3A1E",
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "mission" && (
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#1B4D1B" }}
                >
                  <HeartIconSolid
                    className="w-10 h-10"
                    style={{ color: "#DAA520" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#1A1A1A" }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#5C3A1E" }}
                >
                  To revive and promote indigenous African vegetables through
                  sustainable agroecological farming, empowering local
                  communities while providing nutritious, culturally significant
                  food to modern consumers. We bridge the gap between
                  traditional wisdom and contemporary needs, ensuring that
                  Kenya's agricultural heritage thrives for generations to come.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#1B4D1B" }}
                >
                  <GlobeAltIcon
                    className="w-10 h-10"
                    style={{ color: "#DAA520" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#1A1A1A" }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#5C3A1E" }}
                >
                  To create a future where indigenous African vegetables are
                  celebrated, conserved, and integrated into mainstream food
                  systems across Africa and beyond. We envision a continent
                  where traditional farming practices coexist with innovation,
                  creating food security, biodiversity, and cultural pride.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl"
                    style={{
                      backgroundColor: "#F5F5DC",
                      border: `1px solid ${"#DAA520"}`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#1B4D1B" }}
                    >
                      <value.icon
                        className="w-8 h-8"
                        style={{ color: "#DAA520" }}
                      />
                    </div>
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      {value.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story - Redesigned */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                From <span style={{ color: "#1B4D1B" }}>Roots to Results</span>
              </h2>
              <div className="space-y-4" style={{ color: "#5C3A1E" }}>
                <p>
                  Nyakazi Organics began in 2023 with a simple observation:
                  Kenya's indigenous vegetables were disappearing from modern
                  diets, despite their incredible nutritional value and cultural
                  significance.
                </p>
                <p>
                  Founded by 3 youths, with different backgrounds but passionate
                  about preserving food heritage, Nyakazi started with just 5
                  farmers and a mission to revive traditional farming practices.
                </p>
                <p>
                  Today, Nyakazi work's with over 200 farmers across Kenya,
                  promoting agroecological methods that not only produce
                  nutritious food but also heal the soil and support
                  biodiversity. Our dried indigenous vegetables make it easy for
                  urban families to access traditional nutrition without
                  compromising on convenience.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-semibold"
                  style={{ backgroundColor: "#1B4D1B", color: "#F5F5DC" }}
                >
                  <PlayIcon className="w-5 h-5" style={{ color: "#DAA520" }} />
                  Watch Our Journey
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg transition-colors font-semibold"
                  style={{ borderColor: "#1B4D1B", color: "#1B4D1B" }}
                >
                  Contact Us
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mercyy.jpg"
                  alt="Farmers working in field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-4 shadow-lg"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#1B4D1B" }}
                  >
                    <SparklesIcon
                      className="w-6 h-6"
                      style={{ color: "#DAA520" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Since 2023
                    </p>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      Growing sustainably
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section - New */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Our Journey
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              Key milestones on our path to preserving Kenya's agricultural
              heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl text-center"
                style={{
                  backgroundColor: "#F5F5DC",
                  border: `1px solid ${"#DAA520"}`,
                }}
              >
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
                >
                  {milestone.year.slice(-2)}
                </div>
                <div className="mt-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1B4D1B" }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#5C3A1E" }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - Updated */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Our Approach
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#5C3A1E" }}
            >
              We combine traditional wisdom with modern innovation to create
              sustainable food systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#F5F5DC",
                border: `1px solid ${"#DAA520"}`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <GlobeAltIcon
                  className="w-8 h-8"
                  style={{ color: "#DAA520" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                Agroecological Farming
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                We work with nature, not against it. Our farming methods enhance
                biodiversity, improve soil health, and eliminate harmful
                chemicals.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#F5F5DC",
                border: `1px solid ${"#DAA520"}`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <UsersIcon className="w-8 h-8" style={{ color: "#DAA520" }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                Farmer Empowerment
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                We provide advice, fair prices, and market access to small-scale
                farmers, creating sustainable livelihoods in rural communities.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#F5F5DC",
                border: `1px solid ${"#DAA520"}`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1B4D1B" }}
              >
                <ShieldCheckIcon
                  className="w-8 h-8"
                  style={{ color: "#DAA520" }}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                Quality Assurance
              </h3>
              <p className="text-sm" style={{ color: "#5C3A1E" }}>
                From seed to package, we maintain strict quality standards to
                ensure you receive the most nutritious and flavorful products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20" style={{ backgroundColor: "#1B4D1B" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#DAA520" }}
            >
              Our Impact
            </h2>
            <p className="text-xl" style={{ color: "#F5F5DC" }}>
              Making a difference, one harvest at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#DAA520" }}
                />
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: "#DAA520" }}
                >
                  {achievement.number}
                </div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#F5F5DC" }}
                >
                  {achievement.label}
                </div>
                <div className="text-sm" style={{ color: "#F5F5DC" }}>
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section - New */}
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "#1A1A1A" }}
              >
                Our{" "}
                <span style={{ color: "#1B4D1B" }}>Sustainable Practices</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Solar Dehydration
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      We use renewable solar energy to dry our vegetables,
                      preserving nutrients without electricity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Water Conservation
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      Rainwater harvesting and drip irrigation minimize water
                      usage across our farms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Composting
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      Organic waste is returned to the soil through natural
                      composting methods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: "#1B4D1B" }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "#1A1A1A" }}>
                      Seed Saving
                    </h4>
                    <p className="text-sm" style={{ color: "#5C3A1E" }}>
                      We preserve indigenous seeds for future generations
                      through seed bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/all_pro.jpeg"
                  alt="Solar dehydration process"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: "#1B4D1B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#DAA520" }}
          >
            Join Us in Revitalizing Indigenous Agriculture
          </h2>
          <p className="text-xl mb-8" style={{ color: "#F5F5DC" }}>
            Whether you are a customer, farmer, or partner, there is a place for
            you in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/shop"
              className="px-8 py-3 rounded-lg transition-colors font-semibold"
              style={{ backgroundColor: "#DAA520", color: "#1A1A1A" }}
            >
              Support Our Farmers
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 rounded-lg transition-colors font-semibold"
              style={{ borderColor: "#F5F5DC", color: "#F5F5DC" }}
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
