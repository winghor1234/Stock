export default function LiveKycAlerts() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* ================= LIVE ================= */}
            <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-white text-sm font-semibold">ຄຳສັ່ງ Live</h3>
                        <p className="text-[11px] text-white/40">Realtime</p>
                    </div>

                    <span className="text-green-400 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        LIVE
                    </span>
                </div>

                {/* LIST */}
                <div className="space-y-4 text-[11px]">

                    {[
                        { type: "BUY", ticker: "AAPL", amount: "+$2,142", detail: "150 ຮຸ້ນ · $178.52 · 09:31" },
                        { type: "SELL", ticker: "TSLA", amount: "-$420", detail: "80 ຮຸ້ນ · $248.90 · 09:29" },
                        { type: "BUY", ticker: "NVDA", amount: "+$5,830", detail: "200 ຮຸ້ນ · $892.40 · 09:28" },
                        { type: "SELL", ticker: "AMZN", amount: "-$960", detail: "120 ຮຸ້ນ · $183.20 · 09:26" },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center">

                            {/* LEFT */}
                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-2 py-1 text-[10px] rounded ${row.type === "BUY"
                                        ? "bg-green-500/10 text-green-400"
                                        : "bg-red-500/10 text-red-400"
                                        }`}
                                >
                                    {row.type}
                                </span>

                                <div>
                                    <p className="text-white font-medium">{row.ticker}</p>
                                    <p className="text-[10px] text-white/40">{row.detail}</p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <span
                                className={
                                    row.amount.includes("+")
                                        ? "text-green-400 font-medium"
                                        : "text-red-400 font-medium"
                                }
                            >
                                {row.amount}
                            </span>

                        </div>
                    ))}

                </div>
            </div>

            {/* ================= KYC ================= */}
            <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white text-sm font-semibold">KYC ລໍຖ້າ</h3>
                    <span className="text-xs text-blue-400 cursor-pointer">ທັງໝົດ →</span>
                </div>

                {/* USERS */}
                <div className="space-y-4 text-[11px]">

                    {[
                        { name: "John Thompson", id: "82041", status: "Pending", color: "yellow" },
                        { name: "Sarah Park", id: "82038", status: "In Review", color: "blue" },
                        { name: "Mike Rodriguez", id: "82035", status: "Rejected", color: "red" },
                    ].map((u, i) => (
                        <div key={i} className="flex justify-between items-center">

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">
                                    {u.name[0]}
                                </div>

                                <div>
                                    <p className="text-white">{u.name}</p>
                                    <p className="text-[10px] text-white/40">ID {u.id}</p>
                                </div>
                            </div>

                            <span
                                className={`px-2 py-1 text-[10px] rounded ${u.color === "yellow"
                                    ? "bg-yellow-500/10 text-yellow-400"
                                    : u.color === "blue"
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "bg-red-500/10 text-red-400"
                                    }`}
                            >
                                {u.status}
                            </span>

                        </div>
                    ))}

                </div>

                {/* PROGRESS */}
                <div className="mt-6">
                    <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-white/40">Verified KYC</span>

                        {/* GRADIENT TEXT */}
                        <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent font-medium">
                            102,882 / 142,890
                        </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(0,255,156,0.6)] transition-all duration-700"
                            style={{ width: "72%" }}
                        />
                    </div>

                    <p className="text-[10px] text-white/30 mt-1">72% ສຳເລັດ</p>
                </div>

            </div>

            {/* ================= ALERT ================= */}
            <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white text-sm font-semibold">ແຈ້ງເຕືອນ</h3>
                    <span className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded">
                        4 ລາຍ
                    </span>
                </div>

                {/* LIST */}
                <div className="space-y-4 text-[11px]">

                    {[
                        { text: "TSLA ຂຶ້ນ +8.3%", time: "09:28 ET · Circuit breaker", type: "red", tag: "NEW" },
                        { text: "Margin Call #18204", time: "09:15 ET · Risk alert", type: "yellow" },
                        { text: "API latency >800ms", time: "08:52 ET · System", type: "red", tag: "NEW" },
                        { text: "AAPL options volume ສູງ", time: "08:31 ET · Intelligence", type: "green" },
                    ].map((a, i) => (
                        <div key={i} className="flex gap-3 items-start">

                            <div
                                className={`w-2 h-2 mt-1 rounded-full ${a.type === "red"
                                    ? "bg-red-400"
                                    : a.type === "yellow"
                                        ? "bg-yellow-400"
                                        : "bg-green-400"
                                    }`}
                            />

                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="text-white">{a.text}</p>

                                    {a.tag && (
                                        <span className="text-[10px] bg-red-500/10 text-red-400 px-1 rounded">
                                            {a.tag}
                                        </span>
                                    )}
                                </div>

                                <p className="text-[10px] text-white/40">{a.time}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}