import React from "react";

import ServicesDetailTabSection from "@/sections/services/services-detail-tab-section";
import ServicesWhyChooseUsSection from "@/sections/services/services-why-choose-us-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";

function ServicesPage() {
  return (
    <main>
      <PagesHeroSection
        title="Comprehensive Medical Billing and Healthcare"
        highlightText="Support Services"
        description="At Solux Global, we believe every healthcare provider deserves full
            visibility into their revenue cycle. That's why we offer a complimentary audit of your current billing process."
      />
      <ServicesDetailTabSection />
      <ServicesWhyChooseUsSection />
      <CTASection />
    </main>
  );
}

export default ServicesPage;
