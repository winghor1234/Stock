import { Tally3, CircleUserRound, ChevronDown } from "lucide-react";

export default function Topbar({ onToggle }) {
    return (
        <div className="h-full flex items-center justify-between px-6 bg-green-600 border-b border-white/10">

            {/* MENU BUTTON */}
            <div>
                <Tally3
                    onClick={onToggle}
                    className="text-white rotate-90 cursor-pointer hover:text-gray-200"
                />
            </div>

            <h2 className="text-lg font-semibold">SJIInvetment</h2>

            <div className="flex items-center gap-2 px-4 py-1">
                <h2>Wing</h2>
                <ChevronDown className="text-white w-5 h-5 mt-1" />
                <CircleUserRound className="text-white cursor-pointer" />
            </div>
        </div>
    );
}