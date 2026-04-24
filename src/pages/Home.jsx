import { ChartNoAxesCombined } from "lucide-react";
import React from "react";

export default function Home() {
    return (

        <div>
            <section className="relative bg-[#061a14] text-white overflow-hidden">
                {/* grid background */}
                <div className=" absolute inset-0 ,linear-gradient(90deg,rgba(0,255,150,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* ✅ content */}
                <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT */}
                    <div>
                        {/* badge */}
                        <div className="inline-block border border-green-500/30 text-green-400 px-4 py-1 rounded-full text-sm mb-6">
                            • ໄດ້ຮັບໃບອະນຸຍາດ ກ.ລ.ຕ 001/2022
                        </div>

                        {/* title */}
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            ຊື້ & ຂາຍທົ່ວໂລກ
                        </h1>

                        {/* description */}
                        <p className="text-gray-400 max-w-md mb-8">
                            ລົງທຶນໃນ Stock, ETF ແລະ Options ຈາກ US, ລາວ ແລະ ອື່ນໆ —
                            ດ້ວຍຄ່າທຳນຽມຕ່ຳ ແລະ ເລີ່ມຕົ້ນໄດ້ພຽງ $1.
                        </p>

                        {/* buttons */}
                        <div className="flex gap-4">
                            <button className="bg-gradient-to-r from-[#00d488] to-[#00c6a2] text-black px-6 py-3 rounded-xl font-medium hover:brightness-110 transition">
                                ເລີ່ມລົງທຶນ →
                            </button>

                            <button className="border border-green-500/30 px-6 py-3 rounded-xl hover:bg-green-500/10 transition">
                                ດາວໂຫຼດ App
                            </button>
                        </div>

                        {/* stats */}
                        <div className="flex gap-10 mt-12 border-t border-white/10 pt-6">
                            <div>
                                <h3 className="text-2xl font-bold text-green-400">2.400 ຕື້ກີບ</h3>
                                <p className="text-gray-500 text-sm">ມູນຄ່າລວມ</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-green-400">38 ພັນ+</h3>
                                <p className="text-gray-500 text-sm">ນັກລົງທຶນ</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-green-400">1,200+</h3>
                                <p className="text-gray-500 text-sm">ຮຸ້ນທີ່ຊື້ໄດ້</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (circle graphic) */}
                    <div className="relative flex justify-center items-center">

                        {/* glow */}
                        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full" />

                        {/* orbit ring */}
                        <div className="absolute w-[420px] h-[420px] border border-green-500/20 rounded-2xl animate-spin-slow" />

                        {/* PHONE */}
                        <img
                            src="/public/ooo.png"
                            alt="phone"
                            className=" relative w-[380px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-float z-10 rounded-xl "
                        />

                        {/* small dots */}
                        <div className="absolute top-16 right-16 w-3 h-3 bg-white rounded-full animate-pulse" />
                        <div className="absolute bottom-20 left-12 w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                    </div>
                </div>
            </section>

            <div className="flex flex-wrap justify-center items-center bg-[#061a11] text-sm text-green-400  gap-32 border-b border-t border-white/5 py-4">
                <div>⚡ ຄ່າທຳນຽມ 0% ກັບ US</div>
                <div>📡 Real-time LV2 ຟຣີ</div>
                <div>🔒 ISO 27001 ປອດໄພ</div>
                <div>⏱ 24 ຊົ່ວໂມງ ລົງທຶນໄດ້</div>
                <div>🏛 SIPC ຄ້ຳປະກັນ</div>
            </div>

            {/* ===== SECTION FEATURES ===== */}
            <section
                className="relative text-white"
                style={{
                    background: "radial-gradient(circle at top, rgba(8, 38, 25), transparent 60%), #072e1d",
                }}
            >    <div className="max-w-7xl mx-auto px-6">

                    {/* title */}
                    <div className=" py-12">
                        <p className="text-green-400 mb-3">ຜະລິດຕະພັນ</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ຜະລິດຕະພັນ ແລະ ບໍລິການ ທີ່ດີທີ່ສຸດ
                        </h2>
                        <p className="text-gray-400">
                            ຈາກຮຸ້ນ ຫາ ETF ຫາ Wealth Management — ຄົບທຸກຢ່າງ
                        </p>
                    </div>

                    {/* cards */}
                    <div className="grid md:grid-cols-2 gap-8 pb-12">

                        <div className="p-8 rounded-2xl border border-green-500/10   bg-gradient-to-br from-[#06251d] to-[#02140f]    hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(0,255,150,0.08)] transition">

                            <div className=" w-14 h-14 flex items-center justify-center rounded-2xl bg-green-500/10 mb-6">
                                <img src="../../public/chart.png" alt="chart" />

                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                ຮຸ້ນ (Stocks)
                            </h3>

                            <p className="text-gray-400 mb-6">
                                ລົງທຶນໃນ META, GOOGLE ແລະ 1,200+ ຮຸ້ນ
                            </p>

                            <span className="text-green-400 hover:underline cursor-pointer">
                                ເບິ່ງຮຸ້ນ →
                            </span>
                        </div>

                        <div className="p-8 rounded-2xl border border-green-500/10  bg-gradient-to-br from-[#06251d] to-[#02140f]  hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(0,255,150,0.08)] transition">

                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-500/10 mb-6">
                                <img src="../../public/barChart.png" alt="bar chart" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                ETF
                            </h3>

                            <p className="text-gray-400 mb-6">
                                ກະຈາຍຄວາມສ່ຽງ ດ້ວຍ ETF ຕາມ S&P 500
                            </p>

                            <span className="text-green-400 hover:underline cursor-pointer">
                                ດູ ETF →
                            </span>
                        </div>
                        <div className="p-8 rounded-2xl border border-green-500/10    bg-gradient-to-br from-[#06251d] to-[#02140f]    hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(0,255,150,0.08)] transition">

                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-500/10 mb-6">
                                <img src="../../public/wealth.png" alt="wealth" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Wealth Management
                            </h3>

                            <p className="text-gray-400 mb-6">
                                ວາງແຜນການລົງທຶນ ດ້ວຍ AI Advisor ແລະ ທີ່ປຶກສາສ່ວນຕົວ ສ້າງຄວາມໝັ້ງຄັ່ງໃນໄລຍະຍາວ                            </p>

                            <span className="text-green-400 hover:underline cursor-pointer">
                                ເບິ່ງ plan →
                            </span>
                        </div>

                        <div className="p-8 rounded-2xl border border-green-500/10  bg-gradient-to-br from-[#06251d] to-[#02140f]  hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(0,255,150,0.08)] transition">

                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-500/10  mb-6">
                                <img src="../../public/invest.png" alt="invest"  />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Auto Invest (DCA)
                            </h3>

                            <p className="text-gray-400 mb-6">
                                ຕັ້ງຄ່າລົງທຶນອັດຕະໂນມັດ ທຸກ ວັນ/ອາທິດ/ເດືອນ — Dollar Cost Averaging ຫຼຸດຄວາມສ່ຽງ                            </p>

                            <span className="text-green-400 hover:underline cursor-pointer">
                                ຕັ້ງຄ່າ CDA →
                            </span>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}