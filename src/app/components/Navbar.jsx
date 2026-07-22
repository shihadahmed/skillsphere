"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

export default function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Course Details", href: "/course-details" },
  ];

  const isSignInActive = pathname === "/auth/signin";
  const isSignUpActive = pathname === "/auth/signup";

  const userInitial = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : session?.user?.email
      ? session.user.email.charAt(0).toUpperCase()
      : "U";

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsMobileMenuOpen(false);
          router.push("/");
        },
      },
    });
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm h-20 sticky top-0 z-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex leading-none font-sans">
              <span className="text-2xl font-bold text-blue-600">Skill</span>
              <span className="text-2xl font-semibold text-blue-500">
                Sphere
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-600 rounded-full transition-all" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <Link
                href="/my-profile"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 p-0.5 cursor-pointer hover:scale-105 transition-transform"
                title={session.user.name || "My Profile"}
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-gray-700 text-sm">
                  {userInitial}
                </div>
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-500 hover:text-red-600 border border-red-200 hover:border-red-300 px-4 py-2 rounded-full transition-all cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/signin"
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  isSignInActive
                    ? "bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white shadow-sm"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  isSignUpActive
                    ? "bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white shadow-sm"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                SignUp
              </Link>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col gap-5 transition-all">
          <div className="flex flex-col gap-4 text-base font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <hr className="border-gray-100 my-1" />

          <div>
            {session ? (
              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/my-profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-gray-700 text-sm">
                      {userInitial}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    My Profile
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-500 hover:text-red-600 border border-red-200 px-4 py-2 rounded-full"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/auth/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center text-sm font-semibold py-2.5 rounded-lg transition-all ${
                    isSignInActive
                      ? "bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white"
                      : "text-gray-700 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center text-sm font-semibold py-2.5 rounded-lg transition-all ${
                    isSignUpActive
                      ? "bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white"
                      : "text-gray-700 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  SignUp
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
