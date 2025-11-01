import React from "react";

import {
  DigitalMarketingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionDigitalMarketingData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import DigitalMarketingServiceWhyChooseUsSectionImg from "../../../public/images/digital-marketing-service-why-choose-us-section-img.jpg";

function DigitalMarketingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Expand Your Reach & Grow Your Practice with"
        highlightText="Our Digital Marketing"
        description="In today’s digital world, patients search online before choosing a healthcare provider. Having a strong online presence is no longer optional—it’s essential. At Solux Global, we specialize in digital marketing solutions for medical practices, designed to improve visibility, attract new patients, and strengthen patient loyalty."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Digital Marketing Service"
        remaningHeading="Include"
        data={DigitalMarketingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Digital Marketing Service"
        data={WhyChooseIndividualServiceSectionDigitalMarketingData}
        serviceImage={DigitalMarketingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default DigitalMarketingPage;
