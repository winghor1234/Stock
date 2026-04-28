"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"

export default function Service() {
    const [activeTab, setActiveTab] = useState("all")

    const data = [
        {
            id: 1,
            code: "TR-000001",
            date: "4 ຕ.ຄ. 2569, 17:30",
            stock: "AAPL",
            type: "Buy",
            trader: "Wing",
            account: "ACC-001",
            amount: "10 shares",
            price: 230,
            status: "success"
        },
        {
            id: 2,
            code: "TR-000002",
            date: "4 ຕ.ຄ. 2569, 18:00",
            stock: "TSLA",
            type: "Sell",
            trader: "John",
            account: "ACC-002",
            amount: "5 shares",
            price: 180,
            status: "pending"
        },
        {
            id: 3,
            code: "TR-000003",
            date: "4 ຕ.ຄ. 2569, 19:00",
            stock: "NVDA",
            type: "Buy",
            trader: "Anna",
            account: "ACC-003",
            amount: "2 shares",
            price: 500,
            status: "cancel"
        }
    ]

    const statusColor = (status) => {
        switch (status) {
            case "success":
                return "bg-green-100 text-green-600"
            case "pending":
                return "bg-green-100 text-green-600"
            case "cancel":
                return "bg-red-100 text-red-600"
            default:
                return "bg-gray-100 text-gray-600"
        }
    }

    const statusText = (status) => {
        switch (status) {
            case "success":
                return "ສຳເລັດ"
            case "pending":
                return "ກຳລັງດຳເນີນ"
            case "cancel":
                return "ຍົກເລີກ"
            default:
                return "-"
        }
    }

    return (
        <div className="p-6 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">ບໍລິການ (Stock)</h1>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                    <span className="text-sm">12/04/2568 - 12/04/2569</span>
                    <Calendar className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        placeholder="ຄົ້ນຫາ stock..."
                        className="pl-9 pr-3 py-2 rounded-lg border bg-white text-sm"
                    />
                </div>

                <select className="px-3 py-2 rounded-lg border bg-white text-sm">
                    <option>ປະເພດ: ທັງໝົດ</option>
                </select>
            </div>

            {/* TABS */}
            <div className="flex gap-2">
                {[
                    { key: "all", label: "ທັງໝົດ" },
                    { key: "pending", label: "ກຳລັງດຳເນີນ" },
                    { key: "success", label: "ສຳເລັດ" },
                    { key: "cancel", label: "ຍົກເລີກ" },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 rounded-lg text-sm ${activeTab === tab.key
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl border overflow-hidden">

                {/* HEADER */}
                <div className="grid grid-cols-7 px-4 py-3 text-sm text-gray-500 bg-gray-100">
                    <div>#</div>
                    <div>ລາຍການ</div>
                    <div>Stock</div>
                    <div>Trader</div>
                    <div>Account</div>
                    <div>ລາຄາ</div>
                    <div>ສະຖານະ</div>
                </div>

                {/* BODY */}
                {data.map((item, i) => (
                    console.log("item : ",item),
                    <div
                        key={item.id}
                        className="grid grid-cols-7 px-4 py-4 text-sm border-t items-center"
                    >
                        <div>{i + 1}</div>

                        <div>
                            <p className="font-medium">{item.code}</p>
                            <p className="text-gray-400 text-xs">{item.date}</p>
                        </div>

                        <div>
                            <p>{item.stock}</p>
                            <p className="text-gray-400 text-xs">{item.type} - {item.amount}</p>
                        </div>

                        <div>{item.trader}</div>
                        <div>{item.account}</div>

                        <div>${item.price}</div>

                        <div>
                            <span className={`px-2 py-1 text-xs rounded-lg ${statusColor(item.status)}`}>
                                {statusText(item.status)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}