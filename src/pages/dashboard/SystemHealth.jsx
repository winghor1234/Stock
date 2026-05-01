import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, PieChart, CartesianGrid, Cell, Line, LineChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import DataTable from "../../components/DataTable";
import CustomTooltip from "../../components/commission/CustomTooltip";





// const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
// const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
// const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
// const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

const services = [
    {
        name: "Trading Engine",
        region: "US-EAST",
        latency: 12,
        status: "normal",
    },
    {
        name: "Trading Engine",
        region: "US-WEST",
        latency: 18,
        status: "normal",
    },
    {
        name: "API Gateway",
        region: "Global",
        latency: 42,
        status: "normal",
    },
    {
        name: "Database Primary",
        region: "US-EAST",
        latency: 8,
        status: "normal",
    },
    {
        name: "Database Replica",
        region: "US-WEST",
        latency: 24,
        status: "normal",
    },
    {
        name: "WebSocket Server",
        region: "US-EAST",
        latency: 856,
        status: "critical",
    },
    {
        name: "KYC Service",
        region: "Global",
        latency: 320,
        status: "warning",
    },
    {
        name: "Notification Service",
        region: "Global",
        latency: 95,
        status: "normal",
    },
];

// const serviceStatusStyle = {
//   normal: "bg-green-500/10 text-green-400",
//   warning: "bg-yellow-500/10 text-yellow-400",
//   critical: "bg-red-500/10 text-red-400",
// };


// const metrics = {
//   cpu: 34,
//   memory: 61,
//   disk: 45,
//   network: 78,
// };

const metricsData = [
    { time: "09:00", cpu: 30, memory: 58 },
    { time: "09:05", cpu: 32, memory: 59 },
    { time: "09:10", cpu: 34, memory: 60 },
    { time: "09:15", cpu: 31, memory: 59 },
    { time: "09:20", cpu: 35, memory: 61 },
    { time: "09:25", cpu: 38, memory: 60 },
    { time: "09:30", cpu: 34, memory: 62 },
    { time: "09:35", cpu: 36, memory: 61 },
    { time: "09:40", cpu: 33, memory: 60 },
    { time: "09:45", cpu: 34, memory: 59 },
    { time: "09:50", cpu: 30, memory: 60 },
    { time: "09:55", cpu: 32, memory: 60 },
    { time: "10:00", cpu: 34, memory: 60 },
];


export default function SystemHealth() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid gap-6"
                    style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
                >
                    <Card title="System Status" value="ONLINE" change="99.98% Uptime" spanText="99.98% Uptime" icon={<DollarSign size={16} />} />
                    <Card title="API Latency" value="42ms" change="Normal" spanText="Normal"  icon={<Users size={16} />}  />
                    <Card title="DB Connections" value="248" change="Max: 500" spanText="Max: 500" icon={<Zap size={16} />}  />
                    <Card title="Error Rate" value="0.02%" change="Low" spanText="Low" icon={<Zap size={16} />}  />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="mb-5">
                            <h3 className="text-white font-semibold">Server Metrics</h3>
                            <p className="text-xs text-white/40">Real-time</p>
                        </div>

                        {/* CARDS */}
                        <div className="grid grid-cols-2 gap-4 mb-6">

                            {/* CPU */}
                            <div className="bg-gradient-to-br from-[#0a2233] to-[#071a28] rounded-xl p-4 border border-white/5">
                                <p className="text-3xl text-blue-400 font-semibold">34%</p>
                                <p className="text-[11px] tracking-widest text-white/40 mb-3">CPU USAGE</p>
                                <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[34%] bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                </div>
                            </div>

                            {/* MEMORY */}
                            <div className="bg-gradient-to-br from-[#0a2233] to-[#071a28] rounded-xl p-4 border border-white/5">
                                <p className="text-3xl text-green-400 font-semibold">61%</p>
                                <p className="text-[11px] tracking-widest text-white/40 mb-3">MEMORY</p>
                                <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[61%] bg-green-400 rounded-full shadow-[0_0_10px_rgba(0,255,156,0.6)]" />
                                </div>
                            </div>

                            {/* DISK */}
                            <div className="bg-gradient-to-br from-[#0a2233] to-[#071a28] rounded-xl p-4 border border-white/5">
                                <p className="text-3xl text-yellow-400 font-semibold">45%</p>
                                <p className="text-[11px] tracking-widest text-white/40 mb-3">DISK I/O</p>
                                <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[45%] bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]" />
                                </div>
                            </div>

                            {/* NETWORK */}
                            <div className="bg-gradient-to-br from-[#0a2233] to-[#071a28] rounded-xl p-4 border border-white/5">
                                <p className="text-3xl text-purple-400 font-semibold">78%</p>
                                <p className="text-[11px] tracking-widest text-white/40 mb-3">NETWORK</p>
                                <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[78%] bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                                </div>
                            </div>

                        </div>

                        {/* CHART */}
                        <div className="h-[180px] -ml-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={metricsData}>

                                    {/* GRID */}
                                    <CartesianGrid
                                        stroke="rgba(255,255,255,0.05)"
                                        vertical={false}
                                    />

                                    {/* X AXIS */}
                                    <XAxis
                                        dataKey="time"
                                        stroke="#ffffff30"
                                        tickLine={false}
                                        axisLine={false}
                                        tick={{ fontSize: 11 }}
                                    />

                                    {/* Y AXIS */}
                                    <YAxis
                                        stroke="#ffffff30"
                                        tickLine={false}
                                        axisLine={false}
                                        tick={{ fontSize: 11 }}
                                        domain={[20, 70]}
                                    />

                                    {/* LEGEND */}
                                    <Legend
                                        wrapperStyle={{ fontSize: "12px", color: "#fff" }}
                                    />

                                    {/* LINES */}
                                    <Line
                                        type="monotone"
                                        dataKey="cpu"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="memory"
                                        stroke="#00ff9c"
                                        strokeWidth={2}
                                        dot={false}
                                    />

                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                    {/* chart */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        {/* HEADER */}
                        <h3 className="text-white font-semibold mb-4">
                            Service Status
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">

                                {/* HEADER */}
                                <thead>
                                    <tr className="text-white/40 text-xs border-b border-white/5">
                                        <th className="text-left py-3">SERVICE</th>
                                        <th className="text-left">REGION</th>
                                        <th className="text-left">LATENCY</th>
                                        <th className="text-left">STATUS</th>
                                    </tr>
                                </thead>

                                {/* BODY */}
                                <tbody className="divide-y divide-white/5">
                                    {services.map((s, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02]">

                                            <td className="py-3 text-white">{s.name}</td>

                                            <td className="text-white/60">{s.region}</td>

                                            <td
                                                className={`
                ${s.latency > 500 ? "text-red-400" : "text-green-400"}
              `}
                                            >
                                                {s.latency}ms
                                            </td>

                                            <td>
                                                <span
                                                    className={`
                  px-2 py-1 rounded text-xs
                  ${s.status === "normal" && "bg-green-500/10 text-green-400"}
                  ${s.status === "warning" && "bg-yellow-500/10 text-yellow-400"}
                  ${s.status === "critical" && "bg-red-500/10 text-red-400"}
                `}
                                                >
                                                    {s.status}
                                                </span>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}



