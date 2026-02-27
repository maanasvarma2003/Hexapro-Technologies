import React from 'react';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/components', label: 'Services' },
    { to: '/clients', label: 'Clients' },
    { to: '/contacts', label: 'Contact' },
];

const SOCIAL = [
    { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fa-brands fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube' },
    { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
];

function Footer() {
    return (
        <footer className="footer-hxp" role="contentinfo">
            <div className="footer-grid">

                {/* Brand */}
                <div>
                    <img
                        className="footer-brand-logo"
                        src="https://i.ytimg.com/vi/MPlru3C_YAQ/maxresdefault.jpg"
                        alt="Hexapro Technologies"
                    />
                    <p className="footer-brand-desc">
                        One of Bangalore's most trusted IT Solutions and Infrastructure distributors
                        since 1999. Serving enterprises, government and industry with quality technology.
                    </p>
                    <div className="footer-social-row" role="list" aria-label="Social media links">
                        {SOCIAL.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                className="footer-social-btn"
                                aria-label={s.label}
                                role="listitem"
                            >
                                <i className={s.icon} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <p className="footer-col-title">Quick Links</p>
                    <ul className="footer-link-list">
                        {QUICK_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link to={l.to}>
                                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.6rem' }} aria-hidden="true" />
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <p className="footer-col-title">Address</p>
                    <address className="footer-address-text" style={{ fontStyle: 'normal' }}>
                        M/s. Hexapro Technologies<br />
                        #6/1, Tech Tower, 1st Cross,<br />
                        Opp Kateerava Stadium,<br />
                        Sampangiram Nagar,<br />
                        Bangalore – 560027
                    </address>
                </div>

                {/* Contact */}
                <div>
                    <p className="footer-col-title">Contact</p>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-phone" aria-hidden="true" />
                        <span>+91 9900124091<br />+91-080-22105910<br />+91-080-41245435</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fa-solid fa-envelope" aria-hidden="true" />
                        <span>
                            <a href="mailto:hexapro1@gmail.com">hexapro1@gmail.com</a><br />
                            <a href="mailto:sales@hexaprotechnologies.com">sales@hexaprotechnologies.com</a>
                        </span>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <p>&copy; {new Date().getFullYear()} <span>Hexapro Technologies</span>. All Rights Reserved.</p>
                <p>Crafted with <span>♥</span> in Bangalore, India</p>
            </div>
        </footer>
    );
}

export default Footer;