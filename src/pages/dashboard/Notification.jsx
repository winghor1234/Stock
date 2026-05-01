import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const notifications = [
    {
        level: "critical",
        message: "TSLA Circuit Breaker Triggered – +8.3%",
        source: "Market Watch",
        time: "09:28 ET",
        status: "new",
    },
    {
        level: "critical",
        message: "API Latency >800ms - US-EAST Region",
        source: "System Monitor",
        time: "08:52 ET",
        status: "new",
    },
];

const levelStyle = {
    critical: "bg-red-500/10 text-red-400",
    warning: "bg-yellow-500/10 text-yellow-400",
    info: "bg-blue-500/10 text-blue-400",
};

const statusStyle = {
    new: "bg-red-500/10 text-red-400",
    pending: "bg-yellow-500/10 text-yellow-400",
    review: "bg-blue-500/10 text-blue-400",
    resolved: "bg-green-500/10 text-green-400",
};

const columns = [
    {
        key: "level",
        label: "ປະເພດ",
        render: (row) => (
            <span className={`px-2 py-1 rounded text-[10px] ${levelStyle[row.level]}`}>
                {row.level}
            </span>
        ),
    },
    {
        key: "message",
        label: "ຂໍ້ຄວາມ",
        render: (row) => (
            <span className="text-white text-[12px]">
                {row.message}
            </span>
        ),
    },
    {
        key: "source",
        label: "ແຫຼ່ງ",
        render: (row) => (
            <span className="text-white/70 text-[12px]">
                {row.source}
            </span>
        ),
    },
    {
        key: "time",
        label: "ເວລາ",
        render: (row) => (
            <span className="text-white/40 text-[10px]">
                {row.time}
            </span>
        ),
    },
    {
        key: "status",
        label: "ສະຖານະ",
        render: (row) => (
            <span className={`px-2 py-1 rounded text-[10px] ${statusStyle[row.status]}`}>
                {row.status}
            </span>
        ),
    },
    {
        key: "action",
        label: "ACTION",
        align: "right",
        render: () => (
            <button className="px-3 py-1 text-[10px] rounded-md bg-white/5 text-white/70 hover:bg-white/10">
                ຈັດການ
            </button>
        ),
    },
];

export default function Notification() {

    const [active, setActive] = useState("ທັງໝົດ");
    const tabs = ["ທັງໝົດ", "Critical", "Warning", "Info"];

    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="Critical" value="9" change="ຕ້ອງດຳເນີນການດ່ວນ" spanText="ຕ້ອງດຳເນີນການດ່ວນ" icon={<DollarSign size={16} />} />
                    <Card title="Warning" value="5" change="ຕ້ອງຕິດຕາມ" spanText="ຕ້ອງຕິດຕາມ" icon={<Users size={16} />} />
                    <Card title="INFO" value="7" change="ຂໍ້ມູນທົ່ວໄປ" spanText="ຂໍ້ມູນທົ່ວໄປ" icon={<Zap size={16} />} />
                    <Card title="RESOLVED (7d)" value="25" change="ແກ້ໄຂສຳເລັດ" spanText="ແກ້ໄຂສຳເລັດ" icon={<Wallet size={16} />} />
                </div>

                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">

                        <h3 className="text-white text-[12px] font-semibold">
                            ລາຍການການແຈ້ງເຕືອນທັງໝົດ
                        </h3>

                        <div className="flex gap-2 text-[10px] bg-white/5 p-1 rounded-lg">
                            {tabs.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setActive(t)}
                                    className={`px-3 py-1 rounded-md transition ${active === t
                                            ? "bg-green-500/30 text-green-400"
                                            : "text-white/60 hover:bg-white/10"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* TABLE */}
                    <DataTable
                        data={notifications}
                        columns={columns}
                        searchable={false}
                    />

                </div>
            </div>
        </div>
    );
}