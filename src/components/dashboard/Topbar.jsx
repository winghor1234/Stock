import {
    Tally3,
    CircleUserRound,
    ChevronDown,
    Bell,
    Settings,
    BarChart3
} from "lucide-react"

export default function Topbar() {
    return (
        <div className="
      flex justify-between items-center px-6 py-4
      bg-gradient-to-r from-[#041b14] via-[#05261c] to-[#041b14]
      border-b border-green-900/40
      shadow-[0_2px_20px_rgba(0,255,150,0.08)]
    ">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* MENU */}
                {/* <Tally3
                    onClick={onToggle}
                    className="w-6 h-6 text-gray-300 cursor-pointer hover:text-green-400 transition"
                /> */}

                {/* TITLE */}
                <div>
                    <h1 className="text-lg font-semibold text-white tracking-tight">
                        Dashboard ຫຸ້ນ
                    </h1>

                    <p className="text-xs text-green-400/60 mt-1">
                        MEGA <span className="mx-1">›</span> Admin <span className="mx-1">›</span>
                        <span className="text-green-400 font-medium"> Dashboard</span>
                    </p>
                </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

                {/* STATUS BADGE */}
                <div className="
          flex items-center gap-2 px-4 py-2 rounded-full
          bg-green-500/10 border border-green-400/30
          text-green-300 text-sm font-medium
          backdrop-blur-md
          shadow-[0_0_20px_rgba(34,197,94,0.15)]
        ">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    ຕະຫຼາດເປີດ • LSX 28 ກ.ຍ. 2026
                </div>

                {/* ICON BUTTONS */}
                <button className="
          w-10 h-10 flex items-center justify-center
          rounded-xl
          bg-white/5 border border-white/10
          text-gray-300
          hover:bg-green-500/10 hover:text-green-400
          transition backdrop-blur-md
        ">
                    <Bell className="w-5 h-5" />
                </button>

                <button className="
          w-10 h-10 flex items-center justify-center
          rounded-xl
          bg-white/5 border border-white/10
          text-gray-300
          hover:bg-green-500/10 hover:text-green-400
          transition backdrop-blur-md
        ">
                    <Settings className="w-5 h-5" />
                </button>

                <button className="
          w-10 h-10 flex items-center justify-center
          rounded-xl
          bg-white/5 border border-white/10
          text-green-400
          hover:bg-green-500/10
          transition backdrop-blur-md
        ">
                    <BarChart3 className="w-5 h-5" />
                </button>

                {/* USER */}
                <div className="
          flex items-center gap-2 px-3 py-1.5 rounded-xl
          bg-white/5 border border-white/10
          text-gray-300 hover:text-green-400
          cursor-pointer transition backdrop-blur-md
        ">
                    <CircleUserRound className="w-5 h-5" />
                    <span className="text-sm">Wing</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

            </div>
        </div>
    )
}