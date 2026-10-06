import { motion, useReducedMotion } from "framer-motion";

function GriffeyCard({ labelled = false }: { labelled?: boolean }) {
  return (
    <img
      src="/ken-rookie.jpg"
      alt={labelled ? "1989 Upper Deck Ken Griffey Jr. rookie card" : ""}
      className="block h-auto w-full rounded-[8px] shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
    />
  );
}

export function ScanMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-[150px]">
      <GriffeyCard labelled />
      {reduce ? (
        <div className="pointer-events-none absolute inset-x-[8%] top-[42%] h-px bg-accent" aria-hidden="true" />
      ) : (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[8%]"
          initial={{ top: "10%" }}
          animate={{ top: ["8%", "78%", "8%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-px w-full bg-accent shadow-[0_0_10px_#35D07F]" />
          <div className="h-7 bg-[linear-gradient(to_bottom,rgba(53,208,127,0.28),transparent)]" />
        </motion.div>
      )}
    </div>
  );
}

export function CenteringMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-[150px]">
      <GriffeyCard />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] bottom-[16%] w-px bg-accent"
        initial={false}
        animate={reduce ? { left: "49%" } : { left: ["36%", "49%", "36%"] }}
        transition={reduce ? undefined : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] left-[12%] h-px bg-accent/70"
        initial={false}
        animate={reduce ? { top: "34%" } : { top: ["28%", "38%", "28%"] }}
        transition={reduce ? undefined : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const markers = [
  { className: "top-[6px] left-[6px]", tone: "border-accent", delay: 0 },
  { className: "top-[6px] left-[calc(100%-6px)]", tone: "border-accent", delay: 0.35 },
  { className: "top-[calc(100%-6px)] left-[6px]", tone: "border-alert", delay: 0.7 },
  { className: "top-[calc(100%-6px)] left-[calc(100%-6px)]", tone: "border-alert", delay: 1.05 },
];

export function ConditionMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-[150px]">
      <GriffeyCard />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {markers.map((marker) => (
          <motion.span
            key={marker.className}
            className={`absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-[#141C18]/50 ${marker.tone} ${marker.className}`}
            initial={false}
            animate={reduce ? { scale: 1, opacity: 1 } : { scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
            transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, delay: marker.delay, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

const bars = [
  { label: "Centering", width: "95%" },
  { label: "Corners", width: "90%" },
  { label: "Edges", width: "85%" },
  { label: "Surface", width: "90%" },
];

export function GradeMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full max-w-[180px]">
      <p className="font-mono text-4xl leading-none tracking-tight text-accent">9.0</p>
      <p className="mt-1 text-[11px] font-medium tracking-[0.14em] text-accent">MINT</p>
      <ul className="mt-4 space-y-2.5">
        {bars.map((bar, index) => (
          <li key={bar.label}>
            <div className="mb-1 flex justify-between text-[10px] text-muted">
              <span>{bar.label}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={false}
                animate={reduce ? { width: bar.width } : { width: ["0%", bar.width, bar.width, "0%"] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3.6, repeat: Infinity, delay: index * 0.12, ease: "easeInOut", times: [0, 0.35, 0.75, 1] }
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
