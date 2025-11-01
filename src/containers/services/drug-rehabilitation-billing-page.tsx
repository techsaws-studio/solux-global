import React from "react";

import {
  DrugRehabilitationBillingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionDrugRehabilitationBillingData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import DrugRehabilitationBillingServiceWhyChooseUsSectionImg from "../../../public/images/drug-rehabilitation-billing-service-why-choose-us-section-img.jpg";

function DrugRehabilitationBillingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Drug & Rehabilitation Billing Solutions for"
        highlightText="Maximum Revenue Recovery"
        description="At Solux Global, we understand the unique challenges that drug treatment centers, rehabilitation facilities, and behavioral health providers face when it comes to medical billing and reimbursements. From navigating complex coding requirements to ensuring compliance with payer regulations, our dedicated billing experts help you overcome financial obstacles while you focus on patient recovery."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Drug & Rehab Billing Service"
        remaningHeading="Include"
        data={DrugRehabilitationBillingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Drug & Rehab Billing Service"
        data={WhyChooseIndividualServiceSectionDrugRehabilitationBillingData}
        serviceImage={DrugRehabilitationBillingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default DrugRehabilitationBillingPage;
