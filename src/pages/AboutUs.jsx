import React from "react";
import aaa from "../assets/7.png"

export default function AboutUs() {
    return (
        <section className="bg-[#041a13] text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="text-green-400 tracking-widest mb-3">
                        ກ່ຽວກັບ
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold">
                        SJI Investment
                    </h1>
                </div>

                {/* MAIN CARD */}
                <div className=" rounded-2xl border border-green-500/10  bg-gradient-to-r from-[#06251d] to-[#02140f] p-10 grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            SJI Investment ແມ່ນ Fintech Startup ທີ່ໄດ້ຮັບອະນຸຍາດ
                            ຈາກ ກ.ລ.ຕ ສປປ ລາວ ໃນການລົງທຶນ ແລະ
                            ມີມາດຕະຖານ ISO 27001:2022 ດ້ານຄວາມປອດໄພ.
                        </p>

                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            ພວກເຮົາມຸ່ງເນັ້ນການລົງທຶນສະຫຼາດ ໃຫ້ເຂົ້າຖຶງຕະຫຼາດໂລກ
                            ຜ່ານແພລດຟອມທີ່ໃຊ້ງ່າຍ ແລະ ປອດໄພ.
                        </p>

                        {/* <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-medium  hover:bg-green-400 transition shadow-[0_0_25px_rgba(0,255,150,0.25)]">
                            ດາວໂຫຼດ App ຟຣີ →
                        </button> */}
                    </div>

                    {/* RIGHT STATS */}
                    <div className="flex items-center justify-center ">

                        <img
                            src={aaa}
                            alt="logo"
                            className="object-cover rounded-lg"
                        />

                    </div>

                </div>
                {/* ===== TEAM ===== */}
                <div className="mt-12">

                    {/* title */}
                    <p className="text-green-400 tracking-widest mb-6">
                        ທີມງານ
                    </p>

                    {/* grid */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                name: "ທ່ານ ມະນີລຸດ",

                                role: "Chief Executive Officer",

                                image: `${import.meta.env.BASE_URL}team/ceo.png`,

                                description:
                                    "ມີປະສົບການ 9 ປີໃນການລົງທຶນຮຸ່ນທົ່ວໂລກ ມີຄວາມຊ່ຽວຊານໃນການວິເຄາະຕະຫຼາດ ແລະ ການວາງຍຸດທະສາດການລົງທຶນ"
                            },

                            {
                                name: "ທ່ານ ຊາຍວຸດ",

                                role: "Chief Technology Officer",

                                image: `${import.meta.env.BASE_URL}team/cto.jpeg`,

                                description:
                                    "ມີປະສົບການ 6 ປີໃນດ້ານໄອທີ ຊ່ຽວຊານການພັດທະນາລະບົບ ແລະ ເທັກໂນໂລຊີສະໄໝໃໝ່"
                            },

                            {
                                name: "ທ່ານ ສຸວັນນະພອນ",

                                role: "Chief Financial Officer",

                                image: `${import.meta.env.BASE_URL}team/cfo.jpeg`,

                                description:
                                    "ມີປະສົບການການເງິນຫຼາຍກວ່າ 10 ປີ ຊ່ຽວຊານໃນການບໍລິຫານການເງິນ ແລະ ການວາງແຜນການເຕີບໂຕ"
                            }

                        ].map((member, i) => (
                            <div
                                key={i}
                                className=" group overflow-hidden rounded-3xl bg-gradient-to-b from-[#143654] to-[#0b1d2f] border border-white/10 hover:border-green-400/30 transition-all  duration-500   hover:-translate-y-1   shadow-xl "
                            >

                                {/* image */}
                                <div className="w-full h-[420px] overflow-hidden">

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="  w-full  h-full  object-cover  object-top  group-hover:scale-105  transition-transform  duration-700  "
                                    />

                                </div>

                                {/* content */}
                                <div className="p-6 text-center">

                                    <p className="  text-green-400  text-sm  font-medium  tracking-wide  mb-2  ">
                                        {member.role}
                                    </p>

                                    <h3 className="  text-white  text-xl  font-bold  mb-4  ">
                                        {member.name}
                                    </h3>

                                    <p className="  text-gray-300  text-sm  leading-relaxed  ">
                                        {member.description}
                                    </p>

                                </div>

                            </div>


                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}