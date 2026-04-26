import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const services = [
  {
    id: 'property', num: '01', icon: 'fa-house', title: 'Property Services',
    desc: 'Your Indian property deserves expert care even when you\'re thousands of miles away. We manage every aspect of property ownership — from tenants to maintenance to legal compliance.',
    features: ['Rent collection & tenant management with monthly reports', 'Property inspections with photo/video documentation', 'Maintenance & repair coordination with trusted vendors', 'Property tax payments and municipal compliance', 'Vacant property monitoring & caretaker services', 'Property sale/purchase assistance and legal verification'],
  },
  {
    id: 'parent', num: '02', icon: 'fa-people-roof', title: 'Parent Care Services',
    desc: 'Give your parents the attentive, compassionate care they deserve. Our caregivers are trained, verified, and treat your family like their own — keeping you informed every step of the way.',
    features: ['Dedicated in-home companionship and daily wellness checks', 'Doctor visits, prescription pickups & health coordination', 'Emergency response — we\'re there within the hour', 'Weekly video call setup and tech assistance for elders', 'Festival and birthday celebrations, gifts and surprises', 'Hospital admission support and discharge planning'],
  },
  {
    id: 'errands', num: '03', icon: 'fa-bag-shopping', title: 'Shopping & Errand Services',
    desc: 'Every day tasks in India — from grocery runs to bill payments — handled by our trusted local team. Just tell us what you need done and consider it done.',
    features: ['Grocery, medicine and household supply procurement', 'Utility bill payments, internet, and DTH recharges', 'Gift sourcing and delivery for family occasions', 'Festival item shopping and pooja arrangements', 'Bank visits and financial institution errands', 'Package pickup, courier dispatch and delivery tracking'],
  },
  {
    id: 'legal', num: '04', icon: 'fa-file-lines', title: 'Legal & Documentation Help',
    desc: 'Navigating Indian bureaucracy from overseas is notoriously difficult. Our legal partners and documentation experts cut through the complexity for you with precision and speed.',
    features: ['Passport renewal and Tatkal application assistance', 'OCI card applications and status follow-up', 'Power of attorney drafting, notarization and registration', 'Property title verification and encumbrance certificates', 'Court liaisoning and affidavit processing', 'PAN, Aadhaar, and NRI banking documentation'],
  },
  {
    id: 'travel', num: '05', icon: 'fa-plane', title: 'Travel & Relocation Support',
    desc: 'Whether you\'re visiting India for a short trip or relocating back permanently, Synapse Grid ensures every detail is arranged — from the moment your flight lands to settling in.',
    features: ['Airport pick-up and drop service, any time of day', 'Hotel, serviced apartment and guest house bookings', 'Domestic travel planning — trains, flights, road trips', 'SIM card, internet setup and local orientation', 'Relocation assistance — home finding, movers, school admissions', 'Meet & greet services for elderly parents or children traveling alone'],
  },
]

const tabs = [
  { href: '#property', icon: 'fa-house', label: 'Property' },
  { href: '#parent', icon: 'fa-people-roof', label: 'Parent Care' },
  { href: '#errands', icon: 'fa-bag-shopping', label: 'Errands' },
  { href: '#legal', icon: 'fa-file-lines', label: 'Legal' },
  { href: '#travel', icon: 'fa-plane', label: 'Travel' },
]

function RevealDiv({ className, children, style, id }) {
  const ref = useReveal()
  return <div ref={ref} id={id} className={`reveal ${className || ''}`} style={style}>{children}</div>
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label animate-fade-up">What We Offer</div>
          <h1 className="animate-fade-up-delay-1" style={{ maxWidth: '600px' }}>Services Crafted for <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Every NRI Need</em></h1>
          <p className="animate-fade-up-delay-2" style={{ maxWidth: '520px', marginTop: '1rem', fontSize: '1.05rem' }}>Whether it's your ancestral property, aging parents, or important documents — Synapse Grid has a solution built for you.</p>
        </div>
      </section>

      {/* TABS */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {tabs.map(t => (
              <a key={t.href} href={t.href} className="service-tab-link">
                <i className={`fa-solid ${t.icon}`}></i> {t.label}
              </a>
            ))}
            <a href="#premium" className="service-tab-link service-tab-premium">
              <i className="fa-solid fa-crown"></i> Premium
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {services.map((s, i) => (
              <RevealDiv key={s.id} id={s.id} className={i % 2 === 1 ? 'service-full-card reveal-delay-1' : 'service-full-card'}>
                <div className="service-icon" style={{ marginBottom: '1.25rem' }}><i className={`fa-solid ${s.icon}`}></i></div>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Service {s.num}</div>
                <h3>{s.title}</h3>
                <div className="divider"></div>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '1.75rem', width: 'fit-content' }}>Enquire Now →</Link>
              </RevealDiv>
            ))}

            {/* PREMIUM */}
            <RevealDiv id="premium" className="service-full-card premium">
              <div className="premium-badge"><i className="fa-solid fa-crown"></i> Premium</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <div className="section-label" style={{ marginBottom: '0.5rem' }}>Service 06</div>
                  <h3>Premium Concierge Service</h3>
                  <div className="divider"></div>
                  <p>Our flagship offering. A single, dedicated relationship manager who knows your family, anticipates your needs, and handles everything with white-glove attention.</p>
                  <p style={{ marginTop: '1rem' }}>This isn't just a service — it's a lifelong partnership with a professional who treats your family like their own responsibility.</p>
                  <Link to="/contact" className="btn-primary" style={{ marginTop: '2rem', width: 'fit-content' }}>Join Premium →</Link>
                </div>
                <ul className="service-features" style={{ marginTop: 0 }}>
                  {['Dedicated named relationship manager, available 7 days', 'All services included — property, care, legal, errands, travel', 'Monthly comprehensive India-life status report', 'Priority emergency response — 60 minute guarantee', 'Personalised care plan reviewed and updated quarterly', '24/7 WhatsApp and phone access to your manager', 'Festival, anniversary and birthday coordination', 'Annual in-person review meeting with your family'].map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-secondary)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <RevealDiv className="container text-center">
          <h2>Not sure which service you need?</h2>
          <p style={{ maxWidth: '480px', margin: '1rem auto 2rem' }}>Talk to us — we'll help you figure out the right plan for your family's unique situation.</p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </RevealDiv>
      </section>
    </>
  )
}
