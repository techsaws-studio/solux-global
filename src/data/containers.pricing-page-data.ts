import { DollarSign, Scale, ShieldCheck, Users } from "lucide-react";

export const WhyChooseOurPricingSectionData = [
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description:
      "We offer competitive rates without compromising on service quality, ensuring affordability for every healthcare provider.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Scale,
    title: "Transparent Billing",
    description:
      "No hidden fees or surprises—our clear and straightforward pricing keeps you fully informed and in control.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Customizable Plans",
    description:
      "Choose from flexible plans designed to match your practice size, specialty, and specific operational needs.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Our dedicated team ensures smooth onboarding, quick responses, and ongoing assistance whenever you need it.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export const PricingSectionData = [
  {
    name: "Starter Plan",
    subtitle: "For Small Practices",
    description: "Best for solo providers and small clinics.",
    features: [
      "End-to-End Medical Billing & Coding",
      "Denial Management & AR Follow-Up",
      "Credentialing Assistance",
      "Patient Billing Support",
      "Starting at 4% of Monthly Collections",
    ],
  },
  {
    name: "Professional Plan",
    subtitle: "For Growing Practices",
    description:
      "Ideal for mid-sized practices with expanding patient volumes.",
    features: [
      "All Starter Plan Features",
      "Advanced Reporting & Analytics",
      "Dedicated Account Manager",
      "Compliance & Audit Support",
      "Starting at 5% of Monthly Collections",
    ],
  },
  {
    name: "Enterprise Plan",
    subtitle: "For Large Practices & Facilities",
    description: "Perfect for multi-specialty groups and hospitals.",
    features: [
      "All Professional Plan Features",
      "Full Revenue Cycle Management (RCM)",
      "Multi-Location Support",
      "24/7 Virtual Assistant Support",
      "Custom Quote Available Upon Request",
    ],
  },
];
