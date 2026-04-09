import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { PHILOSOPHY, LOCATIONS } from '../data'

const HERO_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/Gozleme-4762-682ad656-1920w.jpg'

const MENU_HIGHLIGHTS = [
  { name: 'Classic Gözleme', desc: 'Spinach & feta, chicken, lamb — our signature Turkish flatbreads filled with fresh ingredients.', tag: 'Signature' },
  { name: 'Künefe', desc: 'Heavenly cheese-filled shredded pastry soaked in sweet syrup and topped with pistachios.', tag: 'Dessert' },
  { name: 'Turkish Delight', desc: 'Imported straight from Turkey\'s Grand Bazaar — the highest quality lokum available.', tag: 'Sweets' },
  { name: 'Catering Packages', desc: 'Custom gözleme platters perfect for offices, events, parties, and celebrations of any size.', tag: 'Catering' },
]

export default function Home() {
  const [heroIn, setHeroIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 100)
  }, [])

  const anim = (d) => ({
    opacity: heroIn ? 1 : 0,
    transform: heroIn ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.75s ease ${d}s, transform 0.75s ease ${d}s`,
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-darkest">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.84) 0%, rgba(17,28,51,0.72) 40%, rgba(11,18,32,0.9) 100%)' }} />

        <div className="relative z-10 text-center px-6 max-w-[820px]">
          <img src="/logo.png" alt="Gözleme King" className="w-[clamp(110px,16vw,160px)] h-auto mx-auto mb-7" style={{ ...anim(0.1), filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }} />
          <div className="inline-block px-[18px] py-[7px] border border-gold/35 rounded-[2px] mb-7 text-[11px] tracking-[3.5px] uppercase text-gold font-medium" style={anim(0.3)}>
            Authentic Turkish Street Food · Est. 2003
          </div>
          <h1 className="font-serif text-[clamp(40px,7vw,76px)] text-white font-semibold leading-[1.08] mb-[22px] tracking-[-0.5px]" style={anim(0.45)}>
            Freshly Made<br /><em className="italic text-gold-light">Gözleme</em>
          </h1>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.75]" style={anim(0.6)}>
            Hand-rolled dough, premium Australian ingredients, made to order right before your eyes. Nine locations across Sydney.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap" style={anim(0.75)}>
            <Link to="/menu" className="bg-gold text-navy-darkest border-none px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(201,168,76,0.25)] no-underline">
              View Our Menu
            </Link>
            <Link to="/locations" className="bg-transparent text-white/80 border border-white/20 px-[34px] py-[13px] rounded-[3px] font-medium text-[13px] tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5 no-underline">
              Find a Store
            </Link>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/25 text-[11px] tracking-[2.5px] uppercase flex flex-col items-center gap-2.5 animate-[breathe_2.5s_ease_infinite]">
          <span>Scroll</span>
          <div className="w-px h-9 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-[100px] px-10 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto relative">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Philosophy</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">Why Gözleme King?</h2>
            <StarDivider />
            <p className="text-base leading-[1.75] opacity-55 max-w-[540px] mx-auto">
              Since 2003, we have been bringing authentic Turkish street food to Sydney — from weekend market stalls to nine shopping centre locations.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.1}>
                <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.07] rounded-lg p-8 px-6 transition-all duration-400 hover:bg-white/[0.06] hover:-translate-y-[3px] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <span className="text-[28px] mb-[18px] block">{p.icon}</span>
                  <h3 className="font-serif text-xl font-semibold mb-2.5">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] opacity-50">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-[100px] px-10 bg-cream text-center">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Our Menu</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">Taste the Tradition</h2>
            <StarDivider color="#1a2744" />
            <p className="text-base leading-[1.75] text-[#888] max-w-[540px] mx-auto">
              From our signature gözleme to heavenly Turkish desserts — every item is crafted with care.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {MENU_HIGHLIGHTS.map((m, i) => (
              <Reveal key={m.name} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-lg p-8 px-7 text-left border border-black/[0.05] transition-all duration-400 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-teal scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
                  <span className="inline-block px-2.5 py-[3px] bg-navy-deep text-gold text-[10px] tracking-[1.5px] uppercase font-semibold rounded-[2px] mb-3.5">{m.tag}</span>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-navy-deep">{m.name}</h3>
                  <p className="text-sm leading-[1.7] text-[#777]">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <Link to="/menu" className="inline-block mt-10 bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5">
              View Full Menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-[100px] px-10 bg-navy-deep text-white text-center relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto relative">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Locations</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">Find Us Across Sydney</h2>
            <StarDivider />
            <p className="text-base leading-[1.75] opacity-55 max-w-[540px] mx-auto">
              Nine stores in Sydney's busiest shopping centres. Fresh gözleme is never far away.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.name} delay={0.05 + i * 0.04}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-6 px-[22px] text-left transition-all duration-300 hover:bg-white/[0.06] hover:border-gold/35">
                  <h3 className="font-serif text-[19px] font-semibold mb-1.5 text-gold-light">{l.name}</h3>
                  <p className="text-[13px] opacity-50 mb-1 leading-[1.5]">{l.address}</p>
                  <p className="text-[12px] opacity-35 mb-2.5">{l.hours}</p>
                  <span className="text-[13px] font-semibold text-teal-light">{l.phone}</span>
                  <br />
                  <a href={l.uber} target="_blank" rel="noreferrer" className="inline-block mt-2.5 text-[11px] tracking-[1px] uppercase font-semibold text-gold no-underline pb-[2px] border-b border-gold/35 transition-all hover:border-gold">
                    Order on Uber Eats →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <Link to="/locations" className="inline-block mt-10 bg-transparent text-white/80 border border-white/20 px-[34px] py-[13px] rounded-[3px] font-medium text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5">
              View All Locations
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="text-center py-20 px-10 bg-navy relative overflow-hidden">
        <Reveal>
          <div className="relative">
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Catering</span>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-white font-semibold mb-3.5">Catering for Every Occasion</h2>
            <p className="text-base text-white/45 mb-[30px]">Custom gözleme packages for offices, events, and celebrations of any size.</p>
            <Link to="/catering" className="inline-block bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5">
              Enquire Now
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
