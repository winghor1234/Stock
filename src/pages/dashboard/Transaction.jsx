import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const transactions = [
    {
        id: "TX-28441",
        user: "John T.",
        type: "BUY",
        ticker: "AAPL",
        qty: 150,
        price: 178.52,
        total: 26778,
        commission: 13.39,
        status: "filled",
        time: "30/04 09:31",
    },
    {
        id: "TX-28440",
        user: "Sarah P.",
        type: "SELL",
        ticker: "TSLA",
        qty: 80,
        price: 248.9,
        total: 19912,
        commission: 9.96,
        status: "partial",
        time: "30/04 09:30",
    },
];

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

export default function Transaction() {
    const tabs = ["ທັງໝົດ", "BUY", "SELL"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div>
            <div className="max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="ທຸລະກຳມື້ນີ້" value="1,255" change="+8.1%" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="ມູນຄ່າ BUY" value="$48.2M" change="+14.3%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="ມູນຄ່າ SELL" value="$36.0M" change="-2.1%" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="NET FLOW" value="+$12.2M" change="INFLOW" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                {/* ===== TABLE ===== */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">

                        {/* LEFT */}
                        <div>
                            <h3 className="text-white text-[12px] font-semibold">
                                ປະຫວັດທຸລະກຳ
                            </h3>
                            <p className="text-[10px] text-white/40">
                                ທຸລະກຳ ຊື້ / ຂາຍ Real-time
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-3">

                            {/* TABS */}
                            <div className="flex bg-white/5 p-1 rounded-xl text-[10px]">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-[4px] rounded-lg transition ${activeTab === tab
                                                ? "bg-green-500/20 text-green-400"
                                                : "text-white/40 hover:bg-white/5"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* EXPORT */}
                            <button className="flex items-center gap-1 bg-white/5 border border-white/10 text-white text-[10px] px-3 py-[4px] rounded-lg hover:bg-white/10 transition">
                                📤 CSV
                            </button>

                        </div>
                    </div>

                    {/* TABLE */}
                    <DataTable
                        data={transactions}
                        placeholder="Search ID, ticker, user..."
                    />

                </div>

            </div>
        </div>
    );
}