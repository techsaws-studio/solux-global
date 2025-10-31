import {
  Award,
  FileSpreadsheet,
  Handshake,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";
import OriginSectionImg01 from "../../public/images/origin-section-img-01.jpg";
import OriginSectionImg02 from "../../public/images/origin-section-img-02.jpg";
import OriginSectionImg03 from "../../public/images/origin-section-img-03.jpg";

export const OriginSectionData = [
  {
    id: "mission",
    label: "Mission",
    image: OriginSectionImg01,
    title: "Our Mission",
    content:
      "Our mission as a provider of IT services is to give our customers solutions that help them meet their business objectives in innovative and effective ways. Maintaining the highest levels of professionalism and honesty while using the most up-to-date tools and methods is a big part of our goal to provide top-notch service.",
  },
  {
    id: "vision",
    label: "Vision",
    image: OriginSectionImg02,
    title: "Our Vision",
    content:
      "We envision a future where technology empowers every business to reach its full potential. Our goal is to be a trusted global partner, delivering cutting-edge digital solutions that transform the way companies operate and grow.",
  },
  {
    id: "story",
    label: "Story",
    image: OriginSectionImg03,
    title: "Our Story",
    content:
      "Founded with a passion for innovation, we’ve grown from a small startup into a leading IT solutions provider. Our story is driven by a relentless commitment to client success and continuous improvement.",
  },
];

export const WhyChooseUsSectionData = [
  {
    icon: FileSpreadsheet,
    title: "Accurate Medical Billing",
    description:
      "Ensure error-free claims with precise coding and real-time claim validation — leading to faster reimbursements and fewer denials.",
    bgColor: "bg-green-50",
    themColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Optimized Revenue Growth",
    description:
      "Maximize your collections with advanced analytics, denial management, and end-to-end revenue cycle optimization.",
    bgColor: "bg-purple-50",
    themColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Security",
    description:
      "Your data is protected with the highest standards of compliance and encryption — ensuring full patient confidentiality.",
    bgColor: "bg-orange-50",
    themColor: "text-orange-600",
  },
  {
    icon: Users2,
    title: "Dedicated Expert Support",
    description:
      "Work with certified billing professionals who provide 24/7 assistance, dedicated account management, and performance transparency.",
    bgColor: "bg-rose-50",
    themColor: "text-rose-600",
  },
];

export const ValuesSectionData = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in every interaction.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality billing and coding services with precision and reliability.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging advanced technology to streamline and enhance revenue cycle management.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your practice, not just a vendor.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    description:
      "Every service we provide is ultimately focused on supporting better patient care.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];
