import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { estimateRows } from "../data/content";
import { cn } from "../lib/cn";

export function ShouldIGrade() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              title="Know before you submit."
              description="QVA can help you understand the potential economics of professional grading before you spend money submitting a card."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-line bg-card px-5 py-2 sm:px-6">
              <p className="pt-5 pb-1 text-[11px] font-medium tracking-[0.16em] text-muted">
                INFORMATIONAL ESTIMATE
              </p>
              <dl>
                {estimateRows.map((row, index) => {
                  const isTotal = "total" in row && row.total;
                  const accent = "accent" in row && row.accent;
                  const beforeTotal = index === estimateRows.length - 2;
                  return (
                    <div
                      key={row.label}
                      className={cn(
                        "flex items-baseline justify-between gap-4 py-4",
                        isTotal ? "border-t border-line" : beforeTotal ? "" : "border-b border-line",
                      )}
                    >
                      <dt className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
                        {row.label}
                      </dt>
                      <dd
                        className={cn(
                          "font-mono text-lg tracking-tight",
                          accent ? "text-accent" : "text-ink",
                        )}
                      >
                        {row.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-pretty text-muted">
              Estimates are for informational purposes only and do not guarantee future sale prices or
              professional grading outcomes.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
