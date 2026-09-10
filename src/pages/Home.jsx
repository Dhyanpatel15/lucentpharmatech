import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExperienceBadge from '../components/ExperienceBadge';
import { DefaultFooter } from '../components/Footer';
import { MailIcon, MapIcon, PhoneIcon } from '../components/Icons';
import MapSection from '../components/MapSection';
import ProductCarousel from '../components/ProductCarousel';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

const productTiles = [
  { image: '/assets/product-4.webp', title: 'Personal Care Applications' },
  { image: '/assets/product-1.webp', title: 'Professional Hair Care' },
  { image: '/assets/product-2.webp', title: 'Personal Care Women' },
  { image: '/assets/product-3.webp', title: 'Personal Care Men' },
];


function WorkingClockIcon() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6;
  const hourAngle = hours * 30;

  return (
    <svg
      className="working-clock-svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label={`Current time ${now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`}
    >
      <circle className="working-clock-face" cx="32" cy="32" r="23" />

      <line
        className="clock-hand clock-hour-hand"
        x1="32"
        y1="32"
        x2="32"
        y2="20"
        style={{ transform: `rotate(${hourAngle}deg)` }}
      />

      <line
        className="clock-hand clock-minute-hand"
        x1="32"
        y1="32"
        x2="32"
        y2="14"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      />

      <line
        className="clock-hand clock-second-hand"
        x1="32"
        y1="34"
        x2="32"
        y2="12"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      />

      <circle className="working-clock-center" cx="32" cy="32" r="2.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="hero-visual">
          <img
            src="/assets/11-e1762952190456-737x886.webp"
            alt="Laboratory pipette and glassware"
          />
        </div>

        <div className="wide-container hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow">WELCOME TO LUCENT</span>
            <h1>
              <span>Science for a</span>
              <span>better life</span>
            </h1>
            <p>
              Unique Formulation <b>|</b> On Time Delivery <b>|</b> Stable Quality
            </p>
            <Link className="gradient-button" to="/about">
              Know More
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-showcase">
        <div className="wide-container">
          <Reveal>
            <SectionIntro
              eyebrow="Promising Best Quality Services"
              title="Products By Lucent"
              description="Discover a wide range of high-quality pharmaceutical products by Lucent Pharma Tech, crafted with innovation, precision, and care to ensure effectiveness, safety, and trust meeting global standards for healthcare excellence and improving lives through advanced formulations."
            />
          </Reveal>
          <Reveal delay={140}>
            <ProductCarousel />
          </Reveal>
        </div>
      </section>

      <section className="section home-products">
        <div className="wide-container">
          <Reveal>
            <SectionIntro
              centered
              eyebrow="Promising Best Quality Services"
              title="Our Products"
              description="Aquatrez Carbomers and Aquatrez acrylates copolymers are applied in cosmetics, personal care, healthcare and homecare and in other industrial fields."
            />
          </Reveal>

          <div className="product-tile-grid">
            {productTiles.map((item, index) => (
              <Reveal
                key={item.title}
                direction={index ? 'right' : 'left'}
                delay={index * 100}
              >
                <Link className="product-tile" to="/product">
                  <img src={item.image} alt={item.title} />
                  <span>
                    {item.title}
                    <small>View applications&nbsp; →</small>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-bg" />
        <div className="wide-container home-about-grid">
          <Reveal direction="left" className="home-about-copy">
            <span className="eyebrow">About Lucent</span>
            <h2>
              Lucent Pharmatech is established in the year 2022, at Ahmedabad,
              Gujarat, India.
            </h2>
            <p>
              At Lucent Pharmatech, Research and Development is at the core of
              all its initiatives. We aim to solve tough performance challenges
              based on our own R &amp; D team to meet customers requirements.
            </p>
            <ul className="check-list">
              <li>
                Aims to be a Global Leader in Specialty Chemicals with aim of
                solving performance challenges.
              </li>
              <li>
                To cater to the needs of our customers in India and overseas by
                providing only the best high quality products and services.
              </li>
              <li>
                With customer centricity as our abiding principle, our promises
                are based on reliability, integrity and our consistent
                resoluteness to perform better.
              </li>
            </ul>
          </Reveal>

          <Reveal direction="right" className="lab-collage">
            <div className="hex-image hex-large">
              <img
                src="/assets/14-e1762952040445-1024x678.webp"
                alt="Research ingredients in laboratory glassware"
              />
            </div>
            <div className="hex-image hex-small">
              <img
                src="/assets/ChatGPT-Image-Nov-11-2025-06_06_39-PM-520x546.jpg"
                alt="Scientist carrying out laboratory research"
              />
            </div>
            <ExperienceBadge />
          </Reveal>
        </div>
      </section>

      <section className="home-cta">
        <div className="wide-container cta-wrapper">
          <img
            className="cta-full-art"
            src="/assets/cta-banner.png"
            alt=""
            aria-hidden="true"
          />

          <div className="cta-copy">
            <h2>
              Looking For A Best
              <br />
              Lucent Services
            </h2>

            <Link className="gradient-button cta-button" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section contact-details">
        <div className="wide-container contact-card-grid">
          <Reveal direction="left">
            <article className="contact-card">
              <h2>Our Address</h2>
              <p>
                <MapIcon />
                <span>
                  Manufacturing Unit – Survey No. : 186-187, Unit No: 1-2,
                  Village: Kathwada, At &amp; Post: Navagam Ta. &amp; Dist. Kheda
                  – 387 540, Gujarat, India
                </span>
              </p>
              <hr />
              <h2>Contact Information</h2>
              <a href="tel:+917600026838">
                <PhoneIcon /> +91 760 002 6838
              </a>
              <a href="tel:+919998321839">
                <PhoneIcon /> +91 999 832 1839
              </a>
              <a href="tel:+919825633292">
                <PhoneIcon /> +91 982 563 3292
              </a>
            </article>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <article className="contact-card contact-card-right">
              <h2>Contact Information</h2>
              <a href="mailto:info@lucentpharmatech.com">
                <MailIcon /> info@lucentpharmatech.com
              </a>
              <a href="mailto:sales@lucentpharmatech.com">
                <MailIcon /> sales@lucentpharmatech.com
              </a>
              <hr />

              <div className="opening-card">
                <span className="opening-icon">
                  <WorkingClockIcon />
                </span>
                <div>
                  <h2>Opening Hour</h2>
                  <p>
                    Mon - Sat 9.00-7.00
                    <br />
                    <strong>Sunday - Closed</strong>
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <MapSection />
      <DefaultFooter />
    </>
  );
}
