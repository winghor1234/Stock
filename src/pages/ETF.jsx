import React from "react";

/* ===== MINI CHART ===== */
const MiniChart = ({ positive = true }) => {
    const color = positive ? "#22c55e" : "#ef4444";

    // random realistic line
    const generatePoints = () => {
        let points = [];
        let y = positive ? 30 : 10;

        for (let i = 0; i <= 100; i += 10) {
            y += (Math.random() - 0.5) * 8;
            points.push(`${i},${y}`);
        }

        return points.join(" ");
    };

    return (
        <svg width="100%" height="40" viewBox="0 0 100 40">
            <polyline
                fill="none"
                stroke={color}
                strokeWidth="2"
                points={generatePoints()}
            />
        </svg>
    );
};

/* ===== DATA ===== */
const etfs = [
    {
        symbol: "SPY",
        name: "SPDR S&P 500 ETF Trust",
        price: 524.6,
        change: "+1.24%",
        positive: true,
        aum: "$503B",
        tag: "INDEX",
    },
    {
        symbol: "QQQ",
        name: "Invesco Nasdaq-100 ETF",
        price: 443.8,
        change: "+2.07%",
        positive: true,
        aum: "$212B",
        tag: "TECH",
    },
    {
        symbol: "VTI",
        name: "Vanguard Total Market ETF",
        price: 247.3,
        change: "+0.91%",
        positive: true,
        aum: "$380B",
        tag: "INDEX",
    },
    {
        symbol: "GLD",
        name: "SPDR Gold Shares ETF",
        price: 218.4,
        change: "-0.33%",
        positive: false,
        aum: "$57B",
        tag: "GOLD",
    },
    {
        symbol: "ARKK",
        name: "ARK Innovation ETF",
        price: 52.7,
        change: "+3.18%",
        positive: true,
        aum: "$7B",
        tag: "GROWTH",
    },
    {
        symbol: "VWO",
        name: "Vanguard Emerging Markets",
        price: 43.9,
        change: "+0.66%",
        positive: true,
        aum: "$82B",
        tag: "EM",
    },
];

export default function ETF() {
    return (
        <section className="bg-[#020d09] text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-14">
                    <p className="text-green-400 mb-2 tracking-widest text-sm">
                        ETF
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Exchange Traded Funds
                    </h1>

                    <p className="text-gray-400 max-w-xl">
                        ກະຈາຍຄວາມສ່ຽງ ດ້ວຍ ETF ທີ່ຄັດເລືອກ — ເລີ່ມ $1
                    </p>
                </div>

                {/* GRID (modern tighter) */}
                <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {etfs.map((item, i) => (
                        <div
                            key={i}
                            className="group relative p-6 rounded-3xl 
                            bg-white/5 backdrop-blur-xl border border-white/10 
                            hover:border-green-400/40 
                            hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
                            transition-all duration-300"
                        >

                            {/* TAG */}
                            <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">
                                {item.tag}
                            </div>

                            {/* SYMBOL */}
                            <h3 className="text-xl font-bold mb-1 group-hover:text-green-300 transition">
                                {item.symbol}
                            </h3>

                            {/* NAME */}
                            <p className="text-gray-400 text-sm mb-5 line-clamp-2">
                                {item.name}
                            </p>

                            {/* PRICE */}
                            <p className="text-3xl font-semibold mb-1">
                                ${item.price.toFixed(2)}
                            </p>

                            {/* CHANGE */}
                            <p
                                className={`mb-3 text-sm font-medium ${item.positive
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }`}
                            >
                                {item.change}
                            </p>

                            {/* 🔥 MINI GRAPH */}
                            <div className="mb-4">
                                <MiniChart positive={item.positive} />
                            </div>

                            {/* AUM */}
                            <p className="text-gray-500 text-xs">
                                AUM {item.aum}
                            </p>

                        </div>
                    ))}

                </div>
            </div>

            {/* ===== CTA ===== */}
            <div className="mt-16 max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 
                p-8 rounded-3xl border border-white/10 
                bg-gradient-to-r from-[#06251d] to-[#02140f]
                hover:border-green-400/30 transition">

                    <div>
                        <p className="text-green-400 text-sm mb-2">
                            ອັດຕະໂນມັດ
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            ລົງທຶນ ETF ດ້ວຍ DCA
                        </h2>

                        <p className="text-gray-400 text-sm">
                            Dividend Reinvestment ອັດຕະໂນມັດ — ເຮັດໃຫ້ເງິນເຕີບໂຕໄວ
                        </p>
                    </div>

                    <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-medium 
                    hover:bg-green-400 transition 
                    shadow-[0_0_20px_rgba(34,197,94,0.25)]">
                        ຕັ້ງຄ່າ DRIP →
                    </button>

                </div>

            </div>
        </section>
    );
}