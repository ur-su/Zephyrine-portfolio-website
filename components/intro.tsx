"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/hooks/useSectionInView";
import { Source_Code_Pro } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" });

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.75 });
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              width="192"
              height="192"
              alt="developer-image"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full
            object-cover border-[0.35rem] 
            border-white shadow-xl"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <span className="text-4xl absolute bottom-0 right-0">👋</span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl
      font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-sm tracking-wider`}>
          你好 我是
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            苏 云
          </h1>
          <div className="text-center">
            <span
              className={`${sourceCodePro.className} text-sm tracking-wider`}
            >
              I&apos;m a{" "}
            </span>
            <h2
              id="name"
              className="text-center text-2xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
            >
              <TypeAnimation
                sequence={["前端工程师", 1000, "Frontend Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </motion.div>
        <p>我享受搭建项目的乐趣。</p>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center px-4 text-lg font-medium gap-2 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* <Link
          href="#contact"
          className="group bg-gray-900 text-white 
          px-7 py-3 flex items-center gap-2
          rounded-full outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2
          rounded-full cursor-pointer outline-none  hover:scale-110  active:scale-105
          transition border border-black/10 dark:bg-white/10 "
          href="/苏云-前端工程师.pdf"
          download
        >
          下载简历
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-hover:opacity-100" />
        </a>
      </motion.div>
    </section>
  );
}
