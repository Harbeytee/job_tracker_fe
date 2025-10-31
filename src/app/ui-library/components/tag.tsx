export default function Tag({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold border ${className}`}
    >
      {text}
    </span>
  );
}
