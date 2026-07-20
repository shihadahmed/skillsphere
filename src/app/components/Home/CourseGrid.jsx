"use client";

import { useState } from "react";
import Image from "next/image";
import coursesData from "@/data/courses.json";

export default function CourseGrid() {
 
  const categories = ["All Course", ...new Set(coursesData.map((course) => course.category))];

  const [activeCategory, setActiveCategory] = useState("All Course");


  const filteredCourses = activeCategory === "All Course"
    ? coursesData
    : coursesData.filter((course) => course.category === activeCategory);


  const getCourseCount = (cat) => {
    if (cat === "All Course") return coursesData.length;
    return coursesData.filter((course) => course.category === cat).length;
  };

  return (
    <section id="courses" className="py-12 bg-white text-slate-900 w-full max-w-7xl mx-auto px-4">
      

      <div className="text-center mb-8">
        <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
          Our Upcoming Courses
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00b074] mt-3">
          Enroll Today to Enter the World of Success!
        </h2>
      </div>


      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = getCourseCount(category);
          
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border cursor-pointer
                ${isActive 
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-100" 
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
            >
              {category}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-500"}`}>
                {count < 10 ? `0${count}` : count}
              </span>
            </button>
          );
        })}
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
          >

            <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-w-7xl) 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>


            <div className="p-4 flex flex-col flex-grow">
              
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                {course.category}
              </span>
              
              <h3 className="font-bold text-slate-800 text-base line-clamp-2 min-h-[48px] mb-3 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <span>⏱️</span> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <span>📊</span> {course.level}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-3 mt-auto mb-4">
                <span>By <strong className="text-slate-700">{course.instructor}</strong></span>
                <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                  ⭐ {course.rating}
                </span>
              </div>

              <button className="w-full py-2.5 border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer">
                🛒 Add to cart
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
}