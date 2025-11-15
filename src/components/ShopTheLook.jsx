import { useState } from 'react'
import { motion } from 'framer-motion'

const hotspots = [
  { id: 1, x: '62%', y: '38%', title: 'Noir Mini', price: '$1,980', href: '#/product/2' },
  { id: 2, x: '35%', y: '65%', title: 'Signature Wallet', price: '$680', href: '#/product/4' },
]

export default function ShopTheLook() {
  const [active, setActive] = useState(null)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <h3 className="font-serif text-3xl md:text-4xl text-neutral-900">Shop the Look</h3>
          <a href="#" className="text-sm uppercase tracking-wide text-neutral-900/70 hover:text-neutral-900">Explore</a>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1551739440-5dd934b6a561?q=80&w=2000&auto=format&fit=crop"
              alt="Lifestyle scene with model carrying accessories"
              className="h-full w-full object-cover"
            />

            {hotspots.map(h => (
              <div key={h.id} style={{ left: h.x, top: h.y }} className="absolute -translate-x-1/2 -translate-y-1/2">
                <button
                  onMouseEnter={() => setActive(h.id)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative h-4 w-4 rounded-full border border-neutral-900/40 bg-white/80 backdrop-blur-sm"
                  aria-label={`${h.title} ${h.price}`}
                >
                  <span className="absolute inset-0 rounded-full animate-ping bg-neutral-900/20" />
                </button>

                {active === h.id && (
                  <motion.a
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    href={h.href}
                    className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur px-3 py-2 border border-neutral-200 shadow-sm"
                  >
                    <span className="font-serif text-neutral-900 mr-2">{h.title}</span>
                    <span className="text-neutral-600">{h.price}</span>
                  </motion.a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
