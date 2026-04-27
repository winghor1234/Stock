// components/dashboard/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wallet, BarChart3, Settings, LineChart } from "lucide-react";

const menu = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "Portfolio", path: "/dashboard/portfolio", icon: Wallet },
    { name: "Trading", path: "/dashboard/trading", icon: LineChart },
    { name: "Analytics", path: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="h-full bg-white border-r border-white/10 p-4">
            <nav className="space-y-2">
                {menu.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={i}
                            to={item.path}
                            end={item.path === "/dashboard"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg transition  ${isActive
                                    ? "bg-gray-100 text-black border "
                                    : "text-black hover:text-gray-800 hover:bg-white/5"
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