import React from "react";

import {
  MedicalScribbingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionMedicalScribbingData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import MedicalScribbingServiceWhyChooseUsSectionImg from "../../../public/images/medical-scribbing-service-why-choose-us-section-img.jpg";

function MedicalScribbingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Enhance Efficiency with Professional"
        highlightText="Medical Scribing Solutions"
        description="At Solux Global, we provide reliable medical scribing services that allow healthcare providers to focus on delivering exceptional patient care while we manage clinical documentation. Our team of trained scribes ensures accurate, real-time charting, reducing administrative burden and minimizing physician burnout."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Medical Scribbing Service"
        remaningHeading="Include"
        data={MedicalScribbingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Medical Scribbing Service"
        data={WhyChooseIndividualServiceSectionMedicalScribbingData}
        serviceImage={MedicalScribbingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default MedicalScribbingPage;
