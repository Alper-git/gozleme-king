import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { PHILOSOPHY } from '../data'

const HERO_BG = 'https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/iv66uhbxo5421-b59ab0b9-1920w.jpg'

const TIMELINE = [
  { year: '2003', title: 'The Beginning', desc: 'Gözleme King started with a vision to make authentic Turkish street food accessible to everyone, launching at the Frenchs Forest Organic Foods Market.' },
  { year: '2004-2014', title: 'Market Years', desc: 'Expanded to pop-up stands at Parramatta Farmers Market, Hornsby, Chatswood, and Kings Cross. Featured at the Aroma Rocks Coffee Festival, Norton Street Fair, and more.' },
  { year: '2015', title: 'First Store', desc: 'Opened the first flagship store in Liverpool Westfield, transitioning from weekend markets to a permanent retail presence.' },
  { year: '2016-2024', title: 'Rapid Growth', desc: 'Expanded across Sydney to Bankstown, Rhodes, Blacktown, Top Ryde, Hurstville, Sydney CBD, and Circular Quay.' },
  { year: '2025', title: 'Nine Locations', desc: 'Opened the Penrith location at Nepean Village, reaching nine stores across Sydney with a growing franchise model.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy-darkest">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.88) 0%, rgba(17,28,51,0.78) 50%, rgba(11,18,32,0.92) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Story</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">About Gözleme King</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">From humble market stalls to nine locations across Sydney, our journey has been fuelled by a passion for authentic Turkish street food.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-[100px] px-10 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <p className="text-lg leading-[1.9] text-[#444] mb-8">
              Gözleme King is a speciality food retailer based in Sydney, which specialises in varieties of freshly made, authentic Turkish Street Food. Gözleme is a Turkish flatbread, filled with natural ingredients and is made to order to achieve a fresh, high quality customer experience.
            </p>
            <p className="text-lg leading-[1.9] text-[#444] mb-8">
              Gözleme King has become Sydney's favourite gözleme destination for over 20 years. From humble beginnings in 2003, the brand started with the vision to make authentic Turkish street food accessible to everyone.
            </p>
            <p className="text-lg leading-[1.9] text-[#444]">
              The team have 20+ years of experience in this industry and pride themselves in bringing you authentic Turkish street food with a modern twist. Combining the great Turkish flavours with fresh Australian produce, Gözleme King has been delivering incredible Turkish food for over two decades.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[100px] px-10 bg-navy text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Journey</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">20+ Years of Flavour</h2>
            <StarDivider />
          </Reveal>
          <div className="mt-14 space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={0.1 + i * 0.08}>
                <div className="flex gap-6 text-left items-start">
                  <div className="min-w-[100px] text-right">
                    <span className="font-serif text-2xl font-semibold text-gold">{t.year}</span>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="font-serif text-xl font-semibold mb-1">{t.title}</h3>
                    <p className="text-sm leading-[1.7] opacity-50">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-[100px] px-10 bg-navy-deep text-white text-center">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Philosophy</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">What We Stand For</h2>
            <StarDivider />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.1}>
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-lg p-8 px-6 transition-all duration-400 hover:bg-white/[0.06] hover:-translate-y-[3px]">
                  <span className="text-[28px] mb-[18px] block">{p.icon}</span>
                  <h3 className="font-serif text-xl font-semibold mb-2.5">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] opacity-50">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
