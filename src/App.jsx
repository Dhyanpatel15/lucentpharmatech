import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Services from './pages/Services';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

const titles = {
  '/': 'Lucent Pharma Tech',
  '/about': 'About – Lucent Pharma Tech',
  '/product': 'Product – Lucent Pharma Tech',
  '/services': 'Services – Lucent Pharma Tech',
  '/certification': 'Certification – Lucent Pharma Tech',
  '/contact': 'Contact Us – Lucent Pharma Tech',
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = titles[pathname] || 'Lucent Pharma Tech';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <RouteEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
