import { cn } from "../lib/cn";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.04-2.31.7-3.06 1.58-.67.77-1.26 2-1.11 3.18 1.17.09 2.36-.62 3.09-1.63" />
    </svg>
  );
}

export function AppStoreButton({
  href = "#get-started",
  className,
  onClick,
}: {
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label="Download on the App Store"
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-2.5 text-white shadow-[0_8px_18px_rgba(53,208,127,0.2)] transition-[filter,transform] duration-150 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]",
        className,
      )}
    >
      <AppleLogo className="h-5 w-5 shrink-0 text-white" />
      <span className="flex min-w-0 flex-col items-start leading-none text-white">
        <span className="text-[8px] font-medium tracking-[0.06em]">GET IT ON</span>
        <span className="mt-0.5 text-[14px] font-semibold tracking-[-0.02em]">App Store</span>
      </span>
    </a>
  );
}
