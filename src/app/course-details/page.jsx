"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import coursesData from "@/data/courses.json";
import { useSession } from "@/lib/auth-client";

function CourseDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");

  const { data: session, isPending } = useSession();
  const [course, setCourse] = useState(null);

  useEffect(() => {
   
    if (!isPending && !session) {
      router.push("/auth/signin");
      return;
    }

  
    if (courseId) {
      const foundCourse = coursesData.find(
        (item) => String(item.id) === String(courseId)
      );
      setCourse(foundCourse || null);
    }
  }, [courseId, session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-blue-600 font-semibold animate-pulse">
          Verifying session...
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Course Not Found!
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Please select a valid course from the list.
        </p>
        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        

        <div className="relative w-full h-64 sm:h-80 bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
        </div>

       
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {course.category}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              ⭐ {course.rating}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            {course.title}
          </h1>

         
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 border-y border-slate-100 py-4 mb-6">
            <div>
              Instructor: <strong className="text-slate-800">{course.instructor}</strong>
            </div>
            <div>
              Duration: <strong className="text-slate-800">{course.duration}</strong>
            </div>
            <div>
              Level: <strong className="text-slate-800">{course.level}</strong>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Course Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.description || "In this course, you will learn step-by-step techniques to master " + course.title + ". Designed for practical learning and career growth."}
            </p>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
            <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-md hover:opacity-95 transition-all cursor-pointer">
              Enroll Now
            </button>
            <button 
              onClick={() => router.back()} 
              className="px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl text-sm transition-all cursor-pointer"
            >
              Go Back
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function CourseDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CourseDetailsContent />
    </Suspense>
  );
}