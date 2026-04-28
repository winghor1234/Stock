"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function User() {
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("all")

    const users = [
        {
            id: 1,
            code: "US-0001",
            name: "Wing",
            email: "wing@gmail.com",
            role: "Admin",
            status: "active"
        },
        {
            id: 2,
            code: "US-0002",
            name: "John Doe",
            email: "john@gmail.com",
            role: "User",
            status: "inactive"
        },
        {
            id: 3,
            code: "US-0003",
            name: "Anna Smith",
            email: "anna@gmail.com",
            role: "Manager",
            status: "active"
        },
    ]

    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase())
    )

    const statusColor = (status) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-600"
            case "inactive":
                return "bg-gray-200 text-gray-600"
            default:
                return "bg-gray-100 text-gray-600"
        }
    }

    const statusText = (status) => {
        switch (status) {
            case "active":
                return "ໃຊ້ງານ"
            case "inactive":
                return "ປິດໃຊ້"
            default:
                return "-"
        }
    }

    return (
        <div className="p-6 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">ຜູ້ໃຊ້</h1>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="ຄົ້ນຫາຜູ້ໃຊ້..."
                        className="pl-9 pr-3 py-2 rounded-lg border bg-white text-sm"
                    />
                </div>

                <select className="px-3 py-2 rounded-lg border bg-white text-sm">
                    <option>ບົດບາດ: ທັງໝົດ</option>
                </select>
            </div>

            {/* TABS */}
            <div className="flex gap-2">
                {[
                    { key: "all", label: "ທັງໝົດ" },
                    { key: "active", label: "ໃຊ້ງານ" },
                    { key: "inactive", label: "ປິດໃຊ້" },
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
                <div className="grid grid-cols-6 px-4 py-3 text-sm text-gray-500 bg-gray-100">
                    <div>#</div>
                    <div>ລະຫັດ</div>
                    <div>ຊື່</div>
                    <div>Email</div>
                    <div>ບົດບາດ</div>
                    <div>ສະຖານະ</div>
                </div>

                {/* BODY */}
                {filtered.map((user, i) => (
                    <div
                        key={user.id}
                        className="grid grid-cols-6 px-4 py-4 text-sm border-t items-center"
                    >
                        <div>{i + 1}</div>

                        <div className="font-medium">{user.code}</div>

                        <div className="text-gray-800">{user.name}</div>

                        <div className="text-gray-600">{user.email}</div>

                        <div>
                            <span className="px-2 py-1 text-xs rounded-lg bg-blue-100 text-blue-600">
                                {user.role}
                            </span>
                        </div>

                        <div>
                            <span className={`px-2 py-1 text-xs rounded-lg ${statusColor(user.status)}`}>
                                {statusText(user.status)}
                            </span>
                        </div>
                    </div>
                ))}

                {/* EMPTY */}
                {filtered.length === 0 && (
                    <div className="text-center text-gray-500 py-10">
                        ບໍ່ພົບຂໍ້ມູນ
                    </div>
                )}
            </div>
        </div>
    )
}