// src/app/page.js
"use client";

import HeroSlider from "@/app/components/Home/HeroSlider";
import CourseGrid from "@/app/components/Home/CourseGrid"
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import SkillDevelopment from "@/app/components/Home/SkillDevelopment";
import Testimonials from "@/app/components/Home/Testimonials"
import JoinTeam from "@/app/components/Home/JoinTeam"
import Newsletter from "@/app/components/Home/Newsletter"


export default function HomePage() {
  return (
    <div className="w-ful min-h-screen">
      <HeroSlider />
      <CourseGrid/>
      <WhyChooseUs/>
      <JoinTeam/>
      <SkillDevelopment/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
}