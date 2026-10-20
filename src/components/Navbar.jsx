import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Características', href: '#features' },
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/85 backdrop-blur-xl border-b border-brand shadow-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/infraeye-logo-512.png"
              alt="InfraEye"
              className="w-9 h-9 rounded-full ring-1 ring-mint/25 shadow-glow-mint"
            />
            <img
              src="/infraeye-texto-fondo-oscuro.png"
              alt="InfraEye"
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cloud-muted hover:text-cloud hover:bg-navy-600/60 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-brand-gradient text-navy-800 rounded-lg font-semibold text-sm shadow-glow-mint hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Comenzar
            </a>
          </div>

          <button
            className="md:hidden p-2 text-cloud"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-brand">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-cloud-muted hover:text-cloud transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-brand-gradient text-navy-800 rounded-lg font-semibold text-center shadow-glow-mint"
              onClick={() => setIsOpen(false)}
            >
              Comenzar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
