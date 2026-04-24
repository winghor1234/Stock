

import React from "react";
import { Rocket, BarChart3, Brain, AlertTriangle } from "lucide-react";

export default function SJIUpdates() {

    const updates = [
        {
            type: "feature",
            title: "NVIDIA and Google Cloud Collaborate to Advance Agentic and Physical AI",
            desc: "Companies can build AI factories with NVIDIA Vera Rubin-powered A5X instances scaling up to nearly 1 million Rubin GPUs, Gemini on Google Distributed Cloud, confidential NVIDIA Blackwell GPUs and agentic AI built on Gemini Enterprise Agent Platform with NVIDIA Nemotron and NeMo.",
            time: "3 ມື້ກ່ອນ",
            tag: "NEW",
        },
        {
            type: "activity",
            title: "Autonomous AI at Scale: Adobe Agents Unlock Breakthrough Creative Intelligence With NVIDIA and WPP",
            desc: "Creative AI agents, secured by the NVIDIA OpenShell runtime, generate on-brand content, transforming how brands create, personalize and activate content.AI agents are transforming how work gets done across all industries, accelerating everything from content creation to decision-making NVIDIA’s expanded strategic collaborations with Adobe and WPP are bringing agentic AI to the center of enterprise marketing operations across creative production and customer experience orchestration",
            time: "2 ມື້ກ່ອນ",
            tag: "HOT",
        },
        {
            type: "insight",
            title: "OpenAI Deploys GPT-5.5 Codex on NVIDIA Blackwell Systems",
            desc: `OpenAI has deployed its latest GPT-5.5 model to power Codex on NVIDIA Blackwell infrastructure, enabling a major leap in AI performance.The system delivers up to 50x efficiency improvements and 35x cost reduction, making large-scale AI applications more accessible for enterprises. Thousands of NVIDIA employees are already using the system internally to accelerate workflows, innovation, and problem-solving.This marks a significant step toward scalable, real-world AI deployment across industries.`,
            time: "1 ມື້ກ່ອນ",
            tag: "AI",
        }
    ];

    const iconMap = {
        feature: (
            <img
                src="../../public/invidia.jpg"
                alt="feature"
                className="w-full h-full object-cover rounded-xl"
            />
        ),
        activity: (
            <img
                src="../../public/wpp-nvidia.jpg"
                alt="activity"
                className="w-full h-full object-cover rounded-xl"
            />
        ),
        insight: (
            <img
                src="../../public/ai.webp"
                alt="insight"
                className="w-full h-full object-cover rounded-xl"
            />
        ),
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
                                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
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