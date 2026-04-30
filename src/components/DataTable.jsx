

import { useMemo } from "react";

export default function DataTable({
    data = [],
    columns,          // optional
    maxHeight = 420,
}) {

    // 🔥 AUTO GENERATE COLUMNS
    const autoColumns = useMemo(() => {
        if (!data.length) return [];

        return Object.keys(data[0]).map((key) => ({
            key,
            label: key.toUpperCase(),
            align: typeof data[0][key] === "number" ? "right" : "left",
        }));
    }, [data]);

    const cols = columns || autoColumns;

    return (
        <div className="overflow-x-auto">
            <div className="overflow-y-auto" style={{ maxHeight }}>

                <table className="w-full text-sm min-w-[600px]">

                    {/* HEADER */}
                    <thead className="sticky top-0 bg-[#031826] z-10">
                        <tr className="text-white/40 text-xs border-b border-white/5">
                            {cols.map((col, i) => (
                                <th
                                    key={i}
                                    className={`  ${col.align === "right" ? "text-right" : "text-left"} py-3 px-2 whitespace-nowrap `}
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="divide-y divide-white/5">
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-white/[0.03] transition">
                                {cols.map((col, j) => (
                                    <td
                                        key={j}
                                        className={`  ${col.align === "right" ? "text-right" : "text-left"}  py-3 px-2 whitespace-nowrap `}
                                    >
                                        {/* 🔥 ถ้ามี render ใช้ render */}
                                        {col.render
                                            ? col.render(row)
                                            : typeof row[col.key] === "number"
                                                ? row[col.key].toLocaleString()
                                                : row[col.key]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
}