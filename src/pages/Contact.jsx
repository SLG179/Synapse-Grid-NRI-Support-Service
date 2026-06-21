import { useState } from 'react'
import useReveal from '../components/useReveal'

const infoItems = [
  { icon: 'fa-envelope', title: 'Email Us', content: <><a href="mailto:hello@synapsegrid.in" style={{ color: 'var(--accent)' }}>hello@synapsegrid.in</a><p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Response within 4 business hours</p></> },
  { icon: 'fa-phone', title: 'Call / WhatsApp', content: <><a href="tel:+918000000000" style={{ color: 'var(--accent)' }}>+91 80000 00000</a><p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Mon–Sat, 9am to 7pm IST</p></> },
  { icon: 'fa-location-dot', title: 'Head Office', content: <p>Kalyani Nagar, Pune — 411 006<br />Maharashtra, India</p> },
  { icon: 'fa-globe', title: 'Our Coverage', content: <p>18+ cities including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad & more.</p> },
]

function RevealDiv({ className, children, style }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className || ''}`} style={style}>{children}</div>
}

export default function Contact() {
  const [toast, setToast] = useState(false)
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', country: '', service: '', city: '', message: '' })

  const handleSubmit = () => {
    setToast(true)
    setTimeout(() => setToast(false), 4000)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label animate-fade-up">Get In Touch</div>
          <h1 className="animate-fade-up-delay-1" style={{ maxWidth: '560px' }}>Let's Start a <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Conversation</em></h1>
          <p className="animate-fade-up-delay-2" style={{ maxWidth: '500px', marginTop: '1rem', fontSize: '1.05rem' }}>Tell us about your family's needs and we'll put together the right plan — completely free, no obligation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <RevealDiv><div className="section-label">Reach Us</div></RevealDiv>
              <RevealDiv><h2 style={{ marginBottom: '2rem' }}>We're Here <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>For You</em></h2></RevealDiv>
              {infoItems.map((item, i) => (
                <RevealDiv key={item.title} className={`contact-info-item reveal-delay-${i + 1}`}>
                  <div className="contact-info-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div><h5>{item.title}</h5>{item.content}</div>
                </RevealDiv>
              ))}
              <RevealDiv className="card" style={{ marginTop: '2rem', padding: '1.75rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Quick Answers</h4>
                {[
                  ['How quickly can you start?', 'Most services can begin within 48 hours of onboarding.'],
                  ['Do you operate outside Pune?', 'Yes — we cover 18+ cities across India with verified local partners.'],
                  ['Is there a free consultation?', 'Absolutely. Our first call is always complimentary — no strings attached.'],
                ].map(([q, a]) => (
                  <details key={q} style={{ marginBottom: '0.75rem', cursor: 'pointer' }}>
                    <summary style={{ fontSize: '0.875rem', fontWeight: 600, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {q}<span style={{ color: 'var(--accent)' }}>+</span>
                    </summary>
                    <p style={{ fontSize: '0.825rem', marginTop: '0.6rem', paddingLeft: '0.5rem' }}>{a}</p>
                  </details>
                ))}
              </RevealDiv>
            </div>

            <RevealDiv className="contact-form reveal-delay-1">
              <div className="section-label" style={{ marginBottom: '0.5rem' }}>Enquiry Form</div>
              <h3 style={{ marginBottom: '0.25rem' }}>Tell Us About Your Needs</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>We'll get back to you within one business day.</p>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Rajan" value={form.fname} onChange={e => setForm({ ...form, fname: e.target.value })} /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Mehta" value={form.lname} onChange={e => setForm({ ...form, lname: e.target.value })} /></div>
              </div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="rajan@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
              <div className="form-row">
                <div className="form-group"><label>Phone / WhatsApp</label><input type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
                <div className="form-group">
                  <label>Country of Residence</label>
                  <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                    <option value="">Select country</option>
                    {['United Kingdom', 'United States', 'Canada', 'Australia', 'UAE / Dubai', 'Singapore', 'Germany', 'Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service</option>
                  {['Property Services', 'Parent Care Services', 'Shopping & Errand Services', 'Legal & Documentation Help', 'Travel & Relocation Support', 'Premium Service', 'Not sure — need guidance'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group"><label>Which city in India?</label><input type="text" placeholder="e.g. Pune, Mumbai, Bengaluru..." value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} /></div>
              <div className="form-group"><label>Tell Us More</label><textarea placeholder="Briefly describe your family's situation..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea></div>
              <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Enquiry →</button>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                <i className="fa-solid fa-lock"></i> Your information is secure and will never be shared with third parties.
              </p>
            </RevealDiv>
          </div>
        </div>
      </section>

      <div className={`toast${toast ? ' toast-show' : ''}`}>
        <i className="fa-solid fa-circle-check"></i> Enquiry sent! We'll be in touch within 24 hours.
      </div>
    </>
  )
}
