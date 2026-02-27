import React from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    src: 'https://www.protection1.com.au/wp-content/uploads/2020/09/CCTV-Cameras-01.jpg',
    alt: 'CCTV Security Camera Solutions',
  },
  {
    src: 'https://hexaprotechnologies.com/assets/images/slider-3-1920x1138.jpg',
    alt: 'IT Infrastructure Solutions',
  },
  {
    src: 'https://hexaprotechnologies.com/assets/images/slider-2-1920x1279.jpg',
    alt: 'Networking Solutions Bangalore',
  },
];

const STATS = [
  { num: '25+', lbl: 'Years of Excellence' },
  { num: '200+', lbl: 'Enterprise Clients' },
  { num: '50+', lbl: 'Product Brands' },
  { num: '24/7', lbl: 'Technical Support' },
];

const FEATURES = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Security & Surveillance',
    desc: 'CCTV, IP Cameras, Access Control & Biometrics for comprehensive protection.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Networking Solutions',
    desc: 'Managed & unmanaged Ethernet switches and enterprise structured cabling.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Server Infrastructure',
    desc: 'Mission-critical servers, UPS, invertors and data centre management.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Expert Support',
    desc: 'Round-the-clock engineers available for remote and on-site assistance.',
  },
];

function Body() {
  return (
    <div className="page-wrapper">

      {/* ── HERO SECTION ───────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        {/* Ambient decorations */}
        <div className="hero-blob-1" aria-hidden="true" />
        <div className="hero-blob-2" aria-hidden="true" />
        <div className="hero-grid-pattern" aria-hidden="true" />

        <div className="hero-content-wrap">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              Bangalore's Premier IT Partner Since 1999
            </div>

            <h1 className="hero-title">
              Complete <span className="hero-title-accent">IT Solutions</span> &amp;{' '}
              Infrastructure Expertise
            </h1>

            <p className="hero-desc">
              Trusted by 200+ government agencies, banks and enterprises across India
              for cutting-edge technology distribution and round-the-clock support.
            </p>

            <div className="hero-actions">
              <Link to="/contacts" className="btn-primary">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                Contact Us
              </Link>
              <Link to="/products" className="btn-outline">
                <i className="fa-solid fa-box-archive" aria-hidden="true" />
                Our Products
              </Link>
            </div>

            <div className="hero-trust" aria-label="Trusted by clients">
              <div className="hero-trust-avatars" aria-hidden="true">
                <span title="HAL">H</span>
                <span title="BEL">B</span>
                <span title="LIC">L</span>
                <span title="And more">+</span>
              </div>
              <div className="hero-trust-text">
                <strong>Trusted by 200+ Organisations</strong>
                HAL, BEL, LIC, Canara Bank &amp; more
              </div>
            </div>
          </div>

          {/* Right: Carousel visual */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-carousel-card">
              <div
                id="heroCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="4500"
              >
                <div className="carousel-indicators">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#heroCarousel"
                      data-bs-slide-to={i}
                      className={i === 0 ? 'active' : ''}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="carousel-inner">
                  {SLIDES.map((slide, i) => (
                    <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                      <img src={slide.src} alt={slide.alt} className="d-block w-100" />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="hero-float-card hero-float-card-1">
              <div className="hero-float-icon amber">
                <i className="fa-solid fa-award" />
              </div>
              <div>
                <div className="hero-float-value">25+ Years</div>
                <div className="hero-float-label">Industry Experience</div>
              </div>
            </div>

            <div className="hero-float-card hero-float-card-2">
              <div className="hero-float-icon navy">
                <i className="fa-solid fa-users" />
              </div>
              <div>
                <div className="hero-float-value">200+ Clients</div>
                <div className="hero-float-label">Across India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────── */}
      <section className="stats-strip" aria-label="Key statistics">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-block" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WELCOME / WHO WE ARE ───────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg-alt)' }}>
        <div className="section-inner">
          <div className="section-header center">
            <div className="eyebrow">Who We Are</div>
            <div className="section-divider" />
            <h2 className="section-title">
              Welcome to <em>Hexapro Technologies</em>
            </h2>
            <p className="section-lead">
              We are pleased to introduce ourselves as one among the best Distributors of
              IT Solutions and IT-Infrastructure in Bangalore. Started in the year 1999 by
              young engineer Mr. Hemendra Varma, who has years of rich experience with
              Wipro, Xerox, Texas Instruments, IBM and Intel.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES / CAPABILITIES ────────────────────── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header center">
            <div className="eyebrow">What We Offer</div>
            <div className="section-divider" />
            <h2 className="section-title">
              Our Key <em>Capabilities</em>
            </h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">
                  <i className={f.icon} aria-hidden="true" />
                </div>
                <h3 className="feature-card-title">{f.title}</h3>
                <p className="feature-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section
        style={{
          background: 'var(--gradient-navy)',
          padding: '4rem 2.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--clr-amber-light)',
              marginBottom: '1rem',
            }}
          >
            Ready to Transform Your IT?
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
            }}
          >
            Partner with Bangalore's Most Trusted IT Distributor
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '2rem',
              lineHeight: '1.7',
            }}
          >
            Get the best prices on IT products backed by expert support. Contact us today.
          </p>
          <Link to="/contacts" className="btn-primary">
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Body;