import { cn } from "../lib/cn";

export function Logo({ className, wordmark = true }: { className?: string; wordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="20"
          height="20"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="5" y="14.25" width="12" height="2" rx="1" fill="#35D07F" />
      </svg>
      {wordmark ? <span className="text-[15px] font-semibold tracking-tight whitespace-nowrap">QVA Grading</span> : null}
    </span>
  );
}
