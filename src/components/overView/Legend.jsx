export default function Legend({ color, label }) {
    return (
        <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            {label}
        </div>
    );
}