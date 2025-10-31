import React from "react";

import { FaqSectionData } from "@/data/containers.faq-page-data";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function FaqSection() {
  return (
    <section className="layout-standard section-margin-standard">
      <Accordion type="single" collapsible className="w-full">
        {FaqSectionData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4 md:text-lg text-base text-heading font-semibold hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="md:text-base text-sm pb-4 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FaqSection;
