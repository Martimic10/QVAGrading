import { AppStoreButton } from "../components/AppStoreButton";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

export function FinalCta() {
  return (
    <section id="get-started" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line">
            <img
              src="/QVA-cta.png"
              alt=""
              className="h-[28rem] w-full object-cover object-center sm:h-[24rem] lg:aspect-[2170/725] lg:h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="w-full max-w-md text-center">
                <h2 className="text-[1.75rem] font-semibold tracking-tight text-balance text-ink sm:text-4xl">
                  Know your card before you grade it.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-pretty text-muted sm:text-lg">
                  Grade cards in the QVA mobile app and see exactly what it finds.
                </p>
                <div className="mt-6 flex justify-center">
                  <AppStoreButton href="#pricing" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
