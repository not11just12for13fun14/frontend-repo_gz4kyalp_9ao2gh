import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <section ref={ref} className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="relative overflow-hidden rounded-sm border border-neutral-200">
          <motion.img
            style={{ y, opacity }}
            src="https://images.unsplash.com/photo-1518544801976-3e8a9347b450?q=80&w=2000&auto=format&fit=crop"
            alt="Parallax leather texture"
            className="h-[60vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="font-serif text-3xl text-neutral-900">Material Matters</h3>
            <p className="mt-2 max-w-xl text-neutral-700">Supple grains, meticulously matched panels, and luminous hardware—an ode to enduring quality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
