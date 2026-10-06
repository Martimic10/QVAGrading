export const subgrades = [
  { label: "Centering", score: 9.5 },
  { label: "Corners", score: 9.0 },
  { label: "Edges", score: 8.5 },
  { label: "Surface", score: 9.0 },
] as const;

export const featured = {
  grade: 9.0,
  label: "MINT",
  assessment:
    "Strong centering and a clean surface. Minor whitening was detected along the lower-right edge.",
  certificateId: "QVA-000184",
  date: "October 1, 2026",
  centeringRatio: "49 / 51",
  card: {
    year: "2025",
    setName: "Topps Chrome",
    player: "Shohei Ohtani",
    shortName: "Ohtani",
    parallel: "Refractor",
    number: "17",
  },
};

export const detectedIssues = [
  { area: "Bottom-right edge", detail: "Minor whitening" },
  { area: "Bottom-right corner", detail: "Slight softness" },
];

export const features = [
  {
    title: "Centering",
    description: "Analyze border proportions and alignment.",
    points: [
      { label: "Left and right", detail: "Compare the side borders." },
      { label: "Top and bottom", detail: "Measure the vertical frame." },
      { label: "Alignment", detail: "See where the image sits." },
    ],
  },
  {
    title: "Condition",
    description: "Evaluate corners, edges, and visible surface defects.",
    points: [
      { label: "Corners", detail: "Check for softness and wear." },
      { label: "Edges", detail: "Find whitening along the border." },
      { label: "Surface", detail: "Spot scratches and print lines." },
    ],
  },
  {
    title: "Explanation",
    description: "Understand exactly why QVA reached its assessment.",
    points: [
      { label: "Grade", detail: "An estimated overall grade." },
      { label: "Subgrades", detail: "Centering, corners, edges, and surface." },
      { label: "Assessment", detail: "A written reason for the result." },
    ],
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Take or upload photos of the front and back of your card.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "QVA's computer vision evaluates the visible condition of your card.",
  },
  {
    number: "03",
    title: "Understand",
    description: "Get your estimated grade, subgrades, and visual defect analysis.",
  },
] as const;

export const pricingTiers = [
  {
    name: "Free",
    description: "For collectors who want to try QVA.",
    price: "$0",
    unit: "/ month",
    scans: "3 scans / month",
    features: [
      "3 card scans per month",
      "AI card grading",
      "Centering analysis",
      "Corner, edge & surface analysis",
      "QVA grade & subgrades",
      "Basic collection",
    ],
    cta: "Start Free",
  },
  {
    name: "Collector",
    description: "The recommended plan for most collectors.",
    price: "$9.99",
    unit: "/ month",
    scans: "20 scans / month",
    features: [
      "20 card scans per month",
      "Everything in Free",
      "Detailed defect visualization",
      "Digital QVA certificates",
      "QR verification",
      "Full collection management",
      "Should I Grade insights",
    ],
    cta: "Start Collecting",
    popular: true,
  },
  {
    name: "Pro",
    description: "For serious collectors who grade frequently.",
    price: "$19.99",
    unit: "/ month",
    scans: "60 scans / month",
    features: [
      "60 card scans per month",
      "Everything in Collector",
      "Priority analysis",
      "Advanced grading insights",
      "Bulk grading",
      "Advanced collection tools",
      "Early access to new QVA features",
    ],
    cta: "Go Pro",
  },
] as const;

export const recentGrades = [
  { player: "Dart", grade: "9.0", image: "/jaxson-downtown.jpg", alt: "Jaxson Dart Optic Downtown rookie" },
  { player: "Gengar", grade: "9.5", image: "/mega-gengar.jpg", alt: "Mega Gengar ex illustration rare" },
  { player: "Bonds", grade: "8.5", image: "/barry-bonds.jpg", alt: "Barry Bonds Topps rookie card" },
  { player: "Clemente", grade: "9.0", image: "/roberto-clemente.jpg", alt: "Roberto Clemente Pirates card" },
] as const;

export const estimateRows = [
  { label: "Raw value", value: "$75" },
  { label: "QVA estimated grade", value: "9.0", accent: true },
  { label: "Est. graded value", value: "$150" },
  { label: "Grading cost", value: "$25" },
  { label: "Potential difference", value: "+$50", accent: true, total: true },
] as const;

export const faqs = [
  {
    question: "Is a QVA grade a professional grade?",
    answer:
      "No. QVA is an AI assessment of visible card condition. It is not a grade from a professional grading company, and it does not guarantee the result of a third-party submission.",
  },
  {
    question: "Do I have to mail my card?",
    answer:
      "No. You upload photos of the front and back. The assessment is based on what those photos show.",
  },
  {
    question: "What does each grade include?",
    answer:
      "An estimated overall grade, subgrades for centering, corners, edges, and surface, a written assessment, a view of detected issues, and a digital certificate.",
  },
  {
    question: "Are the value figures a recommendation?",
    answer:
      "No. Estimates are informational only. They do not guarantee a future sale price or a professional grading outcome, and they are not a recommendation to submit or sell.",
  },
  {
    question: "Is pricing a subscription?",
    answer:
      "No. Packs are one-time purchases: 1, 6, 15, or 30 grades. You pay less per card as the pack gets larger.",
  },
  {
    question: "Can I keep my results?",
    answer:
      "Yes. Grades, certificates, and card history can be saved in your collection.",
  },
] as const;

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
] as const;

export function formatScore(score: number) {
  return score.toFixed(1);
}
