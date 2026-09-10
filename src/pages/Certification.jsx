import { DefaultFooter } from '../components/Footer';
import MapSection from '../components/MapSection';
import PageBanner from '../components/PageBanner';
import ProductCarousel from '../components/ProductCarousel';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

export default function Certification() {
  return (
    <>
      <PageBanner title="Certification" />
      <section className="section certification-showcase">
        <div className="wide-container">
          <Reveal>
            <SectionIntro
              eyebrow="Promising Best Quality Services"
              title="Products By Lucent"
              description="Discover a wide range of high-quality pharmaceutical products by Lucent Pharma Tech, crafted with innovation, precision, and care to ensure effectiveness, safety, and trust meeting global standards for healthcare excellence and improving lives through advanced formulations."
            />
          </Reveal>
          <Reveal delay={100}><ProductCarousel /></Reveal>
        </div>
      </section>
      <MapSection />
      <DefaultFooter />
    </>
  );
}
