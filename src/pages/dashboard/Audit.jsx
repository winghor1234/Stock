import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const auditLogs = [
    {
        time: "09:31:12",
        user: "Admin Simone",
        action: "Approve Trade",
        detail: "ORD-9821 AAPL 150 shares",
        ip: "192.168.1.10",
        status: "success",
    },
];

const statusStyle = {
    success: "bg-green-500/10 text-green-400",
    failed: "bg-red-500/10 text-red-400",
    warning: "bg-yellow-500/10 text-yellow-400",
};

const auditColumns = [
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
        key: "user",
        label: "ຜູ້ໃຊ້",
        render: (row) => (
            <span className="text-white text-[12px]">
                {row.user}
            </span>
        ),
    },
    {
        key: "action",
        label: "ACTION",
        render: (row) => (
            <span className="text-white font-medium text-[12px]">
                {row.action}
            </span>
        ),
    },
    {
        key: "detail",
        label: "ລາຍລະອຽດ",
        render: (row) => (
            <span className="text-white/70 text-[12px]">
                {row.detail}
            </span>
        ),
    },
    {
        key: "ip",
        label: "IP ADDRESS",
        render: (row) => (
            <span className="text-white/40 font-mono text-[10px]">
                {row.ip}
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
];

export default function Audit() {

    const [active, setActive] = useState("ທັງໝົດ");
    const tabs = ["ທັງໝົດ", "Critical", "Warning", "Info"];

    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    <Card title="Log ວັນນີ້" value="2,854" change="Events logged" spanText="Events logged" icon={<DollarSign size={16} />} />
                    <Card title="Admin Actions" value="142" change="ການດຳເນີນງານ" spanText="ການດຳເນີນງານ" icon={<Users size={16} />} />
                    <Card title="Security Events" value="7" change="ຕ້ອງຕິດຕາມ" spanText="ຕ້ອງຕິດຕາມ" icon={<Zap size={16} />} />
                </div>

                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">

                        <h3 className="text-white text-[12px] font-semibold">
                            Audit Trail Log
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
                        data={auditLogs}
                        columns={auditColumns}
                        placeholder="ຄົ້ນຫາ Action, IP..."
                    />

                </div>
            </div>
        </div>
    );
}