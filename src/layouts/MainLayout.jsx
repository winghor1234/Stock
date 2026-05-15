import Header from "../components/Header"
import TickerBar from "../components/TickerBar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#020e17] text-white">
            {/* Top Promo Bar */}
            <div className="bg-gradient-to-r from-[#0b5d3b] via-[#08a863] to-[#084d31] text-white text-sm text-center py-2">
                🎉 ເປີດບັນຊີໃໝ່ — ຮັບເງິນທຶນສູງສຸດເຖິງ 500,000 ກີບ ຟຣີ!
                <span className="ml-2 underline cursor-pointer">
                    ເລີ່ມດຽວນີ້ →
                </span>
            </div>
            {/* Header */}
            <Header />
            {/* Stock Ticker */}
            <TickerBar />
            {/* Page Content */}
            <main>
                {children}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}