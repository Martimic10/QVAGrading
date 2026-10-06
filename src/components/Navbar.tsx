import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "../data/content";
import { cn } from "../lib/cn";
import { Container } from "./Container";
import { Logo } from "./Logo";

function NavGetAppButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#get-started"
      onClick={onClick}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-3.5 text-sm font-medium text-white shadow-[0_8px_18px_rgba(53,208,127,0.2)] transition-[filter,transform] duration-150 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]",
        className,
      )}
    >
      Get the app
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white" aria-hidden="true">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
          <path
            d="M6 2.5v5.25M3.75 5.75 6 8.25l2.25-2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const drawerId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#product" className="text-ink" aria-label="QVA home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-transparent px-3 py-1.5 text-sm text-muted transition-colors hover:border-line hover:bg-card hover:text-ink focus-visible:border-line focus-visible:bg-card focus-visible:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <NavGetAppButton />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls={drawerId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      {createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              key="mobile-nav"
              id={drawerId}
              className="fixed inset-0 z-[80] flex flex-col bg-bg md:hidden"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex h-16 items-center justify-between px-5">
                <a href="#product" className="text-ink" aria-label="QVA home" onClick={close}>
                  <Logo />
                </a>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-1 flex-col px-5" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="border-b border-line py-4 text-lg text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3 px-5 pt-8 pb-8">
                <NavGetAppButton className="w-full justify-center" onClick={close} />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
