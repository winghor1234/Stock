import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, PieChart, CartesianGrid, Cell, Line, LineChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";
import CustomTooltip from "../../components/commission/CustomTooltip";

const kycData = [
    {
        id: "KYC-82041",
        name: "John Thompson",
        initials: "JT",
        doc: "Passport + Utility Bill",
        time: "30/04 09:15",
        status: "pending",
    },
    {
        id: "KYC-82038",
        name: "Sarah Park",
        initials: "SP",
        doc: "Driver License",
        time: "30/04 08:42",
        status: "review",
    },
    {
        id: "KYC-82035",
        name: "Mike Rodriguez",
        initials: "MR",
        doc: "National ID",
        time: "30/04 08:10",
        status: "rejected",
    },
    {
        id: "KYC-82030",
        name: "Lisa Anderson",
        initials: "LA",
        doc: "Passport",
        time: "29/04 17:22",
        status: "approved",
    },
    {
        id: "KYC-82028",
        name: "David Kim",
        initials: "DK",
        doc: "Passport + Bank Stmt",
        time: "29/04 15:00",
        status: "approved",
    },
];

const statusStyle = {
    pending: "bg-yellow-500/10 text-yellow-400",
    review: "bg-blue-500/10 text-blue-400",
    rejected: "bg-red-500/10 text-red-400",
    approved: "bg-green-500/10 text-green-400",
};

const chartData = [
    { name: "Verified", value: 80, color: "#10b981" },
    { name: "In Review", value: 10, color: "#3b82f6" },
    { name: "Pending", value: 7, color: "#facc15" },
    { name: "Rejected", value: 3, color: "#ef4444" },
];

export default function VerifyKYC() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid gap-6"
                    style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
                >
                    <Card title="Verified ທັງໝົດ" value="102,882" change="72% ຂອງລູກຄ້າ" spanText="72% ຂອງລູກຄ້າ" icon={<DollarSign size={16} />} />
                    <Card title="Pending Review" value="3" change="ຕ້ອງດຳເນີນການ" spanText="ຕ້ອງດຳເນີນການ" icon={<Users size={16} />} />
                    <Card title="In Review" value="124" change="ພວກ Admin ກຳລັງກວດ" spanText="ພວກ Admin ກຳລັງກວດ" icon={<Zap size={16} />} />
                    <Card title="Rejected" value="844" change="0.62% ຂອງທັງໝົດ" spanText="0.62% ຂອງທັງໝົດ" icon={<Zap size={16} />} />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* LEFT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        <div className="mb-4">
                            <h3 className="text-white text-[12px] font-semibold">
                                KYC ລໍຖ້າ (ລ່າສຸດ)
                            </h3>
                            <p className="text-[10px] text-white/40">
                                ກວດສອບລ່າສຸດ
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-[12px]">

                                <thead>
                                    <tr className="text-white/40 text-[10px] border-b border-white/5">
                                        <th className="text-left py-3">ID</th>
                                        <th className="text-left">ຊື່</th>
                                        <th className="text-left">ສະຖານະ</th>
                                        <th className="text-center">ACTION</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-white/5">
                                    {kycData.map((item, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition">

                                            <td className="py-4 text-white/40 text-[10px]">
                                                {item.id}
                                            </td>

                                            <td>
                                                <div className="flex items-center gap-3">

                                                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white">
                                                        {item.initials}
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-white font-medium text-[12px]">
                                                                {item.name}
                                                            </p>

                                                            <span className="text-[10px] text-white/40">
                                                                {item.time}
                                                            </span>
                                                        </div>

                                                        <p className="text-[10px] text-white/40">
                                                            {item.doc}
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>

                                            <td>
                                                <span className={`px-2 py-1 rounded-md text-[10px] ${statusStyle[item.status]}`}>
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td className="text-center">
                                                <div className="flex gap-2">

                                                    <button className="px-3 py-1 text-[10px] rounded-md bg-white/5 text-white/70 hover:bg-white/10">
                                                        👁 ເບິ່ງ
                                                    </button>

                                                    {item.status === "pending" && (
                                                        <button className="px-3 py-1 text-[10px] rounded-md bg-green-400 text-black font-medium">
                                                            ✔ pending
                                                        </button>
                                                    )}
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                        <h3 className="text-white text-[12px] font-semibold mb-4">
                            KYC Progress
                        </h3>

                        <div className="flex items-center justify-center">

                            <div className="w-[220px] h-[220px]">
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            dataKey="value"
                                            innerRadius={65}
                                            outerRadius={95}
                                            paddingAngle={2}
                                            cx="50%"
                                            cy="50%"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>

                                        <Tooltip
                                            content={<CustomTooltip />}
                                            cursor={{ fill: "rgba(255,255,255,0.03)" }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="ml-6 space-y-2 text-[10px]">
                                {chartData.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white/70">
                                        <span
                                            className="w-3 h-3 rounded-sm"
                                            style={{ background: item.color }}
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}