import React from "react";
import { Metadata } from "next";

import VirtualAssistancePage from "@/containers/services/virtual-assistant-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Virtual Medical Assistant Services | Solux Global USA",
  description:
    "Save time with Solux Global’s trained virtual assistants. HIPAA-compliant support for scheduling, billing, documentation & patient communication.",
});

function VirtualAssistance() {
  return <VirtualAssistancePage />;
}

export default VirtualAssistance;
