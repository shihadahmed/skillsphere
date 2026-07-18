"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm h-20 sticky top-0 z-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex leading-none font-sans">
              <span className="text-2xl font-bold text-blue-600">Skill</span>
              <span className="text-2xl font-semibold text-blue-500">Sphere</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
          <Link href="/profile" className="hover:text-blue-600 transition-colors">My Profile</Link>
        </div>

        <div className="flex items-center gap-4">
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 p-0.5 cursor-pointer">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-gray-700 text-sm">
                  U 
                </div>
              </div>
              
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-sm font-medium text-red-500 hover:text-red-600 border border-red-200 hover:border-red-300 px-4 py-2 rounded-full transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">

              <button 
                onClick={() => setIsLoggedIn(true)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
              >
                Login
              </button>
              
              <Link 
                href="/register"
                className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-95 transition-opacity"
              >
                Register
              </Link>
            </div>
          )}

        </div>

      </div>
    </nav>
  );
}