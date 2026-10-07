import { cn } from "../lib/cn";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <img
      src="/qva-title.png"
      alt="QVA"
      width={1105}
      height={400}
      draggable={false}
      className={cn(
        "w-auto select-none object-contain object-left",
        size === "lg" ? "h-9 sm:h-10" : "h-7 sm:h-8",
        className,
      )}
    />
  );
}
