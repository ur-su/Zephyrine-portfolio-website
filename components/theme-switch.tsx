"use client";
import { useTheme } from "@/contexts/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="
      w-[2.5rem] h-[2.5rem] bg-opacity-80  
      flex items-center justify-center 
      hover:scale-[1.15] active:scale-105 
      transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
