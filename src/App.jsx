import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import TickerBar from './components/TickerBar';
import AboutUs from './pages/AboutUs';
import ETF from './pages/ETF';
import Home from './pages/Home';
import News from './pages/News';
import Stock from './pages/Stock';
import Wealth from './pages/Wealth';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Top Promo Bar */}
      <div className="bg-gradient-to-r from-[#0b5d3b] via-[#08a863] to-[#084d31] text-white text-sm text-center py-2">
        🎉 ເປີດບັນຊີໃໝ່ — ຮັບເງິນທຶນສູງສຸດເຖິງ 500,000 ກີບ ຟຣີ!
        <span className="ml-2 underline cursor-pointer">
          ເລີ່ມດຽວນີ້ →
        </span>
      </div>
      <Header />
      <TickerBar />
      <main>
        <section id="home" className="scroll-mt-24"><Home /></section>
        <section id="stock" className="scroll-mt-24"><Stock /></section>
        <section id="etf" className="scroll-mt-24"><ETF /></section>
        <section id="wealth" className="scroll-mt-24"><Wealth /></section>
        <section id="news" className="scroll-mt-24"><News /></section>
        <section id="about" className="scroll-mt-24"><AboutUs /></section>
      </main>

      <Footer />
    </div>
  );
}