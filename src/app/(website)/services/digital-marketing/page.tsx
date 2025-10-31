import React from "react";
import { Metadata } from "next";

import DigitalMarketingPage from "@/containers/services/digital-marketing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Healthcare Digital Marketing Services | Solux Global",
  description:
    "Grow your practice with Solux Global’s digital marketing services. SEO, PPC, social media, and branding solutions tailored for healthcare providers.",
});

function DigitalMarketing() {
  return <DigitalMarketingPage />;
}

export default DigitalMarketing;
