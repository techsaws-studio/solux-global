"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { QucikPreviewBlogsData } from "@/data/blogs-data";

function QuickPreviewBlogsSection() {
  return (
    <section className="bg-background section-padding-standard max-md:pt-4">
      <div className="layout-standard section-padding-standard">
        <div className="text-center lg:mb-10 md:mb-8 mb-4">
          <h2 className="lg:text-6xl md:text-4xl text-3xl font-dm_sans font-semibold md:mb-4 mb-2">
            Our Latest{" "}
            <span className="text-secondary">Insights & Resources</span>
          </h2>
          <p className="md:text-base text-sm lg:text-lg max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium">
            Stay informed with practical advice, strategies, and updates
            designed to help healthcare professionals streamline operations and
            grow their practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {QucikPreviewBlogsData.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border w-full md:max-w-lg"
            >
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                <div className="max-md:px-4 max-md:py-8 md:p-8 text-left">
                  <h3 className="md:text-lg text-sm lg:text-xl font-semibold text-heading mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 leading-snug font-dm_sans">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {post.category} · {post.date}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickPreviewBlogsSection;
