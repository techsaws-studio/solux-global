"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { WhyChooseIndividualServiceSectionInterface } from "@/types/components.partials-types";

function WhyChooseIndividualServiceSection({
  firstHalfHeading,
  highlightedHeading,
  data,
  serviceImage,
}: WhyChooseIndividualServiceSectionInterface) {
  return (
    <section className="bg-background section-padding-standard max-md:pt-4">
      <div className="layout-standard section-padding-standard">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold text-center lg:mb-16 md:mb-8 mb-6">
          {firstHalfHeading}{" "}
          <span className="text-secondary">{highlightedHeading}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8 max-lg:order-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {data.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="lg:text-xl md:text-lg text-base font-medium text-heading mb-1 font-dm_sans">
                    {title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full lg:w-[85%]">
              <Image
                src={serviceImage}
                alt="AR & Denial Management illustration"
                className="rounded-2xl lg:shadow-2xl border border-order object-cover w-full h-[85%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseIndividualServiceSection;
