import { Link } from 'react-router-dom'
import logo from '../assets/logo/frostora-logo.png'

const Footer = () => (
  <footer className="bg-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div>
        <img src={logo} alt="Frostora Ice Creams" className="mb-5 h-20 w-auto brightness-0 invert" />
        <p className="max-w-xs text-sm leading-7 text-white/65">Crafting memories, one scoop at a time with real milk and carefully sourced ingredients.</p>
      </div>
      <div>
        <h3 className="mb-5 text-lg text-gold">Quick Links</h3>
        <div className="space-y-3 text-sm text-white/65">
          <Link className="block hover:text-gold" to="/">Home</Link>
          <Link className="block hover:text-gold" to="/flavors">Flavors</Link>
          <Link className="block hover:text-gold" to="/about">Our Story</Link>
          <Link className="block hover:text-gold" to="/careers">Careers</Link>
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-lg text-gold">Our Products</h3>
        <div className="space-y-3 text-sm text-white/65">
          <p>Family Packs</p>
          <p>Premium Cups</p>
          <p>Wedding Counters</p>
          <p>Mobile Catering</p>
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-lg text-gold">Visit Frostora</h3>
        <div className="space-y-3 text-sm leading-6 text-white/65">
          <p>Frostora Foods Pvt. Ltd.<br />Bengaluru, Karnataka, India</p>
          <p>+91 98765 43210</p>
          <p>hello@frostora.com</p>
          <p>Mon - Sun: 9 AM - 9 PM</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 sm:flex-row sm:justify-between lg:px-8">
        <p>© 2026 Frostora. All rights reserved.</p>
        <p>Premium ice cream, thoughtfully made.</p>
      </div>
    </div>
  </footer>
)

export default Footer
