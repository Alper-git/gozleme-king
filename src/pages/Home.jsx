import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { PHILOSOPHY, LOCATIONS } from '../data'

const HERO_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/Gozleme-4762-682ad656-1920w.jpg'

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
          <img src="/logo-tagline.svg" alt="Gözleme King - Turkish Street Food" className="w-[clamp(140px,22vw,220px)] h-auto mx-auto mb-8" style={{ ...anim(0.1), filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }} />
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

      {/* Stats band */}
      <section className="bg-navy-darkest text-white py-14 px-10 border-y border-white/[0.04]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] text-center">
          {[
            { num: '20+', label: 'Years of Tradition' },
            { num: '9', label: 'Sydney Locations' },
            { num: '100%', label: 'Made Fresh Daily' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.1}>
              <div className="py-6 sm:py-2">
                <div className="font-serif text-[46px] font-semibold text-gold leading-none mb-2.5">{s.num}</div>
                <div className="text-[11px] tracking-[2.5px] uppercase text-white/50">{s.label}</div>
              </div>
            </Reveal>
          ))}
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
          <div className="mt-14 max-w-[880px] mx-auto text-left">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={0.08 + i * 0.08}>
                <div className={`grid grid-cols-[70px_1fr] md:grid-cols-[130px_1fr] gap-5 md:gap-8 items-start py-9 ${i < PHILOSOPHY.length - 1 ? 'border-b border-white/[0.08]' : ''} group`}>
                  <span className="font-serif text-[40px] md:text-[58px] font-semibold leading-none text-gold/50 transition-colors duration-500 group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-[22px] md:text-2xl font-semibold mb-2.5">{p.title}</h3>
                    <p className="text-[14.5px] leading-[1.8] opacity-55 max-w-[560px]">{p.desc}</p>
                  </div>
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
          {/* Signature highlights — 2x2 feature panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 text-left border border-navy/10 rounded-xl overflow-hidden bg-white/40">
            {[
              { name: 'Classic Gözleme', tag: 'Our signature', desc: 'Spinach & feta, chicken, lamb — hand-rolled flatbreads filled fresh to order, right before your eyes.', to: '/menu', cta: 'See on the menu' },
              { name: 'Künefe', tag: 'Most wanted dessert', desc: 'Cheese-filled kadayif soaked in sweet syrup, topped with pistachios. Vegan available at all shops.', to: '/menu', cta: 'See on the menu' },
              { name: 'Turkish Delight', tag: 'From the Grand Bazaar', desc: 'Imported straight from Turkey — the highest quality lokum available.', to: '/menu', cta: 'See on the menu' },
              { name: 'Catering Packages', tag: 'For your events', desc: 'Custom gözleme platters for offices, events and celebrations of any size.', to: '/catering', cta: 'Explore catering' },
            ].map((m, i) => (
              <Reveal key={m.name} delay={0.08 + i * 0.07} className={`h-full ${i < 2 ? 'border-b border-navy/10' : ''} ${i % 2 === 0 ? 'sm:border-r sm:border-navy/10' : ''}`}>
                <Link to={m.to} className="relative block h-full px-8 py-10 md:px-10 no-underline group overflow-hidden">
                  {/* sliding fill */}
                  <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative">
                    <span className="font-serif italic text-[17px] text-gold/90 transition-colors duration-400 group-hover:text-gold-light">
                      {m.tag}
                    </span>
                    <h3 className="font-serif text-[27px] md:text-[30px] font-semibold mt-3 mb-3 text-navy-deep transition-colors duration-400 group-hover:text-white relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-400 group-hover:after:w-full">
                      {m.name}
                    </h3>
                    <p className="text-[14px] leading-[1.75] text-[#777] transition-colors duration-400 group-hover:text-white/55 mb-7 max-w-[380px]">
                      {m.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[1.5px] uppercase font-semibold text-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100">
                      {m.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
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
              <Reveal key={l.name} delay={0.05 + i * 0.04} className="h-full">
                <div className="h-full flex flex-col bg-white/[0.03] border border-white/[0.06] rounded-md p-6 px-[22px] text-left transition-all duration-300 hover:bg-white/[0.06] hover:border-gold/35">
                  <h3 className="font-serif text-[19px] font-semibold mb-1.5 text-gold-light">{l.name}</h3>
                  <p className="text-[13px] opacity-50 mb-1 leading-[1.5]">{l.address}</p>
                  <p className="text-[12px] opacity-35 mb-2.5">{l.hours}</p>
                  <div className="mt-auto pt-1.5">
                    <span className="text-[13px] font-semibold text-teal-light">{l.phone}</span>
                    <br />
                    <a href={l.uber} target="_blank" rel="noreferrer" className="inline-block mt-2.5 text-[11px] tracking-[1px] uppercase font-semibold text-gold no-underline pb-[2px] border-b border-gold/35 transition-all hover:border-gold">
                      Order on Uber Eats →
                    </a>
                  </div>
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

      {/* Instagram band */}
      <section className="bg-navy-darkest text-white py-20 overflow-hidden relative border-b border-white/[0.04]">
        <div className="marquee-wrap select-none pointer-events-none mb-12" aria-hidden="true">
          <div className="marquee-track font-serif text-[clamp(44px,8vw,88px)] font-semibold uppercase tracking-[2px] leading-none">
            <span className="marquee-text">Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;</span>
            <span className="marquee-text">Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;Too Good To Share&nbsp;·&nbsp;</span>
          </div>
        </div>
        <Reveal>
          <div className="text-center px-10 relative">
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-4">Follow Along</span>
            <a
              href="https://instagram.com/gozlemeking/"
              target="_blank"
              rel="noreferrer"
              className="font-serif text-[clamp(28px,4vw,44px)] font-semibold text-white no-underline transition-colors duration-300 hover:text-gold"
            >
              @gozlemeking
            </a>
            <p className="text-[14px] text-white/40 mt-3">Fresh from the grill, straight to your feed — see what's cooking on Instagram.</p>
          </div>
        </Reveal>
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
