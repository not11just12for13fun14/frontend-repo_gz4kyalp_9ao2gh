import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Simple 360 viewer using a sprite of frames (placeholder with repeated image)
const frames = Array.from({ length: 24 }, (_, i) => `https://images.unsplash.com/photo-1542834759-9a42cd50d4ec?q=80&w=1600&auto=format&fit=crop&frame=${i}`)

export default function ProductDetail() {
  const [index, setIndex] = useState(0)
  const dragging = useRef(false)
  const startX = useRef(0)

  const onDown = (e) => {
    dragging.current = true
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX
  }
  const onUp = () => { dragging.current = false }
  const onMove = (e) => {
    if (!dragging.current) return
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    const delta = x - startX.current
    if (Math.abs(delta) > 8) {
      const step = delta > 0 ? -1 : 1
      setIndex((prev) => (prev + step + frames.length) % frames.length)
      startX.current = x
    }
  }

  useEffect(() => {
    const onLeave = () => { dragging.current = false }
    window.addEventListener('mouseup', onLeave)
    window.addEventListener('touchend', onLeave)
    return () => {
      window.removeEventListener('mouseup', onLeave)
      window.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <div
            className="relative aspect-[4/5] overflow-hidden select-none"
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
          >
            <img src={frames[index]} alt="360 view of product" className="h-full w-full object-cover" />
          </div>
          <p className="mt-3 text-sm text-neutral-600">Drag to rotate. Pinch or use browser zoom to inspect details.</p>
        </div>
        <div>
          <h1 className="font-serif text-4xl text-neutral-900">Élise Tote</h1>
          <p className="mt-2 text-neutral-700">Calfskin leather in Ivory</p>
          <p className="mt-4 text-xl text-neutral-900">$2,450</p>
          <div className="mt-6 flex items-center gap-3">
            {['Ivory','Noir','Taupe'].map((c) => (
              <button key={c} className="px-4 py-2 border border-neutral-300 text-sm">{c}</button>
            ))}
          </div>
          <button className="mt-8 w-full md:w-auto bg-neutral-900 text-white px-8 py-3 uppercase tracking-wide text-sm">Add to Cart</button>
          <div className="mt-10 space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Handcrafted in Italy from full-grain calfskin. Lined in smooth nappa with an interior zipped pocket. Polished palladium hardware. An emblem of quiet luxury.
            </p>
            <ul className="list-disc pl-5">
              <li>Dimensions: 28 x 22 x 12 cm</li>
              <li>Strap drop: 45 cm</li>
              <li>Comes with dust bag and care booklet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
