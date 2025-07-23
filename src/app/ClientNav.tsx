"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function ClientNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-purple-800 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Natasha Eagles
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((label) => {
            const href = label === 'Home' ? '/' : `/${label.toLowerCase()}`
            return (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-purple-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-purple-700 space-y-2 px-4 pb-4">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((label) => {
            const href = label === 'Home' ? '/' : `/${label.toLowerCase()}`
            return (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-2 hover:text-purple-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
