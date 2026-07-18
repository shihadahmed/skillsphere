"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp, IoMailSharp, IoCallSharp } from "react-icons/io5";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-800 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white tracking-tight">SkillSphere</span>
            </Link>
            
            <div className="text-sm text-gray-400 flex flex-col gap-2.5 mt-2">
              <p className="font-semibold text-gray-300">Contact Information:</p>
              
              <div className="flex items-center gap-2">
                <IoLocationSharp className="text-blue-500 text-base" />
                <span>Dhaka, Bangladesh</span>
              </div>
              
              <div className="flex items-center gap-2">
                <IoMailSharp className="text-blue-500 text-base" />
                <span>Email: <a href="mailto:support@skillsphere.com" className="text-blue-400 hover:underline">support@skillsphere.com</a></span>
              </div>
              
              <div className="flex items-center gap-2">
                <IoCallSharp className="text-blue-500 text-base" />
                <span>Phone: +880 1234-567890</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Connect With Us</h3>
            <div className="flex gap-4 mt-1">
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaFacebook className="text-lg" />
              </a>
              
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <FaYoutube className="text-lg" />
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all">
                <FaLinkedinIn className="text-lg" />
              </a>
              
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          
          <div className="flex gap-6 text-sm md:text-xs">
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}