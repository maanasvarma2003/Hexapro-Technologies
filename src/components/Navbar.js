import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home', icon: 'fa-solid fa-house' },
  { to: '/about', label: 'About', icon: 'fa-solid fa-circle-info' },
  { to: '/products', label: 'Products', icon: 'fa-solid fa-box-archive' },
  { to: '/components', label: 'Services', icon: 'fa-solid fa-gear' },
  { to: '/clients', label: 'Clients', icon: 'fa-solid fa-users' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      ref={menuRef}
      className={`navbar-hxp${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* ── Brand Logo ─────────────────────── */}
      <div className="navbar-logo-wrap">
        <Link to="/" aria-label="Hexapro Technologies – Home">
          <img
            className="navbar-logo"
            src="https://i.ytimg.com/vi/MPlru3C_YAQ/maxresdefault.jpg"
            alt="Hexapro Technologies"
          />
        </Link>
      </div>

      {/* ── Desktop Nav Links ──────────────── */}
      <div className="navbar-links desktop-nav" role="list">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            role="listitem"
            aria-current={location.pathname === link.to ? 'page' : undefined}
            className={`nav-link-hxp${location.pathname === link.to ? ' active-nav' : ''}`}
          >
            <i className={link.icon} aria-hidden="true" />
            {link.label}
          </Link>
        ))}
      </div>

      {/* ── Desktop CTA ───────────────────── */}
      <div className="navbar-cta desktop-nav">
        <Link to="/contacts" className="btn-nav-cta">
          <i className="fa-solid fa-phone" aria-hidden="true" />
          Get in Touch
        </Link>
      </div>

      {/* ── Hamburger Button (mobile) ─────── */}
      <button
        className={`hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>

      {/* ── Mobile Drawer ─────────────────── */}
      <div
        id="mobile-menu"
        className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-inner">
          <p className="mobile-nav-label">Navigation</p>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? 'page' : undefined}
              className={`mobile-nav-link${location.pathname === link.to ? ' active-nav' : ''}`}
            >
              <span className="mobile-nav-icon">
                <i className={link.icon} aria-hidden="true" />
              </span>
              {link.label}
            </Link>
          ))}
          <div className="mobile-drawer-cta">
            <Link to="/contacts" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* ── Backdrop ──────────────────────── */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;