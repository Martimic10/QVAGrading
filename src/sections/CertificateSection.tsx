import { CertificateCard } from "../components/CertificateCard";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

export function CertificateSection() {
  return (
    <section id="verification" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              title="Every grade gets a digital record."
              description="Every QVA assessment receives a unique certificate that can be verified online."
            />
          </Reveal>
          <Reveal delay={0.08} className="mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
            <CertificateCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
