"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  HomeFAQSectionData01,
  HomeFAQSectionData02,
} from "@/data/containers.home-page-data";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Minus, Plus, Users } from "lucide-react";
import HomeFaqSectionImg from "../../../public/images/home-faq-section-img.png";

function HomeFAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <style>{`
        .no-chevron .accordion-trigger svg { display: none !important; }
        .no-chevron .pm-icon svg { display: inline-block !important; }
        .no-chevron .accordion-trigger { justify-content: flex-start; }
        .no-chevron .accordion-trigger .question-text { text-align: left; width: 100%; display: block; }
      `}</style>

      <section className="section-padding-standard bg-background">
        <div className="layout-standard section-padding-standard max-md:pt-4 max-md:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mb-16 mb-4">
            {HomeFAQSectionData01.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 p-6 rounded-3xl bg-card border border-border shadow-sm cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center justify-center md:w-12 w-9 md:h-12 h-9 flex-shrink-0 text-primary"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Icon className="md:w-9 w-6 md:h-9 h-6" />
                    </motion.div>

                    <h3 className="font-medium text-base md:text-lg text-heading font-dm_sans whitespace-nowrap leading-tight">
                      {feature.title}
                    </h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-medium font-dm_sans mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="md:text-base text-sm leading-relaxed mb-8">
                  To start with Solux Global, contact us to schedule a
                  consultation with one of our experts. We&apos;ll evaluate your
                  current operations, discuss your business requirements, and
                  suggest personalized solutions to help you achieve your
                  objectives.
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full space-y-3 no-chevron"
                value={openItem || ""}
                onValueChange={(val) => setOpenItem(val)}
              >
                {HomeFAQSectionData02.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="accordion-trigger flex items-start gap-3 px-0 py-3 hover:no-underline">
                      <div
                        className="pm-icon flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 bg-primary"
                        aria-hidden
                      >
                        {openItem === `item-${index}` ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-white" />
                        )}
                      </div>

                      <span className="question-text text-heading font-medium text-base md:text-lg">
                        {faq.question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="md:text-base text-sm pl-10 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-[160%] max-w-5xl">
                <div className="absolute inset-0 bg-yellow-200/40 rounded-3xl transform -rotate-3" />

                <Image
                  src={HomeFaqSectionImg}
                  alt="Our Faqs"
                  width={800}
                  height={800}
                  className="relative w-full h-[200%] object-contain rounded-2xl shadow-lg"
                />

                <div
                  className="absolute bottom-4 right-4 rounded-full p-3"
                  style={{ backgroundColor: "#01509B" }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFAQSection;
