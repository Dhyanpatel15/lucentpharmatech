import { DefaultFooter } from '../components/Footer';
import { MailIcon } from '../components/Icons';
import MapSection from '../components/MapSection';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';

const serviceSections = [
  {
    title: 'Technical Support',
    email: 'info@lucentpharmatech.com',
    image: '/assets/5-e1762952583865-1024x676.webp',
  },
  {
    title: 'Marketing Support',
    email: 'sales@lucentpharmatech.com',
    image: '/assets/14-e1762952040445-1024x678.webp',
  },
];

function ServiceCopy({ section, marketing }) {
  return (
    <div className="service-copy">
      <h2>{section.title}</h2>
      <p>The Technical support staff at Lucent Pharmatech consist of a highly experienced group of chemists and doctors (Ph.D’s) who help customers in taking advantage in technical knowhow.</p>
      <p>We help our customers to be more successful and provide assistance in</p>
      <ul>
        <li>New product development and new process development</li>
        <li>Process and Customer formulation support</li>
      </ul>
      <p>The product development team focuses its efforts on finding ways to improve the performance of the customer’s products and achieving the potential improvements identified by the field representatives. Through this hand-in-hand approach to improving our customer’s products, we have developed a strong reputation in the industry for technical expertise and dedicated customer service.</p>
      {marketing && <p>Do you have questions about Aquatrez Carbomers, ideas or issues you would like to discuss with our experts?</p>}
      <a className="gradient-button service-email" href={`mailto:${section.email}`}><MailIcon /> Contact Us: {section.email}</a>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageBanner title="Services" />
      <div className="services-page">
        {serviceSections.map((section, index) => (
          <section className={`service-row ${index ? 'is-reversed' : ''}`} key={section.title}>
            <div className="wide-container service-grid">
              <Reveal direction={index ? 'right' : 'left'}><ServiceCopy section={section} marketing={index === 1} /></Reveal>
              <Reveal direction={index ? 'left' : 'right'} className="service-image"><img src={section.image} alt={section.title} /></Reveal>
            </div>
          </section>
        ))}
      </div>
      <MapSection />
      <DefaultFooter />
    </>
  );
}
