import { useState } from 'react'
import { motion } from 'framer-motion'

const allProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Maison Bag ${i + 1}`,
  price: `$${(1650 + i * 30).toLocaleString()}`,
  image: `https://picsum.photos/seed/bag-${i}/1200/1500`,
}))

export default function CategoryPage() {
  const [sort, setSort] = useState('featured')

  const products = [...allProducts]
  if (sort === 'price-asc') products.sort((a, b) => parseInt(a.price.slice(1).replace(/,/g, '')) - parseInt(b.price.slice(1).replace(/,/g, '')))
  if (sort === 'price-desc') products.sort((a, b) => parseInt(b.price.slice(1).replace(/,/g, '')) - parseInt(a.price.slice(1).replace(/,/g, '')))

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl text-neutral-900">Bags</h1>
          <div className="flex items-center gap-4 text-sm">
            <label className="text-neutral-600">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-neutral-300 px-3 py-2 text-neutral-900"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.a
              key={p.id}
              href={`#/product/${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-serif text-lg text-neutral-900">{p.name}</h3>
                  <p className="text-sm text-neutral-600">{p.price}</p>
                </div>
                <div className="text-xs uppercase tracking-wide text-neutral-900/70 group-hover:text-neutral-900">View</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
