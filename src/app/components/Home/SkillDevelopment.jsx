import { ShieldCheck, Settings, FileText, Briefcase } from "lucide-react";

export default function SkillDevelopment() {
  const steps = [
    {
      id: "1",
      icon: <ShieldCheck className="w-8 h-8 text-slate-800" />,
      title: "Enroll in Reliable Courses",
      description: "Enroll in updated and industry-standard courses from SkillSphere to acquire professional and highly demanding skills.",
    },
    {
      id: "2",
      icon: <Settings className="w-8 h-8 text-slate-800" />,
      title: "Practice with Live Classes & Hands-on Projects",
      description: "Gain real-world experience through interactive live classes and hands-on projects that help you secure a job.",
    },
    {
      id: "3",
      icon: <FileText className="w-8 h-8 text-slate-800" />,
      title: "Follow Mentors' Guidelines",
      description: "Follow the advice and step-by-step career guidelines of SkillSphere's expert mentors to shape your future.",
    },
    {
      id: "4",
      icon: <Briefcase className="w-8 h-8 text-slate-800" />,
      title: "Get Job Placement Support",
      description: "Take advantage of our dedicated job placement support, interview tips, and complete career assistance post-course.",
    },
  ];

  return (
    <section className="py-16 bg-white text-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            Professional Skills + Practical Experience = Guaranteed Job!
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-3">
            How to Secure a Job by <span className="text-[#00b074]">Developing Professional Skills!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.id}
              className="relative bg-slate-50/50 p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group min-h-[280px] flex flex-col justify-between"
            >
              <div className="absolute right-4 top-2 text-7xl md:text-8xl font-black text-slate-100 select-none group-hover:text-slate-200/70 transition-colors duration-300">
                {item.id}
              </div>

              <div className="relative z-10">
                <div className="mb-5 p-2 bg-white rounded-xl w-fit shadow-xs">
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