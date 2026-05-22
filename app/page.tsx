import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <Courses />
        <Faculty />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
