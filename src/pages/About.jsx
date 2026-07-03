import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { PHILOSOPHY } from '../data'

const HERO_BG = '/store.jpg'
const CTA_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/Gozleme-4762-682ad656-1920w.jpg'

const TIMELINE = [
  { year: '2003', title: 'The Beginning', desc: 'Gözleme King started with a vision to make authentic Turkish street food accessible to everyone, launching at the Frenchs Forest Organic Foods Market.' },
  { year: '2004–2014', title: 'Market Years', desc: 'Expanded to pop-up stands at Parramatta Farmers Market, Hornsby, Chatswood, and Kings Cross. Featured at the Aroma Rocks Coffee Festival, Norton Street Fair, and more.' },
  { year: '2015', title: 'First Store', desc: 'Opened the first flagship store in Liverpool Westfield, transitioning from weekend markets to a permanent retail presence.' },
  { year: '2016–2024', title: 'Rapid Growth', desc: 'Expanded across Sydney to Bankstown, Rhodes, Blacktown, Top Ryde, Hurstville, Sydney CBD, and Circular Quay.' },
  { year: '2025', title: 'Nine Locations', desc: 'Opened the Penrith location at Nepean Village, reaching nine stores across Sydney with a growing franchise model.' },
]

function DifferenceAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <div>
      {PHILOSOPHY.map((p, i) => {
        const isOpen = open === i
        return (
          <div key={p.title} className={`${i < PHILOSOPHY.length - 1 ? 'border-b border-navy/10' : ''}`}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-6 bg-transparent border-none cursor-pointer text-left group"
            >
              <span className="flex items-baseline gap-4">
                <span className={`font-serif text-[15px] font-semibold transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-navy/30'}`}>
                  0{i + 1}
                </span>
                <span className={`font-serif text-[24px] md:text-[28px] font-semibold transition-colors duration-300 ${isOpen ? 'text-navy-deep' : 'text-navy/55 group-hover:text-navy-deep'}`}>
                  {p.title}
                </span>
              </span>
              <span
                className={`text-[22px] font-light leading-none transition-all duration-300 ${isOpen ? 'text-gold rotate-45' : 'text-navy/30'}`}
                style={{ display: 'inline-block' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <p className="text-[15px] leading-[1.85] text-[#777] pb-7 pr-10 max-w-[520px]">
                {p.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy-darkest">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.88) 0%, rgba(17,28,51,0.78) 50%, rgba(11,18,32,0.92) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px] pt-16">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Story</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">About Gözleme King</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">From humble market stalls to nine locations across Sydney, our journey has been fuelled by a passion for authentic Turkish street food.</p>
        </div>
      </section>

      {/* Story + Origin */}
      <section className="py-[100px] px-10 bg-cream">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          {/* Image */}
          <Reveal>
            <div className="lg:sticky lg:top-[120px]">
              <div className="rounded-xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                <img
                  src="/istanbul.jpg"
                  alt="The Maiden's Tower on the Bosphorus at sunset, İstanbul, Türkiye"
                  className="w-full h-[420px] lg:h-[540px] object-cover object-center"
                />
              </div>
              <p className="text-[11px] tracking-[2px] uppercase text-navy/35 mt-4 text-center">İstanbul, Türkiye — where it all begins</p>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Who We Are</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-7 text-navy-deep">
                Sydney's Home of Authentic <em className="italic text-gold" style={{ WebkitTextStroke: '0' }}>Gözleme</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.9] text-[#555] mb-6">
                Gözleme King is a speciality food retailer based in Sydney, specialising in varieties of freshly made, authentic Turkish street food. Every gözleme is filled with natural ingredients and made to order, so it reaches you fresh off the grill every single time.
              </p>
              <p className="text-[16px] leading-[1.9] text-[#555] mb-6">
                For over 20 years we have been Sydney's favourite gözleme destination. From humble beginnings in 2003, the brand started with a simple vision: make authentic Turkish street food accessible to everyone.
              </p>
              <p className="text-[16px] leading-[1.9] text-[#555] mb-10">
                Our team brings 20+ years of experience and a modern twist to a centuries-old tradition — combining great Turkish flavours with fresh Australian produce, and delivering incredible Turkish food for over two decades.
              </p>
            </Reveal>

            {/* Origin inset */}
            <Reveal delay={0.15}>
              <div className="border-l-2 border-gold pl-7 py-2">
                <h3 className="font-serif text-[24px] font-semibold text-navy-deep mb-3">The Origin of Gözleme</h3>
                <p className="text-[15px] leading-[1.85] text-[#666] mb-4">
                  Gözleme is a traditional savoury flatbread from Anatolia, the heartland of Türkiye. For centuries, village cooks have hand-rolled thin sheets of dough, folded them around fresh fillings, and cooked them over a domed iron griddle known as a <em className="italic">sac</em>.
                </p>
                <p className="text-[15px] leading-[1.85] text-[#666]">
                  The name comes from <em className="italic">göz</em> — Turkish for "eye" — after the golden spots that blister across the dough as it cooks. What began as village home cooking became one of Türkiye's most loved street foods, and it is that same tradition we bring to Sydney every day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Gözleme King Difference */}
      <section className="py-[100px] px-10 bg-cream-dark">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-[130px]">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Why Us</span>
              <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-semibold leading-[1.12] text-navy-deep mb-5">
                The Gözleme King Difference
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#777] max-w-[380px]">
                Four things we have never compromised on — not at the market stalls in 2003, and not across nine stores today.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <DifferenceAccordion />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[100px] px-10 bg-navy text-white">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="text-center">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Journey</span>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">20+ Years of Flavour</h2>
              <StarDivider />
            </div>
          </Reveal>
          <div className="mt-14">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={0.08 + i * 0.07}>
                <div className="grid grid-cols-[86px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-8">
                  <div className="text-right pt-0.5">
                    <span className="font-serif text-[19px] md:text-[22px] font-semibold text-gold leading-tight">{t.year}</span>
                  </div>
                  <div className={`relative pl-8 ${i < TIMELINE.length - 1 ? 'pb-12' : 'pb-2'}`}>
                    {/* line */}
                    {i < TIMELINE.length - 1 && (
                      <span className="absolute left-0 top-2 bottom-0 w-px bg-white/10" />
                    )}
                    {/* dot */}
                    <span className="absolute left-[-4.5px] top-[7px] w-[10px] h-[10px] rounded-full bg-gold shadow-[0_0_0_5px_rgba(201,168,76,0.15)]" />
                    <h3 className="font-serif text-[21px] font-semibold mb-1.5">{t.title}</h3>
                    <p className="text-[14px] leading-[1.75] opacity-50 max-w-[480px]">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-[110px] px-10 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${CTA_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.9) 0%, rgba(17,28,51,0.85) 100%)' }} />
        <Reveal>
          <div className="relative max-w-[640px] mx-auto">
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-4">Visit Us</span>
            <h2 className="font-serif text-[clamp(30px,4.5vw,50px)] font-semibold leading-[1.12] mb-5">Come Taste the Tradition</h2>
            <p className="text-[16px] text-white/50 leading-[1.8] mb-9">Nine locations across Sydney, one standard: fresh, handmade, and made to order — every single time.</p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link to="/locations" className="inline-block bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5">
                Find a Store
              </Link>
              <Link to="/menu" className="inline-block bg-transparent text-white/80 border border-white/20 px-[34px] py-[13px] rounded-[3px] font-medium text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5">
                View Our Menu
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
