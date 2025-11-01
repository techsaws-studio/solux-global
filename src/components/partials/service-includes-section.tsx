"use client";

import React from "react";
import { motion } from "framer-motion";

import { ServiceIncludeSectionInterface } from "@/types/components.partials-types";

import { Card } from "../ui/card";

function ServiceIncludesSection({
  firstHalfHeading,
  highlightedHeading,
  remaningHeading,
  data,
}: ServiceIncludeSectionInterface) {
  return (
    <section className="bg-background section-padding-standard max-md:pt-4">
      <div className="layout-standard section-padding-standard">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold text-center lg:mb-10 md:mb-8 mb-6">
          {firstHalfHeading}{" "}
          <span className="text-secondary">{highlightedHeading}</span>{" "}
          {remaningHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
          {data.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:shadow-[0_8px_30px_#0C509B25] transition-all duration-500">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white group-hover:bg-[#0C509B] transition-all duration-300 border-border border">
                    <Icon className="w-7 h-7 text-heading group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-dm_sans font-semibold text-heading">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceIncludesSection;
