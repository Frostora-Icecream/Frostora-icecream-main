import { Link } from 'react-router-dom'
import heroImage from '../assets/hero/hero-icecream.png'
import weddingCounter from '../assets/events/wedding-counter.png'
import familyBox from '../assets/packaging/family-pack-box.png'
import familyTub from '../assets/packaging/family-pack-tub.png'
import ledBoard from '../assets/branding/led-board.png'
import belgianChocolate from '../assets/flavors/belgian-chocolate.png'
import classicVanilla from '../assets/flavors/classic-vanilla.png'
import pistaRoyale from '../assets/flavors/pista-royale.png'
import butterscotchBliss from '../assets/flavors/butterscotch-bliss.png'
import strawberryLove from '../assets/flavors/strawberry-love.png'
import blackCurrant from '../assets/flavors/black-currant.png'

const flavors = [
  ['Belgian Chocolate', belgianChocolate, 'Deep, rich and indulgent'],
  ['Classic Vanilla', classicVanilla, 'Real vanilla bean comfort'],
  ['Pista Royale', pistaRoyale, 'Creamy pistachio with real nuts'],
  ['Butterscotch Bliss', butterscotchBliss, 'Buttery caramel crunch'],
  ['Strawberry Love', strawberryLove, 'Bright, real strawberry goodness'],
  ['Black Currant', blackCurrant, 'Fruity, tangy and refreshing'],
]

const values = [
  ['01', 'Made with real milk'],
  ['02', 'Premium ingredients'],
  ['03', 'Rich and creamy'],
  ['04', 'Always fresh'],
]

const HomePage = () => (
  <div className="overflow-hidden">
    <section className="relative min-h-[650px] bg-cream">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(168,216,255,0.45),transparent_65%)] md:block" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10">
          <p className="eyebrow">Premium ice creams · Bengaluru</p>
          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.03] text-navy sm:text-6xl lg:text-7xl">
            Crafting Memories,<br />One Scoop at a Time.
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Real milk, exceptional ingredients and a little celebration folded into every scoop.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/flavors" className="btn-gold">Explore Flavors</Link>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
        <div className="relative grid place-items-center">
          <div className="brush-wash absolute h-[72%] w-[110%]" />
          <img src={heroImage} alt="Frostora chocolate and vanilla ice cream bowl" className="hero-float relative z-10 w-full max-w-[650px] drop-shadow-[0_28px_30px_rgba(13,42,82,0.18)]" />
        </div>
      </div>
    </section>

    <section className="border-y border-[#e5dac9] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {values.map(([number, label]) => (
          <div key={label} className="border-[#e5dac9] p-7 text-center odd:border-r md:border-r md:last:border-r-0">
            <span className="font-serif text-2xl text-gold">{number}</span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-light-cream px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-center">The signature collection</p>
        <h2 className="section-title">Six ways to make a moment sweeter</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {flavors.map(([name, image, note]) => (
            <Link key={name} to="/flavors" className="group overflow-hidden rounded-sm border border-[#eadfce] bg-white p-4 text-center transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_24px_50px_rgba(13,42,82,0.13)]">
              <div className="relative mx-auto aspect-square">
                <div className="absolute inset-3 rounded-full bg-ice-blue/20 transition duration-500 group-hover:scale-110 group-hover:bg-ice-blue/35" />
                <img src={image} alt={name} className="relative h-full w-full object-contain transition duration-500 group-hover:scale-110 group-hover:-rotate-2" />
              </div>
              <h3 className="mt-3 text-lg leading-tight text-navy">{name}</h3>
              <p className="mt-2 text-[0.67rem] leading-5 text-slate-500">{note}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/flavors" className="btn-outline">View All Flavors</Link></div>
      </div>
    </section>

    <section id="events" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_center,rgba(168,216,255,0.16),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="eyebrow">Weddings & events</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Make every celebration extra special.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">From intimate weddings to corporate evenings, our elegant live counter brings premium scoops and polished service to your venue.</p>
          <Link to="/contact" className="btn-gold mt-8">Book an Event</Link>
        </div>
        <img src={weddingCounter} alt="Frostora wedding catering counter" className="w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]" />
      </div>
    </section>

    <section className="bg-cream px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[360px]">
            <div className="brush-wash absolute inset-0" />
            <img src={familyBox} alt="Frostora family pack box" className="absolute left-0 top-0 z-10 w-[72%] drop-shadow-xl" />
            <img src={familyTub} alt="Frostora family pack tub" className="absolute bottom-0 right-0 z-20 w-[58%] drop-shadow-2xl" />
          </div>
          <div>
            <p className="eyebrow">Made for sharing</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">A family pack that looks as good as it tastes.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">A generous assortment presented in Frostora’s signature navy, cream and gold packaging. Designed for the table, made for everyone around it.</p>
            <Link to="/contact" className="btn-navy mt-8">Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our brand story</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Recognizable by the glow. Remembered by the scoop.</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">Frostora pairs old-world hospitality with a crisp contemporary identity. The illuminated sign marks a promise: thoughtful service, beautiful presentation and uncompromising flavor.</p>
          <Link to="/about" className="btn-outline mt-8">Discover Frostora</Link>
        </div>
        <div className="rounded-sm bg-navy p-8 shadow-2xl">
          <img src={ledBoard} alt="Illuminated Frostora signboard" className="w-full" />
        </div>
      </div>
    </section>
  </div>
)

export default HomePage
