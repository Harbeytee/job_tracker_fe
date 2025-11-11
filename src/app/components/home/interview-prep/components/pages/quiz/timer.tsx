interface CircularTimerProps {
  duration: number; // Total duration in seconds
  timeRemaining: number; // Current time remaining in seconds
  size?: number; // Diameter of the circle (default: 280)
  strokeWidth?: number; // Width of the progress ring (default: 20)
}

const Timer: React.FC<CircularTimerProps> = ({
  duration,
  timeRemaining,
  size = 120,
  strokeWidth = 6,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate dimensions
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate progress percentage (how much time has elapsed)
  const progress = ((duration - timeRemaining) / duration) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Determine color based on time remaining
  const getColor = () => {
    const percentRemaining = (timeRemaining / duration) * 100;
    if (percentRemaining > 50) return "#10b981"; // Green
    if (percentRemaining > 25) return "#f59e0b"; // Orange
    return "#ef4444"; // Red
  };

  return (
    <div className="relative inline-block">
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#e4e4e7"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>

      {/* Time Display - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className={`font-bold text-gray-600 ${
            size > 200 ? "text-6xl" : size > 150 ? "text-4xl" : "text-lg"
          }`}
        >
          {formatTime(timeRemaining)}
        </div>
        {
          <div
            className={`text-slate-400 font-medium ${
              size > 200 ? "text-sm" : "text-xs"
            } `}
          >
            {timeRemaining === 0 ? "Time's Up!" : "Time Remaining"}
          </div>
        }
      </div>
    </div>
  );
};

export default Timer;
