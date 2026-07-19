// src/app/page.js
"use client";

import HeroSlider from "@/app/components/Home/HeroSlider";
// import Features from "@/app/components/Features";
// import UpcomingCourses from "@/app/components/UpcomingCourses";
// import Testimonials from "@/app/components/Testimonials";

export default function HomePage() {
  return (
    <div className="w-ful min-h-screen">
      <HeroSlider />
      {/* <Features /> */}
      {/* <UpcomingCourses /> */}
      {/* <Testimonials /> */}

    </div>
  );
}