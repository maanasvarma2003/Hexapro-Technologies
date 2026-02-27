import React from 'react';

const PRODUCTS = [
  { icon: 'fa-solid fa-desktop', label: 'Desktop Computers (Branded & Assembled)' },
  { icon: 'fa-solid fa-laptop', label: 'Laptops – All Leading Brands' },
  { icon: 'fa-solid fa-compact-disc', label: 'Software Products' },
  { icon: 'fa-solid fa-network-wired', label: 'Managed & Unmanaged Ethernet Switches' },
  { icon: 'fa-solid fa-server', label: 'Structured Cabling Products' },
  { icon: 'fa-solid fa-hard-drive', label: 'Seagate, Samsung, LG Storage' },
  { icon: 'fa-solid fa-print', label: 'Printers – HP, Dell, Epson, Tvse' },
  { icon: 'fa-solid fa-microchip', label: 'Intel Processors (GID – 10042533)' },
  { icon: 'fa-solid fa-plug', label: 'UPS & Invertors – APC & More' },
  { icon: 'fa-solid fa-camera', label: 'CCTV / IP Cameras & Security Systems' },
  { icon: 'fa-solid fa-door-open', label: 'Door Access Control Solutions' },
  { icon: 'fa-solid fa-fingerprint', label: 'Biometric Products' },
  { icon: 'fa-solid fa-video', label: 'LCD Projectors' },
  { icon: 'fa-solid fa-gamepad', label: 'Gaming Products & Peripherals' },
  { icon: 'fa-solid fa-usb', label: 'All Range of USB Products' },
  { icon: 'fa-solid fa-memory', label: 'Lenovo, AMD, ACER, Microsoft Devices' },
];

function Products() {
  return (
    <div className="page-wrapper">

      {/* Page Hero */}
      <div className="page-hero">
        <img
          src="https://lirp.cdn-website.com/b6e93599/dms3rep/multi/opt/softprice+comp+sales-1920w.jpg"
          alt="Hexapro Products"
          loading="lazy"
        />
        <div className="page-hero-overlay">
          <p className="page-hero-eyebrow">Our Catalogue</p>
          <h1>Products</h1>
        </div>
      </div>

      <section className="content-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div className="section-header center">
            <div className="eyebrow">50+ Brands</div>
            <div className="section-divider" />
            <h2 className="section-title">
              Premium <em>IT Products</em>
            </h2>
            <p className="section-lead">
              Authorised dealers for 50+ global brands. From networking equipment to
              security systems — we cover everything your organisation needs.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <div className="product-chip" key={i}>
                <i className={p.icon} aria-hidden="true" />
                {p.label}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Products;