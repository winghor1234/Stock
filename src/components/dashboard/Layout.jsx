"use client"
import { useState } from "react"
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="h-screen flex flex-col text-white">

            {/* TOPBAR */}
            <div className="h-[64px] shrink-0">
                <Topbar onToggle={() => setIsOpen(!isOpen)} />
            </div>

            {/* BODY */}
            <div className="flex flex-1 overflow-hidden bg-gray-100">

                {/* SIDEBAR */}
                <div className={`
                    fixed md:static top-[64px] left-0 z-50
                    h-[calc(100vh-64px)] md:h-full
                    w-[260px] bg-white border-2
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0
                `}>
                    <Sidebar />
                </div>

                {/* OVERLAY (mobile only) */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 min-h-full">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
}