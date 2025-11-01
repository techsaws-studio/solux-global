"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

function CTASection() {
  const router = useRouter();

  const NavigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="w-full section-padding-standard bg-gradient-to-br from-slate-800 via-[#0C509B] to-slate-900">
      <div className="layout-standard section-margin-standard flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 border border-[#0C509B]/30 rounded-2xl md:p-12 max-md:py-12 max-md:px-4 bg-slate-800/40 backdrop-blur-sm lg:h-[400px]">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="md:text-6xl text-2xl font-semibold font-dm_sans text-primary-foreground leading-tight">
            Ready to Simplify Your Billing?
          </h2>
          <p className="md:text-lg text-sm text-slate-300 leading-relaxed">
            Unlike traditional billing companies, Solux Global provides more
            than just claim submissions. Maximize your reimbursements, reduce
            errors, and scale your practice with Solux Global.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 gap-3 w-full lg:w-auto justify-center lg:justify-end">
          <Button
            onClick={() => NavigateTo("/free-audit")}
            className="h-[45px] hover:bg-primary-hover text-primary-foreground md:text-base text-sm font-dm_sans px-8 rounded-full transition-all duration-300 whitespace-nowrap max-lg:w-full"
          >
            Book Your Free Audit
          </Button>
          <Button
            onClick={() => NavigateTo("/contact-us")}
            className="h-[45px] max-lg:w-full bg-white hover:text-secondary-foreground hover:bg-secondary text-primary md:text-base text-sm font-dm_sans px-8 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
