import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { MENU_SECTIONS } from '../data'

const HERO_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/Gozleme-4762-682ad656-1920w.jpg'

function Badge({ label, dark }) {
  const spicy = label === 'Spicy'
  return (
    <span
      className={`text-[9.5px] tracking-[1.2px] uppercase font-semibold px-2 py-[3px] rounded-[2px] whitespace-nowrap ${
        spicy
          ? dark ? 'bg-[#e2694f]/20 text-[#f0876e]' : 'bg-[#e2694f]/10 text-[#d05537]'
          : dark ? 'bg-gold/15 text-gold' : 'bg-teal/10 text-teal'
      }`}
    >
      {label}
    </span>
  )
}

function MenuItem({ item, dark = false }) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <h4 className={`font-serif text-[20px] font-semibold ${dark ? 'text-white' : 'text-navy-deep'}`}>
          {item.name}
        </h4>
        <span className={`flex-1 border-b border-dotted -translate-y-1 ${dark ? 'border-white/20' : 'border-navy/20'}`} />
        {item.badges?.map((b) => <Badge key={b} label={b} dark={dark} />)}
      </div>
      <p className={`text-[13.5px] leading-[1.7] mt-1.5 max-w-[440px] ${dark ? 'text-white/45' : 'text-[#888]'}`}>
        {item.desc}
      </p>
    </div>
  )
}

function GroupHeading({ title, dark }) {
  return (
    <div className="flex items-center gap-4 mb-8 mt-2">
      <h3 className={`font-serif text-[24px] font-semibold whitespace-nowrap ${dark ? 'text-gold-light' : 'text-navy-deep'}`}>
        {title}
      </h3>
      <span className={`flex-1 h-px ${dark ? 'bg-white/10' : 'bg-navy/10'}`} />
    </div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('gozleme')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -65% 0px' }
    )
    MENU_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const gozleme = MENU_SECTIONS.find((s) => s.id === 'gozleme')
  const bowls = MENU_SECTIONS.find((s) => s.id === 'bowls')
  const breakfast = MENU_SECTIONS.find((s) => s.id === 'breakfast')
  const desserts = MENU_SECTIONS.find((s) => s.id === 'desserts')

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-navy-darkest">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.9) 0%, rgba(17,28,51,0.8) 50%, rgba(11,18,32,0.94) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px] pt-16">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Menu</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Taste the Tradition</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Every item is freshly made to order using premium Australian ingredients and authentic Turkish recipes. 100% Halal.</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[76px] z-40 bg-cream/95 backdrop-blur-md border-b border-navy/10">
        <div className="max-w-[1120px] mx-auto flex justify-start sm:justify-center gap-1 sm:gap-5 px-4 py-3.5 overflow-x-auto">
          {MENU_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`bg-transparent border-none cursor-pointer text-[12px] tracking-[1.5px] uppercase font-semibold px-3 py-1.5 whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-gold after:transition-transform after:duration-300 after:origin-left ${
                active === s.id ? 'text-navy-deep after:scale-x-100' : 'text-navy/45 after:scale-x-0 hover:text-navy-deep'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gözleme */}
      <section id="gozleme" className="py-[90px] px-10 bg-cream" style={{ scrollMarginTop: '135px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">{gozleme.label}</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">{gozleme.heading}</h2>
              <StarDivider color="#1a2744" />
              <p className="text-[15px] text-[#888] max-w-[520px] mx-auto">{gozleme.intro}</p>
            </div>
          </Reveal>
          {gozleme.groups.map((g) => (
            <div key={g.title} className="mb-14 last:mb-0">
              <Reveal>
                <GroupHeading title={g.title} />
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
                {g.items.map((item, i) => (
                  <Reveal key={item.name} delay={0.04 + i * 0.04}>
                    <MenuItem item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bowls & Wraps */}
      <section id="bowls" className="py-[90px] px-10 bg-navy text-white" style={{ scrollMarginTop: '135px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">{bowls.label}</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px]">{bowls.heading}</h2>
              <StarDivider />
              <p className="text-[15px] text-white/45 max-w-[480px] mx-auto">{bowls.intro}</p>
            </div>
          </Reveal>
          {bowls.groups.map((g) => (
            <div key={g.title} className="mb-14 last:mb-0">
              <Reveal>
                <GroupHeading title={g.title} dark />
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
                {g.items.map((item, i) => (
                  <Reveal key={item.name} delay={0.04 + i * 0.04}>
                    <MenuItem item={item} dark />
                  </Reveal>
                ))}
              </div>
              {g.note && (
                <Reveal delay={0.2}>
                  <p className="mt-8 text-[12px] tracking-[1.5px] uppercase text-gold/80 font-semibold">☕ {g.note}</p>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Breakfast */}
      <section id="breakfast" className="py-[90px] px-10 bg-cream" style={{ scrollMarginTop: '135px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">{breakfast.label}</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">{breakfast.heading}</h2>
              <StarDivider color="#1a2744" />
              <p className="text-[15px] text-[#888] max-w-[480px] mx-auto">{breakfast.intro}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            {breakfast.items.map((item, i) => (
              <Reveal key={item.name} delay={0.05 + i * 0.05}>
                <MenuItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts & Drinks */}
      <section id="desserts" className="bg-navy text-white" style={{ scrollMarginTop: '135px' }}>
        <div className="py-[90px] px-10">
          <div className="max-w-[1000px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Desserts</span>
                <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px]">{desserts.heading}</h2>
                <StarDivider />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
              {desserts.items.map((item, i) => (
                <Reveal key={item.name} delay={0.05 + i * 0.05}>
                  <MenuItem item={item} dark />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Drinks */}
        <div className="py-[80px] px-10 bg-navy-darkest border-t border-white/[0.04]">
          <div className="max-w-[1000px] mx-auto text-center">
            <Reveal>
              <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Drinks</span>
              <h2 className="font-serif text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-[18px]">Beverages</h2>
              <StarDivider />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {desserts.drinks.map((item, i) => (
                <Reveal key={item.name} delay={0.08 + i * 0.08}>
                  <div className="px-8 py-8 group">
                    <h3 className="font-serif text-[25px] font-semibold mb-3 transition-colors duration-300 group-hover:text-gold">{item.name}</h3>
                    <p className="text-[13.5px] leading-[1.7] text-white/40 max-w-[260px] mx-auto">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes + CTA */}
      <section className="text-center py-16 px-10 bg-navy text-white border-t border-white/[0.04]">
        <Reveal>
          <p className="text-[12px] tracking-[1px] uppercase text-white/35 mb-2">100% Halal</p>
          <p className="text-[13px] text-white/35 mb-8 max-w-[520px] mx-auto leading-[1.7]">
            Vegan and non-vegan dishes are cooked on a shared hot plate. All dishes may contain traces of nuts. Prices may vary by location.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a
              href="/menu.jpg"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
            >
              View Full Menu (PDF-style)
            </a>
            <a
              href="/order"
              className="inline-block bg-transparent text-white/80 border border-white/20 px-[34px] py-[13px] rounded-[3px] font-medium text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5"
            >
              Order Online
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
