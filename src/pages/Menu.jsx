import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { MENU_CATEGORIES } from '../data'

export default function Menu() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-darkest">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #111c33 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Our Menu</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Taste the Tradition</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Every item is freshly made to order using premium Australian ingredients and authentic Turkish recipes.</p>
        </div>
      </section>

      {/* Menu Categories */}
      {MENU_CATEGORIES.map((cat, ci) => (
        <section
          key={cat.category}
          className={`py-[80px] px-10 ${ci % 2 === 0 ? 'bg-cream' : 'bg-navy text-white'}`}
        >
          <div className="max-w-[1120px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <span className={`block text-[11px] tracking-[3.5px] uppercase font-semibold mb-3.5 ${ci % 2 === 0 ? 'text-teal' : 'text-gold'}`}>
                  {cat.category}
                </span>
                <h2 className={`font-serif text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.15] mb-[18px] ${ci % 2 === 0 ? 'text-navy-deep' : 'text-white'}`}>
                  {cat.category === 'Gözleme' ? 'Our Signature Gözleme' : cat.category === 'Desserts' ? 'Sweet Endings' : cat.category === 'Drinks' ? 'Beverages' : 'Turkish Sweets'}
                </h2>
                <StarDivider color={ci % 2 === 0 ? '#1a2744' : '#c9a84c'} />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={0.05 + i * 0.06}>
                  <div className={`rounded-lg p-7 transition-all duration-300 hover:-translate-y-[3px] ${
                    ci % 2 === 0
                      ? 'bg-white border border-black/[0.05] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
                      : 'bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.06]'
                  }`}>
                    <h3 className={`font-serif text-xl font-semibold mb-2 ${ci % 2 === 0 ? 'text-navy-deep' : 'text-gold-light'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-sm leading-[1.7] ${ci % 2 === 0 ? 'text-[#777]' : 'opacity-50'}`}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Menu Download Note */}
      <section className="text-center py-16 px-10 bg-navy-deep text-white">
        <Reveal>
          <p className="text-base text-white/45 mb-6">Prices may vary by location. Please contact your nearest store for current pricing.</p>
          <a
            href="https://www.gozlemeking.com.au/menu"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-navy-darkest px-[34px] py-[13px] rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase no-underline transition-all duration-300 hover:bg-gold-light"
          >
            View Full Menu with Prices
          </a>
        </Reveal>
      </section>
    </>
  )
}
