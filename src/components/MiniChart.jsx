export default function MiniChart({ points, positive }) {
  const color = positive ? "#22c55e" : "#ef4444";

  return (
    <svg width="60" height="24" viewBox="0 0 60 24">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}

