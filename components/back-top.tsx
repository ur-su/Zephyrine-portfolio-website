"use client";
import React from "react";
import { BsShift } from "react-icons/bs";

export default function BackTop() {
  const onBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={onBackTop}
      className="w-[2.5rem] h-[2.5rem] bg-opacity-80  flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
    >
      <BsShift></BsShift>
    </button>
  );
}
