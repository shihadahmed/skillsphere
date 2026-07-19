// src/app/page.js
"use client";

import HeroSlider from "@/app/components/Home/HeroSlider";
import CourseGrid from "@/app/components/Home/CourseGrid"
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import SkillDevelopment from "@/app/components/Home/SkillDevelopment";
// import Features from "@/app/components/Features";
// import UpcomingCourses from "@/app/components/UpcomingCourses";
// import Testimonials from "@/app/components/Testimonials";

export default function HomePage() {
  return (
    <div className="w-ful min-h-screen">
      <HeroSlider />
      <CourseGrid/>
      <WhyChooseUs/>
      <SkillDevelopment/>
      {/* <Features /> */}
      {/* <UpcomingCourses /> */}
      {/* <Testimonials /> */}

    </div>
  );
}