import React from "react";
import { Metadata } from "next";

import FaqPage from "@/containers/faq-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Frequently Asked Questions | Solux Global",
  description:
    "Find quick answers to common questions about Solux Global’s medical billing, coding, credentialing, and healthcare support services. Learn how we boost revenue, ensure HIPAA compliance, and help practices grow efficiently.",
});

function Faq() {
  return <FaqPage />;
}

export default Faq;
