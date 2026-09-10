import { useEffect, useMemo, useState } from 'react';

export const showcaseProducts = [
  {
    title: 'Cosmetic Products & Dry Flowers',
    image: '/assets/aesthetic-beauty-products-with-flowers-marble-background-520x546.jpg',
  },
  {
    title: 'Gradient World Science Day',
    image: '/assets/7370654_3635061-520x546.jpg',
  },
  {
    title: 'Laboratory Theme',
    image: '/assets/ChatGPT-Image-Nov-11-2025-06_06_39-PM-520x546.jpg',
  },
  {
    title: 'Sodium PCA Skin Care',
    image: '/assets/close-up-glass-glasses-table-520x546.jpg',
  },
  {
    title: 'Aloe Vera Gel Cream',
    image: '/assets/aloe-vera-cosmetic-cream-dark-surface-1-520x546.jpg',
  },
];

export default function ProductCarousel({ autoPlay = true }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoPlay) return undefined;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % showcaseProducts.length), 4200);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  const visibleProducts = useMemo(
    () => [0, 1, 2].map((offset) => showcaseProducts[(active + offset) % showcaseProducts.length]),
    [active],
  );

  return (
    <div className="product-carousel" aria-roledescription="carousel" aria-label="Lucent product applications">
      <div className="carousel-grid" key={active}>
        {visibleProducts.map((product, index) => (
          <article className="showcase-card" key={`${product.title}-${index}`}>
            <div className="showcase-image"><img src={product.image} alt={product.title} /></div>
            <div className="showcase-overlay">
              <span>Pathology</span>
              <h3>{product.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-dots" aria-label="Choose a carousel slide">
        {showcaseProducts.map((product, index) => (
          <button
            type="button"
            key={product.title}
            className={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
