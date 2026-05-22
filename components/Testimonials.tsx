const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    initials: 'PS',
    avatarBg: 'from-blue-500 to-blue-700',
    content:
      "My daughter's marks improved dramatically after joining SHIV CLASSES. The personal attention and regular testing made all the difference. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Rahul Patel',
    role: 'Student, Class 12',
    initials: 'RP',
    avatarBg: 'from-violet-500 to-purple-700',
    content:
      'I was struggling with Maths and Physics, but after joining SHIV CLASSES, I scored 90%+ in both. The teaching style is clear, patient, and very effective.',
    rating: 5,
  },
  {
    name: 'Sunita Mehta',
    role: 'Parent of Class 7 Student',
    initials: 'SM',
    avatarBg: 'from-emerald-500 to-teal-700',
    content:
      "What I love most is the transparency — we're always kept updated on our child's progress. The fees are very reasonable for the quality of education provided.",
    rating: 5,
  },
];

const Star = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.13] pointer-events-none" />

      {/* Giant decorative opening quote — top left */}
      <div
        className="absolute -top-6 left-2 text-[220px] font-serif leading-none select-none pointer-events-none"
        style={{ color: 'rgba(219,234,254,0.9)', fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </div>

      {/* Giant closing quote — bottom right */}
      <div
        className="absolute -bottom-16 right-2 text-[220px] font-serif leading-none select-none pointer-events-none rotate-180"
        style={{ color: 'rgba(219,234,254,0.9)', fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </div>

      {/* Colour blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(239,246,255,0.7) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-5">
            Testimonials
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Parents &amp; Students{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Say About Us
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what families who&apos;ve trusted SHIV CLASSES have to
            say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-100/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="text-blue-100 text-5xl font-serif leading-none mb-2 select-none">&ldquo;</div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} />)}
              </div>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">{t.content}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.avatarBg} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
