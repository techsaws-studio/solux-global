import React from "react";
import { Metadata } from "next";

import FreeAuditPage from "@/containers/free-audit-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Free Practice Audit | Solux Global",
  description:
    "Unlock your healthcare practice's full revenue potential with Solux Global's Free Practice Audit. Get a complimentary review of your billing process, identify revenue leakage, and receive expert recommendations to maximize cash flow and profitability.",
});

function FreeAudit() {
  return <FreeAuditPage />;
}

export default FreeAudit;
