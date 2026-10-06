import { cn } from "../lib/cn";

export function SectionHeader({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <h2 className="text-[1.75rem] font-semibold tracking-tight text-balance text-ink sm:text-4xl sm:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
