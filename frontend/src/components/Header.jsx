import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/frostora-logo.png'

const links = [
  ['/', 'Home'],
  ['/flavors', 'Flavors'],
  ['/about', 'About Us'],
  ['/contact', 'Contact'],
  ['/careers', 'Careers'],
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white shadow-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Frostora Ice Creams" className="h-14 w-auto brightness-0 invert" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `border-b py-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition ${
                  isActive ? 'border-gold text-gold' : 'border-transparent text-white/85 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/#events" className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-white/85 hover:text-gold">
            Weddings & Events
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">Order Now</Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-white/25 lg:hidden"
        >
          <span className="text-2xl leading-none">{isOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="block border-b border-white/10 py-3 text-sm uppercase tracking-[0.15em]"
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-gold mt-5 w-full">Order Now</Link>
        </nav>
      )}
    </header>
  )
}

export default Header
