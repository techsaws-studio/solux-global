"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import HomeHeroImg from "../../../public/images/home-hero-img.png";
import { ActivityIcon } from "lucide-react";

function HomeHeroSection() {
  return (
    <section className="relative flex items-center bg-secondary-background">
      <div className="layout-standard grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        <motion.div
          className="md:col-span-2 col-span-1 h-full justify-center flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-heading lg:text-6xl md:text-2xl lg:leading-[110%] font-dm_sans font-medium max-w-[80%]">
            Your Trusted Partner for Seamless{" "}
            <span className="text-primary">
              Medical Billing & Coding in the USA
            </span>
          </h1>

          <p className="lg:text-lg text-sm font-medium">
            At Solux Global, we help healthcare providers maximize revenue,
            reduce denials, and streamline billing operations. From small
            practices to large facilities, we deliver tailored billing and
            coding solutions designed to boost your bottom line.
          </p>
        </motion.div>

        <motion.div
          className="col-span-1 max-md:hidden pt-[5rem]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={HomeHeroImg}
            alt="Medical professional using billing software"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
