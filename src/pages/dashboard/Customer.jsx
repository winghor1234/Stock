import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const users = [
    {
        id: "CU-1001",
        name: "John Thompson",
        email: "john.t@gmail.com",
        aum: 284520,
        pnl: 12.4,
        kyc: "approved",
        status: "active",
        time: "30 ເມ. 09:51",
        initials: "JT",
    },
    {
        id: "CU-1002",
        name: "Sarah Park",
        email: "sarah.p@yahoo.com",
        aum: 92100,
        pnl: 8.1,
        kyc: "review",
        status: "active",
        time: "30 ເມ. 09:37",
        initials: "SP",
    },
    {
        id: "CU-1003",
        name: "Mike Rodriguez",
        email: "mike.r@hotmail.com",
        aum: 45800,
        pnl: -2.3,
        kyc: "rejected",
        status: "suspended",
        time: "30 ເມ. 09:56",
        initials: "MR",
    },
];

const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];

export default function Customer() {
    const tabs = ["ທັງໝົດ", "Active", "VIP", "Suspended"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div>
            <div className="max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="ລູກຄ້າທັງໝົດ" value="141,321" change="+102.4 ເດືອນນີ້" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="Active ລູກຄ້າ" value="26,245" change="+37%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="ລູກຄ້າ VIP" value="5,143" change="AUM > $100K" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="SUSPENDED" value="96" change="ຕ້ອງກວດ" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>

                {/* ===== TABLE ===== */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">

                        <h3 className="text-white text-[12px] font-semibold">
                            ລາຍຊື່ລູກຄ້າ
                        </h3>

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

                    </div>

                    {/* TABLE */}
                    <DataTable
                        data={users}
                        placeholder="ຄົ້ນຫາ ຊື່, ID, ອີເມວ..."
                    />

                </div>

            </div>
        </div>
    );
}