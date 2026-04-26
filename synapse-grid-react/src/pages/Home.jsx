import { Link } from 'react-router-dom'
import Globe from '../components/Globe'
import useReveal from '../components/useReveal'

const services = [
  { icon: 'fa-house', title: 'Property Services', desc: 'Rent collection, maintenance coordination, legal verification, and complete property management across India.', href: '/services#property' },
  { icon: 'fa-people-roof', title: 'Parent Care Services', desc: 'Dedicated caregivers, health check-ups, emergency response, and daily wellness monitoring for your loved ones.', href: '/services#parent' },
  { icon: 'fa-bag-shopping', title: 'Shopping & Errands', desc: 'Groceries, medicines, gifts, bill payments — trusted runners handling everyday tasks with care.', href: '/services#errands' },
  { icon: 'fa-file-lines', title: 'Legal & Documentation', desc: 'Passport renewals, OCI assistance, power of attorney, notarization, and all documentation support.', href: '/services#legal' },
  { icon: 'fa-plane', title: 'Travel & Relocation', desc: 'Airport pick-up, hotel bookings, domestic travel planning, and full relocation coordination in India.', href: '/services#travel' },
  { icon: 'fa-crown', title: 'Premium Service', desc: 'A dedicated relationship manager, 24/7 priority access, and a fully customised care plan — just for you.', href: '/services#premium', premium: true },
]

const whyItems = [
  { num: '01', title: 'Verified Professionals', desc: 'Every partner is background-checked and reference-verified.' },
  { num: '02', title: 'Real-Time Updates', desc: 'Photos, reports, and status updates delivered to you directly.' },
  { num: '03', title: 'Pan-India Network', desc: 'Coverage across 18+ cities and growing rapidly.' },
  { num: '04', title: 'Transparent Pricing', desc: 'No hidden fees. Clear invoices for every service.' },
]

const testimonials = [
  { init: 'R', name: 'Rajan Mehta', loc: 'London, UK', text: '"Synapse Grid manages my parents\' daily needs in Pune. The peace of mind is priceless. I can now focus on my work in London without constant worry."' },
  { init: 'P', name: 'Priya Nair', loc: 'Toronto, Canada', text: '"They handled the entire property sale and legal paperwork while I was in Toronto. Everything was smooth, transparent and on time."' },
  { init: 'A', name: 'Amit Sharma', loc: 'Dubai, UAE', text: '"When my father had a health emergency, the Synapse Grid team was there within the hour. I can\'t thank them enough for that response."' },
]

function RevealDiv({ className, children, style }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className || ''}`} style={style}>{children}</div>
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-tag animate-fade-up">
                <span className="dot"></span>
                Trusted by 2,000+ NRI families
              </div>
              <h1 className="hero-title animate-fade-up-delay-1">
                Your Bridge<br />Between<br /><em>Worlds</em>
              </h1>
              <p className="hero-desc animate-fade-up-delay-2">
                Synapse Grid is your trusted partner in India — handling property, parent care, legal matters, and life's essentials while you build your future abroad.
              </p>
              <div className="hero-cta animate-fade-up-delay-3">
                <Link to="/services" className="btn-primary">Explore Services →</Link>
                <Link to="/about" className="btn-outline">Our Story</Link>
              </div>
              <div className="hero-stats animate-fade-up-delay-3">
                {[['2K+', 'Families Served'], ['18+', 'Cities in India'], ['98%', 'Satisfaction Rate']].map(([n, l]) => (
                  <div className="stat-item" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual animate-fade-up-delay-2">
              <Globe />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
            <h2>Services Built for the <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Indian Diaspora</em></h2>
            <p style={{ maxWidth: '540px', margin: '1rem auto 3rem' }}>From managing your ancestral home to caring for your aging parents — we handle it all, so distance is never a barrier.</p>
          </RevealDiv>
          <div className="services-grid">
            {services.map((s, i) => (
              <RevealDiv key={s.title} className={`service-card reveal-delay-${(i % 3) + 1}`}
                style={s.premium ? { background: 'linear-gradient(135deg, var(--bg-card), rgba(212,175,55,0.07))', borderColor: 'rgba(212,175,55,0.4)' } : {}}>
                <div className="service-icon"
                  style={s.premium ? { background: 'rgba(212,175,55,0.15)', borderColor: 'rgba(212,175,55,0.3)', color: '#c9a227' } : {}}>
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <Link to={s.href} className="card-link">Learn more →</Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="why-us-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <RevealDiv>
              <div className="section-label">Why Synapse Grid</div>
              <h2>Peace of Mind, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>From Any Distance</em></h2>
              <div className="divider"></div>
              <p>We understand the anxiety of being thousands of miles away from family and home. Our network of verified professionals ensures nothing falls through the cracks — ever.</p>
              <Link to="/about" className="btn-primary" style={{ marginTop: '2rem' }}>Meet the Team</Link>
            </RevealDiv>
            <RevealDiv className="why-grid reveal-delay-1">
              {whyItems.map(w => (
                <div className="why-item" key={w.num}>
                  <div className="why-num">{w.num}</div>
                  <div>
                    <h4>{w.title}</h4>
                    <p style={{ fontSize: '0.85rem' }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--accent)', padding: '5rem 0' }}>
        <RevealDiv className="container text-center">
          <p className="mono" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Start Today</p>
          <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>Ready to stop worrying<br />about back home?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>Join thousands of NRI families who trust Synapse Grid to keep their India life running smoothly.</p>
          <Link to="/contact" className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Get a Free Consultation</Link>
        </RevealDiv>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2>Families Who Trust Us</h2>
            <p style={{ maxWidth: '480px', margin: '0.75rem auto 3rem' }}>Real stories from real NRI families around the world.</p>
          </RevealDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <RevealDiv key={t.name} className={`feedback-card reveal-delay-${i + 1}`}>
                <div className="feedback-stars">
                  {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star"></i>)}
                </div>
                <p className="feedback-text">{t.text}</p>
                <div className="feedback-author">
                  <div className="author-avatar">{t.init}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-loc">{t.loc}</div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/feedback" className="btn-outline">View All Feedback →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
