import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";

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
    {
        id: "CU-1004",
        name: "Lisa Anderson",
        email: "lisa.a@gmail.com",
        aum: 631200,
        pnl: 22.1,
        kyc: "approved",
        status: "active",
        time: "30 ເມ. 09:10",
        initials: "LA",
    },
    {
        id: "CU-1005",
        name: "David Kim",
        email: "david.k@corp.com",
        aum: 1240000,
        pnl: 31.5,
        kyc: "approved",
        status: "active",
        time: "30 ເມ. 09:46",
        initials: "DK",
    },
    {
        id: "CU-1006",
        name: "Emma Wilson",
        email: "emma.w@gmail.com",
        aum: 18400,
        pnl: 4.2,
        kyc: "pending",
        status: "inactive",
        time: "30 ເມ. 09:10",
        initials: "EW",
    },
    {
        id: "CU-1007",
        name: "Tom Brown",
        email: "tom.b@corp.com",
        aum: 0,
        pnl: 0,
        kyc: "rejected",
        status: "suspended",
        time: "30 ເມ. 09:53",
        initials: "TB",
    },
];


const miniA = [{ v: 2 }, { v: 3 }, { v: 2.8 }, { v: 3.5 }, { v: 4 }];
const miniB = [{ v: 10 }, { v: 12 }, { v: 11 }, { v: 14 }, { v: 16 }];
const miniC = [{ v: 20 }, { v: 18 }, { v: 19 }, { v: 17 }, { v: 15 }];
const miniD = [{ v: 5 }, { v: 6 }, { v: 5.5 }, { v: 6.5 }, { v: 7 }];


export default function OrderLive() {
    return (
        <div>
            <div className=" max-w-[1400px] mx-auto w-full space-y-6">

                {/* ===== TOP CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card title="ລູກຄ້າທັງໝົດ" value="141,321" change="+102,4 ເດືອນນີ້" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="Active ລູກຄ້າ" value="26,245" change="+37%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="ລູກຄ້າ VIP" value="5,143" change="AUM >$100K" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="SUSPENDED" value="$96M" change="+12%" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
                </div>
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">
                    {/* HEADER */}
                    <div className="mb-4">
                        <h3 className="text-white font-semibold text-lg">
                            ຕະຫຼາດຫຸ້ນ US
                        </h3>
                        <p className="text-xs text-white/40">
                            NYSE / NASDAQ Real-time
                        </p>
                    </div>

                    {/* TABLE */}
                    <DataTable data={users} />

                </div>


            </div>
        </div>
    );
}



