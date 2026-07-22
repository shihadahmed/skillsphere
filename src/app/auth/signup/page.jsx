"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "@/lib/auth-client";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    await signUp.email({
      email,
      password,
      name,
      callbackURL: "/auth/signin",
      fetchOptions: {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          toast.success(
            "Account created successfully! Redirecting to Sign In...",
            {
              position: "top-right",
              autoClose: 2000,
            },
          );

          setTimeout(() => {
            router.push("/auth/signin");
          }, 1500);
        },
        onError: (ctx) => {
          setLoading(false);
          toast.error(ctx.error.message || "Failed to create account!", {
            position: "top-right",
            autoClose: 3000,
          });
        },
      },
    });
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6">
      <ToastContainer />

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white p-8 sm:p-12 flex flex-col justify-center items-center text-center">
          <Link href="/" className="text-2xl font-bold tracking-wider mb-6">
            Skill<span className="text-cyan-300">Sphere</span>
          </Link>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Come join us!
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-sm mb-8">
            We are so excited to have you here. Create an account to get access
            to premium courses, expert guidelines, and lifetime support.
          </p>

          <Link
            href="/auth/signin"
            className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/30 transition-all"
          >
            Already have an account? Sign In
          </Link>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-6">
            Sign Up
          </h1>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm rounded-lg shadow-md hover:opacity-95 transition-all mt-2 disabled:opacity-60 cursor-pointer"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-3">or signup with</p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer"
              >
                <FaFacebook className="text-base" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer"
              >
                <FaGoogle className="text-base" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer"
              >
                <FaLinkedinIn className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
