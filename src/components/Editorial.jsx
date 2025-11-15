import { motion } from 'framer-motion'

export default function Editorial() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517632298124-d6ccbedc9bde?q=80&w=1600&auto=format&fit=crop"
              alt="Artisan crafting leather"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl text-neutral-900"
            >
              The Craft of Quiet Luxury
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-neutral-700 leading-relaxed"
            >
              From hand-selected hides to hand-finished edges, every piece is shaped by artisans whose techniques have been refined over generations. Subtlety is our signature—where form, function, and feeling converge.
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 inline-block border-b border-neutral-900/30 pb-1 text-sm uppercase tracking-wide text-neutral-900/80 hover:text-neutral-900 hover:border-neutral-900"
            >
              Read the Editorial
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
