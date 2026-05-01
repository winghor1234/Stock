import { useState } from "react";

export default function Settings() {

    /* ================= TOGGLE STATE ================= */
    const [settings, setSettings] = useState([
        {
            title: "ຮັບການແຈ້ງເຕືອນ Email",
            desc: "Alert ຜ່ານ Admin Email",
            active: true,
        },
        {
            title: "Two-Factor Authentication",
            desc: "ຄວາມປອດໄພເພີ່ມ",
            active: true,
        },
        {
            title: "Auto-suspend Suspicious Accounts",
            desc: "ຈັດການດ້ວຍ AI",
            active: true,
        },
        {
            title: "Live Trade Stream",
            desc: "WebSocket real-time",
            active: true,
        },
        {
            title: "Maintenance Mode",
            desc: "ປິດລະບົບຊົ່ວຄາວ",
            active: false,
        },
    ]);

    /* ================= RATE STATE ================= */
    const [rates, setRates] = useState({
        regular: "0.05",
        vip1: "0.03",
        vip2: "0.02",
        inst: "0.01",
    });

    /* ================= RISK STATE (🔥 FIX สำคัญ) ================= */
    const [risk, setRisk] = useState({
        maxLoss: "10000",
        position: "20",
        margin: "80",
    });

    /* ================= TOGGLE ================= */
    const handleToggle = (index) => {
        setSettings((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, active: !item.active } : item
            )
        );
    };

    /* ================= RATE CHANGE ================= */
    const handleRateChange = (key, value) => {
        setRates((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    /* ================= RISK CHANGE (🔥 FIX) ================= */
    const handleRiskChange = (key, value) => {
        setRisk((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    /* ================= SAVE ================= */
    const handleSave = () => {
        console.log("SETTINGS:", settings);
        console.log("RATES:", rates);
        console.log("RISK:", risk);
    };

    /* ================= RESET (🔥 FIX ไม่ reload) ================= */
    const handleReset = () => {
        setRates({
            regular: "0.05",
            vip1: "0.03",
            vip2: "0.02",
            inst: "0.01",
        });

        setRisk({
            maxLoss: "10000",
            position: "20",
            margin: "80",
        });

        setSettings((prev) =>
            prev.map((item) => ({
                ...item,
                active: true,
            }))
        );
    };

    const admins = [
        { name: "Admin Simone", initials: "AS", role: "Super Admin", status: "active" },
        { name: "James Kim", initials: "JK", role: "Risk Manager", status: "active" },
        { name: "Lisa Park", initials: "LP", role: "Compliance", status: "active" },
        { name: "Mike T.", initials: "MT", role: "Support", status: "away" },
    ];

    const statusStyle = {
        active: "bg-green-500/10 text-green-400",
        away: "bg-blue-500/10 text-blue-400",
    };

    return (
        <div className="max-w-[1400px] mx-auto w-full space-y-6">

            {/* ===== GRID ===== */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* ================= LEFT ================= */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    <h3 className="text-white font-semibold mb-5">
                        ຕັ້ງຄ່າທົ່ວໄປ
                    </h3>

                    <div className="space-y-5">
                        {settings.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between border-b border-white/5 pb-4 last:border-none"
                            >
                                <div>
                                    <p className="text-white text-sm">{item.title}</p>
                                    <p className="text-xs text-white/40">{item.desc}</p>
                                </div>

                                <button
                                    onClick={() => handleToggle(i)}
                                    className={`
                    w-11 h-6 flex items-center rounded-full p-1 transition-all duration-300
                    ${item.active
                                            ? "bg-green-400 shadow-[0_0_10px_rgba(0,255,156,0.5)]"
                                            : "bg-white/10"}
                  `}
                                >
                                    <div
                                        className={`
                      w-4 h-4 bg-white rounded-full transition-transform duration-300
                      ${item.active ? "translate-x-5" : "translate-x-0"}
                    `}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    <h3 className="text-white font-semibold mb-5">
                        Commission Rate
                    </h3>

                    <div className="space-y-4">

                        <Input label="Regular (0.05% default)" value={rates.regular} onChange={(v) => handleRateChange("regular", v)} />
                        <Input label="VIP Tier 1 ($50K AUM)" value={rates.vip1} onChange={(v) => handleRateChange("vip1", v)} />
                        <Input label="VIP Tier 2 ($200K AUM)" value={rates.vip2} onChange={(v) => handleRateChange("vip2", v)} />
                        <Input label="Institutional" value={rates.inst} onChange={(v) => handleRateChange("inst", v)} />

                    </div>

                    <div className="flex gap-3 mt-6">
                        <button onClick={handleSave} className="px-5 py-2 bg-green-400 text-black rounded-lg">
                            ບັນທຶກ
                        </button>
                        <button onClick={handleReset} className="px-5 py-2 bg-white/5 text-white/70 rounded-lg">
                            ຍົກເລີກ
                        </button>
                    </div>
                </div>

                {/* ================= RISK ================= */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    <h3 className="text-white font-semibold mb-5">
                        Risk Control
                    </h3>

                    <div className="space-y-4">

                        <Input label="Max Daily Loss per Account" value={risk.maxLoss} onChange={(v) => handleRiskChange("maxLoss", v)} />
                        <Input label="Max Position Size (%AUM)" value={risk.position} onChange={(v) => handleRiskChange("position", v)} />
                        <Input label="Margin Call Level" value={risk.margin} onChange={(v) => handleRiskChange("margin", v)} />

                    </div>

                    <div className="flex gap-3 mt-6">
                        <button onClick={handleSave} className="px-5 py-2 bg-green-400 text-black rounded-lg">
                            ບັນທຶກ
                        </button>
                        <button onClick={handleReset} className="px-5 py-2 bg-red-500/10 text-red-400 rounded-lg">
                            Reset Default
                        </button>
                    </div>
                </div>

                {/* ================= ADMIN TEAM ================= */}
                <div className="bg-[#031826] border border-white/5 rounded-2xl p-5">

                    {/* HEADER */}
                    <h3 className="text-white font-semibold mb-5">
                        Admin Team
                    </h3>

                    {/* TABLE HEADER */}
                    <div className="grid grid-cols-3 text-xs text-white/40 mb-3 px-2">
                        <div>ຊື່</div>
                        <div>ROLE</div>
                        <div className="text-right">STATUS</div>
                    </div>

                    {/* BODY */}
                    <div className="space-y-3">
                        {admins.map((user, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-3 items-center border-b border-white/5 pb-3 last:border-none"
                            >

                                {/* LEFT */}
                                <div className="flex items-center gap-3">

                                    {/* AVATAR */}
                                    <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">
                                        {user.initials}
                                    </div>

                                    {/* NAME */}
                                    <p className="text-white text-sm">{user.name}</p>
                                </div>

                                {/* ROLE */}
                                <p className="text-white/80 text-sm">
                                    {user.role}
                                </p>

                                {/* STATUS */}
                                <div className="text-right">
                                    <span
                                        className={`px-2 py-1 rounded text-xs ${statusStyle[user.status]}`}
                                    >
                                        {user.status === "active" ? "Active" : "Away"}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

/* ================= REUSABLE INPUT ================= */
function Input({ label, value, onChange }) {
    return (
        <div>
            <p className="text-xs text-white/40 mb-1">{label}</p>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#02140f] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/20"
            />
        </div>
    );
}