import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order Online', to: '/locations' },
  { label: 'Locations', to: '/locations' },
  { label: 'Catering', to: '/catering' },
  { label: 'Franchise', to: '/franchise' },
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

        {/* Hamburger - right */}
        <button
          className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-auto"
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-[22px] h-[1.5px] bg-white block" />
          <span className="w-[22px] h-[1.5px] bg-white block" />
          <span className="w-[22px] h-[1.5px] bg-white block" />
        </button>

        {/* Empty div to balance grid on desktop */}
        <div className="hidden lg:block" />
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
        </div>
      )}
    </>
  )
}
