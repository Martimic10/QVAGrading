import { useRef, useState } from "react";
import { Container } from "../components/Container";
import { PricingCard } from "../components/PricingCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { pricingTiers } from "../data/content";
import { cn } from "../lib/cn";

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              Simple pricing. Serious grading.
            </p>
            <SectionHeader
              className="mt-3"
              title="Grade more cards without the grading fees."
              description="Start free, then upgrade when you’re ready to grade more of your collection."
            />
          </div>
        </Reveal>

        <PricingCarousel />

        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05} className="h-full">
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-muted">
            Need more scans? Additional scan options will be available in QVA.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function PricingCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function syncIndex() {
    const element = scroller.current;
    const slide = element?.querySelector<HTMLElement>("[data-slide]");
    if (!element || !slide || slide.offsetWidth === 0) return;
    const step = slide.offsetWidth + 16;
    setIndex(Math.min(pricingTiers.length - 1, Math.round(element.scrollLeft / step)));
  }

  function go(next: number) {
    const element = scroller.current;
    const slide = element?.querySelector<HTMLElement>("[data-slide]");
    if (!element || !slide) return;
    element.scrollTo({ left: next * (slide.offsetWidth + 16), behavior: "smooth" });
    setIndex(next);
  }

  return (
    <div className="mt-10 md:hidden">
      <div
        ref={scroller}
        onScroll={syncIndex}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-0 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Pricing plans"
      >
        {pricingTiers.map((tier) => (
          <div key={tier.name} data-slide className="w-[86%] shrink-0 snap-start">
            <TierCard tier={tier} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {pricingTiers.map((tier, itemIndex) => (
          <button
            key={tier.name}
            type="button"
            aria-label={`Show ${tier.name}`}
            aria-current={itemIndex === index ? "true" : undefined}
            onClick={() => go(itemIndex)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              itemIndex === index ? "w-5 bg-accent" : "w-1.5 bg-[#3d443f]",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function TierCard({ tier }: { tier: (typeof pricingTiers)[number] }) {
  return (
    <PricingCard
      name={tier.name}
      description={tier.description}
      price={tier.price}
      unit={tier.unit}
      scans={tier.scans}
      features={tier.features}
      cta={tier.cta}
      popular={"popular" in tier && tier.popular}
    />
  );
}
