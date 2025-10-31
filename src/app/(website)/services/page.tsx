import React from "react";
import { Metadata } from "next";

import ServicesPage from "@/containers/services/services-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Medical Billing & Coding Services | Solux Global USA",
  description:
    "Explore Solux Global’s full range of medical billing solutions — RCM, credentialing, denial management, state licensing, virtual assistants & more.",
});

function Services() {
  return <ServicesPage />;
}

export default Services;
