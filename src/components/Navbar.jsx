import { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `px-3 py-2 text-sm tracking-wide uppercase transition-colors duration-300 ${isActive ? 'text-black' : 'text-neutral-700 hover:text-black'}`}
  >
    <span className="relative inline-block">
      <span className="pb-0.5" style={{ letterSpacing: '0.06em' }}>{children}</span>
      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
    </span>
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-5">
          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6 text-neutral-900" />
          </button>

          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wide text-neutral-900">
            Maison Élise
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <div className="group">
              <NavItem to="/collections/new">New Arrivals</NavItem>
            </div>
            <div className="group">
              <NavItem to="/collections/signature">Signature</NavItem>
            </div>
            <div className="group">
              <NavItem to="/collections/bags">Bags</NavItem>
            </div>
            <div className="group">
              <NavItem to="/collections/small-leather-goods">Small Leather Goods</NavItem>
            </div>
            <div className="group">
              <NavItem to="/stories">Stories</NavItem>
            </div>
          </nav>

          <button className="hidden md:block" aria-label="Search">
            <Search className="h-5 w-5 text-neutral-900" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-72 h-full bg-white border-r border-neutral-200 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <Link onClick={() => setOpen(false)} to="/collections/new" className="block uppercase text-sm tracking-wide text-neutral-900">New Arrivals</Link>
                <Link onClick={() => setOpen(false)} to="/collections/signature" className="block uppercase text-sm tracking-wide text-neutral-900">Signature</Link>
                <Link onClick={() => setOpen(false)} to="/collections/bags" className="block uppercase text-sm tracking-wide text-neutral-900">Bags</Link>
                <Link onClick={() => setOpen(false)} to="/collections/small-leather-goods" className="block uppercase text-sm tracking-wide text-neutral-900">Small Leather Goods</Link>
                <Link onClick={() => setOpen(false)} to="/stories" className="block uppercase text-sm tracking-wide text-neutral-900">Stories</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
