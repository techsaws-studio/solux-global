import React from "react";
import { Metadata } from "next";

import MedicalBillingCodingPage from "@/containers/services/medical-billing-coding-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Medical Billing Services USA | Solux Global",
  description:
    "Solux Global offers expert medical billing solutions to reduce denials, speed up reimbursements, and ensure HIPAA compliance for your practice.",
});

function MedicalBillingCoding() {
  return <MedicalBillingCodingPage />;
}

export default MedicalBillingCoding;
