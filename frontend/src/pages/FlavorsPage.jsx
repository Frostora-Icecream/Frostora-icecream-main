import belgianChocolate from '../assets/flavors/belgian-chocolate.png'
import classicVanilla from '../assets/flavors/classic-vanilla.png'
import pistaRoyale from '../assets/flavors/pista-royale.png'
import butterscotchBliss from '../assets/flavors/butterscotch-bliss.png'
import strawberryLove from '../assets/flavors/strawberry-love.png'
import blackCurrant from '../assets/flavors/black-currant.png'

const flavors = [
  {
    name: 'Velvety Belgian Chocolate',
    image: belgianChocolate,
    description: 'Deep Belgian cocoa and real milk create a dark, satin-smooth scoop made for true chocolate lovers.',
    ingredients: 'Belgian cocoa · real milk · cream · chocolate pieces',
  },
  {
    name: 'Classic Vanilla',
    image: classicVanilla,
    description: 'A timeless, aromatic classic made with real vanilla and fresh dairy for an exceptionally clean finish.',
    ingredients: 'Vanilla bean · real milk · cream · cane sugar',
  },
  {
    name: 'Pista Royale',
    image: pistaRoyale,
    description: 'Roasted pistachios blended into a rich and creamy base with a delicate nutty finish in every bite.',
    ingredients: 'Pistachio · real milk · cream · natural flavor',
  },
  {
    name: 'Butterscotch Bliss',
    image: butterscotchBliss,
    description: 'Buttery caramel and golden crunch come together in a delightfully sweet, textured scoop.',
    ingredients: 'Butterscotch · caramel · real milk · crunchy praline',
  },
  {
    name: 'Strawberry Love',
    image: strawberryLove,
    description: 'Real strawberries bring a bright, refreshing fruit character and an irresistible creamy finish.',
    ingredients: 'Strawberries · real milk · cream · fruit puree',
  },
  {
    name: 'Black Currant',
    image: blackCurrant,
    description: 'A jewel-toned scoop bursting with black currant goodness for a tangy, fruity and refreshing experience.',
    ingredients: 'Black currant · real milk · cream · berry puree',
  },
]

const FlavorsPage = () => (
  <div className="overflow-hidden bg-cream">
    <section className="relative border-b border-[#e5dac9] bg-white px-5 py-20 text-center lg:px-8">
      <div className="brush-wash absolute left-1/2 top-1/2 h-44 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2" />
      <div className="relative">
        <p className="eyebrow">Handcrafted with care</p>
        <h1 className="font-serif text-5xl font-semibold text-navy md:text-6xl">Our Flavors</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600">Six distinctive recipes. One unmistakably Frostora finish.</p>
      </div>
    </section>

    <section>
      {flavors.map((flavor, index) => (
        <article key={flavor.name} className={`border-b border-[#e5dac9] ${index % 2 ? 'bg-white' : 'bg-light-cream'}`}>
          <div className={`mx-auto grid min-h-[520px] max-w-7xl items-center md:grid-cols-2 ${index % 2 ? '' : ''}`}>
            <div className={`relative grid h-full min-h-[430px] place-items-center overflow-hidden px-8 py-14 ${index % 2 ? 'md:order-2' : ''}`}>
              <div className="brush-wash absolute inset-8" />
              <div className="absolute h-72 w-72 rounded-full bg-ice-blue/20 blur-3xl" />
              <img
                src={flavor.image}
                alt={`${flavor.name} Frostora cup`}
                className="relative z-10 h-[330px] w-full object-contain drop-shadow-[0_24px_22px_rgba(13,42,82,0.2)] transition duration-700 hover:-translate-y-3 hover:scale-105 hover:-rotate-2"
              />
            </div>
            <div className={`px-8 py-14 md:px-14 lg:px-20 ${index % 2 ? 'md:order-1' : ''}`}>
              <p className="eyebrow">Signature flavor 0{index + 1}</p>
              <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">{flavor.name}</h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">{flavor.description}</p>
              <div className="mt-8 border-l-2 border-gold pl-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">Key ingredients</p>
                <p className="mt-2 text-sm text-navy">{flavor.ingredients}</p>
              </div>
              <button type="button" className="btn-outline mt-9">Order This Flavor</button>
            </div>
          </div>
        </article>
      ))}
    </section>
  </div>
)

export default FlavorsPage
