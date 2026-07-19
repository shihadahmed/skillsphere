import Image from "next/image";
import { Quote } from "lucide-react";
import reviewsData from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            EDUCATION FOR EVERYONE
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-3">
            What Our <span className="text-[#00b074]">Students Say!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col justify-between group"
            >
              <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-100 group-hover:text-slate-200 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-slate-100">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base mb-0.5">
                      {review.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium">
                      {review.course}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed mb-6 font-normal min-h-[100px]">
                  {review.review}
                </p>
              </div>

              <div className="flex items-center gap-1 border-t border-slate-100 pt-4 mt-auto relative z-10">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-amber-500 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}