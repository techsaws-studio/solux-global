import React from "react";
import { Metadata } from "next";

import MedicalScribbingPage from "@/containers/services/medical-scribbing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Medical Scribing Services USA | Solux Global",
  description:
    "Outsource medical scribing with Solux Global. HIPAA-compliant, real-time documentation that improves accuracy and saves time for healthcare providers.",
});

function MedicalScribbing() {
  return <MedicalScribbingPage />;
}

export default MedicalScribbing;
