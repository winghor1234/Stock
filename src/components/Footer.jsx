import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#070f0c] text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* LEFT - LOGO + DESC */}
                <div>
                    {/* logo */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-black font-bold">
                            <img
                                src="/logo.jpeg"
                                alt="logo"
                                className="w-10 h-10 object-cover rounded-lg"
                            />
                        </div>
                        <span className="text-lg font-semibold">
                            <span className="text-white">SJI</span>{" "}
                            <span className="text-green-400">Investment</span>
                        </span>
                    </div>

                    {/* desc */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        ແພລດຟອມລົງທຶນທີ່ເຊື່ອຖືໄດ້ ມີໃບອະນຸຍາດ ກ.ລ.ຕ 001/2022,
                        ພ້ອມຄວາມປອດໄພສູງ.
                    </p>
                </div>

                {/* PRODUCTS */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-300">
                        ຜະລິດຕະພັນ
                    </h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-green-400 cursor-pointer">Stock US</li>
                        <li className="hover:text-green-400 cursor-pointer">ETF</li>
                        <li className="hover:text-green-400 cursor-pointer">Wealth</li>
                        <li className="hover:text-green-400 cursor-pointer">Auto DCA</li>
                        <li className="hover:text-green-400 cursor-pointer">Options</li>
                    </ul>
                </div>

                {/* RESOURCES */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-300">
                        ຂໍ້ມູນ
                    </h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-green-400 cursor-pointer">ຂ່າວສານ</li>
                        <li className="hover:text-green-400 cursor-pointer">Education</li>
                        <li className="hover:text-green-400 cursor-pointer">API</li>
                        <li className="hover:text-green-400 cursor-pointer">Blog</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-300">
                        ຕິດຕໍ່
                    </h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>+856 209 666 111 9</li>
                        <li>info@msjiinvestment.la</li>
                        <li>ນະຄອນຫຼວງວຽງຈັນ, ລາວ</li>
                        <li className="hover:text-green-400 cursor-pointer">ຮ່ວມງານ</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}