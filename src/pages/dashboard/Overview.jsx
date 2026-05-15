


import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, } from "recharts";
import { DollarSign, Users, Zap, Wallet, Bell, Sun, } from "lucide-react";
import Legend from "../../components/overView/Legend";
import StockRow from "../../components/overView/StockRow";
import Card from "../../components/overView/Card";
import LiveKycAlerts from "../../components/overView/LiveKycAlerts";

/* ---------------- DATA ---------------- */

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

const mainData = [
    { name: "Mon", inflow: 4, outflow: 3, net: 1 },
    { name: "Tue", inflow: 4.8, outflow: 3.4, net: 1.3 },
    { name: "Wed", inflow: 3.9, outflow: 3.8, net: 0.1 },
    { name: "Thu", inflow: 5.2, outflow: 4.1, net: 1.1 },
    { name: "Fri", inflow: 4.5, outflow: 3.9, net: 0.6 },
    { name: "Sat", inflow: 3.1, outflow: 2.8, net: 0.3 },
    { name: "Sun", inflow: 5.8, outflow: 4.2, net: 1.6 },
];

/* ---------------- PAGE ---------------- */

export default function Dashboard() {
    return (
        <div>
            
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="ຍອດ AUM" value="$4.82B" change="+12.4%" positive spanText="vs ເດືອນກ່ອນ" icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="ລູກຄ້າທັງໝົດ" value="28,491" change="+8.7%" positive spanText="vs ອາທິດກ່ອນ" icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="ອໍເດີ ມື້ນີ້" value="1,243" change="-14" positive={false} spanText="vs ມື້ວານ" icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="COMMISSION" value="$963K" change="+5.2%" positive spanText="vs ເດືອນກ່ອນ" icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                {/* ===== MAIN SECTION ===== */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* ===== BIG CHART ===== */}
                    <div className="xl:col-span-2 bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white text-sm font-semibold">ປະລິມານການເງິນ</h3>
                                <p className="text-[11px] text-white/40">7 ມື້ (USD Billion)</p>
                            </div>

                            {/* FILTER */}
                            <div className="flex gap-2 text-xs bg-white/5 p-1 rounded-lg">
                                {["1D", "7D", "1M"].map((t) => (
                                    <button
                                        key={t}
                                        className={`px-3 py-1 rounded-md transition ${t === "7D"
                                            ? "bg-white/10 text-white"
                                            : "text-white/40 hover:bg-white/5"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* LEGEND */}
                        <div className="flex gap-6 text-xs mb-3">
                            <Legend color="#00ff9c" label="ເຂົ້າ" />
                            <Legend color="#ff4d6d" label="ອອກ" />
                            <Legend color="#3b82f6" label="Net" />
                        </div>

                        {/* CHART */}
                        <div className="h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={mainData}>
                                    <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="name" stroke="#ffffff40" />
                                    <YAxis stroke="#ffffff40" />
                                    <Tooltip />

                                    <Line type="monotone" dataKey="inflow" stroke="#00ff9c" strokeWidth={2} dot />
                                    <Line type="monotone" dataKey="outflow" stroke="#ff4d6d" strokeWidth={2} dot />
                                    <Line type="monotone" dataKey="net" stroke="#3b82f6" strokeWidth={2} dot strokeDasharray="4 4" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* ===== TOP STOCKS ===== */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                        <div className="flex justify-between mb-4">
                            <h3 className="text-white text-sm font-semibold">Top Stocks</h3>
                            <span className="text-xs text-blue-400 cursor-pointer">ດູທັງໝົດ →</span>
                        </div>

                        <div className="space-y-4">
                            <StockRow name="AAPL" company="Apple Inc." price="$178.52" change="+2.1%" positive />
                            <StockRow name="TSLA" company="Tesla Inc." price="$248.90" change="+8.3%" positive />
                            <StockRow name="NVDA" company="NVIDIA" price="$892.40" change="+3.5%" positive />
                            <StockRow name="AMZN" company="Amazon" price="$183.20" change="-0.8%" />
                            <StockRow name="MSFT" company="Microsoft" price="$415.60" change="+1.2%" positive />
                        </div>
                    </div>

                </div>
                {/* ===== LIVE KYC ALERTS ===== */}
                <LiveKycAlerts/>
            </div>
        </div>
    );
}



