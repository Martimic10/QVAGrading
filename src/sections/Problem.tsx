import type { ReactNode } from "react";
import { CenteringMotion, ConditionMotion, GradeMotion, ScanMotion } from "../components/FeatureMotions";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
const cards: { title: string; description: string; graphic: ReactNode }[] = [
  {
    title: "Card scan",
    description: "QVA finds the card in your photo and reads the visible surface.",
    graphic: <ScanMotion />,
  },
  {
    title: "Centering",
    description: "Border proportions and alignment, measured from the image.",
    graphic: <CenteringMotion />,
  },
  {
    title: "Condition",
    description: "Corners, edges, and surface marks highlighted on the card.",
    graphic: <ConditionMotion />,
  },
  {
    title: "Explanation",
    description: "An estimated grade, four subgrades, and a written reason.",
    graphic: <GradeMotion />,
  },
];

export function Problem() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Grading shouldn’t be a guessing game.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-pretty text-muted sm:text-lg">
            QVA looks at the card, then shows the grade and the reason together.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
                <div className="flex h-[220px] items-center justify-center bg-bg px-4">{card.graphic}</div>
                <div className="border-t border-line p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
