import ExperienceBadge from '../components/ExperienceBadge';
import { DefaultFooter } from '../components/Footer';
import MapSection from '../components/MapSection';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';

const cards = [
  {
    title: 'Vision & Mission',
    items: [
      'Aims to be a Global Leader in Specialty Chemicals with aim of solving performance challenges.',
      'To cater to the needs of our customers in India and overseas by providing only the best high quality products and services.',
      'With customer centricity as our abiding principle, our promises are based on reliability, integrity and our consistent resoluteness to perform better.',
    ],
  },
  {
    title: 'Core Values',
    items: [
      'Commitment to Innovation and Excellence.',
      'Commitment to Sustainability.',
      'Commitment to Quality and Integrity.',
      'Commitment to Customer Experience.',
    ],
  },
  {
    title: 'Characteristics of Carbomers',
    items: ['Controlled Release', 'Suspending Agent', 'Emulsifiers', 'Rheology Modifiers', 'Oral Care'],
  },
];

export default function About() {
  return (
    <>
      <PageBanner title="About" />
      <section className="section about-main">
        <div className="about-main-bg" />
        <div className="wide-container about-main-grid">
          <Reveal direction="left" className="about-main-copy">
            <span className="eyebrow">About Lucent</span>
            <h2>Lucent Pharmatech is established in the year 2022, at Ahmedabad, Gujarat, India.</h2>
            <p>At Lucent Pharmatech, Research and Development is at the core of all its initiatives. We aim to solve tough performance challenges based on our own R &amp; D team to meet customers requirements.</p>
            <p>We specialize in manufacturing of Polyacrylic Acid products. Our production plant contains most modern manufacturing equipment, supported with Semi-automatic systems. Plant designed to meet the stringent requirements of the regulated market. Dedicated R &amp; D team, Quality control, laboratory equipped with sophisticated instruments to guarantee and maintain best quality of our products.</p>
          </Reveal>
          <Reveal direction="right" className="lab-collage about-collage">
            <div className="hex-image hex-large"><img src="/assets/14-e1762952040445-1024x678.webp" alt="Laboratory glassware and ingredients" /></div>
            <div className="hex-image hex-small"><img src="/assets/ChatGPT-Image-Nov-11-2025-06_06_39-PM-520x546.jpg" alt="Laboratory scientist" /></div>
            <ExperienceBadge />
          </Reveal>
        </div>
      </section>

      <section className="values-section">
        <div className="wide-container values-grid">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 110}>
              <article className="value-card">
                <h3>{card.title}</h3>
                <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <MapSection />
      <DefaultFooter />
    </>
  );
}
