"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

export default function MobileHero() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full h-[280px] sm:h-[350px] relative border-b border-gray-100">
        <Swiper
          modules={[Autoplay, Pagination, Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          spaceBetween={0}
          slidesPerView={1}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                loading={index === 0 ? "eager" : "lazy"} // LCP অপটিমাইজেশনের জন্য
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full bg-white py-8 px-6 border-b border-gray-100 shadow-sm">
        <Swiper
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          spaceBetween={20}
          slidesPerView={1}
          allowTouchMove={false}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full">
              <div className="flex flex-col gap-3 text-left text-slate-900">
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-bold tracking-wider">
                    Skill<span className="text-blue-500">Sphere</span>
                  </span>
                  <span className="text-[10px] text-blue-500 tracking-widest uppercase font-semibold">
                    {slide.tagline}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                  {slide.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                    {slide.highlightText}
                  </span>
                </h1>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 max-w-md">
                  {slide.description}
                </p>

                <div className="mt-2">
                  <Link
                    href="/courses"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs px-5 py-2.5 rounded-lg shadow-md"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}