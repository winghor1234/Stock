// pages/dashboard/Overview.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "กำลังอยู่", value: 50, color: "#facc15" },   // yellow
    { name: "สำเร็จ", value: 690, color: "#22c55e" },    // green
    { name: "ยกเลิก", value: 256, color: "#f87171" },   // red
];
export default function Overview() {
    return (
        <div className=" bg-gray-100 space-y-4 rounded-lg ">

            {/* 🔥 TOP FILTER */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-black">ພາບລວມ</h1>

                <div className="flex gap-3">
                    <select
                        className="bg-[#ECEFF1] px-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    >
                        <option>ປະເພດທຸລະກິດ : ທັງໝົດ</option>
                        <option>ປະເພດທຸລະກິດ : ທັງໝົດ</option>
                        <option>ປະເພດທຸລະກິດ : ທັງໝົດ</option>
                    </select>

                    <select
                        className="bg-[#ECEFF1] px-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    >
                        <option>12/04/2568 - 12/04/2569</option>
                        <option>12/04/2568 - 12/04/2569</option>
                        <option>12/04/2568 - 12/04/2569</option>
                        <option>12/04/2568 - 12/04/2569</option>
                    </select>
                </div>
            </div>

            {/* 🔥 TOP STATS */}
            <div className=" bg-white grid md:grid-cols-4 gap-2 p-4 rounded-lg">

                {[
                    { title: "ລາຍໄດ້ບໍລິສັດ", value: "฿568,903" },
                    { title: "ຄ່າບໍລິການໄຣເດີ", value: "฿12,679" },
                    { title: "ຈຳນວນຮອບ", value: "14" },
                    { title: "ພາສີ (VAT)", value: "฿3,567" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-5 rounded-xl bg-[#ECEFF1] border hover:bg-gray-200 transition cursor-pointer "
                    >
                        <p className="text-gray-800 text-sm mb-2">{item.title}</p>
                        <h2 className="text-2xl font-bold text-black">
                            {item.value}
                        </h2>
                    </div>
                ))}

            </div>

            {/* 🔥 MAIN GRID */}
            <div className=" grid md:grid-cols-3 gap-2">

                {/* LEFT (CHART) */}
                <div className="col-span-1 p-4 bg-white rounded-xl border hover:bg-gray-100 transition cursor-pointer">

                    <h3 className=" font-semibold text-black mb-2">ສະຖິຕິການບໍລິການ</h3>

                    {/* 🔥 LEGEND */}
                    <div className="space-y-3 text-sm mb-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                                <span className="text-gray-800">ລາຍການທີ່ກຳລັງຢູ່</span>
                            </div>
                            <span className="text-gray-800">50 (5.47%)</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-sm" />
                                <span className="text-gray-800">ລາຍການທີ່ສຳເລັດ</span>
                            </div>
                            <span className="text-gray-800">690 (69%)</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-sm" />
                                <span className="text-gray-800">ລາຍການທີ່ຍົກເລີກ</span>
                            </div>
                            <span className="text-gray-800">256 (25.66%)</span>
                        </div>

                    </div>

                    {/* 🔥 PIE CHART REAL */}
                    <div className="h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0} // full pie
                                    outerRadius={90}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="col-span-2 space-y-4 rounded-xl bg-gray-100">

                    {/* ================= ເຕີມເຄຣດິດ ================= */}
                    <div className="px-4 pb-4 rounded-xl bg-white border border-white/10">

                        <h3 className=" font-semibold">ເຕີມເງິນເຄຣດິດ</h3>

                        <div className="grid md:grid-cols-2 gap-2">

                            {/* LEFT CARD */}
                            <div className=" bg-gray-100 rounded-xl p-4 flex flex-col justify-center items-center hover:bg-gray-200 transition cursor-pointer">
                                <p className="text-gray-800 text-sm mb-2">346 ລາຍການ</p>

                                <h2 className="text-3xl font-bold text-green-400">
                                    ฿45,457
                                </h2>

                                <button className="mt-4 text-sm text-gray-400 hover:text-green-400">
                                    ເບິ່ງລາຍການ →
                                </button>
                            </div>

                            {/* RIGHT LIST */}
                            <div className="">
                                <p className=" text-sm text-gray-800 mb-3">ລາຍການເຕີມເງິນເຄຣດິດ</p>

                                <ul className="space-y-2 text-sm">
                                    {[1000, 500, 500, 500, 500].map((amt, i) => (
                                        <li key={i} className="flex justify-between text-gray-800">
                                            <span>{i + 1}. DW0000001</span>
                                            <span className="text-green-400">+ກີບ{amt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* ================= ถอนเครดิต ================= */}
                    <div className="px-4 pb-4 rounded-xl bg-white">

                        <h3 className=" font-semibold">ถอนเครดิต</h3>

                        <div className="grid md:grid-cols-2 gap-2">

                            {/* LEFT CARD */}
                            <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6 flex flex-col justify-center items-center hover:bg-gray-200 transition cursor-pointer">
                                <p className="text-gray-800 text-sm mb-2">234 ລາຍການ</p>

                                <h2 className="text-3xl font-bold text-red-400">
                                    60,000 ກີບ
                                </h2>

                                <button className="mt-4 text-sm text-gray-900 hover:text-red-400">
                                    ເບິ່ງລາຍການ →
                                </button>
                            </div>

                            {/* RIGHT LIST */}
                            <div>
                                <p className="text-sm text-gray-800 mb-3">ລາຍການຖອນເງິນເຄຣດິດ</p>

                                <ul className="space-y-2 text-sm">
                                    {[500, 500, 500, 500, 500].map((amt, i) => (
                                        <li key={i} className="flex justify-between text-gray-800">
                                            <span>{i + 1}. DW0000001</span>
                                            <span className="text-red-400">-฿{amt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* ================= COUPON ================= */}
                    <div className="p-4 rounded-xl bg-white border">

                        <h3 className="mb-6 font-semibold text-lg text-gray-800">ຄູປອງ</h3>

                        <div className="grid md:grid-cols-3 gap-4">

                            {/* LEFT CARDS */}
                            <div className="space-y-4">

                                <div className="p-5 bg-[#F5F7F9] rounded-xl hover:bg-gray-200 transition cursor-pointer">
                                    <p className="text-gray-500 text-sm">ມູນຄ່າທີ່ໃຊ້ໄປແລ້ວ</p>
                                    <h2 className="text-2xl font-bold mt-1 text-gray-800">12,679</h2>
                                    <p className="text-sm text-gray-400 mt-2 cursor-pointer">
                                        ເບິ່ງລາຍການ →
                                    </p>
                                </div>

                                <div className="p-5 bg-[#F5F7F9] rounded-xl hover:bg-gray-200 transition cursor-pointer">
                                    <p className="text-gray-500 text-sm">จำนวนครั้งที่ใช้คูปอง</p>
                                    <h2 className="text-2xl font-bold mt-1 text-gray-800">456</h2>
                                    <p className="text-sm text-gray-400 mt-2 cursor-pointer">
                                        ເບິ່ງລາຍການ →
                                    </p>
                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-span-2 grid md:grid-cols-2 gap-4">

                                {/* USED COUPON */}
                                <div className="pr-4 border-r border-gray-300">
                                    <h4 className="mb-3 font-medium text-gray-700">ຄູປອງທີ່ໃຊ້ແລ້ວ</h4>

                                    <ul className="space-y-2 text-sm text-gray-700">
                                        {[2768, 2090, 1578, 987, 567].map((amt, i) => (
                                            <li key={i} className="flex justify-between">
                                                <span>{i + 1}. ເດີນທາງຄຸ້ມຄ່າກັບດີນ ຮັບສ່ວນຫຼຸດ...</span>
                                                <span>{amt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* TOP USERS */}
                                <div>
                                    <h4 className="mb-3 font-medium text-gray-700">ຜູ້ໃຊ້ງານຄູປອງສູງສຸດ</h4>

                                    <ul className="space-y-2 text-sm text-gray-700">
                                        {[2768, 2090, 1578, 987, 567].map((amt, i) => (
                                            <li key={i} className="flex justify-between">
                                                <span>{i + 1}. Sophie Williams</span>
                                                <span>ກີບ{amt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}