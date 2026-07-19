"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/Slider1.jpg",
      tagline: "Learn · Grow · Succeed",
      title: "Empower Your Future",
      highlightText: "In Bangladesh 🇧🇩",
      description: "Unlock your potential and step into the world of success. Explore our upcoming premium courses designed to elevate your professional skills.",
    },
    {
      id: 2,
      image: "/Slider2.jpg",
      tagline: "Build Your Tech Career",
      title: "Master In-Demand Skills",
      highlightText: "From Industry Experts",
      description: "Stay ahead of the curve by learning Web Development, UI/UX Design, and AI Technologies from world-class mentors.",
    },
    {
      id: 3,
      image: "/Slider3.jpg",
      tagline: "Flexible Learning Platform",
      title: "Learn at Your Own Pace",
      highlightText: "With Lifetime Access",
      description: "Study anytime, anywhere, on any device. Get premium dedicated support and personalized career guidelines to hit your goals.",
    },
  ];

  return (
    <section className="relative max-w-[1256px] w-full h-[700px] mx-auto overflow-hidden md:rounded-3xl mt-4 border border-gray-200 bg-white shadow-xl transition-all duration-300">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{ clickable: true }}
        className="w-full h-full custom-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full flex items-center">
            
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="(max-width: 1256px) 100vw, 1256px"
                className="object-contain object-center" 
              />
              <div 
                className="absolute inset-0 z-10" 
                style={{ backgroundImage: "var(--slider-overlay)" }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 md:px-16 w-full h-full grid grid-cols-1 md:grid-cols-2 items-center relative z-20">
              
              <div className="max-w-xl flex flex-col gap-4 text-left drop-shadow-sm pr-4 md:pr-8 text-slate-900">
                
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg md:text-xl font-bold tracking-wider">
                    Skill<span className="text-blue-500">Sphere</span>
                  </span>
                  <span className="text-[10px] md:text-xs text-blue-500 tracking-widest uppercase font-semibold">
                    {slide.tagline}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  {slide.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                    {slide.highlightText}
                  </span>
                </h1>

                <p className="text-xs md:text-sm leading-relaxed text-gray-700 max-w-md">
                  {slide.description}
                </p>

                <div className="mt-1">
                  <Link
                    href="/courses"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md hover:shadow-blue-500/20 hover:scale-[1.01] transition-all duration-300"
                  >
                    Explore Courses
                  </Link>
                </div>

              </div>

              <div className="hidden md:block w-full h-full"></div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}