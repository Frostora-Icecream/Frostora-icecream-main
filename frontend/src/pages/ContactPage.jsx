import { useState } from 'react'
import axios from 'axios'
import businessCard from '../assets/branding/business-card.png'

const team = [
  ['AR', 'Arjun R.', 'Founder & CEO', 'Brand vision and memorable experiences'],
  ['MS', 'Meera S.', 'Head of Operations', 'Exceptional service at every touchpoint'],
  ['RK', 'Rohan K.', 'Head of Production', 'Quality and consistency in every batch'],
  ['PM', 'Priya M.', 'Head of Marketing', 'Building thoughtful brand connections'],
]

const ContactPage = () => {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const update = ({ target }) => setForm((current) => ({ ...current, [target.name]: target.value }))

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await axios.post('http://localhost:8000/api/contact/', form)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-cream">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">We are here to help</p>
          <h1 className="font-serif text-5xl font-semibold md:text-6xl">Contact Us</h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="frostora-panel p-7">
                <img src={businessCard} alt="Frostora official business card" className="w-full" />
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ['Corporate Office', 'Frostora Foods Pvt. Ltd., Bengaluru, Karnataka'],
                  ['Customer Care', '+91 98765 43210 · Mon-Sun, 9 AM-9 PM'],
                  ['Business Inquiries', 'sales@frostora.com'],
                  ['FSSAI License', '12345678901234'],
                ].map(([title, copy]) => (
                  <div key={title} className="border-l-2 border-gold bg-white/60 px-5 py-4">
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="frostora-panel p-7 sm:p-9">
              <h2 className="text-3xl">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-500">For orders, celebrations, partnerships or anything scoop-related.</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <input className="form-control" name="name" value={form.name} onChange={update} placeholder="Your name" required />
                <input className="form-control" type="email" name="email" value={form.email} onChange={update} placeholder="Email address" required />
                <input className="form-control" name="phone" value={form.phone} onChange={update} placeholder="Phone number" />
                <input className="form-control" name="subject" value={form.subject} onChange={update} placeholder="Subject" required />
              </div>
              <textarea className="form-control mt-5 min-h-40" name="message" value={form.message} onChange={update} placeholder="Tell us how we can help" required />
              {status === 'sent' && <p className="mt-4 text-sm text-green-700">Thank you. Your message has been received.</p>}
              {status === 'error' && <p className="mt-4 text-sm text-red-700">The message could not be sent. Please call or email us directly.</p>}
              <button className="btn-gold mt-6 w-full" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-center">People behind the promise</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([initials, name, role, bio]) => (
              <article key={name} className="feature-card">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-gold bg-navy font-serif text-3xl text-gold">{initials}</div>
                <h3 className="mt-5 text-xl">{name}</h3>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">{role}</p>
                <p className="mt-4 text-xs leading-6 text-slate-500">{bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
