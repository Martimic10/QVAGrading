import { featured, formatScore, subgrades } from "../data/content";
import { QrCode } from "./QrCode";

export function CertificateCard() {
  return (
    <article className="rounded-xl border border-line bg-card p-3 sm:p-3.5">
      <div className="rounded-lg border border-line px-5 py-7 sm:px-8 sm:py-9">
        <div className="flex items-start justify-between gap-4">
          <p className="text-lg font-semibold tracking-tight">QVA</p>
          <p className="text-[11px] font-medium tracking-[0.16em] text-accent">VERIFIED</p>
        </div>

        <p className="mt-10 text-[11px] font-medium tracking-[0.18em] text-muted">
          DIGITAL CERTIFICATE
        </p>
        <p className="mt-2 font-mono text-sm text-ink">#{featured.certificateId}</p>

        <div className="mt-8">
          <p className="text-sm text-muted">
            {featured.card.year} {featured.card.setName}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
            {featured.card.player}
          </h3>
          <p className="mt-1 text-sm text-muted">{featured.card.parallel}</p>
        </div>

        <p className="mt-8 font-mono text-6xl leading-none font-medium tracking-tight text-accent">
          {formatScore(featured.grade)}
        </p>

        <ul className="mt-7 space-y-2.5">
          {subgrades.map((item) => (
            <li key={item.label} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-ink">
                {item.label}
                <span className="px-2 text-muted">—</span>
              </span>
              <span className="font-mono text-ink">{formatScore(item.score)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6">
          <p className="text-sm text-muted">{featured.date}</p>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-md bg-ink p-1.5">
              <QrCode className="h-16 w-16" />
            </div>
            <p className="text-[10px] font-medium tracking-[0.16em] text-accent">QVA VERIFIED</p>
          </div>
        </div>
      </div>
    </article>
  );
}
