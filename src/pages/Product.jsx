import { DefaultFooter } from '../components/Footer';
import MapSection from '../components/MapSection';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';

const productSections = [
  {
    title: 'Grade wise Application',
    image: '/assets/14-e1762952040445-1024x678.webp',
    items: ['Aquatrez 940', 'Aquatrez 980', 'Aquatrez 974 P', 'Aquatrez 934 P', 'Aquatrez 971 P', 'Aquatrez 940', 'Aquatrez 941', 'Aquatrez E-2020'],
  },
  {
    title: 'Health Care Additives',
    image: '/assets/11-e1762952190456-1024x685.webp',
    items: ['Controlled Release', 'Rheology Modifier', 'Oral Care', 'Suspending Agents'],
  },
  {
    title: 'Home & Personal Care Additives',
    image: '/assets/5-e1762952583865-1024x676.webp',
    items: ['Aquatrez 950', 'Aquatrez 941', 'Aquatrez E-2020', 'Aquatrez E-2050', 'Aquatrez U-20'],
  },
  {
    title: 'Cosmetic Additives',
    image: '/assets/7-e1762952475499-1024x843.webp',
    items: ['Aquatrez 940', 'Aquatrez 980', 'Aquatrez 934', 'Aquatrez 974', 'Aquatrez 956', 'Aquatrez 950', 'Aquatrez 941', 'Aquatrez 971'],
  },
  {
    title: 'Cosmetic Additives',
    image: '/assets/14-e1762952040445-1024x678.webp',
    items: ['Aquatrez E- 2020', 'Aquatrez U-10', 'Aquatrez U-20', 'Aquatrez U-21', 'Aquatrez 990', 'Aquatrez 996', 'Aquatrez 276', 'Aquatrez 676'],
  },
];

export default function Product() {
  return (
    <>
      <PageBanner title="Product" />
      <div className="product-page">
        {productSections.map((section, index) => (
          <section className={`application-row ${index % 2 ? 'is-reversed' : ''}`} key={`${section.title}-${index}`}>
            <div className="wide-container application-grid">
              <Reveal direction={index % 2 ? 'right' : 'left'} className="application-copy">
                <h2>{section.title}</h2>
                <ul>{section.items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{item}</li>)}</ul>
              </Reveal>
              <Reveal direction={index % 2 ? 'left' : 'right'} className="application-image">
                <img src={section.image} alt={section.title} />
              </Reveal>
            </div>
          </section>
        ))}
      </div>
      <MapSection />
      <DefaultFooter />
    </>
  );
}
