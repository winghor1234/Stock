import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import DataTable from "../../components/DataTable";

/* ---------------- DATA ---------------- */

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
];

export default function Marketting() {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="S&P 500" value="$5.821.2" change="+0.4%" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="DOW JONES" value="29,491" change="+0.7%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="NASDAQ" value="15,243" change="-0.55" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="VIX (FEAR)" value="14.54" change="+5.2%" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                {/* ===== CHART SECTION ===== */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* ===== LEFT ===== */}
                    <div className="xl:col-span-2 bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white text-[12px] font-semibold">
                                    S&P 500 ການ Intraday
                                </h3>
                                <p className="text-[10px] text-white/40">
                                    30 Apr 2026 · NYSE
                                </p>
                            </div>

                            <div className="flex gap-2 text-[10px] bg-white/5 p-1 rounded-lg">
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
                                    <defs>
                                        <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#00ff9c" stopOpacity={0.25} />
                                            <stop offset="100%" stopColor="#00ff9c" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>

                                    <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />

                                    <XAxis
                                        dataKey="time"
                                        stroke="#ffffff40"
                                        tick={{ fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <YAxis
                                        stroke="#ffffff40"
                                        tick={{ fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <Tooltip
                                        contentStyle={{
                                            background: "#02140f",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "10px",
                                            fontSize: "10px",
                                        }}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#00ff9c"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 5 }}
                                        fill="url(#marketFill)"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* ===== RIGHT ===== */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                Sector Performance
                            </h3>
                            <p className="text-[10px] text-white/40">
                                ປະຈຸບັນ (%)
                            </p>
                        </div>

                        <div className="h-[280px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={sectorData}>

                                    <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />

                                    <XAxis
                                        dataKey="name"
                                        stroke="#ffffff40"
                                        tick={{ fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                        angle={-20}
                                        textAnchor="end"
                                    />

                                    <YAxis
                                        stroke="#ffffff40"
                                        tick={{ fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                        domain={[-1, 4]}
                                    />

                                    <Tooltip
                                        contentStyle={{
                                            background: "#02140f",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "10px",
                                            fontSize: "10px",
                                        }}
                                    />

                                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                        {sectorData.map((entry, i) => (
                                            <Cell
                                                key={i}
                                                fill={entry.value >= 0 ? "#00ff9c" : "#ff4d6d"}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* ===== TABLE ===== */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    <div className="mb-4">
                        <h3 className="text-white text-[12px] font-semibold">
                            ຕະຫຼາດຫຸ້ນ US
                        </h3>
                        <p className="text-[10px] text-white/40">
                            NYSE / NASDAQ Real-time
                        </p>
                    </div>

                    <DataTable data={stocks} />
                </div>

            </div>
        </div>
    );
}