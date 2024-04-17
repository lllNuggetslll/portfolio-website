import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import decoderImg from "@/public/decoder.png";
import bestSellingImg from "@/public/bestSelling.png";
import dutchieImg from "@/public/dutchie.png";
import remineImg from "@/public/remine.png";
import remineMobileImg from "@/public/remineMobile.webp";
import industryImg from "@/public/industry.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    company: "Hack Reactor",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Software Developer",
    company: "Industry, Inc.",
    description:
      "I was a software developer re-writing the app to current at the time standards and releasing a newly styled version.",
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },
  {
    title: "Software Developer",
    company: "Phunware",
    description:
      "I was a software developer re-writing the admin dashboard app from PHP to React/Node.",
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },
  {
    title: "Software Developer",
    company: "Remine",
    description: "I was a front-end and mobile developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Senior Software Developer",
    company: "Dutchie",
    description:
      "I was a full stack developer working on the dashboard, customer portal, and payments teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Senior Software Developer",
    company: "Artica",
    description:
      "I was a front-end developer that contributed to bestselling.com and built decoder from the ground up n 6 weeks.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Senior Software Developer",
    company: "Stealth Startup - Confidential",
    description: "NDA",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Artica",
    subTitle: "Senior Software Developer",
    description:
      "Decoder - Users have an AI chatbot that acts as a shopping assistant.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: decoderImg,
  },
  {
    title: "Artica",
    subTitle: "Senior Software Developer",
    description: "BestSelling - A product review site powered by AI.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: bestSellingImg,
  },
  {
    title: "Dutchie",
    subTitle: "Senior Software Developer",
    description:
      "A shopify-like e-commerce experience for cannabis dispenseries.",
    tags: ["React", "Next.js", "MobX", "Apollo", "GraphQL", "MongoDB"],
    imageUrl: dutchieImg,
  },
  {
    title: "Remine",
    subTitle: "Software Developer",
    description: "A real estate tech product for agents.",
    tags: ["React", "Node.js", "Apollo", "GraphQL"],
    imageUrl: remineImg,
  },
  {
    title: "Remine",
    subTitle: "Software Developer",
    description: "A mobile real estate tech product for agents and clients.",
    tags: ["React Native", "Node.js", "Apollo", "GraphQL"],
    imageUrl: remineMobileImg,
  },
  {
    title: "Industry, Inc.",
    subTitle: "Software Developer",
    description:
      "A social media network geared towards the hospitality industry.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: industryImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "MobX",
  "GraphQL",
  "Apollo",
  "Express",
  "Jest",
  "React Testing Library",
  "Storybook",
  "Agile",
  "Scrum",
  "Figma",
] as const;
