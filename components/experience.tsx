"use client";

import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  experiencesDataZn,
  experiencesData,
  headerLanguageMap,
} from "@/lib/data";
import { useTheme } from "@/contexts/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const sectionName = "Experiences";
  const { ref, inView } = useSectionInView({
    sectionName: sectionName,
    threshold: 0,
  });

  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.325 }}
    >
      <SectionHeading>{headerLanguageMap[sectionName]}</SectionHeading>
      <VerticalTimeline lineColor={theme == "light" ? "#e9e9ea" : "#3b3d4f"}>
        {experiencesDataZn.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
