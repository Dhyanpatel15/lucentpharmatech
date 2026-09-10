export default function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-intro ${centered ? 'is-centered' : ''}`}>
      <div className="section-heading-block">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
