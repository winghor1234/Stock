import { Bell, Sun } from "lucide-react";
import TickerBar from "../TickerBar";

export default function Topbar() {
    return (
        <div className="bg-[#02140f] border-b border-white/5">

            {/* 🔹 TICKER BAR */}
            <div className="border-b border-white/5 overflow-hidden">
                <TickerBar />
            </div>

            {/* 🔹 HEADER */}
            <div className="h-[64px] flex items-center justify-between px-6 bg-[#031826] border-b border-white/5">

                {/* LEFT */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-[16px] font-semibold text-white leading-tight">
                        Dashboard ຫຼັກ
                    </h1>
                    <p className="text-[11px] text-gray-400 mt-[1px]">
                        APEX › Admin › Dashboard
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2">

                    {/* TIME */}
                    <div className="px-2.5 py-[4px] rounded-md bg-[#0a1a16] border border-white/10 text-[12px] text-gray-300">
                        06:06:45 ET
                    </div>

                    {/* NOTIFICATION */}
                    <div className="relative w-8 h-8 flex items-center justify-center rounded-md bg-[#0a1a16] border border-white/10 hover:bg-white/10 transition cursor-pointer">
                        <span className="absolute top-[5px] right-[5px] w-[5px] h-[5px] bg-red-500 rounded-full"></span>
                        <Bell size={15} className="text-gray-300" />
                    </div>

                    {/* THEME */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0a1a16] border border-white/10 hover:bg-white/10 transition cursor-pointer">
                        <Sun size={15} className="text-gray-300" />
                    </div>

                </div>
            </div>
        </div>
    );
}