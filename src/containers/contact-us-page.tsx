import React from "react";

import ContactDetailSection from "@/sections/contact/contact-detail-section";
import ContactUsFormSection from "@/sections/contact/contact-us-form-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";

function ContactUsPage() {
  return (
    <main>
      <PagesHeroSection
        title="Get in Touch with"
        highlightText="Solux Global"
        description="We’re here to help streamline your billing and coding processes. Whether you’re a small practice, a rehabilitation center, or a large healthcare facility, our team is ready to assist you."
      />
      <ContactDetailSection />
      <ContactUsFormSection />
      <CTASection />
    </main>
  );
}

export default ContactUsPage;
