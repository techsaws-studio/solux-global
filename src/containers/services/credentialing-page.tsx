import React from "react";

import ServiceIncludesSection from "@/components/partials/service-includes-section";

import {
  CredentialingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionCredentialingData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import CredentialingServiceWhyChooseUsSectionImg from "../../../public/images/credentialing-service-why-choose-us-section-img.jpg";

function CredentialingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Simplify Provider Credentialing & Payer Enrollment with"
        highlightText="Solux Global"
        description="At Solux Global, we understand that credentialing is the backbone of a successful medical practice. Delays or errors in the credentialing process can lead to denied claims, loss of revenue, and compliance issues. That’s why our credentialing specialists provide comprehensive, hassle-free services to ensure your practice gets approved with insurance networks quickly and accurately."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Credentialing Services"
        remaningHeading="Include"
        data={CredentialingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Credentialing Services"
        data={WhyChooseIndividualServiceSectionCredentialingData}
        serviceImage={CredentialingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default CredentialingPage;
