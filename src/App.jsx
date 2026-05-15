import { BrowserRouter, Routes, Route,} from "react-router-dom"
import Home from "./pages/Home"
import Stock from "./pages/Stock"
import ETF from "./pages/ETF"
import Wealth from "./pages/Wealth"
import News from "./pages/News"
import AboutUs from "./pages/AboutUs"
import MainLayout from "./layouts/MainLayout"

function LandingPage() {
  return (
    <MainLayout>
      <section id="home" className="scroll-mt-24">
        <Home />
      </section>
      <section id="stock" className="scroll-mt-24">
        <Stock />
      </section>
      <section id="etf" className="scroll-mt-24">
        <ETF />
      </section>
      <section id="wealth" className="scroll-mt-24">
        <Wealth />
      </section>
      <section id="news" className="scroll-mt-24">
        <News />
      </section>
      <section id="about" className="scroll-mt-24">
        <AboutUs />
      </section>
    </MainLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Website */}
        <Route
          path="/"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App