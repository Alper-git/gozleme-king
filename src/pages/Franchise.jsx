import { useState } from 'react'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'

const BENEFITS = [
  { title: 'Proven Model', desc: 'Over 20 years of experience and a proven business model with nine successful locations across Sydney.' },
  { title: 'Full Training', desc: 'Comprehensive training program covering food preparation, operations, customer service, and business management.' },
  { title: 'Ongoing Support', desc: 'Continuous support from our experienced team including marketing, supply chain, and operational guidance.' },
  { title: 'Site Selection', desc: 'Assistance with finding the right location in high-traffic shopping centres and busy high streets.' },
]

export default function Franchise() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Franchise Enquiry from ' + form.name)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPreferred Location: ${form.location}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:oscar@gozlemeking.com.au?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-darkest">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #1a2744 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Franchise</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Own a Gözleme King</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Join Sydney's favourite Turkish street food brand. We are seeking quality retail locations within shopping centres and busy high streets.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-[100px] px-10 bg-cream">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-start">
          {/* Storefront image */}
          <Reveal>
            <div className="lg:sticky lg:top-[120px]">
              <div className="rounded-xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                <img
                  src="/franchise-photo.jpg"
                  alt="Inside a Gözleme King store — coffee bar, fresh gözleme and Turkish plates on the wall"
                  className="w-full h-[340px] lg:h-[440px] object-cover"
                />
              </div>
              <div className="grid grid-cols-3 mt-6 divide-x divide-navy/10 text-center">
                {[
                  { num: '20+', label: 'Years' },
                  { num: '9', label: 'Locations' },
                  { num: '2003', label: 'Established' },
                ].map((s) => (
                  <div key={s.label} className="px-2">
                    <div className="font-serif text-[28px] font-semibold text-navy-deep leading-none mb-1">{s.num}</div>
                    <div className="text-[10px] tracking-[2px] uppercase text-navy/40">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Benefits list */}
          <div>
            <Reveal>
              <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Why Franchise</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.12] text-navy-deep mb-4">What We Offer</h2>
              <p className="text-[15px] leading-[1.8] text-[#777] max-w-[440px] mb-4">
                A proven concept, a loved brand, and a team that has done this nine times over — here is what you get when you join Gözleme King.
              </p>
            </Reveal>
            <div>
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={0.08 + i * 0.07}>
                  <div className={`group flex gap-6 py-8 ${i < BENEFITS.length - 1 ? 'border-b border-navy/10' : ''}`}>
                    <svg width="15" height="15" viewBox="0 0 20 20" className="fill-gold mt-[7px] shrink-0 transition-transform duration-400 group-hover:rotate-[72deg]">
                      <polygon points="10,0 12.4,7.6 20,7.6 13.8,12.4 16.2,20 10,15.2 3.8,20 6.2,12.4 0,7.6 7.6,7.6" />
                    </svg>
                    <div>
                      <h3 className="font-serif text-[24px] font-semibold text-navy-deep mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-400 group-hover:after:w-full">
                        {b.title}
                      </h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#777] max-w-[440px]">{b.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-[100px] px-10 bg-navy text-white">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Get Started</span>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">Franchise Enquiry</h2>
              <StarDivider />
              <p className="text-base leading-[1.75] opacity-55">Interested in owning a Gözleme King? Fill in your details and we will be in touch.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-5">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50" />
              <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50" />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50" />
              <input type="text" name="location" placeholder="Preferred Location / Area" value={form.location} onChange={handleChange} className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50" />
              <textarea name="message" placeholder="Tell us about yourself and your interest..." value={form.message} onChange={handleChange} rows={5} className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50 resize-none" />
              <button onClick={handleSubmit} className="w-full bg-gold text-navy-darkest py-3.5 rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-gold-light border-none">
                Submit Enquiry
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
