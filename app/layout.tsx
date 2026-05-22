import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SHIV CLASSES | Quality Home Tuition for Classes 1–12',
  description:
    'SHIV CLASSES offers expert home tuition for all subjects from Class 1 to 12. Personal attention, result-oriented teaching, and affordable fees. Enroll today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
