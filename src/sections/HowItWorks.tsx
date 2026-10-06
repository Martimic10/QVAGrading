import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { steps } from "../data/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader title="From card to grade in minutes." />
        </Reveal>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-14">
          {steps.map((step, index) => (
            <li key={step.number} className="border-t border-line pt-6">
              <Reveal delay={index * 0.06}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{step.number}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-pretty text-muted sm:text-base">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
