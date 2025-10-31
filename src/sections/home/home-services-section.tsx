"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { HomeServicesSectionData } from "@/data/containers.home-page-data";
import { Button } from "@/components/ui/button";

function HomeServicesSection() {
  const router = useRouter();

  const NavigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard max-md:pt-4 max-md:mb-0">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-bold text-center lg:mb-16 md:mb-8 mb-6">
          Discover Our{" "}
          <span className="text-secondary">Customize Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4
        ">
          {HomeServicesSectionData.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden bg-secondary-background">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="lg:p-6 p-4 max-lg:py-6">
                <h3 className="md:text-lg text-sm lg:text-xl font-semibold text-heading mb-2 md:mb-3 font-dm_sans">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <Button
                  onClick={() => NavigateTo(service.link)}
                  className="h-[45px] md:px-8 max-md:w-full md:text-base text-sm font-dm_sans font-medium hover:bg-primary-hover rounded-full"
                >
                  View Our Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServicesSection;
