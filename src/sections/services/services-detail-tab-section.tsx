"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { ServicesDetailTabSectionData } from "@/data/containers.services-page-data";
import { Button } from "@/components/ui/button";

function ServicesDetailTabSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const prevIndex =
    (activeIndex - 1 + ServicesDetailTabSectionData.length) %
    ServicesDetailTabSectionData.length;
  const nextIndex = (activeIndex + 1) % ServicesDetailTabSectionData.length;

  const prev = ServicesDetailTabSectionData[prevIndex];
  const active = ServicesDetailTabSectionData[activeIndex];
  const next = ServicesDetailTabSectionData[nextIndex];

  const NavigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="bg-background section-padding-standard max-md:pt-4">
      <div className="layout-standard section-padding-standard">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold text-center lg:mb-10 md:mb-8 mb-6">
          Our Core <span className="text-secondary">Services</span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-12 items-center">
          <div className="lg:flex lg:flex-col lg:items-start max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
            {ServicesDetailTabSectionData.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left h-[80px] px-4 lg:text-xl md:text-lg text-base max-lg:text-center font-medium font-dm_sans rounded-2xl border transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-heading bg-secondary-background hover:text-secondary"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="relative lg:h-[648px] flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={prev.id + "-prev"}
                initial={{ opacity: 0, y: -260, scale: 0.92, rotateX: 40 }}
                animate={{ opacity: 0.5, y: -190, scale: 0.92, rotateX: 40 }}
                exit={{ opacity: 0, y: -260 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute w-[95%] lg:w-[580px] bg-card border border-border rounded-2xl shadow-md py-12 px-4 hidden lg:block"
              >
                <h3 className="text-3xl font-medium font-dm_sans text-heading mb-4">
                  {prev.title}
                </h3>
                <p className="text-base font-medium line-clamp-3">
                  {prev.description}
                </p>
              </motion.div>

              <motion.div
                key={active.id + "-active"}
                initial={{ opacity: 0, y: 150, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -150 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="z-10 w-full lg:w-[620px] bg-background border border-border rounded-2xl lg:shadow-2xl md:p-14 max-md:py-12 max-md:px-4"
              >
                <h3 className="text-3xl font-medium font-dm_sans text-heading mb-4">
                  {active.title}
                </h3>
                <p className="text-base font-medium line-clamp-3 mb-8">
                  {active.description}
                </p>

                <Button
                  onClick={() => NavigateTo(active.link)}
                  className="h-[45px] px-8 text-base font-dm_sans font-medium hover:bg-primary-hover rounded-full"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                key={next.id + "-next"}
                initial={{ opacity: 0, y: 260, scale: 0.9, rotateX: -40 }}
                animate={{ opacity: 0.5, y: 190, scale: 0.9, rotateX: -40 }}
                exit={{ opacity: 0, y: 260 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute w-[95%] lg:w-[580px] bg-card border border-border rounded-2xl shadow-md py-12 px-4 hidden lg:block"
              >
                <h3 className="text-3xl font-medium font-dm_sans text-heading mb-4">
                  {next.title}
                </h3>
                <p className="text-base font-medium line-clamp-3">
                  {next.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesDetailTabSection;
