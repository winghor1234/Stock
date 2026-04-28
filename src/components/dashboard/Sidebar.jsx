// components/dashboard/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wallet, BarChart3, Settings, LineChart, User2, BellDot, Flag, Newspaper, NotebookText } from "lucide-react";

const menu = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "User", path: "/dashboard/user", icon: User2 },
    { name: "Service", path: "/dashboard/service", icon: LineChart },
    { name: "Notifications", path: "/dashboard/notifications", icon: BellDot },
    { name: "Banners", path: "/dashboard/banners", icon: Flag },
    { name: "News", path: "/dashboard/news", icon: Newspaper },
    { name: "Resports", path: "/dashboard/reports", icon: NotebookText },
    // { name: "Analytics", path: "/dashboard/analytics", icon: BarChart3 },
    // { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="h-full bg-[#041b14] border-r border-green-900/30 p-4">
            <nav className="space-y-2">
                {menu.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={i}
                            to={item.path}
                            end={item.path === "/dashboard"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition  ${isActive
                                    ? "bg-white/5 text-green-400 border-green-600 border "
                                    : "text-gray-300 hover:text-green-400   hover:bg-white/5"
                                }`
                            }
                        >
                            <Icon size={18} />
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}