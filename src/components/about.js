import React from 'react';
import { Link } from 'react-router-dom';

const VALUES = [
  {
    icon: 'fa-solid fa-trophy',
    title: 'Trusted Since 1999',
    desc: 'Over 25 years of consistent, high-quality IT service delivery in Bangalore.',
  },
  {
    icon: 'fa-solid fa-users-gear',
    title: 'Expert Team',
    desc: 'Qualified engineers experienced at Wipro, Xerox, IBM, Intel & Texas Instruments.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Client First',
    desc: 'Superior quality products at competitive prices with unwavering commitment.',
  },
];

function About() {
  return (
    <div className="page-wrapper">

      {/* Page Hero */}
      <div className="page-hero">
        <img
          src="https://www.motocms.com/blog/wp-content/uploads/2017/11/1040-563-5.jpg"
          alt="About Hexapro Technologies"
          loading="lazy"
        />
        <div className="page-hero-overlay">
          <p className="page-hero-eyebrow">Our Company</p>
          <h1>About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <section className="content-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div className="section-header center">
            <div className="eyebrow">Est. 1999</div>
            <div className="section-divider" />
            <h2 className="section-title">
              25+ Years of <em>IT Excellence</em>
            </h2>
          </div>

          {/* Text Card */}
          <div className="content-card" style={{ marginBottom: '3rem' }}>
            <p>
              We are pleased to introduce ourselves as an IT Solutions and IT-Infrastructure
              Company providing Technology Solutions and Services. Established in the year 1999
              by young engineer Mr. Hemendra Varma, who has put in years of rich experience
              dealing with reputed companies like Wipro, Xerox, Texas Instruments, IBM and Intel.
            </p>
            <p>
              Our aim is to provide superior quality products with very reasonable prices to our
              esteemed clients. Our team consists of well-qualified and most experienced engineers
              who can take care of the client's needs under all circumstances.
            </p>
            <p>
              From humble beginnings, Hexapro Technologies has grown into one of Bangalore's most
              trusted IT distribution and solutions providers, serving enterprises across government,
              banking, defence and the private sector.
            </p>
          </div>

          {/* Value Props */}
          <div className="value-cards features-grid">
            {VALUES.map((v, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">
                  <i className={v.icon} aria-hidden="true" />
                </div>
                <h3 className="feature-card-title">{v.title}</h3>
                <p className="feature-card-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contacts" className="btn-primary">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;