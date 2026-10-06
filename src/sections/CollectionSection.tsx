import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { recentGrades } from "../data/content";

const stats = [
  { value: "127", label: "Cards" },
  { value: "$8,420", label: "Raw Value" },
  { value: "8.7", label: "Average Grade" },
];

export function CollectionSection() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            title="Keep every grade in one place."
            description="Save your assessments, certificates, and card history in your personal collection."
          />
        </Reveal>
        <Reveal className="mx-auto mt-12 w-full max-w-5xl lg:mt-14">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="border-b border-line px-5 py-3.5 sm:px-6">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted">MY COLLECTION</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-line">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-line px-5 py-5 sm:border-b-0 sm:px-6 sm:py-6">
                  <p className="font-mono text-3xl tracking-tight text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-line px-5 py-6 sm:px-6">
              <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted">RECENT GRADES</h3>
              <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
                {recentGrades.map((card) => (
                  <li key={card.player}>
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="block aspect-[5/7] w-full rounded-[8px] bg-bg object-cover object-center shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
                    />
                    <p className="mt-3 text-sm text-ink">{card.player}</p>
                    <p className="font-mono text-sm text-accent">{card.grade}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
