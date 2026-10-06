import { Plus } from "lucide-react";
import { useState } from "react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { faqs } from "../data/content";
import { cn } from "../lib/cn";

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeader title="Common questions." className="max-w-none" />
          </Reveal>
          <Reveal className="mt-12 lg:mt-14">
          <div className="border-t border-line">
            {faqs.map((item) => {
              const isOpen = open === item.question;
              const panelId = `faq-${item.question
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}`;

              return (
                <div key={item.question} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : item.question)}
                  >
                    <span className="text-base font-medium text-ink">{item.question}</span>
                    <Plus
                      className={cn(
                        "shrink-0 text-muted transition-transform duration-200 motion-reduce:transition-none",
                        isOpen && "rotate-45",
                      )}
                      size={16}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-5 text-sm leading-relaxed text-pretty text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
