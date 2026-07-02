import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { MENU_SECTIONS } from '../data'

const HERO_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/Gozleme-4762-682ad656-1920w.jpg'
const DESSERT_IMG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/iv66uhbxo5421-b59ab0b9-1920w.jpg'
const OFFICIAL_MENU = 'https://irp.cdn-website.com/74d5b5c1/files/uploaded/Rhodes_web_noPrice.png'

function MenuItem({ item, dark = false }) {
  return (
    <div className="group">
      <div className="flex items-baseline gap-3">
        <h3 className={`font-serif text-[21px] font-semibold ${dark ? 'text-white' : 'text-navy-deep'}`}>
          {item.name}
        </h3>
        <span className={`flex-1 border-b border-dotted -translate-y-1 ${dark ? 'border-white/20' : 'border-navy/20'}`} />
        {item.badges?.map((b) => (
          <span
            key={b}
            className={`text-[9.5px] tracking-[1.2px] uppercase font-semibold px-2 py-[3px] rounded-[2px] whitespace-nowrap ${
              dark ? 'bg-gold/15 text-gold' : 'bg-teal/10 text-teal'
            }`}
          >
            {b}
          </span>
        ))}
      </div>
      <p className={`text-[13.5px] leading-[1.7] mt-1.5 max-w-[440px] ${dark ? 'text-white/45' : 'text-[#888]'}`}>
        {item.desc}
      </p>
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
      { rootMargin: '-35% 0px -60% 0px' }
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
  const desserts = MENU_SECTIONS.find((s) => s.id === 'desserts')
  const drinks = MENU_SECTIONS.find((s) => s.id === 'drinks')
  const kunefe = desserts.items.find((i) => i.featured)
  const otherDesserts = desserts.items.filter((i) => !i.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-navy-darkest">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.9) 0%, rgba(17,28,51,0.8) 50%, rgba(11,18,32,0.94) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px] pt-16">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Menu</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Taste the Tradition</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Every item is freshly made to order using premium Australian ingredients and authentic Turkish recipes.</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[76px] z-40 bg-cream/95 backdrop-blur-md border-b border-navy/10">
        <div className="max-w-[1120px] mx-auto flex justify-center gap-2 sm:gap-6 px-4 py-3.5 overflow-x-auto">
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
            <div className="text-center mb-14">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">{gozleme.label}</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">{gozleme.heading}</h2>
              <StarDivider color="#1a2744" />
              <p className="text-[15px] text-[#888] max-w-[480px] mx-auto">{gozleme.intro}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-9">
            {gozleme.items.map((item, i) => (
              <Reveal key={item.name} delay={0.05 + i * 0.05}>
                <MenuItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts & Sweets */}
      <section id="desserts" className="bg-navy text-white" style={{ scrollMarginTop: '135px' }}>
        {/* Künefe feature */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-[300px] md:min-h-[460px] bg-cover bg-center" style={{ backgroundImage: `url('${DESSERT_IMG}')` }} />
          <div className="p-10 md:p-16 flex flex-col justify-center bg-navy-deep">
            <Reveal>
              <span className="text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-4 block">Most Wanted Dessert</span>
              <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-semibold leading-[1.1] mb-5">{kunefe.name}</h2>
              <p className="text-[15px] leading-[1.85] text-white/55 mb-5">{kunefe.desc}. Its perfectly balanced combination of cheese and sugar means it never feels heavy — you might even go for round two.</p>
              <p className="text-[12px] tracking-[1.5px] uppercase text-teal-light font-semibold">🍃 Vegan künefe available at all shops</p>
            </Reveal>
          </div>
        </div>

        {/* Other desserts */}
        <div className="py-[90px] px-10">
          <div className="max-w-[1000px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">{desserts.label}</span>
                <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px]">{desserts.heading}</h2>
                <StarDivider />
                <p className="text-[15px] text-white/45 max-w-[480px] mx-auto">{desserts.intro}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-9">
              {otherDesserts.map((item, i) => (
                <Reveal key={item.name} delay={0.05 + i * 0.05}>
                  <MenuItem item={item} dark />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className="py-[90px] px-10 bg-navy-darkest text-white" style={{ scrollMarginTop: '135px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">{drinks.label}</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px]">{drinks.heading}</h2>
            <StarDivider />
            <p className="text-[15px] text-white/45 max-w-[480px] mx-auto">{drinks.intro}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-14 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {drinks.items.map((item, i) => (
              <Reveal key={item.name} delay={0.08 + i * 0.08}>
                <div className="px-8 py-8 group">
                  <h3 className="font-serif text-[26px] font-semibold mb-3 transition-colors duration-300 group-hover:text-gold">{item.name}</h3>
                  <p className="text-[13.5px] leading-[1.7] text-white/40 max-w-[260px] mx-auto">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-16 px-10 bg-navy text-white border-t border-white/[0.04]">
        <Reveal>
          <p className="text-[14px] text-white/40 mb-7 max-w-[440px] mx-auto">Prices may vary by location. Please contact your nearest store for current pricing, or download the full menu below.</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a
              href={OFFICIAL_MENU}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Download Full Menu
            </a>
            <a
              href="/locations"
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
