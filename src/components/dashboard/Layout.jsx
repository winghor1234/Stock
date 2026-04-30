

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen bg-[#020e17] text-white overflow-hidden">

            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* TOPBAR */}
                <div className="shrink-0">
                    <Topbar />
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto">

                    {/* 🔥 IMPORTANT: CENTER + WIDTH CONTROL */}
                    <div className="max-w-[1400px] mx-auto w-full px-4 py-4">
                        {children}
                    </div>

                </div>

            </div>
        </div>
    );
}