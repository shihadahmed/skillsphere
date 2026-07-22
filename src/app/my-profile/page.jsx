"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserSession() {
      try {
        const { data } = await authClient.getSession();

        if (!data || !data.user) {
          router.push("/auth/signin");
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error("Session error:", error);
        router.push("/auth/signin");
      } finally {
        setLoading(false);
      }
    }

    fetchUserSession();
  }, [router]);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!", {
            position: "top-right",
            autoClose: 1500,
          });
          setTimeout(() => {
            router.push("/auth/signin");
          }, 1500);
        },
        onError: () => {
          toast.error("Failed to log out!", {
            position: "top-right",
            autoClose: 2000,
          });
        },
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-blue-600 font-semibold text-lg animate-pulse">
          Loading Profile...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6">
      <ToastContainer />

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden p-8 sm:p-10">
        <div className="flex flex-col items-center text-center border-b border-gray-100 pb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-3xl font-bold flex items-center justify-center shadow-lg mb-4">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {user?.name || "User Name"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {user?.email || "user@example.com"}
          </p>
          <span className="mt-3 px-4 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
            SkillSphere Member
          </span>
        </div>

        <div className="py-6 space-y-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Account Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 font-medium">Full Name</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {user?.name}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 font-medium">Email Address</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => router.push("/")}
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold text-sm rounded-xl transition-all cursor-pointer"
          >
            Back to Home
          </button>

          <button
            onClick={handleSignOut}
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
