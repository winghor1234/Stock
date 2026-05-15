import { useState, useMemo } from "react"

export default function usePagination(data = [], itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return data.slice(start, start + itemsPerPage)
    }, [data, currentPage, itemsPerPage])

    const next = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }

    const prev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }

    const goToPage = (page) => {
        setCurrentPage(page)
    }

    return {
        currentPage,
        totalPages,
        currentData,
        next,
        prev,
        goToPage,
        setCurrentPage
    }
}