"use client";

import React from "react";
import { motion } from "framer-motion";

function DifferenceSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        ease: "easeOut",
        damping: 10,
        stiffness: 100,
      },
    },
  } as const;

  return (
    <section className="layout-standard section-margin-standard">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-bold text-center mb-4">
          The <span className="text-secondary">Solux Global</span> Difference
        </h2>

        <p className="md:text-lg text-base leading-relaxed md:max-w-3xl md:mx-auto">
          Unlike traditional billing companies, Solux Global provides more than
          just claim submissions. We act as a strategic partner, helping you
          identify revenue leakages, reduce denials, and achieve faster
          reimbursements. With a dedicated team of billing experts, certified
          coders, and technology specialists, we ensure that your practice
          thrives in today&apos;s competitive healthcare environment.
        </p>

        <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
      </motion.div>
    </section>
  );
}

export default DifferenceSection;
