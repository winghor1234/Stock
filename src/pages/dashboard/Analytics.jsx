// pages/dashboard/Analytics.jsx
export default function Analytics() {
    return (
        <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-[#06251d] rounded-xl border border-white/10">
                <h3>AI Recommendation</h3>
                <p className="text-green-400">Buy NVDA 🚀</p>
            </div>

            <div className="p-6 bg-[#06251d] rounded-xl border border-white/10">
                <h3>Risk</h3>
                <p className="text-yellow-400">Medium Risk</p>
            </div>

        </div>
    );
}