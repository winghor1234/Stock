import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0];

        return (
            <div className="bg-[#0b0f14] px-3 py-2 rounded-lg shadow-xl border border-white/10 text-xs">
                <p className="text-white font-medium mb-1">
                    {data.name}
                </p>

                <div className="flex items-center gap-2 text-white/80">
                    <span
                        className="w-2 h-2 rounded-sm"
                        style={{ background: data.payload.color }}
                    />
                    {data.value.toLocaleString()}
                </div>
            </div>
        );
    }
    return null;
};