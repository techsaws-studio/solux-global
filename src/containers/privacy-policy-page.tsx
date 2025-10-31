"use client";

import React from "react";
import { motion } from "framer-motion";

import { PrivacyPolicyData } from "@/data/containers.privacy-policy-page-data";

import PagesHeroSection from "@/components/partials/pages-hero-section";

function PrivacyPolicyPage() {
  return (
    <main>
      <PagesHeroSection
        title="View Our"
        highlightText="Privacy Policies"
        description="At Solux Global, we are committed to safeguarding the privacy of your personal and medical information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our website and services."
      />

      <section className="section-padding-standard bg-background">
        <div className="layout-standard section-padding-standard flex flex-col md:gap-8 gap-6">
          {PrivacyPolicyData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border rounded-lg md:p-8 max-md:py-8 max-md:px-4 hover:border-primary transition-colors"
            >
              <h2 className="md:text-2xl text-lg font-dm_sans font-medium text-heading mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="md:text-base text-sm leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicyPage;
