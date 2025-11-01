import React from "react";

import {
  VirtualAssistanceServiceIncludeSectionData,
  WhyChooseIndividualServiceSectionVirtualAssistantData,
} from "@/data/containers.services-page-data";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import VirtualAssistanceServiceWhyChooseUsSectionImg from "../../../public/images/virtual-assistance-service-why-choose-us-section-img.jpg";

function VirtualAssistancePage() {
  return (
    <main>
      <PagesHeroSection
        title="Smart, Reliable, and Cost-Effective"
        highlightText="Virtual Assistant Solutions"
        description="Running a medical practice involves more than just patient care—it requires handling administrative tasks, scheduling, billing, and communication. These tasks can be time-consuming and distract you from focusing on what matters most: your patients."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Virtual Assistance Service"
        remaningHeading="Include"
        data={VirtualAssistanceServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Virtual Assistance Service"
        data={WhyChooseIndividualServiceSectionVirtualAssistantData}
        serviceImage={VirtualAssistanceServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default VirtualAssistancePage;
