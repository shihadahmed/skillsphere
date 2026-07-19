import { Lightbulb, GraduationCap, Laptop, Award } from "lucide-react"; // lucide-react ব্যবহার করা হয়েছে, ইনস্টল না থাকলে npm i lucide-react করে নিয়েন

export default function WhyChooseUs() {
  const features = [
    {
      id: "1",
      icon: <Lightbulb className="w-8 h-8 text-slate-800" />,
      title: "Updated & Industry-Focused Courses",
      description: "SkillSphere provides the latest courses tailored to current market demands, directly creating opportunities for local and international marketplace jobs.",
    },
    {
      id: "2",
      icon: <GraduationCap className="w-8 h-8 text-slate-800" />,
      title: "Learn from Expert Mentors",
      description: "Our experienced and successful mentors guide you based on real-world experience, fully preparing you for the competitive global job market.",
    },
    {
      id: "3",
      icon: <Laptop className="w-8 h-8 text-slate-800" />,
      title: "Live Classes & Real-Project Learning",
      description: "Every course features interactive live classes and hands-on real projects, enhancing your practical skills and helping you advance in your career path.",
    },
    {
      id: "4",
      icon: <Award className="w-8 h-8 text-slate-800" />,
      title: "Job Placement & Career Support",
      description: "Upon course completion, SkillSphere offers dedicated job placement support, interview preparation guidelines, and freelance blueprints to ensure your success.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50/50 text-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4">
        
      
        <div className="text-center mb-12">
          <span className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            Let Career Growth Start From Here!
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-3">
            Why <span className="text-[#00b074]">SkillSphere?</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group min-h-[280px] flex flex-col justify-between"
            >
              
              <div className="absolute right-4 top-2 text-7xl md:text-8xl font-black text-slate-100 select-none group-hover:text-slate-200/70 transition-colors duration-300">
                {item.id}
              </div>

             
              <div className="relative z-10">
                
                <div className="mb-5 p-2 bg-slate-50 rounded-xl w-fit">
                  {item.icon}
                </div>

               
                <h3 className="font-bold text-slate-800 text-lg mb-3 leading-snug">
                  {item.title}
                </h3>

             
                <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}