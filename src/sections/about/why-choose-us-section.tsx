"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { WhyChooseUsSectionData } from "@/data/containers.about-page-data";

import AboutWhyChooseUsSectionImg from "../../../public/images/about-why-choose-us-section-img.png";

function WhyChooseUsSection() {
  return (
    <section className="layout-standard section-margin-standard lg:pb-[3rem] max-md:mb-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      <motion.div
        className="space-y-6 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        viewport={{ once: true }}
      >
        {WhyChooseUsSectionData.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex gap-6 items-center max-md:flex-col">
                <motion.div
                  className={`flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-xl ${feature.bgColor}`}
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className={`h-6 w-6 ${feature.themColor}`} />
                </motion.div>
                <div className="max-md:text-center">
                  <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-heading md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="md:text-base text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="relative overflow-hidden flex items-center justify-center h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={AboutWhyChooseUsSectionImg} alt="Why Choose Us" fill />
      </motion.div>
    </section>
  );
}

export default WhyChooseUsSection;
