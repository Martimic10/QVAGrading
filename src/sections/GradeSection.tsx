import { Container } from "../components/Container";
import { GradeCard } from "../components/GradeCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

export function GradeSection() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            title="More than a number."
            description="QVA breaks your card down into the characteristics that matter."
          />
        </Reveal>
        <Reveal className="mx-auto mt-12 w-full max-w-5xl lg:mt-14">
          <GradeCard />
        </Reveal>
      </Container>
    </section>
  );
}
