import { Line, LineChart, ResponsiveContainer } from "recharts";

export default function Card({ title, value, change, positive, icon, data, color }) {
    return (
        <div className="  relative bg-gradient-to-r from-[#031826] to-[#0a2a3f] border-white/5 rounded-2xl p-2 hover:bg-gradient-to-r hover:from-[#031826]/50 hover:to-[#0a2a3f]/50 transition cursor-pointer hover:shadow-[0_20px_60px_rgba(0,255,150,0.12)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-700 to-transparent text-green-400 rounded-xl" />

            <div className="absolute right-4 top-4 w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white/70">
                {icon}
            </div>

            <p className="text-xs text-white/50 mb-2">{title}</p>
            <h2 className="text-2xl text-white font-semibold">{value}</h2>

            <div className="flex gap-2 mt-1">
                <span className={`text-sm ${positive ? "text-green-400" : "text-red-400"}`}>
                    {positive ? "▲" : "▼"} {change}
                </span>
                <span className="text-xs text-white/40">vs ມື້ກ່ອນ</span>
            </div>

            <div className="h-[60px] mt-4">
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}