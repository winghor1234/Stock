// pages/dashboard/Trading.jsx
export default function Trading() {
    return (
        <div className="p-6 bg-[#06251d] rounded-xl border border-white/10">
            <h2 className="text-xl mb-4">Trading Panel</h2>

            <div className="flex gap-4">
                <button className="bg-green-500 px-6 py-2 rounded-lg text-black">
                    Buy
                </button>
                <button className="bg-red-500 px-6 py-2 rounded-lg text-black">
                    Sell
                </button>
            </div>
        </div>
    );
}