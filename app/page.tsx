import Hero from '@/components/Hero';
import StatStrip from '@/components/StatStrip';
import ServicesGrid from '@/components/ServicesGrid';
import FeatureBand from '@/components/FeatureBand';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <ServicesGrid />
      <FeatureBand />
      <ProcessSteps />
      <Testimonials />
      <ClientLogos />
      <ContactForm />
    </>
  );
}
