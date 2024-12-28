export default function CircularProgress({
  progress,
  total,
  size = 75,
  strokeWidth = 8,
}: {
  progress: number;
  total: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / total) * circumference;

  return (
    <div
      className='relative bg-cyan-100 rounded-full shadow-md'
      style={{ width: size, height: size }}
    >
      <svg
        className='rotate-[-90deg] border border-cyan-800 rounded-full'
        width={size}
        height={size}
      >
        <circle
          stroke='white'
          strokeWidth={strokeWidth}
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          stroke='darkCyan'
          strokeWidth={1}
          fill='none'
          cx={size / 2 - 0.5}
          cy={size / 2 - 0.5}
          r={radius - strokeWidth / 2}
        />
        <circle
          stroke='green'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center text-sm font-medium'>
        {`${progress}/${total}`}
      </div>
    </div>
  );
}
