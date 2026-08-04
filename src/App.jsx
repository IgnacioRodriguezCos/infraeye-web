import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BrandManualPage from './pages/BrandManualPage'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Routes>
        <Route
          path="/manual-de-marca"
          element={<BrandManualPage />}
        />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <CTA />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App