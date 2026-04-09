import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Locations', to: '/locations' },
  { label: 'Catering', to: '/catering' },
  { label: 'Franchise', to: '/franchise' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-9 py-3 transition-all duration-[450ms]"
        style={{
          background: scrolled ? 'rgba(11,18,32,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <Link to="/" onClick={handleLogoClick}>
          <img
            src="/logo.png"
            alt="Gözleme King"
            className="h-14 w-auto transition-transform duration-300 hover:scale-[1.04]"
            style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.4))' }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 list-none items-center">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="text-white/[0.78] no-underline text-[13px] font-medium tracking-[1.2px] uppercase relative pb-1 transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://www.gozlemeking.com.au/location"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-transparent text-gold border-[1.5px] border-gold px-[22px] py-[9px] rounded-[3px] font-semibold text-xs tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-gold hover:text-navy-darkest no-underline"
        >
          Order Online
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
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
              className="text-white no-underline font-serif text-[30px] font-medium transition-colors tracking-[1px] hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
