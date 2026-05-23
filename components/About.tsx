const pillars = [
  { title: 'Our Mission', desc: 'Deliver results through personalized, dedicated teaching for every student.' },
  { title: 'Our Vision', desc: 'Be the most trusted learning partner for families across the city.' },
  { title: 'Our Approach', desc: 'Concept clarity first, then practice, performance, and exam preparation.' },
  { title: 'Our Promise', desc: "We take full responsibility for your child's academic growth — always." },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Dot-grid texture at low opacity */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.13] pointer-events-none" />

      {/* Decorative blob — bottom right */}
      <div
        className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)' }}
      />

      {/* Thin decorative ring — top left */}
      <div className="absolute -top-24 -left-24 w-72 h-72 border border-blue-100 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 flex flex-col items-center justify-center gap-4 shadow-inner">
              <div className="w-16 h-16 bg-white border border-blue-100 rounded-2xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center px-8">
                <p className="text-slate-600 font-semibold text-sm">SHIV CLASSES</p>
                <p className="text-slate-400 text-xs mt-1">Tuition Centre Photo</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Photo Coming Soon
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl opacity-10 hidden sm:block" />
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-amber-400 rounded-xl opacity-20 hidden sm:block" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
              About Us
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-5 leading-tight tracking-tight">
              A Tuition Built on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Trust &amp; Results
              </span>
            </h2>
            <p className="text-slate-500 mb-4 leading-relaxed">
              SHIV CLASSES was founded with a single mission — to provide quality, accessible, and personalized education
              to every student, regardless of their starting point. We believe every child has the potential to excel,
              and it&apos;s our job to unlock it.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              From Class 1 to Class 12, we cover all subjects with a focus on building strong fundamentals, clearing
              concepts, and preparing students for board exams and beyond. Our approach: understand the student, adapt
              to their pace, and never give up on them.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p.title} className="p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100/60">
                  <div className="font-bold text-blue-800 text-sm mb-1">{p.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>

            <a
              href="tel:+91XXXXXXXXXX"
              className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors"
            >
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Call Now — +91 XXXXX XXXXX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
