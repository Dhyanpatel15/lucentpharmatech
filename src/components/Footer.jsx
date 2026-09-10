import { Link } from 'react-router-dom';
import { ArrowUpIcon, MailIcon, MapIcon, PhoneIcon } from './Icons';
import { SocialLinks } from './Header';

function BackToTop() {
  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon />
    </button>
  );
}

const quickLinks = [
  ['About', '/about'],
  ['Product', '/product'],
  ['Service', '/services'],
  ['Certification', '/certification'],
  ['Contact', '/contact'],
];

export function DefaultFooter() {
  return (
    <footer className="footer footer-default">
      <div className="footer-overlay" />
      <div className="wide-container footer-grid">
        <div className="footer-brand">
          <img src="/assets/lucent-logo-removebg-white.webp" alt="Lucent Pharmatech LLP" />
          <SocialLinks />
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <span className="wave-line">〰</span>
          <ul>
            {quickLinks.map(([label, to]) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <span className="wave-line">〰</span>
          <a href="tel:+919998321839"><PhoneIcon /> +91 999 832 1839</a>
          <a href="mailto:info@lucentpharmatech.com"><MailIcon /> info@lucentpharmatech.com</a>
          <span><MapIcon /> Unit No: 1 &amp; 2, Survey No: 186, 187,<br /> Kathwada, Navagam, Gujarat 387540</span>
        </div>
      </div>
      <div className="wide-container footer-bottom">© 2025, <Link to="/">Lucent Pharma Tech LLP</Link>, All rights reserved</div>
      <BackToTop />
    </footer>
  );
}

export function ExtendedFooter() {
  const services = ['Clinical Histopatology Tests', 'Clinical Biochemistry Tests', 'Vaccine Research Center', 'Clinical Microbiology Tests', 'Complete Health Checkup'];
  const customers = ['Upload Prescription', 'Request a call Back', 'Healthcare Packages', 'Download Reports', 'Track Progress'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <footer className="footer footer-extended">
      <div className="footer-overlay" />
      <div className="wide-container extended-grid">
        <div className="extended-intro">
          <img src="/assets/logo-light.png" alt="Patholab laboratory" />
          <p>Patholab laboratory is a very well equipped laboratory of this country &amp; they promised to provide best services</p>
          <SocialLinks />
        </div>
        <div className="footer-column">
          <h3>Our Services</h3><span className="wave-line">〰</span>
          <ul>{services.map((item) => <li key={item}><a href="#contact-form">{item}</a></li>)}</ul>
        </div>
        <div className="footer-column">
          <h3>For Customers</h3><span className="wave-line">〰</span>
          <ul>{customers.map((item) => <li key={item}><a href="#contact-form">{item}</a></li>)}</ul>
        </div>
        <div className="footer-column opening-list">
          <h3>Opening Hour</h3><span className="wave-line">〰</span>
          <ul>{days.map((day) => <li key={day}><span>{day}</span><em>{day === 'Sunday' ? 'Closed' : '9am – 7am'}</em></li>)}</ul>
        </div>
      </div>
      <div className="wide-container help-strip">
        <div><PhoneIcon size={25} /><span><small>Need Help? Book Lab Visit</small><strong>+234 567 899</strong></span></div>
        <div><MailIcon /><strong>Info@Patholab.com</strong></div>
        <div><MapIcon /><strong>183 Marina Avenue, Miami Ci Mall, USA</strong></div>
      </div>
      <div className="wide-container extended-bottom">
        <span>© 2023, <a href="https://themeforest.net/user/bravis-themes" target="_blank" rel="noreferrer">BRAVISTHEME</a>, All rights reserved</span>
        <span><a href="#contact-form">Privacy Policy</a> <a href="#contact-form">Terms &amp; Condition</a> <a href="#contact-form">*Promo T&amp;Cs Apply</a></span>
        <span className="payment-cards">Payment Gateways:
          <b>DISC</b><b>VISA</b><b>MC</b><b>SHOP</b><b>AMEX</b>
        </span>
      </div>
      <BackToTop />
    </footer>
  );
}
