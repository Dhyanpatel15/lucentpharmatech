import { SocialLinks } from './Header';

export default function MapSection() {
  return (
    <section className="map-section" aria-label="Lucent Pharmatech location">
      <iframe
        title="Lucent Pharmatech LLP on Google Maps"
        src="https://maps.google.com/maps?iwloc=near&output=embed&q=Lucent+Pharma+Tech&t=m&z=12"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-social"><SocialLinks /></div>
    </section>
  );
}
