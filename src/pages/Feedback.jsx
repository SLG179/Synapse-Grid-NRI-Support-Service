import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const testimonials = [
  { init: 'R', name: 'Rajan Mehta', loc: 'London, UK · Parent Care', text: '"Synapse Grid has been managing my parents\' daily care in Pune for two years. I can\'t imagine life without them. The weekly reports give me real reassurance."' },
  { init: 'P', name: 'Priya Nair', loc: 'Toronto, Canada · Property', text: '"They handled our entire property sale in Mumbai — legal, documentation, broker coordination — while I was in Toronto. Flawless from start to finish."' },
  { init: 'A', name: 'Amit Sharma', loc: 'Dubai, UAE · Premium', text: '"When my father had a medical emergency at 2am, the Synapse Grid team arrived within 45 minutes. I was 7,000km away and yet I felt like someone was holding my hand."' },
  { init: 'N', name: 'Neha Krishnan', loc: 'San Francisco, USA · Legal', text: '"Getting my OCI renewed and property documents notarised used to be a nightmare. Synapse Grid\'s legal team sorted everything in 3 weeks. Incredible service."' },
  { init: 'K', name: 'Kiran Desai', loc: 'Melbourne, Australia · Errands', text: '"I send gifts and sweets to my family for every festival through Synapse Grid. They source exactly what I want, deliver on time, and send photos. It feels so personal."' },
  { init: 'S', name: 'Suresh Pillai', loc: 'Frankfurt, Germany · Relocation', text: '"My relocation back to India after 10 years in Germany was managed end-to-end by Synapse Grid. Apartment search, school admissions, utilities — all sorted before I landed."' },
  { init: 'M', name: 'Meera Agarwal', loc: 'Singapore · Premium', text: '"The premium plan is worth every rupee. My dedicated manager Anita knows our entire family by name. She anticipates things before I even ask. Truly exceptional."' },
  { init: 'V', name: 'Vivek Bose', loc: 'New York, USA · Parent Care', text: '"Mom\'s birthday celebration was beautifully coordinated — flowers, a cake, photos, and even a surprise video call setup. She was in tears. I was in tears. Thank you, Synapse Grid."' },
  { init: 'T', name: 'Tanvi Shah', loc: 'Amsterdam, Netherlands · Property', text: '"Tenant was damaging my flat in Hyderabad. Synapse Grid\'s property team handled the eviction, repairs and re-letting within 6 weeks. Completely stress-free for me."' },
]

function RevealDiv({ className, children, style }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className || ''}`} style={style}>{children}</div>
}

function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`star-btn${i <= (hover || value) ? ' active' : ''}`}
          onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(0)} onClick={() => onChange(i)}>
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  )
}

export default function Feedback() {
  const [toast, setToast] = useState(false)
  const [form, setForm] = useState({ name: '', loc: '', rating: 0, service: '', text: '' })

  const handleSubmit = () => {
    setToast(true)
    setTimeout(() => setToast(false), 4000)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label animate-fade-up">What Families Say</div>
          <h1 className="animate-fade-up-delay-1" style={{ maxWidth: '560px' }}>Stories of <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Trust & Relief</em></h1>
          <p className="animate-fade-up-delay-2" style={{ maxWidth: '500px', marginTop: '1rem', fontSize: '1.05rem' }}>Real words from real NRI families — the moments when Synapse Grid made the distance feel a little smaller.</p>
          <div className="animate-fade-up-delay-3" style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            {[['4.9', 'Average Rating'], ['2K+', 'Happy Families'], ['98%', 'Would Recommend']].map(([n, l]) => (
              <div key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2>From Our <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Community</em></h2>
            <p style={{ maxWidth: '480px', margin: '0.75rem auto 3rem' }}>Every story here is a family that found peace of mind thanks to Synapse Grid.</p>
          </RevealDiv>
          <div className="feedback-grid">
            {testimonials.map((t, i) => (
              <RevealDiv key={t.name} className={`feedback-card reveal-delay-${(i % 3) + 1}`}>
                <div className="feedback-stars">{[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star"></i>)}</div>
                <p className="feedback-text">{t.text}</p>
                <div className="feedback-author">
                  <div className="author-avatar">{t.init}</div>
                  <div><div className="author-name">{t.name}</div><div className="author-loc">{t.loc}</div></div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Share Your Experience</div>
            <h2>Leave Us Your <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Feedback</em></h2>
            <p style={{ maxWidth: '480px', margin: '0.75rem auto 3rem' }}>We read every review. Your words help us improve and help other families find the support they need.</p>
          </RevealDiv>
          <RevealDiv className="feedback-form-wrap reveal-delay-1">
            <div className="form-row">
              <div className="form-group"><label>Your Name</label><input type="text" placeholder="Rajan Mehta" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
              <div className="form-group"><label>City, Country</label><input type="text" placeholder="London, UK" value={form.loc} onChange={e => setForm({ ...form, loc: e.target.value })} /></div>
            </div>
            <div className="form-group">
              <label>Your Rating</label>
              <StarRating value={form.rating} onChange={r => setForm({ ...form, rating: r })} />
            </div>
            <div className="form-group">
              <label>Service Used</label>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                {['Property Services', 'Parent Care Services', 'Shopping & Errand Services', 'Legal & Documentation', 'Travel & Relocation', 'Premium Service'].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group"><label>Your Review</label><textarea placeholder="Tell us about your experience with Synapse Grid..." style={{ minHeight: '160px' }} value={form.text} onChange={e => setForm({ ...form, text: e.target.value })}></textarea></div>
            <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Submit Feedback →</button>
          </RevealDiv>
        </div>
      </section>

      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <RevealDiv className="container text-center">
          <h2>Inspired by these stories?</h2>
          <p style={{ maxWidth: '440px', margin: '1rem auto 2rem' }}>Join thousands of NRI families who trust Synapse Grid to keep India life running smoothly.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </RevealDiv>
      </section>

      <div className={`toast${toast ? ' toast-show' : ''}`}>
        <i className="fa-solid fa-hands-praying"></i> Thank you for your feedback! It means a lot to us.
      </div>
    </>
  )
}
