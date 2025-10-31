"use client";

import React from "react";
import { motion } from "framer-motion";

import { WhyChooseOurPricingSectionData } from "@/data/containers.pricing-page-data";

function WhyChooseOurPricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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
          variants={itemVariants}
          className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-bold text-center lg:mb-10 md:mb-8 mb-6"
        >
          Why Choose Our <span className="text-secondary">Pricing</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="lg:flex lg:justify-between md:gap-4 gap-6 grid md:grid-cols-2 grid-cols-1"
        >
          {WhyChooseOurPricingSectionData.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${value.bgColor} col-span-1 flex flex-col items-center justify-start lg:w-full rounded-2xl p-8 border text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className={`w-14 h-14 ${value.iconColor}`} />
                </div>
                <h3 className="md:text-xl text-lg font-bold text-heading mb-3">
                  {value.title}
                </h3>
                <p className="leading-relaxed md:text-base text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhyChooseOurPricingSection;
