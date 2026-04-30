export default function StockRow({ name, company, price, change, positive }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-3">

            <div>
                <p className="text-white text-sm">{name}</p>
                <p className="text-xs text-white/40">{company}</p>
            </div>

            <div className="text-right">
                <p className="text-white text-sm">{price}</p>
                <span className={`text-xs px-2 py-1 rounded-md ${positive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}>
                    {change}
                </span>
            </div>

        </div>
    );
}