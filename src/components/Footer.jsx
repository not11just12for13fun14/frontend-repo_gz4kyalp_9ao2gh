export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Maison Élise. All rights reserved.</p>
          <nav className="flex gap-6 text-xs uppercase tracking-wide text-neutral-700">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Contact</a>
            <a href="#" className="hover:text-neutral-900">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
