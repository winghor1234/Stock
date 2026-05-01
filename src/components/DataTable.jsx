import { useMemo, useState } from "react";

export default function DataTable({
    data = [],
    columns,
    maxHeight = 420,
    searchable = true,
    placeholder = "Search...",
}) {
    const [search, setSearch] = useState("");

    /* ================= AUTO COLUMNS ================= */
    const autoColumns = useMemo(() => {
        if (!data.length) return [];

        return Object.keys(data[0]).map((key) => ({
            key,
            label: key.toUpperCase(),
            align: typeof data[0][key] === "number" ? "right" : "left",
        }));
    }, [data]);

    const cols = columns || autoColumns;

    /* ================= FILTER ================= */
    const filteredData = useMemo(() => {
        if (!search) return data;

        return data.filter((row) =>
            Object.values(row).some((val) =>
                String(val).toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    return (
        <div className="space-y-3">

            {/* 🔍 SEARCH */}
            {searchable && (
                <div className="relative">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#02140f] border border-white/5 rounded-xl pl-7 pr-3 py-[6px]
                        text-[12px] text-white placeholder:text-white/40
                        outline-none transition-all duration-200
                        focus:border-green-400/40 focus:bg-[#031a14]"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40 text-[10px]">
                        🔍
                    </span>
                </div>
            )}

            {/* TABLE */}
            <div className="overflow-x-auto">
                <div className="overflow-y-auto" style={{ maxHeight }}>

                    <table className="w-full text-[12px] min-w-[800px]">

                        {/* HEADER */}
                        <thead className="sticky top-0 bg-[#031826] z-10 backdrop-blur">
                            <tr className="text-white/40 text-[10px] border-b border-white/5">
                                {cols.map((col, i) => (
                                    <th
                                        key={i}
                                        className={`px-3 py-2 whitespace-nowrap font-medium tracking-wide ${col.align === "right" ? "text-right" : "text-left"
                                            }`}
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* BODY */}
                        <tbody className="divide-y divide-white/5">
                            {filteredData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="hover:bg-white/[0.03] transition"
                                >
                                    {cols.map((col, j) => (
                                        <td
                                            key={j}
                                            className={`px-3 py-2 whitespace-nowrap ${col.align === "right" ? "text-right" : "text-left"
                                                }`}
                                        >
                                            {col.render
                                                ? col.render(row)
                                                : typeof row[col.key] === "number"
                                                    ? row[col.key].toLocaleString()
                                                    : row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* EMPTY */}
                            {!filteredData.length && (
                                <tr>
                                    <td
                                        colSpan={cols.length}
                                        className="text-center text-white/40 text-[10px] py-6"
                                    >
                                        No data found
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}