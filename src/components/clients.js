import React from 'react';

const CLIENTS = [
    { name: 'ADA', icon: 'fa-solid fa-building-columns' },
    { name: 'HAL', icon: 'fa-solid fa-plane' },
    { name: 'BESCOM', icon: 'fa-solid fa-bolt' },
    { name: 'Stanley Seating', icon: 'fa-solid fa-chair' },
    { name: 'ADE', icon: 'fa-solid fa-gears' },
    { name: 'BEL', icon: 'fa-solid fa-satellite-dish' },
    { name: 'Canara Bank', icon: 'fa-solid fa-piggy-bank' },
    { name: 'Indian Bank', icon: 'fa-solid fa-landmark' },
    { name: 'Visvesvaraya Iron & Steel', icon: 'fa-solid fa-industry' },
    { name: 'High Court of Karnataka', icon: 'fa-solid fa-scale-balanced' },
    { name: 'Reliance Infocom Ltd', icon: 'fa-solid fa-tower-broadcast' },
    { name: 'Life Insurance Corporation of India', icon: 'fa-solid fa-shield-heart' },
];

function Clients() {
    return (
        <div className="page-wrapper">

            {/* Page Hero */}
            <div className="page-hero">
                <img
                    src="https://www.saveeat.co/wp-content/uploads/2020/02/attirer-les-clients.jpg"
                    alt="Hexapro Clients"
                    loading="lazy"
                />
                <div className="page-hero-overlay">
                    <p className="page-hero-eyebrow">Trusted By</p>
                    <h1>Our Clients</h1>
                </div>
            </div>

            <section className="content-section">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div className="section-header center">
                        <div className="eyebrow">Trusted Partners</div>
                        <div className="section-divider" />
                        <h2 className="section-title">
                            200+ Enterprises <em>Trust Hexapro</em>
                        </h2>
                        <p className="section-lead">
                            From government defence units to leading banks and manufacturing giants — our
                            client base spans industries united by a need for reliable IT infrastructure.
                        </p>
                    </div>

                    <div className="clients-grid">
                        {CLIENTS.map((c, i) => (
                            <div className="client-tile" key={i}>
                                <i className={c.icon} aria-hidden="true" />
                                {c.name}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Clients;