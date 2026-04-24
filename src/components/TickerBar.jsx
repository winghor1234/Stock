import React from "react";

const data = [
    { symbol: "NVDA", price: "875.4", change: "+4.22%" },
    { symbol: "TSLA", price: "248.9", change: "-1.38%" },
    { symbol: "MSFT", price: "415.2", change: "+0.87%" },
    { symbol: "AMZN", price: "186.7", change: "+1.03%" },
    { symbol: "GOOG", price: "171.5", change: "+0.54%" },
    { symbol: "SPY", price: "524.6", change: "+1.24%" },
    { symbol: "QQQ", price: "443.8", change: "+2.07%" },
    { symbol: "META", price: "526.8", change: "-0.62%" },
];

export default function TickerBar() {
    return (
        <div className="bg-[#071a14] overflow-hidden border-y border-white/10">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...data, ...data].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-6 py-2 text-sm">
                        <span className="text-white font-medium">{item.symbol}</span>
                        <span className="text-gray-300">{item.price}</span>
                        <span
                            className={
                                item.change.includes("+")
                                    ? "text-green-400"
                                    : "text-red-400"
                            }
                        >
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}