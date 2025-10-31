import React from "react";
import { Metadata } from "next";

import PricingPage from "@/containers/pricing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Affordable Medical Billing Pricing Plans | Solux Global",
  description:
    "Discover Solux Global's flexible & affordable medical billing pricing plans. Pay-for-performance model designed to save costs & maximize revenue growth.",
});

function Pricing() {
  return <PricingPage />;
}

export default Pricing;
