const features = [
  {
    icon: '📚',
    title: 'All Subjects Covered',
    desc: 'From Maths and Science to English, Social Studies, and Languages — we teach everything under one roof.',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
  },
  {
    icon: '👨‍🏫',
    title: 'Experienced Faculty',
    desc: 'Learn from a highly experienced educator who is passionate about student success and academic excellence.',
    iconBg: 'bg-violet-50 group-hover:bg-violet-100',
  },
  {
    icon: '👥',
    title: 'Small Batch Sizes',
    desc: 'Limited students per batch ensures individual attention, better learning outcomes, and personal mentorship.',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
  },
  {
    icon: '📝',
    title: 'Regular Tests & Assessments',
    desc: 'Frequent tests, mock exams, and progress reviews keep students prepared and parents informed at all times.',
    iconBg: 'bg-amber-50 group-hover:bg-amber-100',
  },
  {
    icon: '💡',
    title: 'Doubt Clearing Sessions',
    desc: 'Dedicated sessions ensure no question goes unanswered and no concept stays unclear for any student.',
    iconBg: 'bg-sky-50 group-hover:bg-sky-100',
  },
  {
    icon: '💰',
    title: 'Affordable & Transparent Fees',
    desc: 'Quality education without a hefty price tag. Our fee structure is simple, clear, and family-friendly.',
    iconBg: 'bg-rose-50 group-hover:bg-rose-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Cross-grid texture */}
      <div className="absolute inset-0 bg-cross-grid pointer-events-none" />

      {/* Large decorative arcs */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] border-2 border-blue-100/50 rounded-full pointer-events-none" />
      <div className="absolute -top-28 -right-28 w-[280px] h-[280px] border border-blue-100/40 rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[320px] h-[320px] border border-slate-200/60 rounded-full pointer-events-none" />

      {/* Faint section label — watermark style */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[9rem] font-extrabold text-slate-100 select-none pointer-events-none leading-none tracking-tighter rotate-90 origin-center hidden xl:block">
        WHY US
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
            Why Choose Us
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Makes SHIV CLASSES{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Different</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just teach — we mentor, guide, and ensure every student reaches their full potential with
            consistent support and proven methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 ${f.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 transition-colors`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
