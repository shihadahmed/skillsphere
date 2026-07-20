import Image from "next/image";

export default function JoinTeam() {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="flex justify-center rounded-3xl md:justify-end relative h-full min-h-[400px] md:min-h-[600px] order-2 md:order-1">
          <div className="w-full max-w-[450px] relative aspect-[4/5] h-full flex items-end">
            <Image
              src="/instructor.jpg"
              alt="Mentor or Instructor"
              fill
              className="object-contain object-bottom scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

       
        <div className="flex justify-center md:justify-start order-1 md:order-2">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.05)] w-full max-w-[500px]">
            
           
            <div className="mb-4">
              <span className="bg-[#e0e7ff] text-[#006aff] border border-[#cbd9f4] px-4 py-1 rounded-full text-xs font-semibold tracking-wide inline-block">
                Join us today as a mentor and become part of our success stories.
              </span>
            </div>

         
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 leading-tight mb-8">
              Join Our Team & Shape the Future Generation
            </h2>

           
            <form className="space-y-5">
              
              <div className="relative border-b border-slate-200">
                <label htmlFor="name" className="text-xs text-slate-500 font-medium absolute top-0 left-0 -translate-y-1/2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full pt-5 pb-2 text-sm text-slate-800 placeholder-slate-300 bg-transparent focus:outline-none focus:border-[#00b074] transition-colors"
                />
              </div>

              <div className="relative border-b border-slate-200">
                <label htmlFor="email" className="text-xs text-slate-500 font-medium absolute top-0 left-0 -translate-y-1/2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pt-5 pb-2 text-sm text-slate-800 placeholder-slate-300 bg-transparent focus:outline-none focus:border-[#00b074] transition-colors"
                />
              </div>

              <div className="relative border-b border-slate-200">
                <label htmlFor="phone" className="text-xs text-slate-500 font-medium absolute top-0 left-0 -translate-y-1/2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full pt-5 pb-2 text-sm text-slate-800 placeholder-slate-300 bg-transparent focus:outline-none focus:border-[#00b074] transition-colors"
                />
              </div>

              <div className="relative border-b border-slate-200">
                <label htmlFor="message" className="text-xs text-slate-500 font-medium absolute top-0 left-0 -translate-y-1/2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about yourself"
                  className="w-full pt-5 pb-2 text-sm text-slate-800 placeholder-slate-300 bg-transparent focus:outline-none focus:border-[#00b074] transition-colors resize-none"
                />
              </div>

              
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#006aff] to-[#00b074] text-white py-3 px-6 rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity duration-300 group"
                >
                  APPLY NOW
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}