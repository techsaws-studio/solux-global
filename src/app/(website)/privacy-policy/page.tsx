import React from "react";
import { Metadata } from "next";

import PrivacyPolicyPage from "@/containers/privacy-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Privacy Policy | Solux Global",
  description:
    "Learn how Solux Global collects, uses, and protects your information. We are fully committed to maintaining data privacy, security, and HIPAA compliance across all our healthcare and billing services.",
});

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
