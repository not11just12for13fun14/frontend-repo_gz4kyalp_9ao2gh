import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Wallets',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWdzfGVufDB8MHx8fDE3NjMyMTk2NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Small Leather Goods',
    image: 'https://images.unsplash.com/photo-1709809681323-c1567869e7b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYWxsZXRzfGVufDB8MHx8fDE3NjMyMTk2NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function ShopByCategory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h3 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-10">Shop by Category</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((c) => (
            <motion.a
              key={c.name}
              href={`#/collections/${c.name.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h4 className="font-serif text-xl text-neutral-900">{c.name}</h4>
                <span className="text-xs uppercase tracking-wide text-neutral-900/70 group-hover:text-neutral-900">Shop</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
