export default function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#02140f] border border-white/10 rounded-lg px-3 py-2 text-xs shadow-lg">
                <p className="text-white mb-1 font-medium">{label}</p>

                {payload.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/80">
                        <div
                            className="w-2 h-2 rounded-sm"
                            style={{ background: item.color }}
                        />
                        <span className="text-xs">
                            {item.name}: {item.value}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};