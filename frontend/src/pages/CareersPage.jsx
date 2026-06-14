import { useState } from 'react'
import axios from 'axios'
import uniformFront from '../assets/uniforms/uniform-front.png'
import uniformBack from '../assets/uniforms/uniform-back.png'

const jobs = [
  ['Lead Quality Analyst', 'Bengaluru Facility', 'Full Time', 'Protect Frostora quality through testing, monitoring and continuous improvement.'],
  ['Production Supervisor', 'Bengaluru Facility', 'Full Time', 'Lead safe, consistent production and support a high-performing floor team.'],
  ['Sales Executive (HORECA)', 'Bengaluru', 'Full Time', 'Build lasting relationships with hotels, restaurants and cafe partners.'],
  ['Maintenance Technician', 'Bengaluru Facility', 'Full Time', 'Keep production equipment dependable, efficient and ready for every batch.'],
  ['Graphic Designer', 'Bengaluru', 'Full Time', 'Shape refined visual stories across digital, packaging and event experiences.'],
]

const CareersPage = () => {
  const [open, setOpen] = useState(0)
  const [status, setStatus] = useState('')

  const submitApplication = async (event) => {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget

    try {
      await axios.post('http://localhost:8000/api/applications/', new FormData(form))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden bg-white px-5 py-16 lg:px-8">
        <div className="brush-wash absolute right-[-8%] top-0 h-full w-[65%]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow">Careers at Frostora</p>
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-tight md:text-6xl">Join the Frostora family.</h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">Be part of a team that pairs craft, care and warm hospitality to create happiness every day.</p>
          </div>
          <div className="relative h-[390px]">
            <img src={uniformFront} alt="Frostora uniform front" className="absolute bottom-0 left-0 h-full w-[58%] object-contain drop-shadow-xl" />
            <img src={uniformBack} alt="Frostora uniform back" className="absolute bottom-0 right-0 h-[88%] w-[55%] object-contain opacity-90" />
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Workplace culture</p>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Care is part of the recipe.</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-white/15 md:grid-cols-3">
            {[
              ['Learn with purpose', 'Hands-on coaching and room to grow into meaningful responsibility.'],
              ['Take pride in craft', 'High standards, clear processes and respect for work done well.'],
              ['Celebrate together', 'A collaborative culture where service and joy are shared work.'],
            ].map(([title, copy]) => (
              <div key={title} className="bg-navy p-8">
                <h3 className="text-2xl text-gold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center">Open roles</p>
          <h2 className="section-title">Find your place at Frostora</h2>
          <div className="mt-12 overflow-hidden rounded-sm border border-[#ded2c1] bg-white">
            {jobs.map(([title, location, type, description], index) => (
              <article key={title} className="border-b border-[#e9dfd1] last:border-0">
                <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="grid w-full gap-3 px-6 py-5 text-left transition hover:bg-ice-blue/10 sm:grid-cols-[1.5fr_1fr_0.6fr_auto] sm:items-center">
                  <strong className="text-sm text-navy">{title}</strong>
                  <span className="text-xs text-slate-500">{location}</span>
                  <span className="text-xs text-slate-500">{type}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{open === index ? 'Close −' : 'View +'}</span>
                </button>
                {open === index && (
                  <div className="border-t border-[#eee5d9] bg-light-cream px-6 py-6">
                    <p className="max-w-3xl text-sm leading-7 text-slate-600">{description}</p>
                    <a href="#apply" className="btn-gold mt-5">Apply Now</a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Introduce yourself</p>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Apply to join us.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Tell us where your experience could add to the Frostora story. Our people team will review every complete application.</p>
          </div>
          <form
            className="frostora-panel p-7 sm:p-9"
            onSubmit={submitApplication}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="form-control" name="name" placeholder="Full name" required />
              <input className="form-control" type="email" name="email" placeholder="Email address" required />
              <input className="form-control" name="phone" placeholder="Phone number" required />
              <select className="form-control" name="position" defaultValue="" required>
                <option value="" disabled>Position of interest</option>
                {jobs.map(([title]) => <option key={title}>{title}</option>)}
              </select>
            </div>
            <textarea className="form-control mt-5 min-h-36" name="message" placeholder="A short note about your experience" required />
            <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.12em] text-navy">
              Resume
              <input className="form-control mt-2 file:mr-4 file:border-0 file:bg-navy file:px-3 file:py-2 file:text-xs file:text-white" type="file" accept=".pdf,.doc,.docx" required />
            </label>
            {status === 'sent' && <p className="mt-4 text-sm text-green-700">Application received. Thank you for considering Frostora.</p>}
            {status === 'error' && <p className="mt-4 text-sm text-red-700">We could not submit the application. Please email careers@frostora.com.</p>}
            <button type="submit" className="btn-gold mt-6 w-full" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting...' : 'Submit Application'}</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
