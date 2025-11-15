import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Élise Tote',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop',
    alt: 'Elegant leather tote in ivory',
  },
  {
    id: 2,
    name: 'Noir Mini',
    price: '$1,980',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1600&auto=format&fit=crop',
    alt: 'Sleek black mini bag with gold hardware',
  },
  {
    id: 3,
    name: 'Atelier Satchel',
    price: '$2,120',
    image: 'https://images.unsplash.com/photo-1732690991048-40acebdd6c8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdGVsaWVyJTIwU2F0Y2hlbHxlbnwwfDB8fHwxNzYzMjE5NjczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Structured calfskin satchel in taupe',
  },
  {
    id: 4,
    name: 'Signature Wallet',
    price: '$680',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1600&auto=format&fit=crop',
    alt: 'Refined leather wallet in sand',
  },
]

function Card({ product }) {
  return (
    <motion.a
      href={`#/product/${product.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group block overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-0 ring-0 ring-neutral-900/0 group-hover:ring-[0.5px] group-hover:ring-neutral-900/30 transition-all" />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <h3 className="font-serif text-lg text-neutral-900">{product.name}</h3>
          <p className="text-sm text-neutral-600">{product.price}</p>
        </div>
        <div className="text-xs uppercase tracking-wide text-neutral-900/70 group-hover:text-neutral-900">View</div>
      </div>
    </motion.a>
  )
}

export default function CollectionGrid() {
  return (
    <section id="collections" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900">Signature Collection</h2>
          <a href="#" className="text-sm uppercase tracking-wide text-neutral-900/70 hover:text-neutral-900">View All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
