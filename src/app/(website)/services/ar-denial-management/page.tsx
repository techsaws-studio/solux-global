import React from "react";
import { Metadata } from "next";

import ARDenialManagementPage from "@/containers/services/ar-denial-management-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "AR & Denial Management Services | Solux Global",
  description:
    "Recover lost revenue with Solux Global’s AR & denial management. We track, appeal, and resolve denied claims to maximize reimbursements.",
});

function ARDenialManagement() {
  return <ARDenialManagementPage />;
}

export default ARDenialManagement;
