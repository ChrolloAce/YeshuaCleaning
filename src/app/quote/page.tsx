'use client';

import { useState } from 'react';

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '24px' }}>
            Get a Quote
          </h1>
          <p style={{ textAlign: 'center', fontSize: '18px', color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto 48px' }}>
            Request a free consultation and customized quote for your cleaning needs.
          </p>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} className="card" style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="floor">Floor Cleaning</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="green">Green Cleaning</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>
              
              <button type="submit" className="btn primary" style={{ width: '100%' }}>
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
