"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Bar,
    ComposedChart,
    CartesianGrid,
    Area,
} from "recharts"
import { Bell, Settings, BarChart3 } from "lucide-react"


const chartData = [
    { name: "ຈ", buy: 3.5, sell: 3.2, net: 2.8 },
    { name: "ອ", buy: 4.2, sell: 3.5, net: 3.1 },
    { name: "ພ", buy: 5.1, sell: 3.3, net: 3.0 },
    { name: "ພຫ", buy: 4.8, sell: 3.8, net: 3.3 },
    { name: "ສ", buy: 6.2, sell: 3.6, net: 3.9 },
]


export default function Overview() {
    return (
        <div className="bg-[#041b14] space-y-6">

            {/* STATS */}
            <div className="grid md:grid-cols-4 gap-4 ">

                {[
                    {
                        title: "ມູນຄ່າພອດ",
                        value: "₭ 4.82B",
                        change: "+12.4%",
                        icon: "💰"
                    },
                    {
                        title: "ຜູ້ໃຊ້ ACTIVE",
                        value: "28,491",
                        change: "+8.7%",
                        icon: "👤"
                    },
                    {
                        title: "ຄຳສັ່ງ",
                        value: "1,243",
                        change: "-14%",
                        icon: "⚡"
                    },
                    {
                        title: "COMMISSION",
                        value: "₭ 963M",
                        change: "+5.2%",
                        icon: "📈"
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="  relative rounded-2xl p-5  bg-gradient-to-br from-[#06251d] via-[#041b14] to-[#020f0a]  border border-green-900/30  shadow-[0_10px_30px_rgba(0,255,150,0.05)]  overflow-hidden "
                    >

                        {/* GLOW */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />

                        {/* ICON */}
                        <div className="  w-10 h-10 flex items-center justify-center  rounded-xl mb-3  bg-green-500/10 border border-green-400/20  text-green-300  ">
                            {item.icon}
                        </div>

                        {/* TITLE */}
                        <p className="text-green-400/60 text-sm tracking-wide">
                            {item.title}
                        </p>

                        {/* VALUE */}
                        <h2 className="text-2xl font-semibold text-green-300 mt-2">
                            {item.value}
                        </h2>

                        {/* CHANGE */}
                        <p className={`text-sm mt-1 flex items-center gap-1 ${item.change.includes("+")
                            ? "text-green-400"
                            : "text-red-400"
                            }`}>
                            {item.change}
                            <span className="text-green-400/40 text-xs">vs ມື້ວານ</span>
                        </p>

                    </div>
                ))}

            </div>

            {/* MAIN */}
            <div className="grid md:grid-cols-3 gap-4">
                {/* LEFT Chart */}


                <div className=" col-span-2 rounded-2xl p-5 bg-gradient-to-br from-[#052e22] via-[#031a13] to-[#020f0a] border border-green-900/40 shadow-[inset_0_1px_0_rgba(0,255,150,0.05),0_10px_40px_rgba(0,255,150,0.08)] relative overflow-hidden">

                    {/* SOFT OVERLAY */}
                    <div className="absolute  inset-0  bg-[radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.12),transparent_60%)]" />

                    {/* HEADER */}
                    <div className="flex justify-between mb-4 relative z-10">
                        <div>
                            <h3 className="text-green-200 font-semibold">
                                ປະລິມານການຊື້-ຂາຍ
                            </h3>
                            <p className="text-xs text-green-400/50">
                                ລະດັບ 7 ວັນຫຼ້າສຸດ
                            </p>
                        </div>

                        <div className="flex gap-2 text-xs">
                            {["1D", "7D", "1M", "3M"].map((t) => (
                                <button
                                    key={t}
                                    className={` px-3 py-1 rounded-lg border ${t === "7D"
                                        ? "bg-green-500/20 text-green-300 border-green-400"
                                        : "bg-white/5 text-green-400/40 border-transparent"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* LEGEND */}
                    <div className="flex gap-4 text-xs text-green-300/70 mb-3 relative z-10">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                            <span>ຊື້</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                            <span>ຂາຍ</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
                            <span>Net</span>
                        </div>
                    </div>

                    {/* CHART */}
                    <div className="border-2 border-red-500 h-[260px] relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={chartData}>

                                {/* GRID (horizontal only) */}
                                <CartesianGrid
                                    stroke="rgba(34,197,94,0.08)"
                                    vertical={false}
                                />

                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#4ade80", fontSize: 12 }}
                                />

                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#4ade80", fontSize: 12 }}
                                />

                                {/* TOOLTIP */}
                                <Tooltip
                                    cursor={false}
                                    contentStyle={{
                                        background: "#020f0a",
                                        border: "1px solid rgba(34,197,94,0.2)",
                                        borderRadius: "12px",
                                        color: "#4ade80",
                                    }}
                                />

                                {/* BAR */}
                                <Bar
                                    dataKey="net"
                                    fill="#60a5fa22"
                                    radius={[6, 6, 0, 0]}
                                />

                                {/* AREA GRADIENT */}
                                <defs>
                                    <linearGradient id="buyFill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                {/* AREA */}
                                <Area
                                    type="monotone"
                                    dataKey="buy"
                                    stroke="none"
                                    fill="url(#buyFill)"
                                />

                                {/* GLOW LINE (layer 1 blur) */}
                                <Line
                                    type="monotone"
                                    dataKey="buy"
                                    stroke="#22c55e"
                                    strokeWidth={6}
                                    opacity={0.2}
                                    dot={false}
                                />

                                {/* MAIN LINE */}
                                <Line
                                    type="monotone"
                                    dataKey="buy"
                                    stroke="#22c55e"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{
                                        r: 6,
                                        fill: "#22c55e",
                                        stroke: "#022c22",
                                        strokeWidth: 2,
                                    }}
                                />

                                {/* SELL */}
                                <Line
                                    type="monotone"
                                    dataKey="sell"
                                    stroke="#ef4444"
                                    strokeDasharray="5 5"
                                    strokeWidth={2}
                                    dot={false}
                                />

                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* TOP STOCK */}
                <div className=" rounded-2xl p-4 bg-gradient-to-br from-[#052e22] via-[#031a13] to-[#020f0a] border border-green-900/40 shadow-[inset_0_1px_0_rgba(0,255,150,0.05),0_10px_40px_rgba(0,255,150,0.08)] relative overflow-hidden">

                    {/* SOFT GLOW */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.12),transparent_60%)]" />

                    {/* HEADER */}
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <h3 className="font-semibold text-green-200">Top ຫຸ້ນ</h3>
                            <p className="text-sm text-green-400/50">ຕາມມູນຄ່າການຊື້ຂາຍ</p>
                        </div>

                        <span className="text-green-400 text-sm cursor-pointer hover:text-green-300">
                            ເບິ່ງທັງໝົດ →
                        </span>
                    </div>

                    {/* TABLE HEADER */}
                    <div className=" grid grid-cols-[40px_1fr_120px_100px_100px] text-xs text-green-400/50 pb-2 border-b border-green-900/40 relative z-10 ">
                        <div></div>
                        <div>ຊື່</div>
                        <div className="text-right">ລາຄາ</div>
                        <div className="text-right">% ປ່ຽນ</div>
                        <div className="text-right">Vol</div>
                    </div>

                    {/* BODY */}
                    <div className="relative z-10">

                        {[
                            { name: "BCEL", sub: "ທະນາຄານການຄ້າ", price: "8,200 K", change: "+3.8%", vol: "18.4M" },
                            { name: "EDL", sub: "ໄຟຟ້າລາວ", price: "3,150 K", change: "-1.2%", vol: "12.1M" },
                            { name: "LSCO", sub: "ຊີມັງລາວ", price: "5,400 K", change: "+2.1%", vol: "9.8M" },
                            { name: "MPTL", sub: "ໂທລະຄົມ", price: "2,800 K", change: "+0.7%", vol: "7.3M" },
                            { name: "LVB", sub: "ທະນາຄານວຽງຈັນ", price: "4,100 K", change: "-2.4%", vol: "5.9M" },
                        ].map((stock, i) => (
                            <div
                                key={i}
                                className="  grid grid-cols-[40px_1fr_120px_100px_100px]  items-center py-3 text-sm  border-b border-green-900/30  hover:bg-green-500/5  transition  "
                            >

                                {/* INDEX */}
                                <div className="text-green-400/40">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                {/* NAME */}
                                <div>
                                    <p className="font-medium text-green-300">{stock.name}</p>
                                    <p className="text-xs text-green-400/40">{stock.sub}</p>
                                </div>

                                {/* PRICE */}
                                <div className="text-right text-green-200 font-medium">
                                    {stock.price}
                                </div>

                                {/* CHANGE */}
                                <div className={`text-right font-medium ${stock.change.includes("+")
                                    ? "text-green-400"
                                    : "text-red-400"
                                    }`}>
                                    {stock.change}
                                </div>

                                {/* VOLUME */}
                                <div className="text-right text-green-400/40">
                                    {stock.vol}
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

            <div className="grid md:grid-cols-3 gap-4">

                {/* ================= LIVE ================= */}
                <div className="  rounded-2xl p-4  bg-gradient-to-br from-[#052e22] via-[#031a13] to-[#020f0a]  border border-green-900/40  shadow-[inset_0_1px_0_rgba(0,255,150,0.05)] ">

                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className="text-green-200 font-semibold">ຄຳສັ່ງ Live</h3>
                            <p className="text-xs text-green-400/50">Realtime stream</p>
                        </div>
                        <span className="text-green-400 text-xs flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            LIVE
                        </span>
                    </div>

                    <div className="space-y-3 text-sm">

                        {[
                            { type: "BUY", name: "BCEL", price: "500 ຫຸ້ນ · ₭8,200", profit: "+₭4.1M" },
                            { type: "SELL", name: "EDL", price: "300 ຫຸ້ນ · ₭3,150", profit: "-₭945K" },
                            { type: "BUY", name: "LSCO", price: "1,000 ຫຸ້ນ · ₭5,400", profit: "+₭5.4M" },
                            { type: "SELL", name: "MPTL", price: "200 ຫຸ້ນ · ₭2,800", profit: "-₭560K" },
                            { type: "BUY", name: "LVB", price: "750 ຫຸ້ນ · ₭4,100", profit: "+₭3.1M" },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <span className={`px-2 py-1 text-xs rounded-md border ${item.type === "BUY"
                                        ? "bg-green-500/10 text-green-400 border-green-400/30"
                                        : "bg-red-500/10 text-red-400 border-red-400/30"
                                        }`}>
                                        {item.type}
                                    </span>

                                    <div>
                                        <p className="text-green-200 font-medium">{item.name}</p>
                                        <p className="text-xs text-green-400/40">{item.price}</p>
                                    </div>

                                </div>

                                <p className={`font-medium ${item.profit.includes("+") ? "text-green-400" : "text-red-400"
                                    }`}>
                                    {item.profit}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>


                {/* ================= STATS ================= */}
                <div className=" rounded-2xl p-4 bg-gradient-to-br from-[#052e22] via-[#031a13] to-[#020f0a] border border-green-900/40  ">

                    <div className="flex justify-between mb-4">
                        <div>
                            <h3 className="text-green-200 font-semibold">ສະຖິຕິຜູ້ໃຊ້</h3>
                            <p className="text-xs text-green-400/50">ປີ 2026</p>
                        </div>
                        <span className="text-green-400 text-xs cursor-pointer">
                            ລາຍລະອຽດ →
                        </span>
                    </div>

                    <div className="space-y-4 text-sm">

                        {[
                            { label: "ຜູ້ໃຊ້ທັງໝົດ", value: "142,890", width: "100%", color: "bg-green-400" },
                            { label: "Verified KYC", value: "102,882", width: "80%", color: "bg-green-400" },
                            { label: "ລໍຖ້າ KYC", value: "8,241", width: "40%", color: "bg-yellow-400" },
                            { label: "ເພີ່ມໃໝ່", value: "+384", width: "60%", color: "bg-blue-400" },
                            { label: "Suspend", value: "127", width: "10%", color: "bg-red-400" },
                        ].map((item, i) => (
                            <div key={i}>

                                <div className="flex justify-between mb-1">
                                    <span className="text-green-400/60">{item.label}</span>
                                    <span className="text-green-200 font-medium">{item.value}</span>
                                </div>

                                <div className="w-full h-1.5 bg-green-900/40 rounded-full overflow-hidden">
                                    <div
                                        className={`${item.color} h-full`}
                                        style={{ width: item.width }}
                                    />
                                </div>

                            </div>
                        ))}

                    </div>
                </div>


                {/* ================= ALERT ================= */}
                <div className=" rounded-2xl p-4 bg-gradient-to-br from-[#052e22] via-[#031a13] to-[#020f0a] border border-green-900/40 ">

                    <div className="flex justify-between mb-4">
                        <h3 className="text-green-200 font-semibold">ແຈ້ງເຕືອນ</h3>
                        <span className="text-red-400 text-xs border border-red-400/30 px-2 py-0.5 rounded-full">
                            3 ລາຍການ
                        </span>
                    </div>

                    <div className="space-y-4 text-sm">

                        {[
                            { text: "BCEL ມູນຄ່າພຸ່ງສູງ", type: "warn" },
                            { text: "KYC ຍັງບໍ່ຄົບ", type: "warn" },
                            { text: "Server Load 89%", type: "error" },
                            { text: "API ອັບເດດ", type: "info" },
                            { text: "Backup ສຳເລັດ", type: "success" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">

                                <div className={`w-7 h-7 flex items-center justify-center rounded-full text-xs border ${item.type === "warn" && "text-yellow-400 border-yellow-400/30"
                                    } ${item.type === "error" && "text-red-400 border-red-400/30"
                                    } ${item.type === "info" && "text-blue-400 border-blue-400/30"
                                    } ${item.type === "success" && "text-green-400 border-green-400/30"
                                    }`}>
                                    !
                                </div>

                                <div>
                                    <p className="text-green-200">{item.text}</p>
                                    <p className="text-xs text-green-400/40">09:31</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}