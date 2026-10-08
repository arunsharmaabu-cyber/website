export default function Dot({ className = "" }: { className?: string }) {
  return <span className={`block flex-none rounded-full bg-accent ${className}`} />;
}
