import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order Online', to: '/order' },
  { label: 'Locations', to: '/locations' },
  { label: 'Catering', to: '/catering' },
  { label: 'Franchise', to: '/franchise' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/gozlemeking/',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/gozlemeking',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@gozlemekingofficial',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 3c.4 2.1 1.9 3.7 4 4v3c-1.5 0-2.9-.5-4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S4.4 18.7 4.4 15.3s2.7-6.1 6.1-6.1c.3 0 .7 0 1 .1v3.2c-.3-.1-.6-.2-1-.2-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3V3h3.1z" />
      </svg>
    ),
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr_auto] items-center px-9 py-3 transition-all duration-[450ms]"
        style={{
          background: scrolled ? 'rgba(11,18,32,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        {/* Logo - left */}
        <Link to="/" onClick={handleLogoClick}>
          <img
            src="/logo.png"
            alt="Gözleme King"
            className="h-14 w-auto transition-transform duration-300 hover:scale-[1.04]"
            style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.4))' }}
          />
        </Link>

        {/* Nav links - centered */}
        <ul className="hidden lg:flex gap-6 list-none items-center justify-center">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="no-underline text-[12.5px] font-medium tracking-[1.2px] uppercase relative pb-1 transition-colors duration-300 text-white/90 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Socials - right */}
        <div className="hidden lg:flex items-center gap-4 justify-end">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-white/70 transition-all duration-300 hover:text-gold hover:-translate-y-[1px]"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Hamburger - right (mobile) */}
        <button
          className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-auto col-start-3"
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-[22px] h-[1.5px] bg-white block" />
          <span className="w-[22px] h-[1.5px] bg-white block" />
          <span className="w-[22px] h-[1.5px] bg-white block" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-navy-darkest/[0.98] backdrop-blur-[24px] flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-[18px] right-[22px] bg-transparent border-none text-white/50 text-[28px] cursor-pointer transition-colors hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <img src="/logo.png" alt="Gözleme King" className="h-[90px] mb-4" />
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="no-underline font-serif text-[30px] font-medium transition-colors tracking-[1px] text-white hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-white/60 transition-colors hover:text-gold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
