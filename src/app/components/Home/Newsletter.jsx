export default function Newsletter() {
  return (
    <section className="w-full bg-[#0066ff] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-wide">
          Subscribe to Get Updates & Offers
        </h2>

        {/* Input Form Container */}
        <div className="max-w-xl mx-auto">
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-xl p-2 flex items-center shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter Your E-mail"
              required
              className="w-full px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#006aff] to-[#00b074] hover:opacity-95 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap transition-all group"
            >
              SUBSCRIBE
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}