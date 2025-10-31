import React from "react";
import { Metadata } from "next";

import DrugRehabilitationBillingPage from "@/containers/services/drug-rehabilitation-billing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Rehab & Addiction Treatment Billing Services | Solux Global",
  description:
    "Specialized billing for rehab & addiction centers. Solux Global ensures accurate claims, compliance, and improved cash flow for behavioral health providers.",
});

function DrugRehabilitationBilling() {
  return <DrugRehabilitationBillingPage />;
}

export default DrugRehabilitationBilling;
