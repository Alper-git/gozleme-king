import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-darkest pt-14 pb-7 px-10 text-white/35 border-t border-white/[0.04]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <img
            src="/logo.png"
            alt="Gözleme King"
            className="h-14 mb-3.5"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
          />
          <p className="text-[13.5px] leading-[1.7]">
            Authentic Turkish street food since 2003. Hand-rolled dough, fresh
            ingredients, made to order across nine Sydney locations.
          </p>
        </div>

        <div>
          <h4 className="text-white/65 text-[11px] tracking-[2px] uppercase mb-3.5 font-semibold">
            Navigate
          </h4>
          <Link to="/" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Home</Link>
          <Link to="/about" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">About</Link>
          <Link to="/menu" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Menu</Link>
          <Link to="/locations" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Locations</Link>
        </div>

        <div>
          <h4 className="text-white/65 text-[11px] tracking-[2px] uppercase mb-3.5 font-semibold">
            Quick Links
          </h4>
          <Link to="/catering" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Catering</Link>
          <Link to="/franchise" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Franchise</Link>
          <a href="https://www.instagram.com/gozlemeking/" target="_blank" rel="noreferrer" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">Instagram</a>
        </div>

        <div>
          <h4 className="text-white/65 text-[11px] tracking-[2px] uppercase mb-3.5 font-semibold">
            Contact
          </h4>
          <a href="mailto:oscar@gozlemeking.com.au" className="block text-white/35 no-underline text-[13.5px] mb-[9px] transition-colors hover:text-gold">
            oscar@gozlemeking.com.au
          </a>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto mt-9 pt-5 border-t border-white/[0.05] flex justify-between text-xs flex-wrap gap-2.5 opacity-60">
        <span>© 2026 Gözleme King. All rights reserved.</span>
        <span>Redesigned by Alper Bal</span>
      </div>
    </footer>
  )
}
