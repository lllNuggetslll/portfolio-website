"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            I&apos;m a Senior Full-Stack Software Engineer with a decade of
            professional experience architecting high-performance web
            applications, specializing in React, Next.js, Node.js, and
            TypeScript. My path to engineering wasn&apos;t linear. With a degree
            in Finance and a background teaching ESL in South Korea, I bring a
            unique blend of analytical problem-solving and sharp,
            cross-functional communication to engineering teams. Over the past
            decade, I&apos;ve worked across FinTech, E-commerce, Cannabis Tech,
            PropTech, SaaS, and Social Network platforms. I excel at breaking
            down complex business rules in these sectors into scalable, elegant
            technical architecture.
          </p>
          <div className="not-prose mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              FinTech
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              E-commerce
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              PropTech
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              Cannabis Tech
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              SaaS
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              Social Network
            </span>
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
              Applied AI / LLM
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 text-left text-gray-800 dark:bg-gray-800 dark:text-gray-100">
          <h3 className="text-xl font-semibold">What I&apos;m Focusing on Now</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <span className="font-semibold">AI &amp; Agentic Workflows:</span>{" "}
              Integrating localized LLM implementations and agentic pipelines to
              optimize software development lifecycles (SDLC), automate
              orchestration, and build smart application layers.
            </li>
            <li>
              <span className="font-semibold">Domain Scalability:</span>{" "}
              Leveraging my background in FinTech and PropTech to build secure,
              highly available distributed systems that scale predictably under
              heavy user volume.
            </li>
            <li>
              <span className="font-semibold">
                Agentic Orchestration:
              </span>{" "}
              I orchestrate agentic workflows to carry out work across software
              development, from automating execution to refining agentic loops,
              coordinating smarter application tasks, and improving delivery.
            </li>
          </ul>
          <p className="mt-5">
            Whether navigating complex compliance data or engineering local AI
            integrations, I thrive on building tools that are fast, accessible,
            and inherently scalable.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white shadow-sm border border-gray-100 p-6 text-left text-gray-800 dark:bg-gray-800 dark:text-gray-100">
        <h3 className="text-xl font-semibold">How I Got Into Web Development</h3>
        <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          TLDR: 🌯
        </p>
        <div className="prose prose-gray mt-4 max-w-none dark:prose-invert">
          <p>
            While living in South Korea, I stumbled on two guys who sold and
            mailed frozen burritos &mdash; hands down the best Mexican food
            I&apos;d found in the country. The catch: their website was just a
            menu and prices, with instructions to message them on Facebook so
            they could handle payment and everything else by hand. I thought the
            workflow was horrendous. I&apos;d done a bit of programming in
            college, so instead of just wishing it were better, I decided to
            build them something more polished myself &mdash; a real site with a
            proper order form.
          </p>
          <p>
            I taught myself HTML, CSS, a little JavaScript, and Bootstrap,
            followed a stack of tutorials, and put the whole thing together. The
            master plan? Trade the site for free burritos. When the day came and
            I pitched them, they turned it down &mdash; and went out of business
            not long after. But I walked away with something more valuable: a
            newfound passion for tech. I started preparing for a coding
            bootcamp, Hack Reactor, and after graduating I went right back out to
            fix the next problem that bothered me &mdash; because I don&apos;t
            wait around for things to get fixed, I fix them myself.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
