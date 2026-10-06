import { Check } from "lucide-react";
import { cn } from "../lib/cn";
import { Button } from "./Button";

export function PricingCard({
  name,
  description,
  price,
  unit,
  scans,
  features,
  cta,
  popular = false,
}: {
  name: string;
  description: string;
  price: string;
  unit: string;
  scans: string;
  features: readonly string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-lg border bg-surface p-6",
        popular ? "border-accent/50 shadow-[0_0_0_1px_rgba(53,208,127,0.12)]" : "border-line",
      )}
    >
      <div className="flex items-center gap-2.5">
        <h3 className="text-[15px] font-medium text-ink">{name}</h3>
        {popular ? (
          <span className="rounded-full bg-pine px-2 py-0.5 text-xs font-medium text-accent">
            Most Popular
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <p className="text-4xl font-medium tracking-tight text-ink">{price}</p>
        <p className="text-sm text-muted">{unit}</p>
      </div>

      <p className="mt-4 text-base font-medium tracking-tight text-accent">{scans}</p>

      <div className="mt-6 border-t border-line" />

      <ul className="mt-5 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-[#d7ddd8]">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-accent">
              <Check size={14} strokeWidth={2.5} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href="#get-started"
          variant={popular ? "primary" : "secondary"}
          className="w-full"
        >
          {cta}
        </Button>
      </div>
    </article>
  );
}
