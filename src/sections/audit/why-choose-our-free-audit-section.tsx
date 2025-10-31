"use client";

import React from "react";
import { motion } from "framer-motion";

import { WhyChooseOurFreeAuditSectionData } from "@/data/containers.free-audit-page-data";

import { CheckCircle } from "lucide-react";

function WhyChooseOurFreeAuditSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  return (
    <section className="bg-background section-padding-standard max-md:pt-4">
      <motion.div
        className="layout-standard section-padding-standard"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold text-center lg:mb-10 md:mb-8 mb-6"
        >
          What&apos;s Included in Your{" "}
          <span className="text-secondary">Free Audit</span>
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-left md:text-lg text-heading leading-relaxed"
        >
          {WhyChooseOurFreeAuditSectionData.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <CheckCircle
                className="w-6 h-6 text-secondary mt-1 flex-shrink-0"
                strokeWidth={2.5}
              />
              <span>
                {i === 3 ? (
                  <>
                    Proven to help practices achieve{" "}
                    <span className="font-semibold text-primary">
                      up to 30% revenue growth
                    </span>{" "}
                    within 90 days.
                  </>
                ) : (
                  point
                )}
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default WhyChooseOurFreeAuditSection;
