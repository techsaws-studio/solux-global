import React from "react";

import WhatsIncludedSection from "@/sections/audit/whats-included-section";
import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";
import WhyChooseOurFreeAuditSection from "@/sections/audit/why-choose-our-free-audit-section";

import PagesHeroSection from "@/components/partials/pages-hero-section";
import CTASection from "@/components/partials/cta-section";

function FreeAuditPage() {
  return (
    <main>
      <PagesHeroSection
        title="Unlock Your Practice's True Potential Reliable."
        highlightText="Free Practice Audit"
        description="At Solux Global, we believe every healthcare provider deserves full visibility into their revenue cycle. That's why we offer a complimentary audit of your current billing process."
      />
      <WhatsIncludedSection />
      <FreeAuditFormSection />
      <WhyChooseOurFreeAuditSection />
      <CTASection />
    </main>
  );
}

export default FreeAuditPage;
