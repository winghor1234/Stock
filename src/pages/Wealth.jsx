// import React from "react";

// export default function Wealth() {
//     return (
//         <section className="bg-[#041a13] text-white min-h-screen py-16">
//             <div className="border-2 max-w-7xl mx-auto px-6">

//                 {/* HEADER */}
//                 <div className="mb-16">
//                     <p className="text-green-400 tracking-widest mb-3">
//                         WEALTH MANAGEMENT
//                     </p>

//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                         ບໍລິການຂັ້ນສູງ
//                     </h1>

//                     <p className="text-gray-400">
//                         ເລືອກ Plan ທີ່ເໝາະ ເພື່ອການລົງທຶນໄລຍະຍາວ
//                     </p>
//                 </div>

//                 {/* MAIN CARD */}
//                 <div className="relative rounded-2xl border border-green-500/10   bg-gradient-to-r from-[#06251d] to-[#02140f]  p-10 flex flex-col md:flex-row justify-between items-center gap-10 hover:border-green-400/30 transition">

//                     {/* LEFT */}
//                     <div className="max-w-xl">

//                         <p className="text-green-400 text-sm tracking-widest mb-4">
//                             ຜົນຕອບແທນ SJI CLIENTS
//                         </p>

//                         <h2 className="text-5xl font-bold text-green-400 mb-4">
//                             +18.4%
//                         </h2>

//                         <p className="text-gray-400 mb-8">
//                             ສະເລ່ຍປີ 2024 — ສູງກວ່າ S&P 500
//                         </p>

//                         <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-medium   hover:bg-green-400 transition shadow-[0_0_25px_rgba(0,255,150,0.25)]">
//                             ເລີ່ມ 30 ວັນຟຣີ →
//                         </button>

//                     </div>

//                     {/* RIGHT STATS */}
//                     <div className="flex gap-6 flex-wrap justify-center">

//                         {/* CARD 1 */}
//                         <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
//                             <p className="text-2xl font-bold text-green-400 mb-2">4.2%</p>
//                             <p className="text-gray-400 text-sm">Dividend Yield</p>
//                         </div>

//                         {/* CARD 2 */}
//                         <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
//                             <p className="text-2xl font-bold text-white mb-2">0.1%</p>
//                             <p className="text-gray-400 text-sm">ຄ່າທຳນຽມ</p>
//                         </div>

//                         {/* CARD 3 */}
//                         <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
//                             <p className="text-2xl font-bold text-white mb-2">AI</p>
//                             <p className="text-gray-400 text-sm">Smart Advisor</p>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//             {/* ===== PRICING / PLANS ===== */}
//             <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">

//                 {/* BASIC */}
//                 <div className="p-8 rounded-2xl border border-green-500/10  bg-gradient-to-b from-[#06251d] to-[#02140f] hover:border-green-400/30 transition">

//                     <p className="text-green-400 text-xs tracking-widest mb-3">
//                         STARTER
//                     </p>

//                     <h3 className="text-2xl font-bold mb-1">Basic</h3>
//                     <p className="text-gray-400 text-sm mb-6">ສຳລັບຜູ້ເລີ່ມຕົ້ນ</p>

//                     <p className="text-3xl font-bold text-green-400 mb-1">ຟຣີ</p>
//                     <p className="text-gray-500 text-sm mb-6">ຕະຫຼອດໄປ</p>

//                     <ul className="space-y-3 text-sm text-gray-300 mb-8">
//                         <li>✔ ຊື້ຂາຍ US, ETF</li>
//                         <li>✔ Real-time LV1</li>
//                         <li>✔ Mobile App</li>
//                         <li>✔ ຊ່ວຍເຫຼືອ 24/7</li>
//                     </ul>

//                     <button className="w-full border border-green-500/30 py-3 rounded-xl hover:bg-green-500 hover:text-black transition">
//                         ເລີ່ມຟຣີ
//                     </button>
//                 </div>

//                 {/* PRO (highlight) */}
//                 <div className="p-8 rounded-2xl border border-green-400  bg-gradient-to-b from-[#06251d] to-[#02140f] shadow-[0_0_40px_rgba(0,255,150,0.1)] scale-[1.02]">

//                     <p className="text-green-400 text-xs tracking-widest mb-3">
//                         ⭐ ນິຍົມທີ່ສຸດ
//                     </p>

//                     <h3 className="text-2xl font-bold mb-1">Pro</h3>
//                     <p className="text-gray-400 text-sm mb-6">ສຳລັບນັກລົງທຶນຈິງຈັງ</p>

//                     <p className="text-3xl font-bold text-green-400 mb-1">199 ລ້ານກີບ</p>
//                     <p className="text-gray-500 text-sm mb-6">ຕໍ່ເດືອນ</p>

//                     <ul className="space-y-3 text-sm text-gray-300 mb-8">
//                         <li>✔ ທຸກຢ່າງໃນ Basic</li>
//                         <li>✔ Real-time LV2 ຟຣີ</li>
//                         <li>✔ Options Trading</li>
//                         <li>✔ AI Portfolio Advisor</li>
//                         <li>✔ DCA Auto Invest</li>
//                         <li>✔ ບໍລິການສ່ວນຕົວ</li>
//                     </ul>

