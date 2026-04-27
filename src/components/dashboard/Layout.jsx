// Layout.jsx
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
export default function DashboardLayout({ children }) {
    return (
        <div className="h-screen flex flex-col  text-white ">

            {/* TOPBAR */}
            <div className="h-[64px] shrink-0 ">
                <Topbar />
            </div>

            {/* BODY */}
            <div className="flex flex-1 overflow-hidden bg-gray-100">

                {/* SIDEBAR */}
                <div className="w-[260px] h-full border-2 bg-white">
                    <Sidebar />
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-6 min-h-full">
                        {children}
                    </div>
                </div>

            </div>

        </div>
    );
}