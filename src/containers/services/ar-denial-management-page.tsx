import React from "react";

import {
  ArDenialManagementServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionArDenialManagementData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import ARDenialManagementServiceWhyChooseUsSectionImg from "../../../public/images/ar-denial-management-service-why-choose-us-section-img.jpg";

function ARDenialManagementPage() {
  return (
    <main>
      <PagesHeroSection
        title="Maximize Collections & Minimize Claim Denials with"
        highlightText="Solux Global"
        description="Managing Accounts Receivable (AR) and claim denials is one of the biggest challenges healthcare providers face. Delayed payments, denied claims, and inconsistent follow-ups can severely impact your practice’s cash flow and profitability."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="AR & Denial Management Service"
        remaningHeading="Include"
        data={ArDenialManagementServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="AR & Denial Management Service"
        data={WhyChooseIndividualServiceSectionArDenialManagementData}
        serviceImage={ARDenialManagementServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default ARDenialManagementPage;
