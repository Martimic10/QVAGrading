import { featured, formatScore, subgrades } from "../data/content";

export function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2 text-sm">
          <span className="font-semibold tracking-tight">QVA</span>
          <span className="text-muted">/</span>
          <span className="truncate text-muted">Grade Report</span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Analysis complete
        </span>
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[210px_minmax(0,1fr)] lg:items-start lg:gap-7">
        <div className="mx-auto w-full max-w-[210px] lg:max-w-none">
          <img
            src="/patrick-rookieauto.jpeg"
            alt="Patrick Mahomes 2017 Panini Contenders Optic rookie ticket"
            className="block h-auto w-full rounded-[10px] shadow-[0_16px_36px_rgba(0,0,0,0.32)]"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted">QVA GRADE</p>
          <div className="mt-2 flex items-end gap-3">
            <p className="font-mono text-6xl leading-none font-medium tracking-tight text-accent">
              {formatScore(featured.grade)}
            </p>
            <span className="mb-1.5 rounded-full bg-pine px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] text-accent">
              {featured.label}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">2017 Contenders Optic · Rookie Ticket</p>

          <ul className="mt-5 border-t border-line">
            {subgrades.map((item) => (
              <li
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 text-sm"
              >
                <span className="text-muted">{item.label}</span>
                <span className="font-mono text-ink">{formatScore(item.score)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-lg border border-line bg-bg p-4">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">AI ASSESSMENT</p>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-ink">
              “{featured.assessment}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
