import { motion, useReducedMotion } from "framer-motion";
import { featured, formatScore, subgrades } from "../data/content";

export function GradeCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <p className="text-sm font-medium">Grade analysis</p>
        <p className="font-mono text-xs text-muted">#{featured.certificateId}</p>
      </div>

      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div className="mx-auto w-full max-w-[240px]">
          <img
            src="/victor-rookie.jpg"
            alt="Victor Wembanyama Panini Prizm rookie card"
            className="block h-auto w-full rounded-[10px] shadow-[0_18px_44px_rgba(0,0,0,0.38)]"
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted">QVA GRADE</p>
              <p className="mt-2 font-mono text-6xl leading-none font-medium tracking-tight text-accent sm:text-7xl">
                {formatScore(featured.grade)}
              </p>
            </div>
            <span className="rounded-full bg-pine px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-accent">
              {featured.label}
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">Panini Prizm · Victor Wembanyama · Rookie</p>
          <SubgradeBars />
        </div>
      </div>

      <div className="border-t border-line px-5 py-5 sm:px-8 sm:py-6">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted">AI ASSESSMENT</p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-pretty text-ink">
          “{featured.assessment}”
        </p>
      </div>
    </div>
  );
}

function SubgradeBars() {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-8 space-y-4">
      {subgrades.map((item) => {
        const width = `${(item.score / 10) * 100}%`;
        return (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-ink">{item.label}</span>
              <span className="font-mono text-ink">{formatScore(item.score)}</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
              {reduce ? (
                <div className="h-full rounded-full bg-accent" style={{ width }} />
              ) : (
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
