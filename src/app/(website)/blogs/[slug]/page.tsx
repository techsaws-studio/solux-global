import React from "react";
import { Metadata } from "next";

import BlogDetailPage from "@/containers/blog/blog-detail-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Insights & Resources | Solux Global",
  description:
    "Explore Solux Global’s latest insights, healthcare billing trends, and revenue cycle management strategies. Learn how to optimize your medical practice performance, boost cash flow, and stay compliant with industry standards.",
});

function BlogDetail() {
  return <BlogDetailPage />;
}

export default BlogDetail;
