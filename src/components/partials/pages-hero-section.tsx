"use client";

import React from "react";
import { motion } from "framer-motion";

import { PagesHeroSectionInterface } from "@/types/components.partials-types";

import { cn } from "@/lib/utils";

import { SlideFromTop } from "@/utils/motion";

function PagesHeroSection({
  title,
  highlightText,
  titleClass,
  description,
  descriptionClass,
}: PagesHeroSectionInterface) {
  return (
    <section className="relative bg-secondary-background lg:section-padding-standard overflow-hidden">
      <div className="relative layout-standard section-margin-standard text-center">
        <motion.div
          variants={SlideFromTop()}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:gap-6 gap-4"
        >
          <h1
            className={cn(
              titleClass,
              "font-medium text-heading font-dm_sans lg:text-6xl md:text-4xl text-3xl !leading-[130%] lg:max-w-[80%] w-full"
            )}
          >
            {title} <span className="text-primary">{highlightText}</span>
          </h1>
          <p
            className={cn(
              descriptionClass,
              "lg:text-lg md:text-base text-sm lg:max-w-[90%] w-full font-medium"
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PagesHeroSection;
