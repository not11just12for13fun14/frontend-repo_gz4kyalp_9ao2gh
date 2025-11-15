import { motion } from 'framer-motion'

const suggestions = [
  {
    id: 5,
    name: 'Cité Crossbody',
    price: '$1,650',
    image: 'https://images.unsplash.com/photo-1736078546793-b39011bc4853?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXQlQzMlQTklMjBDcm9zc2JvZHl8ZW58MHwwfHx8MTc2MzIxOTY3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Marais Top Handle',
    price: '$2,300',
    image: 'https://images.unsplash.com/photo-1669236392160-74bba8ac32cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJhaXMlMjBUb3AlMjBIYW5kbGV8ZW58MHwwfHx8MTc2MzIxOTY3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Rive Gauche Hobo',
    price: '$1,980',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
  },
]

function Card({ item }) {
  return (
    <motion.a
      href={`#/product/${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <h4 className="font-serif text-lg text-neutral-900">{item.name}</h4>
          <p className="text-sm text-neutral-600">{item.price}</p>
        </div>
        <div className="text-xs uppercase tracking-wide text-neutral-900/70 group-hover:text-neutral-900">View</div>
      </div>
    </motion.a>
  )
}

export default function YouMayAlsoLike() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h3 className="font-serif text-3xl text-neutral-900 mb-10">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestions.map((s) => (
            <Card key={s.id} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
