import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { usePathname, navigate } from "./lib/route";
import { CertificateSection } from "./sections/CertificateSection";
import { CollectionSection } from "./sections/CollectionSection";
import { DefectSection } from "./sections/DefectSection";
import { FaqSection } from "./sections/FaqSection";
import { FinalCta } from "./sections/FinalCta";
import { GradeSection } from "./sections/GradeSection";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { PricingSection } from "./sections/PricingSection";
import { Problem } from "./sections/Problem";
import { ShouldIGrade } from "./sections/ShouldIGrade";
import { useEffect } from "react";

/** Marketing site only. The grading product lives in the QVA mobile app. */
export default function App() {
  const path = usePathname();

  useEffect(() => {
    if (path === "/" || path === "") return;
    navigate("/");
  }, [path]);

  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <div className="mx-4 min-h-screen border-x border-line sm:mx-10 lg:mx-16">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <GradeSection />
          <DefectSection />
          <CertificateSection />
          <CollectionSection />
          <ShouldIGrade />
          <PricingSection />
          <FaqSection />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
