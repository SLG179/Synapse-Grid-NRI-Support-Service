import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const values = [
  { icon: 'fa-handshake', title: 'Trust First', desc: 'Every professional in our network is background-verified. We earn trust through transparency and consistent delivery.' },
  { icon: 'fa-heart', title: 'Family Like', desc: 'We treat every client\'s family as we would our own. Compassion and care are non-negotiable in everything we do.' },
  { icon: 'fa-bolt', title: 'Responsive', desc: 'Emergencies don\'t wait. Neither do we. Our 60-minute emergency response commitment is our promise — and we keep it.' },
  { icon: 'fa-chart-bar', title: 'Transparent', desc: 'No hidden charges. No vague updates. Every action is documented, photographed, and reported back to you clearly.' },
  { icon: 'fa-seedling', title: 'Long-term', desc: 'We build relationships, not transactions. Many of our clients have been with us since day one — and that means everything.' },
  { icon: 'fa-map-pin', title: 'Deeply Local', desc: 'Our team knows the local systems, languages, and nuances — we\'re Indian at heart and that\'s our greatest strength.' },
]

const team = [
  { init: 'A', name: 'Arjun Malhotra', role: 'Founder & CEO', bio: 'Ex-Google, IIT Bombay. NRI to the Bay Area for 12 years before founding Synapse Grid.' },
  { init: 'S', name: 'Sneha Iyer', role: 'COO', bio: '15 years in operations across healthcare and logistics. Passionate about elder care quality.' },
  { init: 'V', name: 'Vikram Nair', role: 'Head of Legal', bio: 'Senior advocate specialising in NRI property law and international documentation for 18 years.' },
  { init: 'D', name: 'Divya Sharma', role: 'Head of Care', bio: 'Trained geriatric care specialist. Leads our parent care programme with empathy and expertise.' },
]

function RevealDiv({ className, children, style }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className || ''}`} style={style}>{children}</div>
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label animate-fade-up">Our Story</div>
          <h1 className="animate-fade-up-delay-1" style={{ maxWidth: '580px' }}>Built by an NRI.<br />Built for <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Every NRI.</em></h1>
          <p className="animate-fade-up-delay-2" style={{ maxWidth: '520px', marginTop: '1rem', fontSize: '1.05rem' }}>Synapse Grid was born from a personal experience — and a determination to make sure no NRI family goes through it alone.</p>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <RevealDiv>
              <div className="section-label">The Beginning</div>
              <h2>The Call We Were <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Not Prepared For</em></h2>
              <div className="divider"></div>
              <p>In 2019, our founder Arjun Malhotra received a 3am call from a neighbour in Bangalore — his parents had fallen ill and there was no one to help. Arjun was in San Francisco. He had to book the next flight home, missing a critical week of work, because there was simply no system in place.</p>
              <p style={{ marginTop: '1rem' }}>That experience sparked a mission: to build the infrastructure that every NRI family deserves — a reliable, trusted, local presence they could count on from anywhere in the world.</p>
              <p style={{ marginTop: '1rem' }}>Today, Synapse Grid serves over 2,000 families across 18 Indian cities, with a network of 400+ verified professionals dedicated to one thing: your peace of mind.</p>
            </RevealDiv>
            <RevealDiv className="about-visual reveal-delay-2">
              <div className="about-card-stack">
                {[['2019', 'Founded in Pune'], ['2,000+', 'NRI Families Served'], ['18+', 'Cities in India']].map(([n, l]) => (
                  <div className="stacked" key={l}>
                    <div className="stacked-num">{n}</div>
                    <div className="stacked-label">{l}</div>
                  </div>
                ))}
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { icon: 'fa-bullseye', title: 'Our Mission', text: 'To make the distance between NRI families and their India life irrelevant — through trustworthy, professional, and deeply human support services that feel personal, not transactional.' },
              { icon: 'fa-earth-asia', title: 'Our Vision', text: 'A world where every Indian living abroad can pursue their global ambitions without sacrificing the wellbeing of the family and assets they\'ve left behind in India.' },
            ].map((m, i) => (
              <RevealDiv key={m.title} className={`card reveal-delay-${i}`} style={{ padding: '2.5rem' }}>
                <div className="service-icon" style={{ marginBottom: '1.25rem' }}><i className={`fa-solid ${m.icon}`}></i></div>
                <h3>{m.title}</h3>
                <div className="divider"></div>
                <p>{m.text}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</div>
            <h2>Our Core <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Values</em></h2>
            <p style={{ maxWidth: '480px', margin: '0.75rem auto 3rem' }}>These aren't just words on a wall — they're the principles every Synapse Grid team member lives by, every single day.</p>
          </RevealDiv>
          <div className="values-grid">
            {values.map((v, i) => (
              <RevealDiv key={v.title} className={`value-item reveal-delay-${(i % 3) + 1}`}>
                <div className="value-icon"><i className={`fa-solid ${v.icon}`}></i></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <RevealDiv className="text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>The People</div>
            <h2>Meet the <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Leadership Team</em></h2>
            <p style={{ maxWidth: '480px', margin: '0.75rem auto 3rem' }}>A passionate team of professionals who have all personally felt the NRI challenge — and dedicated their careers to solving it.</p>
          </RevealDiv>
          <div className="team-grid-4">
            {team.map((m, i) => (
              <RevealDiv key={m.name} className={`card text-center reveal-delay-${i + 1}`}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),var(--accent-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: "'Cormorant Garamond',serif", fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>{m.init}</div>
                <h4 style={{ marginBottom: '0.2rem' }}>{m.name}</h4>
                <p className="mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>{m.role}</p>
                <p style={{ fontSize: '0.8rem' }}>{m.bio}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--accent)', padding: '5rem 0' }}>
        <RevealDiv className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to join the Synapse Grid family?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 2rem' }}>Let's talk about how we can support your family in India — starting today.</p>
          <Link to="/contact" className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Get in Touch</Link>
        </RevealDiv>
      </section>
    </>
  )
}
