export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    onPrev,
    onNext
}) {

    // ✅ คำนวณช่วง 3 หน้า
    let startPage = Math.max(currentPage - 1, 1)
    let endPage = startPage + 2

    // ถ้าเกิน total → เลื่อนกลับ
    if (endPage > totalPages) {
        endPage = totalPages
        startPage = Math.max(endPage - 2, 1)
    }

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    return (
        <div className=" flex justify-between items-center my-4">

            <p className="text-sm text-gray-800">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">

                {/* PREV */}
                <button
                    onClick={onPrev}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-gray-800 rounded-lg border text-sm disabled:opacity-50"
                >
                    Prev
                </button>

                {/* ✅ แสดงแค่ 3 หน้า */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded-lg text-sm ${currentPage === page
                                ? "bg-green-600 text-white"
                                : "border text-gray-800"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                {/* NEXT */}
                <button
                    onClick={onNext}
                    disabled={currentPage === totalPages}
                    className="px-3 text-gray-800 py-1 rounded-lg border text-sm disabled:opacity-50"
                >
                    Next
                </button>

            </div>
        </div>
    )
}