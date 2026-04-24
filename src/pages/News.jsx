

import React from "react";
import { Rocket, BarChart3, Brain, AlertTriangle } from "lucide-react";

export default function SJIUpdates() {

    const updates = [
        {
            type: "feature",
            title: "SJI ເພີ່ມ AI ວິເຄາະຮຸ້ນແບບ real-time",
            desc: "ຊ່ວຍຄາດຄະເນແນວໂນ້ມຕະຫຼາດແບບອັດຕະໂນມັດ",
            time: "2 ຊົ່ວໂມງກ່ອນ",
            tag: "NEW",
        },
        {
            type: "activity",
            title: "ມີການຊື້ TSLA ສູງຂຶ້ນ +18%",
            desc: "ຜູ້ໃຊ້ SJI ກຳລັງເຂົ້າຊື້ຮຸ້ນ Tesla ຫຼາຍຂຶ້ນ",
            time: "10 ນາທີກ່ອນ",
            tag: "HOT",
        },
        {
            type: "insight",
            title: "AI ແນະນຳ: NVDA ມີແນວໂນ້ມຂຶ້ນ",
            desc: "ຄະແນນ Bullish 87% ຈາກລະບົບ AI",
            time: "1 ຊົ່ວໂມງກ່ອນ",
            tag: "AI",
        },
        {
            type: "alert",
            title: "ແຈ້ງເຕືອນ: ຄວາມຜັນຜວນ TSLA ສູງ",
            desc: "ລາຄາປ່ຽນແປງໄວ ຄວນລະວັງ",
            time: "5 ນາທີກ່ອນ",
            tag: "RISK",
        },
    ];

    const iconMap = {
        feature: <Rocket className="w-full h-full text-green-400" />,
        activity: <BarChart3 className="w-full h-full text-blue-400" />,
        insight: <Brain className="w-full h-full text-purple-400" />,
        alert: <AlertTriangle className="w-full h-full text-red-400" />,
    };

    return (
        <section className="bg-[#020d09] text-white min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6 space-y-10">

                {/* HEADER */}
                <div>
                    <p className="text-green-400 text-sm font-bold tracking-widest mb-3">
                        SJI NEWS
                    </p>

                    <h1 className="text-3xl font-bold">
                        ຂ່າວ ແລະ ອັບເດດ
                    </h1>

                    <p className="text-gray-400 mt-2">
                        ຕິດຕາມການເຄື່ອນໄຫວ ແລະ AI insights ຂອງ SJI
                    </p>
                </div>

                {/* NEWS LIST */}
                <div className="divide-y divide-white/10">

                    {updates.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row gap-6 py-6 group cursor-pointer"
                        >

                            {/* LEFT (แทน image ด้วย icon box) */}
                            <div className="w-full md:w-[260px] h-[160px] rounded-xl 
                            bg-white/5 border border-white/10 
                            flex items-center justify-center flex-shrink-0 
                            group-hover:border-green-400/40 transition">

                                {iconMap[item.type]}

                            </div>

                            {/* RIGHT */}
                            <div className="flex-1">

                                {/* DATE + TAG */}
                                <div className="flex items-center gap-3 mb-2">
                                    <p className="text-gray-500 text-sm">
                                        {item.time}
                                    </p>

                                    <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* READ MORE */}
                                <button className="text-green-400 text-sm font-medium hover:underline">
                                    ອ່ານເພີ່ມ →
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}