"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { HeaderNavLinks } from "@/data/components.layouts-data";

import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Pathname = usePathname();

  return (
    <header
      className={
        "bg-background border-b border-border shadow-sm sticky top-0 left-0 z-50 w-full transition-all duration-300 h-[100px]"
      }
    >
      <div className="layout-standard h-full flex items-center justify-between">
        <Link
          href="/"
          aria-label="Solux Global"
          className="flex items-center gap-2"
        >
          <Image
            src={Logo}
            alt="Solux Global"
            width={90}
            className="h-auto max-md:w-[70px]"
            priority
          />
          <div>
            <h1 className="leading-none lg:text-xl md:text-lg text-base font-extrabold font-dm_sans text-primary">
              Solux Global
            </h1>
            <p className="text-heading font-medium text-xs">
              Medical Billing Company USA
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 -translate-x-4">
          {HeaderNavLinks.map((data, index) => (
            <Link
              key={index}
              href={data.path}
              className={cn(
                Pathname === data.path ? "text-primary" : "text-heading",
                "text-base uppercase font-semibold font-dm_sans transition-colors duration-300  hover:text-primary-hover"
              )}
            >
              {data.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button className="h-[45px] px-8 text-base font-dm_sans font-medium hover:bg-primary-hover rounded-full">
            Contact Us
          </Button>

          <Button className="h-[43px] border-2 border-primary px-8 text-base font-dm_sans font-semibold bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            Get Demo
          </Button>
        </div>

        <span
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-heading lg:hidden"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </span>
      </div>

      {/* === MOBILE DROPDOWN === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-secondary-background border-t border-border text-heading"
          >
            <nav className="layout-standard flex flex-col gap-4 py-8">
              {HeaderNavLinks.map((data, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Link
                    href={data.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      Pathname === data.path ? "text-primary" : "text-heading",
                      "text-sm font-medium"
                    )}
                  >
                    {data.title}
                  </Link>
                  <Separator />
                </div>
              ))}

              <div className="mt-4 flex items-center gap-2 max-md:flex-col">
                <Button className="h-[45px] max-md:w-full md:px-8 text-sm font-dm_sans font-medium rounded-full">
                  Contact Us
                </Button>

                <Button className="h-[43px] max-md:w-full md:px-8 border-2 border-primary text-sm font-dm_sans font-semibold bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                  Get Demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
