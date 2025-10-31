import React from "react";

import QuickPreviewBlogsSection from "@/sections/blogs/quick-preview-blogs-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";

function BlogsPage() {
  return (
    <main>
      <PagesHeroSection
        title="Stay Informed with the Latest Trends in"
        highlightText="Medical Billing, Healthcare, and Practice Growth"
        description="At Solux Global, we believe knowledge empowers growth. Our blog provides insights, tips, and updates on the latest in medical billing, coding, healthcare technology, revenue cycle management, and digital marketing."
      />
      <QuickPreviewBlogsSection />
      <CTASection />
    </main>
  );
}

export default BlogsPage;
