import React from "react";

import HomeHeroSection from "@/sections/home/home-hero-section";
import HomeTrustbarSection from "@/sections/home/home-trustbar-section";
import HomeWhyChooseUsSection from "@/sections/home/home-why-choose-us-section";

import CTASection from "@/components/partials/cta-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <HomeTrustbarSection />
      <HomeWhyChooseUsSection />
      <CTASection />
    </main>
  );
}

export default HomePage;
