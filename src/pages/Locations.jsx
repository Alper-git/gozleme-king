import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { LOCATIONS } from '../data'

export default function Locations() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-darkest">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #111c33 0%, #1a2744 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Locations</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Find Us Across Sydney</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Nine stores in Sydney's busiest shopping centres. Fresh gözleme is never far away.</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-[100px] px-10 bg-cream">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.name} delay={0.05 + i * 0.04}>
                <div className="bg-white rounded-lg p-8 border border-black/[0.05] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-navy-deep">{l.name}</h3>
                  <p className="text-sm text-[#666] mb-2 leading-[1.6]">{l.address}</p>
                  <p className="text-xs text-[#999] mb-4 leading-[1.6]">{l.hours}</p>

                  <div className="flex flex-col gap-2">
                    <a href={`tel:${l.phone}`} className="text-sm font-semibold text-teal no-underline hover:text-teal-light transition-colors">
                      {l.phone}
                    </a>
                    <a href={`mailto:${l.email}`} className="text-xs text-[#999] no-underline hover:text-navy transition-colors">
                      {l.email}
                    </a>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex gap-3">
                    <a
                      href={l.uber}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] tracking-[1px] uppercase font-semibold text-gold no-underline pb-[2px] border-b border-gold/35 transition-all hover:border-gold"
                    >
                      Order on Uber Eats →
                    </a>
                    <a
                      href={`mailto:${l.email}`}
                      className="text-[11px] tracking-[1px] uppercase font-semibold text-navy no-underline pb-[2px] border-b border-navy/20 transition-all hover:border-navy"
                    >
                      Email Store
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
