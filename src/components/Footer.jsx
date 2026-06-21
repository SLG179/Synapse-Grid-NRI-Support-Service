import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <div className="logo-mark"><span>SG</span></div>
              <span className="logo-text">Synapse<span>Grid</span></span>
            </Link>
            <p>Your trusted support network in India. We bridge the distance between you and everything that matters at home.</p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {['in', 'tw', 'ig'].map(s => (
                <a key={s} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services#property">Property Services</Link></li>
              <li><Link to="/services#parent">Parent Care</Link></li>
              <li><Link to="/services#errands">Shopping & Errands</Link></li>
              <li><Link to="/services#legal">Legal & Docs</Link></li>
              <li><Link to="/services#travel">Travel & Relocation</Link></li>
              <li><Link to="/services#premium">Premium Service</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@synapsegrid.in">hello@synapsegrid.in</a></li>
              <li><a href="tel:+918000000000">+91 80000 00000</a></li>
              <li><a href="#">Pune, Maharashtra</a></li>
              <li><a href="#">Mon–Sat, 9am–7pm IST</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Synapse Grid. All rights reserved.</span>
          <span className="mono" style={{ fontSize: '0.7rem' }}>Designed for the diaspora</span>
        </div>
      </div>
    </footer>
  )
}
