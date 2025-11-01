import { StaticImageData } from "next/image";

import { LucideIcon } from "lucide-react";

export interface PagesHeroSectionInterface {
  title: string;
  highlightText: string;
  titleClass?: string;
  description: string;
  descriptionClass?: string;
}

export interface ServiceIncludeItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceIncludeSectionInterface {
  firstHalfHeading: string;
  highlightedHeading: string;
  remaningHeading: string;
  data: ServiceIncludeItem[];
}

export interface ServiceWhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseIndividualServiceSectionInterface {
  firstHalfHeading: string;
  highlightedHeading: string;
  data: ServiceWhyChooseItem[];
  serviceImage: string | StaticImageData;
}
