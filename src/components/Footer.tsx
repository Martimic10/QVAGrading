import { useEffect, useId, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";

const pageLinks = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Verification", href: "#verification" },
] as const;

const legalCopy = {
  privacy:
    "QVA uses the account details and card photos you submit to produce a condition assessment, subgrades, and a digital certificate. Photos are processed to generate your report. QVA does not sell collector data. A full privacy policy will be published before paid grading opens.",
  terms:
    "A QVA grade is an AI-assisted assessment of visible card condition. It is not a grade from a professional grading company and does not guarantee the result of any third-party submission. Value figures are estimates for informational purposes only. Full terms will be published before paid grading opens.",
} as const;

export function Footer() {
  const [legal, setLegal] = useState<keyof typeof legalCopy | null>(null);

  return (
    <footer className="border-t border-line">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted">AI-Powered Card Intelligence</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footer">
            {pageLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="text-left text-muted transition-colors hover:text-ink"
              onClick={() => setLegal("privacy")}
            >
              Privacy
            </button>
            <button
              type="button"
              className="text-left text-muted transition-colors hover:text-ink"
              onClick={() => setLegal("terms")}
            >
              Terms
            </button>
          </nav>
        </div>
        <p className="mt-12 text-sm text-muted">© 2026 QVA</p>
      </Container>
      {legal ? (
        <LegalDialog title={legal === "privacy" ? "Privacy" : "Terms"} onClose={() => setLegal(null)}>
          {legalCopy[legal]}
        </LegalDialog>
      ) : null}
    </footer>
  );
}

function LegalDialog({
  title,
  children,
  onClose,
}: {
  title: string;
  children: string;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button type="button" className="absolute inset-0 bg-black/60" aria-label="Close dialog" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 id={titleId} className="text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">{children}</p>
        <Button className="mt-6" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
