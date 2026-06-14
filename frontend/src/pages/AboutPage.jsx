import uniformFront from '../assets/uniforms/uniform-front.png'
import uniformBack from '../assets/uniforms/uniform-back.png'
import cateringCart from '../assets/events/mobile-icecream-cart.png'
import weddingCounter from '../assets/events/wedding-counter.png'
import familyBox from '../assets/packaging/family-pack-box.png'

const milestones = [
  ['Small-batch craft', 'Recipes are balanced for richness, clean flavor and a slow, creamy finish.'],
  ['Built for celebration', 'Our counters and carts turn service into a polished part of the occasion.'],
  ['Proudly consistent', 'From uniform to family pack, every detail belongs to one considered identity.'],
]

const AboutPage = () => (
  <div className="overflow-hidden bg-cream">
    <section className="relative bg-navy px-5 py-24 text-center text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(168,216,255,0.2),transparent_28rem)]" />
      <div className="relative mx-auto max-w-3xl">
        <p className="eyebrow">Our story</p>
        <h1 className="font-serif text-5xl font-semibold md:text-6xl">A premium brand with hospitality at its heart.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70">Frostora was created to make beautifully crafted ice cream feel at home in everyday moments and landmark celebrations alike.</p>
      </div>
    </section>

    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <div className="brush-wash absolute inset-0" />
          <img src={uniformFront} alt="Frostora employee uniform front" className="absolute bottom-0 left-0 z-10 h-[90%] w-[60%] object-contain drop-shadow-2xl" />
          <img src={uniformBack} alt="Frostora employee uniform back" className="absolute bottom-0 right-0 h-[82%] w-[54%] object-contain opacity-90 drop-shadow-xl" />
        </div>
        <div>
          <p className="eyebrow">Designed with intent</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Every touchpoint should feel unmistakably Frostora.</h2>
          <p className="mt-6 text-sm leading-7 text-slate-600">The navy uniform, fine gold embroidery and clean cream accents mirror the care inside every cup. Our visual language is calm, confident and made to feel special without becoming formal.</p>
          <div className="mt-10 space-y-7">
            {milestones.map(([title, copy], index) => (
              <div key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[#dfd3c2] pt-5">
                <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                <div>
                  <h3 className="text-xl text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From production to presentation</p>
          <h2 className="section-title">Made carefully. Served beautifully.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="frostora-panel p-7">
            <div className="grid h-64 place-items-center bg-ice-blue/15 p-5"><img src={familyBox} alt="Frostora packaged ice cream production" className="max-h-full max-w-full object-contain" /></div>
            <h3 className="mt-6 text-2xl">Thoughtful production</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Careful recipes, dependable processes and packaging designed to protect every flavor.</p>
          </article>
          <article className="frostora-panel p-7">
            <div className="grid h-64 place-items-center bg-navy p-5"><img src={weddingCounter} alt="Frostora wedding catering service" className="max-h-full max-w-full object-contain" /></div>
            <h3 className="mt-6 text-2xl">Celebration counters</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Elegant live counters bring the scoop bar directly into the atmosphere of your event.</p>
          </article>
          <article className="frostora-panel p-7">
            <div className="grid h-64 place-items-center bg-gold/10 p-5"><img src={cateringCart} alt="Frostora mobile ice cream cart" className="max-h-full max-w-full object-contain" /></div>
            <h3 className="mt-6 text-2xl">Mobile hospitality</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">A polished cart, warm service and premium scoops wherever the gathering takes us.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
)

export default AboutPage
