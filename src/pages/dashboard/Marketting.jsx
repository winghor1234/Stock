import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";

const intradayData = [
    { time: "9AM", value: 5280 },
    { time: "10AM", value: 5285 },
    { time: "11AM", value: 5278 },
    { time: "12PM", value: 5292 },
    { time: "1PM", value: 5288 },
    { time: "2PM", value: 5295 },
    { time: "3PM", value: 5302 },
    { time: "3:30PM", value: 5298 },
    { time: "4PM", value: 5308 },
];

const sectorData = [
    { name: "Tech", value: 3.2 },
    { name: "Finance", value: 1.1 },
    { name: "Energy", value: -0.5 },
    { name: "Health", value: 0.8 },
    { name: "Consumer", value: 1.4 },
    { name: "Utilities", value: -0.2 },
    { name: "Materials", value: 0.6 },
];

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];


const stocks = [
    { Ticker: "AAPL", ຊື່ບໍລິສັດ: "Apple Inc.", ລາຄາ: 178.52, open: 175.2, high: 179.8, low: 174.9, volume: "24.3M", change: 2.1 },
    { Ticker: "TSLA", ຊື່ບໍລິສັດ: "Tesla Inc.", ລາຄາ: 248.9, open: 230.4, high: 251.2, low: 228.8, volume: "18.7M", change: 8.3 },
    { Ticker: "NVDA", ຊື່ບໍລິສັດ: "NVIDIA Corp.", ລາຄາ: 892.4, open: 862.1, high: 895.6, low: 858.9, volume: "15.2M", change: 3.5 },
    { Ticker: "AMZN", ຊື່ບໍລິສັດ: "Amazon.com", ລາຄາ: 183.2, open: 184.6, high: 185.1, low: 182.4, volume: "12.1M", change: -0.8 },
    { Ticker: "MSFT", ຊື່ບໍລິສັດ: "Microsoft", ລາຄາ: 415.6, open: 410.8, high: 417.2, low: 409.9, volume: "9.8M", change: 1.2 },
    { Ticker: "GOOGL", ຊື່ບໍລິສັດ: "Alphabet", ລາຄາ: 172.5, open: 173.1, high: 174.8, low: 171.2, volume: "8.4M", change: -0.3 },
    { Ticker: "META", ຊື່ບໍລິສັດ: "Meta Platforms", ລາຄາ: 511.3, open: 497.2, high: 514.6, low: 495.8, volume: "7.9M", change: 2.8 },
    { Ticker: "JPM", ຊື່ບໍລິສັດ: "JPMorgan Chase", ລາຄາ: 212.3, open: 210.4, high: 213.8, low: 209.9, volume: "6.2M", change: 0.9 },
];


export default function Marketting() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="S&P 500" value="$5.821.2" change="+0.4%" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="DOWM JONES" value="29,491" change="+0.7%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="NASDAQ" value="15,243" change="-0.55" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="VIX (FEAR INDEX)" value="$963K" change="+5.2%" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>
                {/* chart */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* ===== LEFT BIG CHART ===== */}
                    <div className="xl:col-span-2 bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-semibold">
                                    S&P 500 ການ Intraday
                                </h3>
                                <p className="text-xs text-white/40">
                                    30 Apr 2026 · NYSE
                                </p>
                            </div>

                            {/* FILTER */}
                            <div className="flex gap-2 text-xs bg-white/5 p-1 rounded-lg">
                                {["1D", "5D", "1M"].map((t) => (
                                    <button
                                        key={t}
                                        className={`px-3 py-1 rounded-md transition ${t === "1D"
                                            ? "bg-white/10 text-white"
                                            : "text-white/40 hover:bg-white/5"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CHART */}
                        <div className="h-[280px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={intradayData}>

                                    {/* gradient */}
                                    <defs>
                                        <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#00ff9c" stopOpacity={0.25} />
                                            <stop offset="100%" stopColor="#00ff9c" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>

                                    <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />

                                    <XAxis
                                        dataKey="time"
                                        stroke="#ffffff30"
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <YAxis
                                        stroke="#ffffff30"
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <Tooltip
                                        contentStyle={{
                                            background: "#02140f",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "10px",
                                        }}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#00ff9c"
                                        strokeWidth={2.5}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 5 }}
                                        style={{
                                            filter: "drop-shadow(0 0 6px #00ff9c)"
                                        }}
                                        fill="url(#marketFill)"
                                    />

                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* ===== RIGHT BAR CHART ===== */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="mb-4">
                            <h3 className="text-white font-semibold">
                                Sector Performance
                            </h3>
                            <p className="text-xs text-white/40">ປະຈຸບັນ (%)</p>
                        </div>

                        {/* BAR CHART */}
                        <div className="h-[280px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={sectorData}>

                                        {/* GRID */}
                                        <CartesianGrid
                                            stroke="rgba(255,255,255,0.04)"
                                            vertical={false}
                                        />

                                        {/* X AXIS */}
                                        <XAxis
                                            dataKey="name"
                                            stroke="#FFFFFF"
                                            tickLine={false}
                                            axisLine={false}
                                            angle={-20}
                                            textAnchor="end"
                                            tick={{ fontSize: 12 }}
                                        />

                                        {/* Y AXIS */}
                                        <YAxis
                                            stroke="#FFFFFF"
                                            tickLine={false}
                                            axisLine={false}
                                            tick={{ fontSize: 12 }}
                                            domain={[-1, 4]}
                                        />

                                        {/* TOOLTIP */}
                                        <Tooltip
                                            contentStyle={{
                                                background: "#171616",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#FFFFFF",
                                                fontSize: "12px",

                                            }}
                                            labelStyle={{ color: "#FFFFFF" }}
                                            itemStyle={{ color: "#FFFFFF" }}
                                        />

                                        {/* BAR */}
                                        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                            {sectorData.map((entry, index) => (
                                                <Cell
                                                    key={index}
                                                    fill={
                                                        entry.value >= 0
                                                            ? "#00ff9c"   // เขียว
                                                            : "#ff4d6d"   // แดง
                                                    }
                                                />
                                            ))}
                                        </Bar>

                                    </BarChart>
                                </ResponsiveContainer>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                    {/* HEADER */}
                    <div className="mb-4">
                        <h3 className="text-white font-semibold text-lg">
                            ຕະຫຼາດຫຸ້ນ US
                        </h3>
                        <p className="text-xs text-white/40">
                            NYSE / NASDAQ Real-time
                        </p>
                    </div>

                    {/* TABLE */}
                    <DataTable data={stocks} />

                </div>


            </div>
        </div>
    );
}



