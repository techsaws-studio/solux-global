import React from "react";
import { Metadata } from "next";

import CredentialingPage from "@/containers/services/credentialing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Medical Credentialing Services | Solux Global USA",
  description:
    "Get credentialed faster with Solux Global. Streamlined provider enrollment with major payers, ensuring smooth claim acceptance and faster revenue.",
});

function Credentialing() {
  return <CredentialingPage />;
}

export default Credentialing;
