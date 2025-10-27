export default function ScoreCircle({
  score,
  size = "large",
}: {
  score: number;
  size?: "large" | "small";
}) {
  const radius = size === "large" ? 70 : 45;
  const strokeWidth = size === "large" ? 8 : 6;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (score: number): string => {
    if (score >= 80) return "#10b981";
    if (score >= 60) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={getColor(score)}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 1s ease",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute">
        <span
          className={`${size === "large" ? "text-3xl" : "text-xl"} font-bold`}
          style={{ color: getColor(score) }}
        >
          {score}
        </span>
      </div>
    </div>
  );
}
