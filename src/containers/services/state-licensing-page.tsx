import React from "react";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import {
  StateLicensingServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionStateLicensingData,
} from "@/data/containers.services-page-data";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import StateLicensingServiceWhyChooseUsSectionImg from "../../../public/images/state-licensing-management-service-why-choose-us-section-img.jpg";

function StateLicensingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Seamless State Licensing Solutions for"
        highlightText="Healthcare Providers"
        description="Navigating the complexities of state medical licensing can be overwhelming and time-consuming for healthcare providers. At Solux Global, we simplify the process by managing your initial applications, renewals, verifications, and compliance requirements—ensuring you stay licensed and ready to practice without disruptions."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="State Licensing Service"
        remaningHeading="Include"
        data={StateLicensingServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="State Licensing Service"
        data={WhyChooseIndividualServiceSectionStateLicensingData}
        serviceImage={StateLicensingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default StateLicensingPage;
