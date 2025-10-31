import React from "react";

import HomeHeroSection from "@/sections/home/home-hero-section";
import HomeTrustbarSection from "@/sections/home/home-trustbar-section";
import HomeWhyChooseUsSection from "@/sections/home/home-why-choose-us-section";
import HomeServicesSection from "@/sections/home/home-services-section";
import HomeFAQSection from "@/sections/home/home-faq-section";
import HomeTestimonialSection from "@/sections/home/home-testimonial-section";

import CTASection from "@/components/partials/cta-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <HomeTrustbarSection />
      <HomeWhyChooseUsSection />
      <HomeServicesSection />
      <HomeFAQSection />
      <HomeTestimonialSection />
      <CTASection />
    </main>
  );
}

export default HomePage;
