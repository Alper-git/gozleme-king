import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { LOCATIONS } from '../data'

export default function Order() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-navy-darkest">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #111c33 0%, #1a2744 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[680px] pt-16">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Order Online</span>
          <h1 className="font-serif text-[clamp(36px,6vw,60px)] text-white font-semibold leading-[1.1] mb-5">Fresh Gözleme, Delivered</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Skip the queue — order from your nearest Gözleme King on Uber Eats and we'll bring the tradition to you.</p>
        </div>
      </section>

      {/* Store grid */}
      <section className="py-[90px] px-10 bg-cream">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.name} delay={0.04 + i * 0.04} className="h-full">
                <div className="h-full flex flex-col bg-white rounded-lg p-7 border border-black/[0.05] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
                  <h3 className="font-serif text-[22px] font-semibold mb-1.5 text-navy-deep">{l.name}</h3>
                  <p className="text-[13px] text-[#888] leading-[1.6] mb-6">{l.address}</p>
                  <a
                    href={l.uber}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-block text-center bg-gold text-navy-darkest px-6 py-3 rounded-[3px] font-bold text-[12px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light"
                  >
                    Order on Uber Eats
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-16">
              <StarDivider color="#1a2744" />
              <p className="text-[14px] text-[#888] mb-4">
                Looking for opening hours, phone numbers or store details?
              </p>
              <Link
                to="/locations"
                className="inline-block bg-transparent text-navy-deep border border-navy/20 px-[30px] py-3 rounded-[3px] font-medium text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:border-navy/50 hover:bg-navy/[0.03]"
              >
                View All Locations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
