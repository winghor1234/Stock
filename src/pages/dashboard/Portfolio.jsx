import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

const portfolios = [
    { rank: 1, name: "David Kim", aum: 1240000, pnl: 31.5, positions: 48, margin: 42, risk: "normal" },
    { rank: 2, name: "Lisa A.", aum: 631000, pnl: 22.1, positions: 31, margin: 38, risk: "normal" },
    { rank: 3, name: "Corp XYZ", aum: 520000, pnl: 18.4, positions: 22, margin: 61, risk: "warning" },
    { rank: 4, name: "Fund ABC", aum: 480000, pnl: 12.8, positions: 19, margin: 72, risk: "warning" },
    { rank: 5, name: "John T.", aum: 284000, pnl: 12.4, positions: 14, margin: 28, risk: "normal" },
];

const sectorData = [
    { name: "Technology", value: 42 },
    { name: "Financials", value: 18 },
    { name: "Consumer", value: 14 },
    { name: "Healthcare", value: 12 },
    { name: "Energy", value: 8 },
    { name: "Other", value: 6 },
];

const COLORS = ["#00ff9c", "#3b82f6", "#facc15", "#a78bfa", "#ef4444", "#64748b"];

const holdings = [
    { ticker: "AAPL", value: 842, percent: 17.5, pnl: 94, direction: "long" },
    { ticker: "NVDA", value: 712, percent: 14.8, pnl: 128, direction: "long" },
    { ticker: "MSFT", value: 634, percent: 13.2, pnl: 82, direction: "long" },
    { ticker: "TSLA", value: 421, percent: 8.7, pnl: 48, direction: "long" },
    { ticker: "AMZN", value: 318, percent: 6.6, pnl: -12, direction: "short" },
];

export default function Portfolio() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="AUM ລວມ" value="$4.82B" change="+$231M ເດືອນນີ້" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="P&L ລວມ" value="+$418M" change="+9.5%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="Unrealized P&L" value="+$89.2M" change="-1.9%" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="Positions Open" value="8,421" change="Across 142K accounts" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                {/* ===== PORTFOLIO CARDS ===== */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* LEFT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                AUM ຕາມພາກສ່ວນ
                            </h3>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-[260px] h-[260px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={sectorData} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={3}>
                                            {sectorData.map((entry, index) => (
                                                <Cell key={index} fill={COLORS[index]} />
                                            ))}
                                        </Pie>

                                        <Tooltip
                                            contentStyle={{
                                                background: "#02140f",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "10px",
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-2 text-[10px]">
                                {sectorData.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm" style={{ background: COLORS[i] }} />
                                        <span className="text-white/70">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                Top Holdings
                            </h3>
                            <p className="text-[10px] text-white/40">
                                ຮຸ້ນທີ່ຖືຫຼາຍສຸດ
                            </p>
                        </div>

                        <table className="w-full text-[12px]">
                            <thead>
                                <tr className="text-white/40 text-[10px] border-b border-white/5">
                                    <th className="text-left py-3">TICKER</th>
                                    <th className="text-right">ມູນຄ່າ</th>
                                    <th className="text-right">% AUM</th>
                                    <th className="text-right">P&L</th>
                                    <th className="text-right">DIRECTION</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/5">
                                {holdings.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.03] transition">
                                        <td className="py-3 text-white font-medium">{row.ticker}</td>
                                        <td className="text-right text-yellow-400 font-medium">${row.value}M</td>
                                        <td className="text-right text-white/70">{row.percent}%</td>
                                        <td className={`text-right ${row.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {row.pnl >= 0 ? "+" : ""}${row.pnl}M
                                        </td>
                                        <td className="text-right">
                                            <span className={`px-2 py-1 rounded text-[10px] ${row.direction === "long"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-red-500/10 text-red-400"
                                                }`}>
                                                {row.direction}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* ===== TABLE ===== */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                    <div className="mb-4">
                        <h3 className="text-white text-[12px] font-semibold">
                            Portfolio ລູກຄ້າ Top 10
                        </h3>
                        <p className="text-[10px] text-white/40">
                            ຈັດລຽງຕາມ AUM
                        </p>
                    </div>

                    <DataTable data={portfolios} />
                </div>

            </div>
        </div>
    );
}