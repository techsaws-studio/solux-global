"use client";

import { useState, useEffect } from "react";

export default function HomeTrustbarSection() {
  const [yearsExp, setYearsExp] = useState(0);
  const [specialties, setSpecialties] = useState(0);
  const [retention, setRetention] = useState(0);

  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: (val: number) => void,
      duration = 2000
    ) => {
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setter(Math.floor(target * progress));
        if (progress === 1) clearInterval(interval);
      }, 50);
    };

    animateCounter(20, setYearsExp);
    animateCounter(100, setSpecialties);
    animateCounter(98, setRetention);
  }, []);

  const stats = [
    { value: yearsExp, label: "Years Of Experience", suffix: "+" },
    { value: specialties, label: "Specialties Served", suffix: "+" },
    { value: retention, label: "Client Retention", suffix: "%" },
    { value: "24/7", label: "Support", suffix: "" },
  ];

  return (
    <div className="relative my-8 lg:-mt-[4.6rem] z-10">
      <div className="mx-auto lg:max-w-5xl layout-standard">
        <div className="bg-white lg:rounded-full rounded-lg shadow-lg border border-border">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 lg:p-8 p-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center relative ${
                  index !== stats.length - 1 ? "md:border-r border-border" : ""
                }`}
              >
                {index !== stats.length - 1 && (
                  <div className="absolute right-0 top-6 bottom-6 border-r border-border" />
                )}

                <p className="lg:text-4xl md:text-2xl text-lg font-bold font-dm_sans text-heading">
                  {typeof stat.value === "number" ? stat.value : stat.value}
                  {stat.suffix}
                </p>
                <p className="lg:text-base md:text-sm text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
