import React from 'react';

const SERVICES = [
  {
    icon: 'fa-solid fa-server',
    title: 'Mission Critical Services',
    desc: `Server infrastructure availability is essential for data centres, remote offices and
      small businesses. Our MCS framework supports critical failure instances and improves server
      uptime with proactive monitoring. HEXAPRO maintains a pool of specialists available 24/7 to
      take control remotely and dispatch engineers with spares when needed.`,
  },
  {
    icon: 'fa-solid fa-building',
    title: 'Facility Management Services',
    desc: `FM services include Help Desk, Desktop Services, Asset Management, Network Management,
      Data Centre Services, Mail Services and Disaster Recovery. HEXAPRO integrates the planning,
      operations and day-to-day management of your IT resources — reducing maintenance costs while
      ensuring technology stays aligned to your business goals.`,
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Security & Surveillance',
    desc: `We supply, install and maintain complete CCTV and IP camera solutions, biometric access
      control, door lock systems and comprehensive physical security frameworks tailored for offices,
      warehouses and government facilities across Bangalore and India.`,
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Networking & Structured Cabling',
    desc: `Authorised dealers for leading networking product ranges including managed and unmanaged
      Ethernet switches and structured cabling systems. We design, supply and implement end-to-end
      network infrastructure for small offices right up to large enterprise campuses.`,
  },
];

function Components() {
  return (
    <div className="page-wrapper">

      {/* Page Hero */}
      <div className="page-hero">
        <img
          src="https://www.deskera.com/blog/content/images/2021/06/digital-customer-service-concept-image-1.jpeg"
          alt="Hexapro Services"
          loading="lazy"
        />
        <div className="page-hero-overlay">
          <p className="page-hero-eyebrow">What We Do</p>
          <h1>Services</h1>
        </div>
      </div>

      <section className="content-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div className="section-header center">
            <div className="eyebrow">Expert Support</div>
            <div className="section-divider" />
            <h2 className="section-title">
              Services Built for <em>Business Continuity</em>
            </h2>
            <p className="section-lead">
              We provide end-to-end IT services combining authorised product distribution with
              expert engineering support — keeping your operations running continuously.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon-wrap">
                  <i className={s.icon} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Components;