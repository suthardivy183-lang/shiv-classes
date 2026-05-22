const courses = [
  {
    level: 'Primary',
    range: 'Class 1 – 5',
    icon: '🌱',
    subjects: ['Mathematics', 'English', 'Hindi', 'EVS / Science', 'Social Studies'],
    highlight: 'Foundation Building',
    gradient: 'from-emerald-500 to-teal-700',
    lightBg: 'bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
    checkColor: 'text-emerald-500',
    btnHover: 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600',
  },
  {
    level: 'Middle School',
    range: 'Class 6 – 8',
    icon: '📖',
    subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science', 'Sanskrit'],
    highlight: 'Concept Clarity',
    gradient: 'from-blue-500 to-blue-800',
    lightBg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    checkColor: 'text-blue-500',
    btnHover: 'hover:bg-blue-700 hover:text-white hover:border-blue-700',
  },
  {
    level: 'Secondary',
    range: 'Class 9 – 10',
    icon: '🎯',
    subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science', 'Board Prep'],
    highlight: 'Board Exam Focused',
    gradient: 'from-violet-500 to-purple-800',
    lightBg: 'bg-purple-50',
    badge: 'bg-purple-100 text-purple-700',
    checkColor: 'text-purple-500',
    btnHover: 'hover:bg-purple-700 hover:text-white hover:border-purple-700',
  },
  {
    level: 'Senior Secondary',
    range: 'Class 11 – 12',
    icon: '🏆',
    subjects: ['Physics / Accounts', 'Chemistry / Business Studies', 'Maths / Economics', 'Biology', 'English'],
    highlight: 'Career Foundation',
    gradient: 'from-amber-500 to-orange-700',
    lightBg: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-700',
    checkColor: 'text-amber-500',
    btnHover: 'hover:bg-amber-600 hover:text-white hover:border-amber-600',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.12] pointer-events-none" />

      {/* Gradient blob — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 65%)' }}
      />
      {/* Gradient blob — bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,253,244,0.6) 0%, transparent 65%)' }}
      />

      {/* Faint "1–12" watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] font-extrabold text-slate-50 select-none pointer-events-none leading-none tracking-tighter hidden lg:block">
        1–12
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
            Courses &amp; Curriculum
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Programs for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Every Grade</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From foundational learning in primary classes to advanced board exam preparation in senior secondary, we
            have a tailored program for every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c) => (
            <div
              key={c.level}
              className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${c.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                <div className="text-4xl mb-3 relative z-10">{c.icon}</div>
                <div className="text-xl font-bold relative z-10 tracking-tight">{c.level}</div>
                <div className="text-white/70 text-sm mt-0.5 relative z-10 font-medium">{c.range}</div>
              </div>
              <div className={`${c.lightBg} p-5`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${c.badge}`}>
                  {c.highlight}
                </div>
                <ul className="space-y-2">
                  {c.subjects.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className={`w-4 h-4 flex-shrink-0 ${c.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {sub}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block mt-5 text-center py-2.5 px-4 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all ${c.btnHover}`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-slate-600 text-sm">
            📞 <strong>For detailed fee structure and batch timings</strong>, please contact us or fill the enquiry
            form below. Fees are flexible and designed to be affordable for all families.
          </p>
        </div>
      </div>
    </section>
  );
}
