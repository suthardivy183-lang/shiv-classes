export default function Hero() {
  return (
    <section
      id="home"
      className="pt-[68px] min-h-screen flex items-center relative overflow-hidden bg-white"
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.18] pointer-events-none" />

      {/* Large colour blobs */}
      <div
        className="absolute -top-48 -right-48 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(191,219,254,0.65) 0%, rgba(219,234,254,0.35) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-48 -left-32 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(224,242,254,0.7) 0%, rgba(239,246,255,0.4) 50%, transparent 70%)',
        }}
      />

      {/* Decorative concentric rings — top-right */}
      <div className="absolute top-16 right-16 w-72 h-72 border border-blue-100 rounded-full pointer-events-none" />
      <div className="absolute top-28 right-28 w-48 h-48 border border-blue-50 rounded-full pointer-events-none" />
      <div className="absolute top-8  right-8  w-96 h-96 border border-blue-50/60 rounded-full pointer-events-none" />

      {/* Small floating accent squares */}
      <div className="absolute top-40 left-[8%] w-3 h-3 bg-blue-200 rounded rotate-12 pointer-events-none" />
      <div className="absolute bottom-32 right-[12%] w-2 h-2 bg-blue-300 rounded pointer-events-none" />
      <div className="absolute top-1/3 left-[15%] w-1.5 h-1.5 bg-amber-300 rounded-full pointer-events-none" />

      {/* Readability fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/50 pointer-events-none" />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-7 shadow-sm">
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Trusted by 500+ Students &amp; Families
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Excellence in Education for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Classes 1–12
              </span>
            </h1>

            <p className="text-lg text-slate-500 mb-9 leading-relaxed max-w-lg">
              At <strong className="text-slate-700">SHIV CLASSES</strong>, we take complete responsibility for your
              child&apos;s academic growth. All subjects, personalized attention, and a commitment to results — because
              every student deserves the best.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg shadow-blue-200 text-base"
              >
                Enquire Now
              </a>
              <a
                href="#courses"
                className="px-8 py-3.5 border-2 border-blue-700 text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all text-base"
              >
                View Courses
              </a>
            </div>

            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700 transition-colors group"
            >
              <span className="w-8 h-8 bg-green-50 border border-green-200 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                or <strong className="text-slate-700 group-hover:text-blue-700">Call Now</strong>
                <span className="ml-1 text-slate-400">+91 XXXXX XXXXX</span>
              </span>
            </a>

            <div className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-slate-100 text-sm text-slate-600 font-medium">
              {['✓ All Subjects Covered', '✓ Classes 1–12', '✓ Personal Attention', '✓ Result Oriented'].map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-300/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
                <div className="text-center text-white relative z-10 p-8">
                  <div className="text-7xl mb-4">📚</div>
                  <div className="text-2xl font-extrabold tracking-tight">SHIV CLASSES</div>
                  <div className="text-blue-200 mt-2 text-sm font-medium">Shaping Tomorrow&apos;s Leaders</div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/60 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-xl">🏆</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Top Results</div>
                    <div className="text-xs text-slate-400 font-medium">Every Year</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/60 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl">👨‍🎓</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">500+ Students</div>
                    <div className="text-xs text-slate-400 font-medium">Successfully guided</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
