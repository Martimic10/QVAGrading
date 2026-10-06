import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { cn } from "../lib/cn";
import { detectedIssues, featured } from "../data/content";

const markers = [
  { className: "top-[6px] left-[6px]", tone: "border-accent" },
  { className: "top-[6px] left-[calc(100%-6px)]", tone: "border-accent" },
  { className: "top-[calc(100%-6px)] left-[6px]", tone: "border-alert" },
  { className: "top-[calc(100%-6px)] left-[calc(100%-6px)]", tone: "border-alert" },
];

export function DefectSection() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            title="See what the AI sees."
            description="Instead of simply telling you that your card has a defect, QVA highlights where it was detected."
          />
        </Reveal>
        <Reveal className="mx-auto mt-12 w-full max-w-5xl lg:mt-14">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
              <p className="text-sm font-medium">Condition scan</p>
              <p className="font-mono text-xs text-muted">#{featured.certificateId}</p>
            </div>
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-12">
              <div className="mx-auto w-full max-w-[280px]">
                <div className="relative">
                  <span className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-muted/70" aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-muted/70" aria-hidden="true" />
                  <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-muted/70" aria-hidden="true" />
                  <span className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-muted/70" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(0,0,0,0.38)]">
                    <img
                      src="/shohei-refractor.png"
                      alt="2025 Topps Chrome Shohei Ohtani refractor, front"
                      className="block h-auto w-full"
                    />
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                      {markers.map((marker) => (
                        <span
                          key={marker.className}
                          className={cn(
                            "absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-[#141C18]/35 shadow-[0_0_0_1px_rgba(13,15,14,0.55)]",
                            marker.tone,
                            marker.className,
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex gap-5 text-xs text-muted">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-alert" aria-hidden="true" />
                    Detected
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-accent" aria-hidden="true" />
                    Clear
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted">DETECTED ISSUES</h3>
                <ul className="mt-4 border-t border-line">
                  {detectedIssues.map((issue) => (
                    <li
                      key={issue.area}
                      className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="text-ink">{issue.area}</span>
                      <span className="text-sm text-muted">{issue.detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted">CENTERING</h3>
                    <p className="font-mono text-2xl tracking-tight text-accent">{featured.centeringRatio}</p>
                  </div>
                  <div className="relative mt-4 h-px bg-line">
                    <span
                      className="absolute top-1/2 left-[49%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted">
                    <span>Left 49</span>
                    <span>Right 51</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
