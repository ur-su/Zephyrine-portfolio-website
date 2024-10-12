"use client";

import React from "react";
import { projectsData, headerLanguageMap } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
  const sectionName = "Projects";
  const { ref } = useSectionInView({
    sectionName: sectionName,
    threshold: 0.25,
  });

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.225 }}
      id="projects"
    >
      <SectionHeading>{headerLanguageMap[sectionName]}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

// type ProjectProps = {
//   title_zh: string;
//   description: string;
//   tags: string[];
//   imageUrl: string;
// };
