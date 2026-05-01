export default function StockRow({ name, company, price, change, positive = false }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-3 last:border-none">

            {/* LEFT */}
            <div className="leading-tight">
                <p className="text-white text-[12px] font-medium tracking-wide">
                    {name}
                </p>
                <p className="text-[10px] text-white/40">
                    {company}
                </p>
            </div>

            {/* RIGHT */}
            <div className="text-right space-y-1">
                <p className="text-white text-[12px] font-medium">
                    {price}
                </p>

                <span
                    className={`inline-block text-[10px] px-2 py-[2px] rounded-md font-medium tracking-wide
                        ${positive
                            ? "bg-green-500/15 text-green-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                >
                    {change}
                </span>
            </div>

        </div>
    );
}