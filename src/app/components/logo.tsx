export default function Logo({ className }: { className?: string }) {
  return (
    <h2
      className={`text-center text-primary text-xl md:text-3xl xl:text-[40px] font-bold ${className}`}
    >
      JobBuddy
    </h2>
  );
}
