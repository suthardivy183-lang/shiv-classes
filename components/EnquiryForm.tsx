'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    bg: 'bg-green-500', title: 'Call / WhatsApp', value: '+91 XXXXX XXXXX (Placeholder)', href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: 'bg-blue-400', title: 'Email', value: 'shivclasses@example.com', href: 'mailto:shivclasses@example.com',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: 'bg-rose-400', title: 'Location', value: 'Your City, State (Placeholder)', href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: 'bg-amber-400', title: 'Batch Timings', value: 'Morning & Evening batches available', href: '#',
  },
];

const subjects = [
  'All Subjects', 'Mathematics', 'Science', 'English', 'Hindi',
  'Social Science', 'Physics', 'Chemistry', 'Biology', 'Accounts / Business Studies',
];

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', studentClass: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', studentClass: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)' }}
    >
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 bg-diagonal-stripe pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute -bottom-48 -left-24 w-[560px] h-[560px] border border-white/10 rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-8  w-[380px] h-[380px] border border-white/8  rounded-full pointer-events-none" />
      <div className="absolute -top-24  -right-24 w-[420px] h-[420px] border border-white/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3  right-1/4 w-[200px] h-[200px] border border-white/6  rounded-full pointer-events-none" />

      {/* Colour blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="text-white">
            <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-semibold mb-5">
              Get in Touch
            </div>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
              Start Your Child&apos;s{' '}
              <span className="text-amber-300">Journey Today</span>
            </h2>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Fill in the enquiry form and we&apos;ll get back to you within 24 hours to discuss the right batch,
              subjects, and schedule for your child.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a key={item.title} href={item.href} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-blue-200 text-sm group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="tel:+91XXXXXXXXXX"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — +91 XXXXX XXXXX
            </a>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/30">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Enquiry Submitted!</h3>
                <p className="text-slate-500 text-sm">
                  Thank you! We&apos;ll contact you within 24 hours to discuss the best program for your child.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all text-sm shadow-md shadow-blue-200"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-800 mb-1 tracking-tight">Enquiry Form</h3>
                <p className="text-slate-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter full name"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" type="tel"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Student&apos;s Class *</label>
                      <select name="studentClass" value={form.studentClass} onChange={handleChange} required
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 bg-white transition-all">
                        <option value="">Select Class</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Subject(s)</label>
                      <select name="subject" value={form.subject} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 bg-white transition-all">
                        <option value="">Select Subject</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Any specific requirements or questions..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 resize-none transition-all" />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all text-sm shadow-md shadow-blue-200">
                    Submit Enquiry →
                  </button>
                  <p className="text-center text-xs text-slate-400">We&apos;ll respond within 24 hours. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
