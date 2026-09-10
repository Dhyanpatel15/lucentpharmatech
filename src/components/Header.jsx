import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CalendarIcon, ClockIcon, MailIcon, MenuIcon, PhoneIcon } from './Icons';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Product', '/product'],
  ['Service', '/services'],
  ['Certification', '/certification'],
  ['Contact', '/contact'],
];

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'is-compact' : ''}`} aria-label="Social media links">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X / Twitter">x</a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
      <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">p</a>
    </div>
  );
}

export { SocialLinks };

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <div className="top-bar">
        <div className="wide-container top-bar-inner">
          <a className="top-phone" href="tel:+919998321839">
            <span className="top-icon"><PhoneIcon size={18} /></span>
            <strong>+91 999 832 1839</strong>
          </a>
          <div className="top-meta">
            <span><ClockIcon size={17} /> Mon - Sat 9.00-7.00, Sun - Closed</span>
            <a href="mailto:info@lucentpharmatech.com"><MailIcon size={18} /> info@lucentpharmatech.com</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="wide-container nav-shell">
          <NavLink className="brand" to="/" aria-label="Lucent Pharmatech home">
            <img src="/assets/lucent-logo.webp" alt="Lucent Pharmatech LLP" />
          </NavLink>

          <nav className={`desktop-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
            <div className="mobile-menu-head">
              <img src="/assets/lucent-logo.webp" alt="Lucent Pharmatech LLP" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu"><MenuIcon open /></button>
            </div>
            <div className="nav-links">
              {navItems.map(([label, to]) => (
                <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {label}
                </NavLink>
              ))}
            </div>
            <SocialLinks compact />
            <a className="inquiry-button" href="tel:+919998321839">
              <CalendarIcon />
              <span>Inquiry: +91 999 832 1839</span>
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <MenuIcon open={open} />
          </button>
        </div>
        {open && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
      </header>
    </>
  );
}
