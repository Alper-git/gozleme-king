import { useState } from 'react'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'

const BENEFITS = [
  { icon: '📈', title: 'Proven Model', desc: 'Over 20 years of experience and a proven business model with nine successful locations across Sydney.' },
  { icon: '🎓', title: 'Full Training', desc: 'Comprehensive training program covering food preparation, operations, customer service, and business management.' },
  { icon: '🤝', title: 'Ongoing Support', desc: 'Continuous support from our experienced team including marketing, supply chain, and operational guidance.' },
  { icon: '🏪', title: 'Site Selection', desc: 'Assistance with finding the right location in high-traffic shopping centres and busy high streets.' },
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
      <section className="py-[100px] px-10 bg-cream text-center">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Why Franchise</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">What We Offer</h2>
            <StarDivider color="#1a2744" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-lg p-8 px-6 border border-black/[0.05] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <span className="text-[28px] mb-[18px] block">{b.icon}</span>
                  <h3 className="font-serif text-xl font-semibold mb-2.5 text-navy-deep">{b.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] text-[#777]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
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
