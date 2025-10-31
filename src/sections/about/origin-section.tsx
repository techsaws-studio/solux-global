"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { OriginSectionData } from "@/data/containers.about-page-data";

function OriginSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="layout-standard section-margin-standard">
      <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-bold text-center lg:mb-10 md:mb-8 mb-6">
        About <span className="text-secondary">Solux Global</span>
      </h2>

      <div className="rounded-xl bg-card border-border border shadow-sm px-6 pt-6 pb-10">
        <div className="flex justify-center gap-10 border-b border-border pb-4 mb-10">
          {OriginSectionData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`md:text-lg text-base font-medium font-dm_sans border-b-[3px] transition-all duration-300 ${
                activeTab === index
                  ? "border-primary text-primary"
                  : "border-transparent text-heading hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-[350px]">
              <Image
                src={OriginSectionData[activeTab].image}
                alt={OriginSectionData[activeTab].label}
                width={500}
                height={256}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="w-full md:w-1/2 text-left">
              <h3 className="md:text-4xl text-xl font-medium text-heading font-dm_sans md:mb-4 mb-2">
                {OriginSectionData[activeTab].title}
              </h3>
              <p className="md:text-base text-sm leading-relaxed">
                {OriginSectionData[activeTab].content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OriginSection;
