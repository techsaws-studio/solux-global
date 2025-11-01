import React from "react";

import {
  MedicalBillingCodingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionMedicalBillingCodingData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import MedicalBillingCodingServiceWhyChooseUsSectionImg from "../../../public/images/medical-billing-coding-service-why-choose-us-section-img.jpg";

function MedicalBillingCodingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Medical Billing Services Designed to"
        highlightText="Maximize Your Revenue"
        description="At Solux Global, we specialize in providing end-to-end medical billing services for healthcare practices across the USA. Our expert team ensures accuracy, compliance, and efficiency at every stage of the revenue cycle, helping you reduce claim denials, accelerate reimbursements, and improve cash flow."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Medical Billing Service"
        remaningHeading="Include"
        data={MedicalBillingCodingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Medical Billing Service"
        data={WhyChooseIndividualServiceSectionMedicalBillingCodingData}
        serviceImage={MedicalBillingCodingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default MedicalBillingCodingPage;
