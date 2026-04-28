"use client"

import { useState, useEffect } from "react"
import { Search, Calendar } from "lucide-react"
import usePagination from "../../components/usePagination"
import Pagination from "../../components/dashboard/Pagination"

export default function Service() {
    const [search, setSearch] = useState("")
    // const [activeTab, setActiveTab] = useState("all")

    const data = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        code: `TR-${String(i + 1).padStart(6, "0")}`,
        date: "4 ຕ.ຄ. 2569",
        stock: ["AAPL", "TSLA", "NVDA"][i % 3],
        type: i % 2 === 0 ? "Buy" : "Sell",
        trader: "Wing",
        account: `ACC-${i + 1}`,
        amount: `${i + 1} shares`,
        price: 100 + i * 10,
        status: i % 3 === 0 ? "success" : i % 3 === 1 ? "pending" : "cancel"
    }))

    // 🔍 filter
    const filtered = data.filter(d =>
        d.stock.toLowerCase().includes(search.toLowerCase())
    )

    // 📄 pagination
    const {
        currentPage,
        totalPages,
        currentData,
        next,
        prev,
        goToPage,
        setCurrentPage
    } = usePagination(filtered, 5)

    // ✅ reset page when search
    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    const statusColor = (status) => {
        if (status === "success") return "bg-green-100 text-green-600"
        if (status === "pending") return "bg-green-100 text-green-600"
        return "bg-red-100 text-red-600"
    }

    const statusText = (status) => {
        if (status === "success") return "ສຳເລັດ"
        if (status === "pending") return "ກຳລັງດຳເນີນ"
        return "ຍົກເລີກ"
    }

    return (
        <div className="space-y-4">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">ບໍລິການ (Stock)</h1>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                    <span className="text-sm text-gray-800">12/04/2568 - 12/04/2569</span>
                    <Calendar className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            {/* FILTER */}
            <div className="flex gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="ຄົ້ນຫາ stock..."
                        className="pl-9 pr-3 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl border overflow-hidden">

                {/* HEADER FIXED */}
                <div className="grid grid-cols-[50px_140px_1fr_120px_120px_120px_120px] px-4 py-3 text-sm text-gray-500 bg-gray-200">
                    <div>#</div>
                    <div>ລາຍການ</div>
                    <div>Stock</div>
                    <div>Trader</div>
                    <div>Account</div>
                    <div>ລາຄາ</div>
                    <div>ສະຖານະ</div>
                </div>

                {/* BODY SCROLL */}
                <div className="max-h-[400px] overflow-y-auto">

                    {currentData.map((item, i) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-[50px_140px_1fr_120px_120px_120px_120px] px-4 py-4 text-sm border-t items-start"
                        >
                            <div className="text-gray-800">{(currentPage - 1) * 5 + i + 1}</div>

                            <div>
                                <p className="font-medium text-gray-800">{item.code}</p>
                                <p className="text-gray-400 text-xs">{item.date}</p>
                            </div>

                            <div>
                                <p className="text-gray-800">{item.stock}</p>
                                <p className="text-gray-400 text-xs">{item.type} - {item.amount}</p>
                            </div>

                            <div className="text-gray-800">{item.trader}</div>
                            <div className="text-gray-600">{item.account}</div>

                            <div className="text-gray-800">${item.price}</div>

                            <div>
                                <span className={`px-2 py-1 text-xs rounded-lg ${statusColor(item.status)}`}>
                                    {statusText(item.status)}
                                </span>
                            </div>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="text-center text-gray-500 py-10">
                            ບໍ່ພົບຂໍ້ມູນ
                        </div>
                    )}
                </div>

                {/* PAGINATION */}
                <div className="p-4 border-t">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={goToPage}
                        onPrev={prev}
                        onNext={next}
                    />
                </div>

            </div>
        </div>
    )
}