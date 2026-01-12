// src/app/about/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  HeartIcon, 
   
  UsersIcon, 
  GlobeAltIcon,
  ShieldCheckIcon,
  
  SparklesIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Grace Nyakazi",
      role: "Founder & CEO",
      image: "/images/incubation.webp",
      bio: "Agricultural scientist with over 15 years of experience in sustainable farming and indigenous food systems."
    },
    {
      name: "David Mwangi",
      role: "Head of Farming Operations",
      image: "/images/incubation.webp",
      bio: "Expert in agroecological practices and community farming initiatives."
    },
    {
      name: "Sarah Wanjiru",
      role: "Community Outreach Manager",
      image: "/images/incubation.webp",
      bio: "Passionate about connecting farmers with markets and promoting indigenous food culture."
    }
  ];

  const achievements = [
    {
      icon: UsersIcon,
      number: "500+",
      label: "Farmers Empowered",
      description: "Small-scale farmers trained in sustainable practices"
    },
    {
      icon: GlobeAltIcon,
      number: "25+",
      label: "Indigenous Varieties",
      description: "Traditional vegetable varieties preserved and promoted"
    },
    {
      icon: GlobeAltIcon,
      number: "50+",
      label: "Communities Reached",
      description: "Across Kenya benefiting from our programs"
    },
    {
      icon: GlobeAltIcon,
      number: "10+",
      label: "Awards Won",
      description: "Recognition for sustainable agriculture"
    }
  ];

  const values = [
    {
      title: "Sustainability First",
      description: "Every farming decision is made with long-term environmental impact in mind.",
      icon: GlobeAltIcon
    },
    {
      title: "Community Empowerment",
      description: "We believe in lifting communities through fair trade and knowledge sharing.",
      icon: UsersIcon
    },
    {
      title: "Cultural Preservation",
      description: "Protecting and promoting Kenya's rich agricultural heritage for future generations.",
      icon: HeartIcon
    },
    {
      title: "Quality & Freshness",
      description: "From farm to table, we maintain the highest standards of quality.",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/incubation.webp"
            alt="Nyakazi Farm"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Story</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Cultivating change, preserving heritage, and nourishing communities through sustainable indigenous agriculture.
          </p>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Purpose</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driven by a passion for sustainable agriculture and cultural preservation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartIconSolid className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revive and promote indigenous African vegetables through sustainable agroecological farming, 
                  empowering local communities while providing nutritious, culturally significant food to modern consumers. 
                  We bridge the gap between traditional wisdom and contemporary needs, ensuring that Kenya's agricultural 
                  heritage thrives for generations to come.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GlobeAltIcon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a future where indigenous African vegetables are celebrated, conserved, and 
                  integrated into mainstream food systems across Africa and beyond. We envision a continent 
                  where traditional farming practices coexist with innovation, creating food security, 
                  biodiversity, and cultural pride.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Roots to Results</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nyakazi Organics began in 2018 with a simple observation: Kenya's indigenous vegetables 
                  were disappearing from modern diets, despite their incredible nutritional value and cultural significance.
                </p>
                <p>
                  Founded by Grace Nyakazi, an agricultural scientist passionate about preserving food heritage, 
                  we started with just 5 farmers and a mission to revive traditional farming practices.
                </p>
                <p>
                  Today, we work with over 500 farmers across Kenya, promoting agroecological methods that 
                  not only produce nutritious food but also heal the soil and support biodiversity. Our dried 
                  indigenous vegetables make it easy for urban families to access traditional nutrition without 
                  compromising on convenience.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <PlayIcon className="w-5 h-5" />
                  Watch Our Journey
                </button>
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  Contact Us
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/incubation.webp"
                  alt="Farmers working in field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Since 2018</p>
                    <p className="text-sm text-gray-600">Growing sustainably</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine traditional wisdom with modern innovation to create sustainable food systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Agroecological Farming</h3>
              <p className="text-gray-600">
                We work with nature, not against it. Our farming methods enhance biodiversity, 
                improve soil health, and eliminate harmful chemicals.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Farmer Empowerment</h3>
              <p className="text-gray-600">
                We provide training, fair prices, and market access to small-scale farmers, 
                creating sustainable livelihoods in rural communities.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                From seed to package, we maintain strict quality standards to ensure 
                you receive the most nutritious and flavorful products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">
              Making a difference, one harvest at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-green-200" />
                <div className="text-3xl sm:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                <div className="text-sm opacity-80">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate individuals committed to sustainable agriculture and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=10b981&color=fff&size=96`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{member.name}</h3>
                <p className="text-green-600 text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Join Us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Revitalizing Indigenous Agriculture</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a customer, farmer, or partner, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/shop" 
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Support Our Farmers
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}