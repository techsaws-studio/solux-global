"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import FreeAuditFormSectionImg from "../../../public/images/free-audit-form-section-img.png";

function FreeAuditFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    monthlyClainVolume: "",
    topBillingChallenges: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      practice: "",
      monthlyClainVolume: "",
      topBillingChallenges: "",
      message: "",
    });
  };

  return (
    <section className="bg-black section-padding-standard">
      <div className="layout-standard section-padding-standard grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="bg-white md:p-8 max-md:py-8 max-md:px-4 rounded-lg border border-border shadow-md lg:max-w-[500px] mx-auto text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:mb-8 mb-6">
            <h2 className="md:text-4xl text-2xl font-medium font-dm_sans text-heading mb-1">
              Claim Your Free Billing Audit
            </h2>
            <p className="md:text-sm text-xs font-medium">
              Fill out the form below and let our experts show you how much more
              your practice can earn.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name here"
                className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address here"
                className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number here"
              className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
            />

            <input
              type="text"
              name="practice"
              value={formData.practice}
              onChange={handleChange}
              placeholder="Enter your practice name here"
              className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="monthlyClainVolume"
                value={formData.monthlyClainVolume}
                onChange={handleChange}
                required
                placeholder="Enter your monthly claim volume"
                className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
              />
              <input
                type="text"
                name="topBillingChallenges"
                value={formData.topBillingChallenges}
                onChange={handleChange}
                required
                placeholder="Enter your billing challenges"
                className="w-full h-[50px] px-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your needs..."
              className="w-full p-4 bg-transparent border border-border rounded-lg text-heading placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors md:text-base text-sm"
            />

            <Button className="h-[45px] rounded-full w-full hover:bg-primary-hover md:text-base text-sm font-dm_sans">
              Book Your Free Audit
            </Button>
          </form>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={FreeAuditFormSectionImg}
            alt="Free Audit Form"
            className="rounded-xl w-[80%] lg:w-[85%] h-[70%] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FreeAuditFormSection;
