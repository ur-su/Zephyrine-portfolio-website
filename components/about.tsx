"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { headerLanguageMap } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function About() {
  const sectionName = "About";
  const { ref } = useSectionInView({
    sectionName: sectionName,
    threshold: 0.5,
  });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> {headerLanguageMap[sectionName]}</SectionHeading>
      <p className="mb-3">是一个想去任何地方整点薯条的人er。😉😉😉</p>
    </motion.section>
  );
}
