import React from "react";

import FaqSection from "@/sections/faq/faq-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";

function FaqPage() {
  return (
    <main>
      <PagesHeroSection
        title="Answers to Your Most Common Questions of"
        highlightText="Solux Global"
        description="Explore our most frequently asked questions to understand how Solux Global helps healthcare practices streamline billing, ensure HIPAA compliance, and boost financial performance. Find clarity on our services, processes, and how we empower your practice to thrive."
      />
      <FaqSection />
      <CTASection />
    </main>
  );
}

export default FaqPage;
