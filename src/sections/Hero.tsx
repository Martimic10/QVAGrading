import { AppStoreButton } from "../components/AppStoreButton";
import { Container } from "../components/Container";
import { ProductMockup } from "../components/ProductMockup";
import { Reveal } from "../components/Reveal";
export function Hero() {
  return (
    <section id="product" className="scroll-mt-20 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <Reveal>
            <h1 className="text-[2.65rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[3.5rem]">
              <span className="block">See the grade.</span>
              <span className="block">See why.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted sm:text-lg">
              AI-powered sports card grading that analyzes centering, corners, edges, and surface —
              then shows you exactly what it found.
            </p>
            <div className="mt-8">
              <AppStoreButton />
              <p className="mt-4 text-sm text-muted">AI-powered • Fast analysis • Digital certificate</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ProductMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
