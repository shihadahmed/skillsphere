"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuArrowRight } from "react-icons/lu";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address!");
      return;
    }

    toast.success("Subscribed successfully! Thank you for joining.");
    setEmail("");
  };

  return (
    <section className="w-full bg-[#0066ff] py-16 px-4 relative">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-wide">
          Subscribe to Get Updates & Offers
        </h2>

        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-2 flex items-center shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter Your E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#006aff] to-[#00b074] hover:opacity-95 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap transition-all group cursor-pointer"
            >
              SUBSCRIBE
              <LuArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
