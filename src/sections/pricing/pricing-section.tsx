"use client";

import React from "react";
import { motion } from "framer-motion";

import { PricingSectionData } from "@/data/containers.pricing-page-data";

import { Button } from "@/components/ui/button";

import { Check } from "lucide-react";

function PricingSection() {
  return (
    <section className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-bold text-center lg:mb-10 md:mb-8 mb-6">
          Choose your <span className="text-secondary">Plan</span>
        </h2>

        <div className="grid lg:grid-cols-3 md:gap-8 gap-4">
          {PricingSectionData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden md:shadow-xl border border-border transition-all cursor-pointer"
            >
              <div className="bg-black md:p-8 p-4">
                <h3 className="md:text-3xl text-lg font-bold mb-1 text-primary-foreground">
                  {plan.name}
                </h3>

                <p className="text-sm text-secondary mb-4">{plan.subtitle}</p>
                <p className="text-sm text-slate-300 mb-6">
                  {plan.description}
                </p>
              </div>

              <div className="bg-white p-8 max-md:px-4">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="md:text-base text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 max-md:px-4 !pb-12 bg-white">
                <Button className="w-full h-[45px] font-semibold rounded-full md:text-base text-sm  text-secondary-foreground font-dm_sans hover:bg-secondary-hover bg-secondary hover:text-secondary-foreground">
                  Get started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default PricingSection;
