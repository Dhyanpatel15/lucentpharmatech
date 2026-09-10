import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumb = title }) {
  return (
    <section className="page-banner">
      <div className="wide-container page-banner-inner">
        <h1>{title}</h1>
        <div className="breadcrumbs"><Link to="/">HOME</Link><span>›</span><strong>{breadcrumb.toUpperCase()}</strong></div>
      </div>
    </section>
  );
}
