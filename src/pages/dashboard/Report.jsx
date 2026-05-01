import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];

const reports = [
    {
        name: "Monthly P&L Report",
        type: "ລາຍເດືອນ",
        period: "ເດືອນ ມິ.ຖ.",
        format: "PDF",
        time: "30/04 08:00",
        size: "2.4 MB",
    },
    {
        name: "KYC Compliance Report",
        type: "Compliance",
        period: "Q1 2026",
        format: "PDF",
        time: "29/04 17:30",
        size: "1.8 MB",
    },
];

const reportColumns = [
    {
        label: "ຊື່ລາຍງານ",
        key: "name",
        render: (row) => (
            <span className="text-white font-medium text-[12px]">
                {row.name}
            </span>
        ),
    },
    {
        label: "ປະເພດ",
        key: "type",
        render: (row) => {
            const map = {
                Compliance: "bg-blue-500/10 text-blue-400",
                Audit: "bg-purple-500/10 text-purple-400",
                "ຄວາມສ່ຽງ": "bg-yellow-500/10 text-yellow-400",
                "ປະຈຳວັນ": "bg-green-500/10 text-green-400",
                "ລາຍເດືອນ": "bg-green-500/10 text-green-400",
            };

            return (
                <span className={`px-2 py-1 rounded text-[10px] ${map[row.type] || "bg-white/10 text-white/70"}`}>
                    {row.type}
                </span>
            );
        },
    },
    {
        label: "ຊ່ວງເວລາ",
        key: "period",
    },
    {
        label: "FORMAT",
        key: "format",
        render: (row) => (
            <span className="text-white/70 text-[12px]">
                {row.format}
            </span>
        ),
    },
    {
        label: "ເວລາ",
        key: "time",
        render: (row) => (
            <span className="text-white/50 text-[10px]">
                {row.time}
            </span>
        ),
    },
    {
        label: "ຂະໜາດ",
        key: "size",
        render: (row) => (
            <span className="text-white/50 text-[10px]">
                {row.size}
            </span>
        ),
    },
    {
        label: "ACTION",
        key: "action",
        align: "right",
        render: () => (
            <button className="
        flex items-center gap-1
        bg-white/5 border border-white/10
        px-3 py-1 rounded-lg text-[10px] text-white
        hover:bg-white/10 transition
      ">
                📥 Download
            </button>
        ),
    },
];

export default function Report() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid gap-6"
                    style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
                >
                    <Card title="ລາຍງານ ສ້ຳເລັດ" value="45" change="ເດືອນ ພ.ພ. 2026" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="ລໍຖ້າ Generate" value="12" change="Scheduled" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="Download ລ່າສຸດ" value="15" change="7 ວັນຜ່ານມາ" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                </div>

                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    <div className="flex items-center justify-between mb-4">

                        <h3 className="text-white text-[12px] font-semibold">
                            ລາຍການລາຍງານ
                        </h3>

                        <button
                            className=" bg-gradient-to-r from-green-400 to-emerald-400 text-black text-[12px] px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all duration-200 shadow-[0_0_10px_rgba(0,255,156,0.4)] "
                        >
                            + ສ້າງລາຍງານໃໝ່
                        </button>

                    </div>

                    <DataTable
                        data={reports}
                        columns={reportColumns}
                        placeholder="ຄົ້ນຫາ Order,ID,ticker,ລູກຄ້າ..."
                    />

                </div>

            </div>
        </div >
    );
}