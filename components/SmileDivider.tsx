interface SmileDividerProps {
  className?: string;
  color?: string;
  width?: number;
}

/**
 * The clinic's signature mark: a single hand-drawn smile arc that appears
 * throughout the site (hero underline, section breaks, chat header) as a
 * quiet, recurring motif rather than a decorative flourish.
 */
export default function SmileDivider({
  className = "",
  color = "#FF6F5E",
  width = 180,
}: SmileDividerProps) {
  const height = width * 0.16;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M4 4 Q ${width / 2} ${height - 4}, ${width - 4} 4`}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        className="animate-draw-smile"
      />
    </svg>
  );
}
