import { DollarSign, Users, Wallet, Zap } from "lucide-react";
import Card from "../../components/overView/Card";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../components/DataTable";

const orders = [
    {
        Order: "ORD-9821",
        ລູກຄ້າ: "John T.",
        ປະເພດ: "BUY",
        ticker: "AAPL",
        ຈຳນວນ: 150,
        ລາຄາ: 178.52,
        ມູນຄ່າ: 26778,
        ສະຖານະ: "filled",
        ເວລາ: "09:31:12",
    },
    {
        Order: "ORD-9820",
        ລູກຄ້າ: "Sarah P.",
        ປະເພດ: "SELL",
        ticker: "TSLA",
        ຈຳນວນ: 80,
        ລາຄາ: 248.9,
        ມູນຄ່າ: 19912,
        ສະຖານະ: "partial",
        ເວລາ: "09:30:48",
    },
    {
        Order: "ORD-9819",
        ລູກຄ້າ: "Mike R.",
        ປະເພດ: "BUY",
        ticker: "NVDA",
        ຈຳນວນ: 200,
        ລາຄາ: 892.4,
        ມູນຄ່າ: 178480,
        ສະຖານະ: "open",
        ເວລາ: "09:30:21",
    },
    {
        Order: "ORD-9818",
        ລູກຄ້າ: "Lisa A.",
        ປະເພດ: "BUY",
        ticker: "MSFT",
        ຈຳນວນ: 50,
        ລາຄາ: 415.6,
        ມູນຄ່າ: 20780,
        ສະຖານະ: "filled",
        ເວລາ: "09:29:55",
    },
    {
        Order: "ORD-9817",
        ລູກຄ້າ: "DavOrder K.",
        ປະເພດ: "SELL",
        ticker: "AMZN",
        ຈຳນວນ: 120,
        ລາຄາ: 183.2,
        ມູນຄ່າ: 21984,
        ສະຖານະ: "filled",
        ເວລາ: "09:29:33",
    },
    {
        Order: "ORD-9816",
        ລູກຄ້າ: "Emma W.",
        ປະເພດ: "BUY",
        ticker: "META",
        ຈຳນວນ: 30,
        ລາຄາ: 511.3,
        ມູນຄ່າ: 15339,
        ສະຖານະ: "open",
        ເວລາ: "09:28:17",
    },
    {
        Order: "ORD-9815",
        ລູກຄ້າ: "Tom B.",
        ປະເພດ: "SELL",
        ticker: "GOOGL",
        ຈຳນວນ: 200,
        ລາຄາ: 172.5,
        ມູນຄ່າ: 34500,
        ສະຖານະ: "cancelled",
        ເວລາ: "09:27:44",
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
                    <Card title="ຄຳສັ່ງ OPEN" value="$321" change="+12.4%" positive icon={<DollarSign size={16} />} data={miniA} color="#00ff9c" />
                    <Card title="BUY ORDERS" value="191" change="+37%" positive icon={<Users size={16} />} data={miniB} color="#3b82f6" />
                    <Card title="SELL ORDERS" value="143" change="55%" positive={false} icon={<Zap size={16} />} data={miniC} color="#ef4444" />
                    <Card title="ມູນຄ່າລວມ" value="$96M" change="+12%" positive icon={<Wallet size={16} />} data={miniD} color="#facc15" />
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
                    <DataTable data={orders} />

                </div>


            </div>
        </div>
    );
}



