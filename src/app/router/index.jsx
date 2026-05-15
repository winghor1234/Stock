import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "../../pages/Home"
import Stock from "../../pages/Stock"
import ETF from "../../pages/ETF"
import Wealth from "../../pages/Wealth"
import News from "../../pages/News"
import AboutUs from "../../pages/AboutUs"
import MainLayout from "../../layouts/MainLayout"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* CLIENT WEBSITE */}
                <Route path="/" element={<MainLayout />}>
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="stock"
                        element={<Stock />}
                    />
                    <Route
                        path="etf"
                        element={<ETF />}
                    />
                    <Route
                        path="wealth"
                        element={<Wealth />}
                    />
                    <Route
                        path="news"
                        element={<News />}
                    />
                    <Route
                        path="about"
                        element={<AboutUs />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter