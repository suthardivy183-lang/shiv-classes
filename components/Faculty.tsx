const tags = ['All Subjects', 'Board Prep', 'Personalized Teaching', 'Doubt Clearing'];

export default function Faculty() {
  return (
    <section id="faculty" className="py-16 sm:py-24 relative overflow-hidden" style={{ backgroundColor: '#f1f5f9' }}>
      {/* Cross-grid texture */}
      <div className="absolute inset-0 bg-cross-grid pointer-events-none" />

      {/* Large concentric rings centred on the card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border border-blue-200/30 rounded-full pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] border border-blue-200/25 rounded-full pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-blue-200/20 rounded-full pointer-events-none" />

      {/* Colour blob — top right */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
            Our Faculty
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Expert Behind SHIV CLASSES
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our teacher brings years of experience, deep subject mastery, and a genuine passion for helping every
            student succeed.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-100/40 border border-slate-100">
            <div className="relative h-56 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
              <div className="w-28 h-28 bg-white/15 border-2 border-white/30 rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm">
                <span className="text-6xl">👨‍🏫</span>
              </div>
            </div>

            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Head Faculty</h3>
              <p className="text-blue-600 font-semibold text-sm mt-1">SHIV CLASSES — Founder &amp; Lead Teacher</p>

              <div className="flex justify-center gap-5 my-6 py-5 border-y border-slate-100">
                {[
                  { val: '15+', label: 'Yrs Experience' },
                  { val: '500+', label: 'Students Guided' },
                  { val: '1–12', label: 'Classes Taught' },
                ].map((s, i) => (
                  <div key={s.label} className="text-center flex-1">
                    {i > 0 && <span />}
                    <div className="text-2xl font-extrabold text-blue-700 tracking-tight">{s.val}</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                With deep expertise across all subjects and a student-first philosophy, our lead faculty has helped
                hundreds of students build strong foundations, clear board exams, and develop a lifelong love for
                learning.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-md shadow-green-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now to Enroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
