const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Contact', href: '#contact' },
];

const contactDetails = [
  { icon: '📞', text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: '📧', text: 'shivclasses@example.com', href: 'mailto:shivclasses@example.com' },
  { icon: '📍', text: 'Your City, State, India', href: '#' },
  { icon: '🕐', text: 'Mon – Sat: 7:00 AM – 8:00 PM', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-lg shadow-md shadow-blue-900/50">
                📚
              </div>
              <div>
                <div className="font-extrabold text-lg leading-tight tracking-tight">SHIV CLASSES</div>
                <div className="text-slate-400 text-xs font-medium">Excellence in Education</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Providing quality home tuition for Classes 1–12. All subjects, personalized attention, and guaranteed
              academic progress for every student.
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-green-900/30"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest text-slate-300">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-blue-500 rounded-full transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest text-slate-300">Contact Us</h4>
            <div className="space-y-3.5">
              {contactDetails.map((item) => (
                <a key={item.icon} href={item.href} className="flex items-start gap-3 text-sm text-slate-400 hover:text-slate-300 transition-colors group">
                  <span className="flex-shrink-0 text-base mt-0.5">{item.icon}</span>
                  <span className="leading-snug">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SHIV CLASSES. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">Empowering students, one lesson at a time.</p>
        </div>
      </div>
    </footer>
  );
}
