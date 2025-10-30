import React from "react";

import AboutOriginSection from "@/sections/about/origin-section";

import PagesHeroSection from "@/components/partials/pages-hero-section";
import WhyChooseUsSection from "@/sections/about/why-choose-us-section";
import ValuesSection from "@/sections/about/values-section";
import DifferenceSection from "@/sections/about/difference-section";

function AboutPage() {
  return (
    <main>
      <PagesHeroSection
        title="Empowering Healthcare Practices with Reliable"
        highlightText="Medical Billing Solutions"
        description="Solux Global is dedicated to helping healthcare providers optimize their revenue cycle with accuracy and efficiency."
      />
      <AboutOriginSection />
      <WhyChooseUsSection />
      <ValuesSection />
      <DifferenceSection />
    </main>
  );
}

export default AboutPage;
