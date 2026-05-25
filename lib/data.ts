import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import bestSellingImg from "@/public/bestSelling.png";
import decoderImg from "@/public/decoder.png";
import dutchieImg from "@/public/dutchie.png";
import industryImg from "@/public/industry.png";
import m1Img from "@/public/m1.png";
import phunwareImg from "@/public/phunware.jpg";
import remineImg from "@/public/remine.png";
import remineMobileImg from "@/public/remineMobile.webp";
import startupRadarImg from "@/public/startup-radar.webp";

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
    title: "Senior Software Developer",
    company: "Feedly",
    description:
      "Feedly is a tech company focused on helping individuals and teams collect, organize, and analyze information from across the web—especially news, blogs, and industry content, and I contributed as a frontend developer by building and refining the user interface, improving performance, and ensuring complex data and AI-driven insights were presented in a clear, intuitive way for end users.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - 2026",
  },
  {
    title: "Senior Software Developer",
    company: "M1 finance",
    description:
      "A fintech company, I was a fullstack developer on the banking delivery team. We were responsible for services like personal loans, margin loans, cash/savings accounts.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Senior Software Developer",
    company: "Artica",
    description:
      "I was a front-end developer that contributed to bestselling.com and built decoder.com from the ground up in 6 weeks.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Senior Software Developer",
    company: "Dutchie",
    description:
      "I was a full stack developer working on the dashboard, customer portal, and payments teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Software Developer",
    company: "Remine",
    description: "I was a front-end and mobile developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Software Developer",
    company: "Phunware",
    description:
      "I was a software developer rewriting the admin dashboard app from PHP to React/Node.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Software Developer",
    company: "Industry, Inc.",
    description:
      "I was a software developer re-writing the app to current at the time standards and releasing a newly styled version.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Graduated bootcamp",
    company: "Hack Reactor",
    description:
      "I graduated after 3 months and immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
] as const;

export const projectsData = [
  {
    title: "Feedly",
    subTitle: "Startup Radar",
    description:
      "Discover and monitor emerging startups using LLM natural language search.",
    tags: ["React", "TypeScript", "AI"],
    imageUrl: startupRadarImg,
    url: "https://feedly.com/new-features/posts/startup-innovation-radar-a-real-time-startup-database",
  },
  {
    title: "M1 Finance",
    subTitle: "Senior Software Developer",
    description:
      "M1 - Offering investment and banking tools and features to streamline asset management.",
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "Next.js"],
    imageUrl: m1Img,
    url: "https://m1.com/",
  },
  {
    title: "Artica",
    subTitle: "Senior Software Developer",
    description:
      "Decoder - Users have an AI chatbot that acts as a shopping assistant.",
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "Next.js"],
    imageUrl: decoderImg,
    url: "https://mono-frontend-web-northstar-admin-rho.vercel.app/",
  },
  {
    title: "Artica",
    subTitle: "Senior Software Developer",
    description: "BestSelling - A product review site powered by AI.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: bestSellingImg,
    url: "https://bestselling.com/",
  },
  {
    title: "Dutchie",
    subTitle: "Senior Software Developer",
    description:
      "A shopify-like e-commerce experience for cannabis dispenseries.",
    tags: ["React", "Next.js", "MobX", "Apollo", "GraphQL", "MongoDB"],
    imageUrl: dutchieImg,
    url: "https://dutchie.com/",
  },
  {
    title: "Remine",
    subTitle: "Software Developer",
    description: "A real estate tech product for agents.",
    tags: ["React", "Node.js", "Apollo", "GraphQL"],
    imageUrl: remineImg,
    url: "https://www.remine.com/",
  },
  {
    title: "Remine",
    subTitle: "Software Developer",
    description: "A mobile real estate tech product for agents and clients.",
    tags: ["React Native", "Node.js", "Apollo", "GraphQL"],
    imageUrl: remineMobileImg,
    url: "https://play.google.com/store/search?q=remine&c=apps&hl=en_US&gl=US",
  },
  {
    title: "Phunware",
    subTitle: "Software Developer",
    description: "An admin dashboard that configures custom mobile apps.",
    tags: ["React", "Node.js", "Apollo", "GraphQL"],
    imageUrl: phunwareImg,
    url: "https://www.phunware.com/products/",
  },
  {
    title: "Industry, Inc.",
    subTitle: "Software Developer",
    description:
      "A social media network geared towards the hospitality industry.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: industryImg,
    url: "https://join.industry.co/",
  },
] as const;

export const skillsData = [
  "AI",
  "LLMs",
  "RAG",
  "Agentic Workflows",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Node.js",
  "Express",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Cloudflare",
  "Vercel",
  "Tailwind CSS",
  "Git",
  "Jest",
  "React Testing Library",
  "Agile",
  "Figma",
  "SEO",
] as const;
