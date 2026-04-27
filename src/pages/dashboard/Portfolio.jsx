// pages/dashboard/Portfolio.jsx
export default function Portfolio() {
    return (
        <div className="space-y-4">
            {["AAPL", "TSLA", "NVDA"].map((s, i) => (
                <div key={i} className="p-4 bg-[#06251d] rounded-xl border border-white/10">
                    {s} - $2,000
                </div>
            ))}
        </div>
    );
}