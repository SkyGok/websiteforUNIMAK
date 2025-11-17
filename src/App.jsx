import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

/**
 * Main App Component
 * Sets up React Router and renders all pages with navigation
 * Using HashRouter for GitHub Pages compatibility
 */
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

