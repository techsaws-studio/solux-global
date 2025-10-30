import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { GetPageMetadata } from "@/utils/meta-data";

// STYLE SHEETS SOURCE
import "@/styles/globals.css";

// FONT CONFIGURATIONS
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
  display: "swap",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  style: ["normal"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata();
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dm_sans.variable} ${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
