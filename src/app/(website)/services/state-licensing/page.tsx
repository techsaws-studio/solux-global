import React from "react";
import { Metadata } from "next";

import StateLicensingPage from "@/containers/services/state-licensing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Medical State Licensing Services | Solux Global USA",
  description:
    "Solux Global helps providers obtain & maintain state medical licenses quickly. Hassle-free licensing solutions for doctors, clinics, and healthcare groups.",
});

function StateLicensing() {
  return <StateLicensingPage />;
}

export default StateLicensing;
