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
        (item) => String(item.id) === String(courseId),
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
          className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Course Banner */}
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
          {/* Tag & Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {course.category}
            </span>
            <span className="flex items-center gap-1.5 text-amber-500 font-bold text-sm bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              ⭐ {course.rating}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
            {course.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8">
            <div>
              <span className="text-slate-400 block text-xs uppercase font-semibold mb-0.5">
                Instructor
              </span>
              <strong className="text-slate-800 text-base">
                {course.instructor}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-xs uppercase font-semibold mb-0.5">
                Duration
              </span>
              <strong className="text-slate-800 text-base">
                ⏱️ {course.duration}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-xs uppercase font-semibold mb-0.5">
                Level
              </span>
              <strong className="text-slate-800 text-base">
                📊 {course.level}
              </strong>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Course Overview
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {course.overview}
            </p>
          </div>

          {course.howToStart && course.howToStart.length > 0 && (
            <div className="mb-8 bg-blue-50/60 border border-blue-100 p-5 rounded-2xl">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                🚀 যেভাবে শুরু করবেন (How to Start)
              </h3>
              <ul className="space-y-2.5">
                {course.howToStart.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.routine && course.routine.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                📅 Course Curriculum & Routine
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {course.routine.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-blue-300 transition-all gap-2"
                  >
                    <span className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg w-fit shadow-2xs">
                      {item.week}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 sm:flex-1 sm:ml-4">
                      {item.topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
            <button className="flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-md hover:opacity-95 transition-all cursor-pointer text-center">
              Enroll Now
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl text-sm transition-all cursor-pointer"
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
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CourseDetailsContent />
    </Suspense>
  );
}
