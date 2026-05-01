import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";
import CustomTooltip from "../../components/commission/CustomTooltip";

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

const agents = [
    { rank: 1, name: "Agent Alice", users: 4821, commission: 182400, percent: 18.9 },
    { rank: 2, name: "Agent Bob", users: 3912, commission: 148200, percent: 15.4 },
    { rank: 3, name: "Agent Carol", users: 3241, commission: 122800, percent: 12.7 },
    { rank: 4, name: "Agent Dan", users: 2980, commission: 112900, percent: 11.7 },
    { rank: 5, name: "Agent Eve", users: 2614, commission: 98700, percent: 10.2 },
];

const commissionData = [
    { name: "Nov", regular: 520, vip: 200 },
    { name: "Dec", regular: 600, vip: 280 },
    { name: "Jan", regular: 730, vip: 340 },
    { name: "Feb", regular: 670, vip: 300 },
    { name: "Mar", regular: 800, vip: 380 },
    { name: "Apr", regular: 630, vip: 320 },
];

export default function Commission() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="Commission ເດືອນນີ້" value="$963K" change="+5.2%" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="ສ້ຽງ ① (Regular)" value="$641K" change="0.05% ຕໍ່ ທຸລະກຳ" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="ສ້ຽງ ② (VIP)" value="$322K" change="0.03% ຕໍ່ ທຸລະກຳ" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="Avg per Trade" value="$7.74" change="+$0.42" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* LEFT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                Commission ລາຍເດືອນ
                            </h3>
                        </div>

                        <div className="h-[260px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={commissionData} barGap={8}>

                                    <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />

                                    <XAxis
                                        dataKey="name"
                                        stroke="#ffffff40"
                                        tickLine={false}
                                        axisLine={false}
                                        tick={{ fontSize: 10 }}
                                    />

                                    <YAxis
                                        stroke="#ffffff40"
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(v) => `$${v}K`}
                                        tick={{ fontSize: 10 }}
                                    />

                                    <Tooltip
                                        content={<CustomTooltip />}
                                        cursor={{ fill: "rgba(255,255,255,0.04)" }}
                                    />

                                    <Legend wrapperStyle={{ fontSize: "10px" }} />

                                    <Bar dataKey="regular" name="Regular" fill="#00ff9c" radius={[6, 6, 0, 0]} />
                                    <Bar dataKey="vip" name="VIP" fill="#3b82f6" radius={[6, 6, 0, 0]} />

                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                Top Earner (Agents)
                            </h3>
                            <p className="text-[10px] text-white/40">
                                Commission ທີ່ໄດ້ຮັບ
                            </p>
                        </div>

                        <table className="w-full text-[12px]">
                            <thead>
                                <tr className="text-white/40 text-[10px] border-b border-white/5">
                                    <th className="text-left py-3 w-10">#</th>
                                    <th className="text-left">AGENT</th>
                                    <th className="text-right">ຜູ້ໃຊ້</th>
                                    <th className="text-right">COMMISSION</th>
                                    <th className="text-right w-[140px]">% ລວມ</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/5">
                                {agents.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.03] transition">

                                        <td className="py-3 text-white/40">
                                            {row.rank}
                                        </td>

                                        <td className="text-white font-medium">
                                            {row.name}
                                        </td>

                                        <td className="text-right text-white">
                                            {row.users.toLocaleString()}
                                        </td>

                                        <td className="text-right text-yellow-400 font-medium">
                                            ${row.commission.toLocaleString()}
                                        </td>

                                        <td className="text-right">
                                            <div className="flex items-center justify-end gap-2">

                                                <div className="w-24 h-[4px] bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-green-400 rounded-full"
                                                        style={{ width: `${row.percent}%` }}
                                                    />
                                                </div>

                                                <span className="text-white/70 text-[10px]">
                                                    {row.percent}%
                                                </span>

                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    );
}