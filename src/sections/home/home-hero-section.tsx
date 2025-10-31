"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import HomeHeroImg from "../../../public/images/home-hero-img.png";

function HomeHeroSection() {
  const router = useRouter();

  const NavigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative flex items-center bg-secondary-background">
      <div className="layout-standard grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-lg:mt-12 max-md:section-margin-standard">
        <motion.div
          className="md:col-span-2 col-span-1 max-md:items-center h-full justify-center flex flex-col lg:gap-8 gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-heading lg:text-4xl text-2xl max-md:text-center lg:leading-[110%] font-dm_sans font-medium max-w-[80%]">
            Your Trusted Partner for Seamless{" "}
            <span className="text-primary">
              Medical Billing & Coding in the USA
            </span>
          </h1>

          <p className="lg:text-lg text-sm font-medium max-md:text-center">
            At Solux Global, we help healthcare providers maximize revenue,
            reduce denials, and streamline billing operations. From small
            practices to large facilities, we deliver tailored billing and
            coding solutions designed to boost your bottom line.
          </p>

          <div className="flex items-center max-md:w-full max-md:flex-col gap-2 max-lg:mt-4">
            <Button
              onClick={() => NavigateTo("/free-audit")}
              className="h-[45px] hover:bg-primary-hover text-primary-foreground lg:text-base text-sm font-dm_sans lg:px-8 rounded-full transition-all duration-300 whitespace-nowrap max-md:w-full"
            >
              Claim Your Free Audit
            </Button>
            <Button
              onClick={() => NavigateTo("/services")}
              className="h-[45px] bg-black hover:text-secondary-foreground hover:bg-secondary text-primary-foreground lg:text-base text-sm font-dm_sans lg:px-8 rounded-full transition-all duration-300 whitespace-nowrap max-md:w-full"
            >
              Explore Our Services
            </Button>
          </div>
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
