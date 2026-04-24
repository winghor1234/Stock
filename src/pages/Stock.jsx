import React, { useState } from "react";
import MiniChart from "../components/MiniChart";
import { generatePoints } from "../components/GeneratePoint";

const stocks = [
    {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 189.3,
        change: "+2.14%",
        high: 191.2,
        low: 186.8,
        volume: "58.4M",
        positive: true,
    },
    {
        symbol: "NVDA",
        name: "NVIDIA Corp.",
        price: 875.4,
        change: "+4.22%",
        high: 882.0,
        low: 840.1,
        volume: "42.1M",
        positive: true,
    },
    {
        symbol: "TSLA",
        name: "Tesla Inc.",
        price: 248.9,
        change: "-1.38%",
        high: 256.3,
        low: 245.0,
        volume: "91.7M",
        positive: false,
    },
    {
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: 415.2,
        change: "+0.87%",
        high: 418.5,
        low: 412.0,
        volume: "22.6M",
        positive: true,
    },
    {
        symbol: "AMZN",
        name: "Amazon.com Inc.",
        price: 186.7,
        change: "+1.03%",
        high: 188.9,
        low: 184.2,
        volume: "34.2M",
        positive: true,
    },
    {
        symbol: "GOOG",
        name: "Alphabet Inc.",
        price: 171.5,
        change: "+0.54%",
        high: 173.1,
        low: 169.8,
        volume: "18.9M",
        positive: true,
    },
    {
        symbol: "META",
        name: "Meta Platforms",
        price: 526.8,
        change: "-0.62%",
        high: 531.0,
        low: 522.5,
        volume: "27.3M",
        positive: false,
    },
    {
        symbol: "BRK.B",
        name: "Berkshire Hathaway",
        price: 452.6,
        change: "+0.31%",
        high: 454.0,
        low: 450.8,
        volume: "4.1M",
        positive: true,
    },
];

export default function Stock() {
    const tabs = ["ທັງໝົດ", "Technology", "Finance", "Energy", "Healthcare"];
    const [active, setActive] = useState("ທັງໝົດ");
    return (
        <section className="bg-[#041a13] text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="text-green-400 mb-2">ຕະຫຼາດ</p>
                    <h1 className="text-4xl font-bold mb-3">ຮຸ້ນທົ່ວໂລກ</h1>
                    <p className="text-gray-400">
                        ຄົ້ນຫາ ແລະ ລົງທຶນໃນ 1,200+ ຕົວ ຈາກ NYSE ແລະ NASDAQ
                    </p>
                </div>

                {/* FILTER + SEARCH */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">

                    {/* tabs */}
                    <div className="flex gap-3 bg-[#06251d] p-2 rounded-xl">

                        {tabs.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200  ${active === item
                                    ? "bg-green-500 text-black shadow-md"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }   `}
                            >
                                {item}
                            </button>
                        ))}

                    </div>


                    {/* search */}
                    <div className="flex items-center bg-[#06251d] px-4 py-2 rounded-xl w-[300px] border border-transparent  focus-within:border-green-400  focus-within:ring-2 focus-within:ring-green-400/20  focus-within:shadow-[0_0_20px_rgba(0,255,150,0.15)] transition-all duration-200">
                        <span className="text-gray-400 mr-2">🔍</span>
                        <input
                            type="text"
                            placeholder="ຄົ້ນຫາ..."
                            className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
                        />
                    </div>

                    {/* time */}
                    <div className="text-sm text-gray-400">
                        ອັບເດດ: 12:09:54 PM
                    </div>
                </div>

                {/* TABLE */}
                <div className="border border-green-500/10 rounded-2xl overflow-hidden">

                    {/* table header */}
                    <div className="grid grid-cols-7 text-gray-400 text-sm px-6 py-4 border-b border-white/5">
                        <div>ຮຸ້ນ</div>
                        <div>ລາຄາ</div>
                        <div>ປ່ຽນ (24H)</div>
                        <div>ສູງສຸດ</div>
                        <div>ຕ່ຳສຸດ</div>
                        <div>VOLUME</div>
                        <div>CHART</div>
                    </div>

                    {/* rows */}
                    {stocks.map((s, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-7 items-center px-6 py-5 border-b border-white/5 hover:bg-[#06251d]/40 transition"
                        >
                            {/* symbol */}
                            <div>
                                <p className="font-semibold">{s.symbol}</p>
                                <p className="text-gray-500 text-sm">{s.name}</p>
                            </div>

                            {/* price */}
                            <div>${s.price}</div>

                            {/* change */}
                            <div className={s.positive ? "text-green-400" : "text-red-400"}>
                                {s.change}
                            </div>

                            {/* high */}
                            <div>${s.high}</div>

                            {/* low */}
                            <div>${s.low}</div>

                            {/* volume */}
                            <div className="text-gray-400">{s.volume}</div>

                            {/* chart mock */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-between">
                                    <MiniChart positive={s.positive} points={generatePoints()} />
                                </div>
                                <button className="ml-4 px-3 py-1 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-500 hover:text-black transition">
                                     ເບິ່ງ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}