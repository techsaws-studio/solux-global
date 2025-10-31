import React from "react";

import WhyChooseOurPricingSection from "@/sections/pricing/why-choose-our-pricing-section";
import PricingSection from "@/sections/pricing/pricing-section";

import PagesHeroSection from "@/components/partials/pages-hero-section";
import CTASection from "@/components/partials/cta-section";

function PricingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Affordable & Transparent Pricing for Every"
        highlightText="Healthcare Practice"
        description="At Solux Global, we believe that medical billing, coding, and digital solutions shouldn’t break the bank. That’s why we offer flexible and transparent pricing plans tailored to the unique needs of your healthcare practice. Whether you run a small clinic, mid-sized practice, or large healthcare facility, our pricing ensures you only pay for what you need— maximizing value and minimizing overhead costs."
      />
      <WhyChooseOurPricingSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}

export default PricingPage;
