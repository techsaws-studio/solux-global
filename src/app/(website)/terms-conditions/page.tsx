import React from "react";
import { Metadata } from "next";

import TermsAndConditionsPage from "@/containers/terms-and-conditions-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Terms and Conditions | Solux Global",
  description:
    "Review Solux Global’s Terms and Conditions to understand the policies, service agreements, and legal guidelines governing the use of our healthcare billing, RCM, and support services.",
});

function TermsAndConditions() {
  return <TermsAndConditionsPage />;
}

export default TermsAndConditions;
