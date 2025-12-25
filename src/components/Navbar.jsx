import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

/**
 * Responsive Navigation Bar Component
 * Includes hamburger menu for mobile devices and language switcher
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">
              UNIMAK
            </Link>
          </div>

          {/* Desktop Navigation and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.nav.products}
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors border border-gray-300 flex items-center space-x-2"
              aria-label="Toggle language"
            >
              <span className="text-base">{language === 'en' ? '🇬🇧' : '🇹🇷'}</span>
              <span className="uppercase font-semibold">{language === 'en' ? 'EN' : 'TR'}</span>
            </button>
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher for Mobile */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors border border-gray-300 flex items-center space-x-1"
              aria-label="Toggle language"
            >
              <span className="text-base">{language === 'en' ? '🇬🇧' : '🇹🇷'}</span>
              <span className="uppercase font-semibold text-xs">{language === 'en' ? 'EN' : 'TR'}</span>
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.products}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

