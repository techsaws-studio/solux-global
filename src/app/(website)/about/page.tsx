import React from "react";
import { Metadata } from "next";

import AboutPage from "@/containers/about-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "About Solux Global | Trusted Medical Billing Experts",
  description:
    "Learn about Solux Global's mission to help healthcare providers succeed with reliable, compliant, and results-driven medical billing & coding solutions.",
});

function About() {
  return <AboutPage />;
}

export default About;
