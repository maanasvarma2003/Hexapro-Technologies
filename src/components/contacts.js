import React, { useState } from 'react';

const CONTACT_DETAILS = [
    {
        icon: 'fa-solid fa-location-dot',
        label: 'Address',
        value: 'M/s. Hexapro Technologies\n#6/1, Tech Tower, 1st Cross, Opp Kateerava Stadium,\nSampangiram Nagar, Bangalore – 560027',
    },
    {
        icon: 'fa-solid fa-phone',
        label: 'Phone',
        value: '+91 9900124091\n+91-080-22105910\n+91-080-41245435',
    },
    {
        icon: 'fa-solid fa-envelope',
        label: 'Email',
        value: 'hexapro1@gmail.com\nsales@hexaprotechnologies.com',
    },
];

const INITIAL_FORM = { name: '', phone: '', email: '', enquiry: '', message: '' };

function Contacts() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setForm(INITIAL_FORM);
            setTimeout(() => setSubmitted(false), 6000);
        }, 900);
    };

    return (
        <div className="page-wrapper">

            {/* Page Header */}
            <div className="contact-page-header">
                <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="eyebrow" style={{ justifyContent: 'center' }}>Reach Out</div>
                    <div className="section-divider" style={{ margin: '0.75rem auto 1rem' }} />
                    <h1 className="section-title" style={{ textAlign: 'center' }}>
                        Contact <em>Us</em>
                    </h1>
                    <p className="section-lead" style={{ textAlign: 'center' }}>
                        Have an enquiry, project or requirement? Our team is ready to help.
                    </p>
                </div>
            </div>

            {/* Content */}
            <section className="content-section">
                <div className="contact-layout">

                    {/* Info Column */}
                    <div>
                        <h2 className="contact-info-title">Let&rsquo;s Talk</h2>
                        <p className="contact-info-sub">
                            Ready for offers and cooperation. Don&rsquo;t hesitate to reach out — our team is
                            available to help you find the right IT solution for your business.
                        </p>

                        {CONTACT_DETAILS.map((d, i) => (
                            <div className="contact-detail-row" key={i}>
                                <div className="cdr-icon">
                                    <i className={d.icon} aria-hidden="true" />
                                </div>
                                <div className="cdr-text">
                                    <strong>{d.label}</strong>
                                    <span>
                                        {d.value.split('\n').map((line, j) => (
                                            <React.Fragment key={j}>
                                                {line}
                                                {j < d.value.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form Column */}
                    <div className="contact-form-card">
                        <h3 className="form-title">Send Us an Enquiry</h3>
                        <p className="form-subtitle">
                            Fill in the details below and we&rsquo;ll get back to you within 24 hours.
                        </p>

                        {submitted && (
                            <div className="form-success" role="alert">
                                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                                Thank you! Your enquiry has been received. We&rsquo;ll be in touch shortly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-row-grid">
                                <div className="form-field">
                                    <label htmlFor="contact-name">Full Name *</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={form.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="contact-email">Email Address *</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="contact-enquiry">Enquiry Type</label>
                                <select
                                    id="contact-enquiry"
                                    name="enquiry"
                                    value={form.enquiry}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a category</option>
                                    <option value="products">Products & Pricing</option>
                                    <option value="services">IT Services</option>
                                    <option value="security">Security Solutions</option>
                                    <option value="networking">Networking</option>
                                    <option value="support">Technical Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label htmlFor="contact-message">Your Message *</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project or requirement…"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-submit-form"
                                disabled={loading}
                                aria-label="Send message"
                            >
                                {loading ? (
                                    <>
                                        <i className="fa-solid fa-circle-notch fa-spin" aria-hidden="true" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                                        Send Enquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contacts;