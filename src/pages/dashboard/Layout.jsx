import React from "react";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-[#020d09] text-white">

            {/* SIDEBAR */}
            <aside className="w-[250px] bg-[#041a13] border-r border-white/10 p-6">
                <h1 className="text-xl font-bold text-green-400 mb-10">
                    SJI Dashboard
                </h1>

                <nav className="space-y-4 text-sm">
                    <Link to="/dashboard" className="block hover:text-green-400">Overview</Link>

                    {/* ✅ FIX */}
                    <Link to="/dashboard/portfolio" className="block hover:text-green-400">Portfolio</Link>

                    <Link to="/dashboard/trading" className="block hover:text-green-400">Trading</Link>
                    <Link to="/dashboard/analytics" className="block hover:text-green-400">Analytics</Link>
                    <Link to="/dashboard/settings" className="block hover:text-green-400">Settings</Link>
                </nav>
            </aside>

            {/* MAIN */}
            <div className="flex-1">
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold">Dashboard</h2>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">Wing</span>
                        <div className="w-8 h-8 bg-green-500 rounded-full" />
                    </div>
                </div>

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}