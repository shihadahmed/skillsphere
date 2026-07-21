import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - SkillSphere",
  description: "Learn how SkillSphere collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "July 21, 2026";

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
        
        <div className="border-b border-gray-100 pb-6 mb-8 text-center sm:text-left">
          <Link href="/" className="text-xl font-bold tracking-wider inline-block mb-3">
            Skill<span className="text-blue-500">Sphere</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-700">
          
          <section>
            <p>
              Welcome to <strong>SkillSphere</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or enroll in our courses.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you provide directly to us when creating an account, enrolling in courses, or contacting our support team:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Personal Details:</strong> Name, email address, phone number, and profile details.</li>
              <li><strong>Account Credentials:</strong> Passwords and login details for platform access.</li>
              <li><strong>Payment Information:</strong> Transaction details when purchasing courses (processed securely via encrypted third-party gateways).</li>
              <li><strong>Learning Progress:</strong> Course completion status, quiz results, and certification data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>To provide, maintain, and improve our educational services.</li>
              <li>To process your course enrollments and payments seamlessly.</li>
              <li>To send updates regarding course schedules, new features, and support responses.</li>
              <li>To issue verified certificates upon course completion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              3. Data Protection and Security
            </h2>
            <p>
              We implement industry-standard security measures, including SSL encryption, to ensure your personal data stays protected against unauthorized access, alteration, or disclosure. However, please note that no transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              4. Third-Party Services
            </h2>
            <p>
              We do not sell or rent your personal information to third parties. We may only share limited data with trusted third-party service providers (such as payment gateways, analytics tools, or email delivery services) who assist us in operating our platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              SkillSphere uses cookies to enhance your browsing experience, remember your login preferences, and analyze site traffic to optimize performance. You can choose to disable cookies through your browser settings, though some features may be limited as a result.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              6. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Access and review the personal data we hold about you.</li>
              <li>Request corrections or updates to your personal profile.</li>
              <li>Request the deletion of your account and personal details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Have Questions? Contact Us
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              If you have any questions or concerns about this Privacy Policy, feel free to reach out:
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