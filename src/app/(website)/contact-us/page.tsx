import React from "react";
import { Metadata } from "next";

import ContactUsPage from "@/containers/contact-us-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Contact Solux Global | Medical Billing Services USA",
  description:
    "Get in touch with Solux Global today. Call, email, or request a free practice audit. Trusted partner for revenue cycle management & medical billing.",
});

function ContactUs() {
  return <ContactUsPage />;
}

export default ContactUs;
