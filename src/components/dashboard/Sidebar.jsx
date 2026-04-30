"use client";

import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import {
    LayoutDashboard,
    BarChart3,
    Wallet,
    User2,
    Settings,
    Flag,
    NotebookText,
    Activity,
    FileText,
    Shield,
    ChevronRight,
    Settings2,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/logo.jpeg";

/* ================= MENU ================= */

const sections = [
    {
        title: "ຫຼັກ",
        items: [
            { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
            { name: "ຕິດຕາມຕະຫຼາດ", path: "/dashboard/marketting", icon: BarChart3 },
            { name: "ຄຳສັ່ງ live", path: "/dashboard/orders", icon: Activity, badge: 12 },
        ],
    },
    {
        title: "ຈັດການ",
        items: [
            { name: "ລູກກຄ້າ", path: "/customers", icon: User2 },
            { name: "ປະຫວັດທຸລະກຳ", path: "/transactions", icon: NotebookText },
            { name: "Portfolio", path: "/portfolio", icon: Wallet },
            { name: "ຄ່າ Commission", path: "/commission", icon: Wallet },
        ],
    },
    {
        title: "ລາຍງານ",
        items: [
            { name: "Logs", path: "/logs", icon: FileText },
            { name: "ກວດສອບ KYC", path: "/kyc", icon: Shield, badge: 3, color: "red" },
            { name: "ການເເຈ້ງເຕືອນ", path: "/alerts", icon: Flag, badge: 4, color: "yellow" },
            { name: "Audit Log", path: "/audit", icon: FileText },
        ],
    },
    {
        title: "ລະບົບ",
        items: [
            { name: "System Health", path: "/system", icon: Settings },
            { name: "ຕັ້ງຄ່າ", path: "/settings", icon: Settings2 },
        ],
    },
];

/* ================= COMPONENT ================= */

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div
            className={`
        h-screen bg-[#031826] border-r border-white/5 flex flex-col
        transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${collapsed ? "w-[80px]" : "w-[260px]"}
      `}
        >

            {/* ===== TOP ===== */}
            <div className="shrink-0">

                {/* LOGO */}
                <div className="flex items-center justify-between px-5 py-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <img
                            src={Logo}
                            className="w-10 h-10 rounded-xl object-cover"
                        />

                        {!collapsed && (
                            <span className="text-white font-semibold text-sm">
                                SJIINVESTMENT
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-white/40 hover:text-green-400 transition"
                    >
                        <ChevronRight
                            size={20}
                            className={`transition duration-300 ${collapsed ? "" : "rotate-180"
                                }`}
                        />
                    </button>
                </div>

                {/* MARKET */}
                {!collapsed && (
                    <div className="px-5 py-4">
                        <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-2 rounded-lg flex justify-between">
                            <div className="flex gap-2 items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                NYSE - OPEN
                            </div>
                            <span>07:03 ET</span>
                        </div>
                    </div>
                )}

            </div>

            {/* ===== SCROLL ===== */}
            <div className="flex-1 min-h-0">
                <SimpleBar style={{ maxHeight: "100%" }}>

                    <div className="px-2 py-3 space-y-5">
                        {sections.map((section, i) => (
                            <div key={i}>

                                {/* TITLE */}
                                {!collapsed && (
                                    <p className="text-[11px] text-white/30 px-3 mb-2 uppercase tracking-wider">
                                        {section.title}
                                    </p>
                                )}

                                {/* ITEMS */}
                                <div className="space-y-1">
                                    {section.items.map((item, j) => {
                                        const Icon = item.icon;
                                        const isActive = location.pathname === item.path;

                                        return (
                                            <div
                                                key={j}
                                                onClick={() => navigate(item.path)}
                                                className={` group relative flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-green-500/20 to-transparent text-green-400"
                                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                                    } `}
                                            >

                                                {/* ACTIVE BAR */}
                                                {isActive && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-green-400 rounded-r-full" />
                                                )}

                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} />

                                                    {!collapsed && (
                                                        <span className="text-sm transition-all duration-300">
                                                            {item.name}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* BADGE */}
                                                {!collapsed && item.badge && (
                                                    <span
                                                        className={`text-xs px-2 py-[2px] rounded-full font-medium  ${item.color === "red"
                                                            ? "bg-red-500 text-white"
                                                            : item.color === "yellow"
                                                                ? "bg-yellow-400 text-black"
                                                                : "bg-green-400 text-black"
                                                            }  `}
                                                    >
                                                        {item.badge}
                                                    </span>
                                                )}

                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        ))}
                    </div>

                </SimpleBar>
            </div>

            {/* ===== USER ===== */}
            <div className="shrink-0 p-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
                        AS
                    </div>

                    {!collapsed && (
                        <div>
                            <p className="text-sm text-white">Admin Simone</p>
                            <p className="text-xs text-white/40">Super Admin</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}