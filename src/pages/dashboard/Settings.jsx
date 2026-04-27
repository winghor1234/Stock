// pages/dashboard/Settings.jsx
export default function Settings() {
    return (
        <div className="p-6 bg-[#06251d] rounded-xl border border-white/10">
            <h2 className="text-xl mb-4">Settings</h2>

            <div className="space-y-3">
                <input
                    placeholder="Username"
                    className="w-full p-3 bg-[#041a13] border border-white/10 rounded-lg"
                />

                <button className="bg-green-500 px-6 py-2 rounded-lg text-black">
                    Save
                </button>
            </div>
        </div>
    );
}