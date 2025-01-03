import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Courses from '@/components/Courses';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Courses />
      <Reviews />
      <ContactSection />
    </>
  );
}
