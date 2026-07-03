import { useState } from 'react'
import Reveal from '../components/Reveal'
import StarDivider from '../components/StarDivider'
import { CATERING_PACKAGES } from '../data'

export default function Catering() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Catering Enquiry from ' + form.name)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nGuests: ${form.guests}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:oscar@gozlemeking.com.au?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-navy-darkest overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lirp.cdn-website.com/74d5b5c1/dms3rep/multi/opt/iv66uhbxo5421-b59ab0b9-1920w.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.88) 0%, rgba(17,28,51,0.8) 50%, rgba(11,18,32,0.92) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Catering</span>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] text-white font-semibold leading-[1.1] mb-5">Catering for Every Occasion</h1>
          <p className="text-[17px] text-white/50 leading-[1.75]">Custom gözleme packages for offices, events, and celebrations of any size.</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-[100px] px-10 bg-cream text-center">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-3.5">Our Packages</span>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px] text-navy-deep">Choose Your Package</h2>
            <StarDivider color="#1a2744" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {CATERING_PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.name} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-lg p-8 border border-black/[0.05] text-left transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <span className="inline-block px-2.5 py-[3px] bg-navy-deep text-gold text-[10px] tracking-[1.5px] uppercase font-semibold rounded-[2px] mb-4">{pkg.serves}</span>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-navy-deep">{pkg.name}</h3>
                  <p className="text-sm leading-[1.7] text-[#777]">{pkg.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-16 px-10 bg-cream-dark border-y border-navy/[0.06]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-teal font-semibold mb-6">Perfect For</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Office Lunches', 'Birthdays', 'Weddings', 'School Events', 'Festivals', 'Community Days'].map((e, i) => (
                <span
                  key={e}
                  className="px-5 py-2.5 rounded-full border border-navy/15 text-[12.5px] tracking-[1px] uppercase font-medium text-navy/70 transition-all duration-300 hover:border-gold hover:text-navy-deep hover:bg-gold/[0.08] cursor-default"
                >
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-[90px] px-10 bg-navy-deep text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">How It Works</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] mb-[18px]">Three Simple Steps</h2>
            <StarDivider />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-14">
            {[
              { step: '01', title: 'Tell Us About Your Event', desc: 'Send an enquiry with your date, guest count and any preferences — every event is different.' },
              { step: '02', title: 'We Tailor Your Package', desc: 'We put together a custom gözleme package to suit your occasion, group size and budget.' },
              { step: '03', title: 'Fresh on the Day', desc: 'Hand-rolled, made fresh and ready for your guests — the same quality we serve in store.' },
            ].map((s, i) => (
              <Reveal key={s.step} delay={0.1 + i * 0.1}>
                <div className="relative px-4">
                  <span className="font-serif text-[52px] font-semibold text-gold/40 leading-none block mb-4">{s.step}</span>
                  <h3 className="font-serif text-[21px] font-semibold mb-2.5">{s.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-white/45 max-w-[300px] mx-auto">{s.desc}</p>
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
              <span className="block text-[11px] tracking-[3.5px] uppercase text-gold font-semibold mb-3.5">Get in Touch</span>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] mb-[18px]">Enquire Now</h2>
              <StarDivider />
              <p className="text-base leading-[1.75] opacity-55">Fill in your details and we will get back to you with a custom quote.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50"
              />
              <input
                type="text"
                name="guests"
                placeholder="Number of Guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50"
              />
              <textarea
                name="message"
                placeholder="Tell us about your event..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-gold/50 resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gold text-navy-darkest py-3.5 rounded-[3px] font-bold text-[13px] tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-gold-light border-none"
              >
                Send Enquiry
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
