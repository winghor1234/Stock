// import React from "react";

// export default function Home() {
//   return (
//     <section className="relative bg-[#061a14] text-white overflow-hidden">

//       {/* grid background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT */}
//         <div>
//           {/* badge */}
//           <div className="inline-block border border-green-500/30 text-green-400 px-4 py-1 rounded-full text-sm mb-6">
//             • ໄດ້ຮັບໃບອະນຸຍາດ ກ.ລ.ຕ 001/2022
//           </div>

//           {/* title */}
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             ຊື້ & ຂາຍ <br />
//             ທົ່ວໂລກ
//           </h1>

//           {/* description */}
//           <p className="text-gray-400 max-w-md mb-8">
//             ລົງທຶນໃນ Stock, ETF ແລະ Options ຈາກ US, ລາວ ແລະ ອື່ນໆ —
//             ດ້ວຍຄ່າທຳນຽມຕ່ຳ ແລະ ເລີ່ມຕົ້ນໄດ້ພຽງ $1.
//           </p>

//           {/* buttons */}
//           <div className="flex gap-4">
//             <button className="bg-gradient-to-r from-[#00d488] to-[#00c6a2] text-black px-6 py-3 rounded-xl font-medium hover:brightness-110 transition">
//               ເລີ່ມລົງທຶນ →
//             </button>

//             <button className="border border-green-500/30 px-6 py-3 rounded-xl hover:bg-green-500/10 transition">
//               ດາວໂຫຼດ App
//             </button>
//           </div>

//           {/* stats */}
//           <div className="flex gap-10 mt-12 border-t border-white/10 pt-6">
//             <div>
//               <h3 className="text-2xl font-bold text-green-400">₭2.4B</h3>
//               <p className="text-gray-500 text-sm">ມູນຄ່າລວມ</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-green-400">38K+</h3>
//               <p className="text-gray-500 text-sm">ນັກລົງທຶນ</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-green-400">1,200+</h3>
//               <p className="text-gray-500 text-sm">ຮຸ້ນທີ່ຊື້ໄດ້</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT (circle graphic) */}
//         <div className="relative flex justify-center items-center">

//           {/* glow */}
//           <div className="absolute w-[420px] h-[420px] bg-green-500/20 blur-3xl rounded-full" />

//           {/* main circle */}
//           <div className="relative w-[350px] h-[350px] bg-[#02140f] rounded-full flex items-center justify-center shadow-2xl">

//             {/* orbit ring */}
//             <div className="absolute w-[420px] h-[420px] border border-green-500/20 rounded-full animate-spin-slow" />

//             {/* center coin */}
//             <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg">
//               K
//             </div>

//             {/* small dots */}
//             <div className="absolute top-10 right-12 w-3 h-3 bg-white rounded-full" />
//             <div className="absolute bottom-16 left-10 w-2 h-2 bg-green-400 rounded-full" />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }