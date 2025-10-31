"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import TestimonalSectionImg from "../../../public/images/testimonal-section-img.webp";

function HomeTestimonialSection() {
  return (
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard max-md:pt-4 max-md:mb-0 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        <motion.div
          className="space-y-8 lg:col-span-3"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold mb-2">
              Customer <span className="text-secondary">Testimonial</span>
            </h2>
            <p className="text-base font-medium md:text-lg text-muted-foreground italic">
              You shouldn&apos;t only{" "}
              <span className="font-bold text-foreground">believe</span> our
              words — see what our{" "}
              <span className="font-bold text-foreground">clients</span> say.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-justify">
              Solux Global is a reliable billing company with utmost responsive
              staff and it&apos;s always been a pleasure to work with them.
              Previously, when billing functions were performed in-house, we
              were losing thousands of dollars every month due to incompetent
              billing services and our cost of collections was far too high.
              Since partnering with Solux Global, we&apos;ve seen a dramatic
              improvement in our revenue cycle and significantly reduced our
              operational costs.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-1 flex justify-center lg:justify-end w-full mx-auto"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full lg:max-w-xs md:max-w-md flex-center">
            <Image
              src={TestimonalSectionImg}
              alt="Healthcare professional testimonial"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeTestimonialSection;