//                     <button className="w-full bg-green-500 text-black py-3 rounded-xl font-medium
//       hover:bg-green-400 transition shadow-[0_0_25px_rgba(0,255,150,0.25)]">
//                         ເລີ່ມ 30 ວັນຟຣີ
//                     </button>
//                 </div>

//                 {/* PRIVATE */}
//                 <div className="p-8 rounded-2xl border border-green-500/10 
//     bg-gradient-to-b from-[#06251d] to-[#02140f]
//     hover:border-green-400/30 transition">

//                     <p className="text-green-400 text-xs tracking-widest mb-3">
//                         ENTERPRISE
//                     </p>

//                     <h3 className="text-2xl font-bold mb-1">Private</h3>
//                     <p className="text-gray-400 text-sm mb-6">ສຳລັບທຶນ K500M+</p>

//                     <p className="text-3xl font-bold text-green-400 mb-1">Custom</p>
//                     <p className="text-gray-500 text-sm mb-6">ຕາມຕົວລູກຄ້າ</p>

//                     <ul className="space-y-3 text-sm text-gray-300 mb-8">
//                         <li>✔ ທຸກຢ່າງໃນ Pro</li>
//                         <li>✔ Dedicated Advisor</li>
//                         <li>✔ Priority Support</li>
//                         <li>✔ Institutional Access</li>
//                         <li>✔ Custom Reporting</li>
//                     </ul>

//                     <button className="w-full border border-green-500/30 py-3 rounded-xl hover:bg-green-500 hover:text-black transition">
//                         ຕິດຕໍ່ພວກເຮົາ
//                     </button>
//                 </div>

//             </div>
//         </section>
//     );
// }



import React from "react";

export default function Wealth() {

    const funds = [
        {
            name: "Fidelity Funds - Global Technology Fund",
            return: "+15.13%",
            amount: "1K+",
        },
        {
            name: "Allianz Income and Growth",
            return: "+7.04%",
            amount: "3K+",
        },
        {
            name: "Fidelity Funds - Global Dividend Fund MDis",
            return: "+8.92%",
            amount: "18K+",
        },
    ];

    return (
        <section className="bg-[#041a13] text-white min-h-screen py-16">

            {/* ===== TOP SECTION (ของเดิมคุณ) ===== */}
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="text-green-400 tracking-widest mb-3">
                        WEALTH MANAGEMENT
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        ບໍລິການຂັ້ນສູງ
                    </h1>

                    <p className="text-gray-400">
                        ເລືອກ Plan ທີ່ເໝາະ ເພື່ອການລົງທຶນໄລຍະຍາວ
                    </p>
                </div>

                {/* HERO CARD */}
                <div className="relative rounded-2xl border border-green-500/10 bg-gradient-to-r from-[#06251d] to-[#02140f] p-10 flex flex-col md:flex-row justify-between items-center gap-10 hover:border-green-400/30 transition">

                    {/* LEFT */}
                    <div className="max-w-xl">
                        <p className="text-green-400 text-sm tracking-widest mb-4">
                            ຜົນຕອບແທນ SJI SERVICE
                        </p>

                        <h2 className="text-5xl font-bold text-green-400 mb-4">
                            +30%
                        </h2>

                        <p className="text-gray-400 mb-8">
                            ສະເລ່ຍປີ 2025 — ສູງກວ່າ S&P 500
                        </p>

                        <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-medium hover:bg-green-400 transition shadow-[0_0_25px_rgba(0,255,150,0.25)]">
                            ເລີ່ມ 30 ວັນຟຣີ →
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex gap-6 flex-wrap justify-center">

                        <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
                            <p className="text-2xl font-bold text-green-400 mb-2">3%</p>
                            <p className="text-gray-400 text-sm">Dividend Yield</p>
                        </div>

                        <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
                            <p className="text-2xl font-bold text-white mb-2">0.1%</p>
                            <p className="text-gray-400 text-sm">ຄ່າທຳນຽມ</p>
                        </div>

                        <div className="p-6 rounded-xl bg-[#06251d] border border-green-500/10 text-center w-[140px]">
                            <p className="text-2xl font-bold text-white mb-2">AI</p>
                            <p className="text-gray-400 text-sm">Smart Advisor</p>
                        </div>

                    </div>

                </div>
            </div>

            {/* ===== 🔥 NEW: MODERN FUND LIST ===== */}
            <div className="mt-16 max-w-7xl mx-auto px-6">

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">

                    {funds.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between px-6 py-6 
                            border-b border-white/5 last:border-none 
                            hover:bg-white/5 transition"
                        >

                            {/* LEFT */}
                            <div className="flex items-center gap-4 flex-1">

                                <span className="text-gray-400 w-5">
                                    {i + 1}
                                </span>

                                <p className="text-lg font-medium text-white">
                                    {item.name}
                                </p>

                                <span className="text-[10px] px-2 py-[2px] rounded bg-white/10 text-gray-300">
                                    SGD
                                </span>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-16">

                                {/* RETURN */}
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">
                                        1Y Return
                                    </p>
                                    <p className="text-green-400 font-semibold text-lg">
                                        {item.return}
                                    </p>
                                </div>

                                {/* AMOUNT */}
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">
                                        Average subscription
                                    </p>
                                    <p className="text-red-400 font-semibold text-lg">
                                        {item.amount}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}