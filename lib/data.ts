import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import emailSendPlatformImage from "@/public/email.png";
import dataLinageImage from "@/public/dataLinage.png";
import chatGPTImage from "@/public/chatGPT.png";
import OAImage from "@/public/OAPlatform.png";
import HRImage from "@/public/hrwork.png";
import visualizationImage from "@/public/d3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
] as const;

export const headerLanguageMap = {
  Home: "首页",
  About: "关于我",
  Projects: "我的项目",
  Skills: "我的技能",
  Experiences: "我的经历",
};

export const experiencesData = [
  {
    title: "MSc in Computing and IT",
    location: "University of St Andrews, UK",
    description:
      "Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
    icon: React.createElement(LuGraduationCap),
    date: "2023 Sep - 2024 May",
  },
  {
    title: "Frontend Intern",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://www.nio.com/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "NIO Inc."
      ),
      " Wuhan, China"
    ),
    description:
      "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
    icon: React.createElement(FaVuejs),
    date: "2022 Aug - 2022 Dec",
  },
  {
    title: "Frontend Assistant",
    location: "Wuhan University | Wuhan, China",
    description:
      "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
    icon: React.createElement(FaReact),
    date: "2022 May - 2022 July",
  },
  {
    title: "BA in Digital Publishing",
    location: "Wuhan University, China",
    description:
      "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 Sep - 2023 Jun",
  },
];

export const experiencesDataZn = [
  {
    title: "前端开发工程师",
    location: "智强网联",
    description:
      "负责公司业务相关服务的开发、重构与维护，积极参与产品、设计及后端的需求沟通和任务评估，持续优化所负责功能的效果与性能。独立承担邮件发送系统、血缘关系等项目开发工作，涵盖选用适配技术栈构建项目、精心设计与开发前端页面及组件，并解决样式兼容问题等。",
    icon: React.createElement(FaVuejs),
    date: "2024 年 1 月 - 2024 年 7 月",
  },
  {
    title: "前端开发工程师",
    location: "华饰建筑",
    description:
      "负责华饰建筑后台业务相关服务的开发、重构与维护，全面参与产品、设计和后端的需求沟通与任务评估，持续优化相关功能的效果和性能。搭建建材管理工作台前端框架，编写核心页面，开发并维护组件，实现前后端数据交互、表单校验以及权限控制等功能，同时对前端性能进行优化。",
    icon: React.createElement(FaVuejs),
    date: "2022 年 11 月 - 2023 年 12 月",
  },
  {
    title: "工程师",
    location: "房天下搜房网",
    description:
      "负责房天下搜房网业务相关服务的开发、重构与维护，深度参与产品、设计和后端的需求沟通和任务评估，持续优化所负责功能的效果和性能。负责 OA、人事等工作台以及 UA 权限管理系统的开发，包括搭建前端框架、编写核心页面、开发和维护功能模块，实现前后端数据交互、表单校验、权限控制等功能，同时致力于前端性能的优化。",
    icon: React.createElement(FaVuejs),
    date: "2021 年 11 月 - 2022 年 10 月",
  },
  {
    title: "web 前端工程师",
    location: "北京轻而易举科技有限公司",
    description:
      "负责公司多端项目的开发，与后台程序紧密配合完成前端页面的实现工作。负责经纪云商场 PC 端项目的开发与维护，运用相关技术进行页面管理和组件展示，并抽离公共组件。",
    icon: React.createElement(FaVuejs),
    date: "2020 年 10 月 - 2021 年 04 月",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "",
    title_zh: "邮件发送系统",
    description: "",
    desc_zh:
      "这个项目的目的是让用户在处理邮件发送任务时能够更加聚焦于业务逻辑，而不是被复杂的邮件协议和配置困扰。",
    tags: ["Vue", "Pinia", "TypeScript", "TailwindCSS", "Element-Plus", "Vite"],
    imageUrl: emailSendPlatformImage,
    projectUrl: "https://github.com/Codefreyy/Ethical-Digital-Nation",
    demoUrl: "https://yujie-ethical-digital-nation.netlify.app/",
  },
  {
    title: "",
    title_zh: "数据血缘关系系统",
    description: "",
    desc_zh:
      "随着公司数据量的增长，数据系统日渐复杂。追踪数据从源头到目的地，及其经过的各种流程和系统信息，对确保数据质量、合规性和决策来说至关重要。",
    tags: ["Vue", "TypeScript", "Tailwind", "Echarts", "Element-Plus", "vite"],
    imageUrl: dataLinageImage,
    projectUrl: "https://github.com/Codefreyy/typing-speed-game",
    demoUrl: "https://joy-typing-speed.netlify.app/",
  },
  {
    title: "",
    title_zh: "GPT知识库",
    description: ``,
    desc_zh:
      "近几年来chatGPT的火爆程度越来越高，公司开发了基于chatGPT的在线知识库系统，专门训练，用户可以在此系统中，问答关于本公司的各方面内容。",
    tags: ["Vue", "TypeScript", "Tailwind", "Echarts", "Element-Plus", "Vite"],
    imageUrl: chatGPTImage,
    projectUrl: "https://github.com/Codefreyy/Breddit",
    demoUrl: "https://joy-breddit.vercel.app/",
  },
  {
    title: "",
    title_zh: "OA工作台",
    description: "",
    desc_zh:
      "在当今数字化高速发展的时代，企业对于办公效率和管理的规范性要求越来越高。传统的办公方式存在信息传递不及时、流程繁琐、协作困难等问题。为了满足企业现代化办公的需求，提升整体运营效率，我们启动了 OA 工作台项目。",
    tags: ["Vue", "TypeScript", "Tailwind", "Echarts", "Element-Plus", "Vite"],
    imageUrl: OAImage,
    projectUrl: "https://github.com/Codefreyy/d3-evolution-visualisation",
    demoUrl: "https://global-wealth-spectrum.netlify.app/",
  },
  {
    title: "",
    title_zh: "人事工作台",
    description: "",
    desc_zh:
      "随着企业的不断发展壮大，人员规模逐渐增加，传统的人事管理方式面临着诸多挑战，如信息分散、流程繁琐、效率低下等。为了提升企业人事管理的水平和效率，更好地服务于企业战略和员工发展，我们启动了人事工作台项目。",
    tags: ["Vue", "TypeScript", "Tailwind", "Echarts", "Element-Plus", "Vite"],
    imageUrl: HRImage,
    projectUrl: "https://github.com/Codefreyy/d3-evolution-visualisation",
    demoUrl: "https://global-wealth-spectrum.netlify.app/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue2",
  "Vue3",
  "React",
  "Next",
  "Git",
  "Github",
  "Tailwind",
  "Element UI",
  "Ant Design",
  "Pinia",
  "Vite",
  "Framer Motion",
  "Echarts",
];
