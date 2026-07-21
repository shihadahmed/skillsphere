import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - SkillSphere",
  description: "Read the terms and conditions for using the SkillSphere learning platform.",
};

export default function TermsAndConditions() {
  const lastUpdated = "July 21, 2026";

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
        
        <div className="border-b border-gray-100 pb-6 mb-8 text-center sm:text-left">
          <Link href="/" className="text-xl font-bold tracking-wider inline-block mb-3">
            Skill<span className="text-blue-500">Sphere</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
          
          <section>
            <p>
              Welcome to <strong>SkillSphere</strong>. By accessing or using our website, courses, and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              1. Account Registration and Security
            </h2>
            <p className="mb-3">
              To access certain features or courses, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the security of your password and accept responsibility for all activities under your account.</li>
              <li>Notify us immediately of any unauthorized use or security breach of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              All course content, including videos, text, graphics, logos, software, and instructional materials, is the intellectual property of SkillSphere and its instructors. You are granted a limited, non-exclusive, non-transferable license to access the content for personal, non-commercial educational use only.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              3. User Conduct and Acceptable Use
            </h2>
            <p className="mb-3">When using SkillSphere, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Record, download, redistribute, or resell course materials without explicit written permission.</li>
              <li>Share your account credentials with other individuals.</li>
              <li>Post offensive, harmful, or inappropriate content in course discussions or community groups.</li>
              <li>Attempt to compromise the security or integrity of our website and systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              4. Course Enrollment and Payments
            </h2>
            <p>
              Prices for courses are subject to change. Once enrolled, you will receive access to the course material as specified in the course details. All payments are processed securely through third-party payment providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              5. Refund Policy
            </h2>
            <p>
              Refund requests are subject to our specific course refund guidelines. If eligible, refund requests must be submitted within the designated refund period after purchasing a course.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              6. Account Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account and access to our platform if you violate any of these Terms & Conditions or engage in fraudulent activities.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              SkillSphere and its instructors shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use our services or course content.
            </p>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Questions Regarding Terms?
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              If you have any questions or require clarification about these Terms & Conditions, please reach out to us:
            </p>
            <div className="text-sm font-medium text-slate-800 space-y-1">
              <p>Email: <a href="mailto:support@skillsphere.com" className="text-blue-600 underline">support@skillsphere.com</a></p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-blue-600 font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}