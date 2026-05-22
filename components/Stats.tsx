const stats = [
  { value: '500+', label: 'Students Guided', icon: '👨‍🎓' },
  { value: '15+', label: 'Years Experience', icon: '📅' },
  { value: '12', label: 'Classes Covered (1–12)', icon: '🎓' },
  { value: '100%', label: 'Dedication to Results', icon: '🏆' },
];

export default function Stats() {
  return (
    <section
      className="py-14"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center text-white relative">
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
              )}
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-extrabold tracking-tight">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
