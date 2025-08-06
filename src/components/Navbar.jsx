import { useState } from 'react'
import styled from 'styled-components'

const Brand = styled.span`
  font-weight: 700;
`

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#laboratorios', label: 'Laboratorios' },
    { href: '#casos', label: 'Casos de Estudio' },
    { href: '#talleres', label: 'Talleres' }
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Brand className="text-xl">janimariquesirami grupo #2</Brand>
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
