import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}