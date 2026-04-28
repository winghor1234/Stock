import { useState, useEffect } from "react"
import { Calendar, Search } from "lucide-react"
import usePagination from "../../components/usePagination"
import Pagination from "../../components/dashboard/Pagination"

export default function User() {
    const [search, setSearch] = useState("")
    // const [activeTab, setActiveTab] = useState("all")

    // ✅ FIX: id ต้อง unique
    const users = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        code: `US-${String(i + 1).padStart(4, "0")}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@gmail.com`,
        role: i % 2 === 0 ? "Admin" : "User",
        status: i % 2 === 0 ? "active" : "inactive"
    }))

    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase())
    )

    const {
        currentPage,
        totalPages,
        currentData,
        next,
        prev,
        goToPage,
        setCurrentPage
    } = usePagination(filtered, 10)

    // ✅ FIX: reset page ตอน search
    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    const statusColor = (status) => {
        return status === "active"
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-600"
    }

    const statusText = (status) => {
        return status === "active" ? "ໃຊ້ງານ" : "ປິດໃຊ້"
    }

    return (
        <div className="rounded-lg space-y-4">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">ຜູ້ໃຊ້</h1>

                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                    <span className="text-sm text-gray-800">12/04/2568 - 12/04/2569</span>
                    <Calendar className="w-4 h-4 text-gray-800" />
                </div>
            </div>

            {/* FILTER */}
            <div className="flex gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="ຄົ້ນຫາ..."
                        className="pl-9 pr-3 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl border overflow-hidden">

                {/* HEADER */}
                <div className="grid grid-cols-[50px_120px_1fr_1fr_140px_140px] px-4 py-3 text-sm text-gray-500 bg-gray-200">
                    <div>#</div>
                    <div>ລະຫັດ</div>
                    <div>ຊື່</div>
                    <div>Email</div>
                    <div>ບົດບາດ</div>
                    <div>ສະຖານະ</div>
                </div>

                {/* BODY */}
                <div className="max-h-[400px] overflow-y-auto">
                    {currentData.map((user, i) => (
                        <div
                            key={user.id}
                            className="grid grid-cols-[50px_120px_1fr_1fr_140px_140px] px-4 py-4 text-sm border-t items-start"
                        >
                            {/* ✅ FIX: index ต่อเนื่อง */}
                            <div className="text-gray-800">{(currentPage - 1) * 5 + i + 1}</div>

                            <div className="font-medium text-gray-800">{user.code}</div>
                            <div className="font-medium text-gray-800">{user.name}</div>
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

                    {filtered.length === 0 && (
                        <div className="text-center text-gray-500 py-10">
                            ບໍ່ພົບຂໍ້ມູນ
                        </div>
                    )}
                </div>

                {/* ✅ FIX: pagination แยกออก */}
                <div className=" border-t mx-2 ">
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