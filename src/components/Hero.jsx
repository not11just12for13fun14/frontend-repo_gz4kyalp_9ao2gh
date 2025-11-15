import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const play = async () => {
      try {
        await video.play()
      } catch (e) {
        // Autoplay might be blocked; muted + playsInline helps
      }
    }
    play()
  }, [])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-the-bag-7987/1080p.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Cinematic showcase of an exquisite handbag"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-white/0" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl text-neutral-900 tracking-tight"
          >
            Timeless Leather, Modern Poise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-neutral-700"
          >
            Crafted in small ateliers, our accessories celebrate precision, proportion, and quiet luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a href="#collections" className="group inline-flex items-center justify-center border border-neutral-900 px-6 py-3 text-sm tracking-wide uppercase text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white">
              Explore Collection
            </a>
            <a href="#story" className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide uppercase text-neutral-900/80 hover:text-neutral-900">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
