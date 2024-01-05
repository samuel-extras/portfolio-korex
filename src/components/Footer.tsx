"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 flex w-full items-end justify-center  z-10 py-2 md:py-0 md:px-20 lg:px-32 md:pb-10 backdrop-blur-3xl ">
      <div className="flex justify-between sm:px-10 md:justify-center lg:justify-between items-center w-full md:gap-10">
        <Link
          href="/skills"
          className={` ${
            pathname === "/skills" ? "bg-[#5E27B8]" : "bg-[#1E1E1E]"
          }  text-sm sm:text-base text-white rounded-xl font-normal font-sansation px-4 md:px-10 py-2.5`}
        >
          Skills
        </Link>
        <Link
          href="/experience"
          className={` ${
            pathname === "/experience" ? "bg-[#5E27B8]" : "bg-[#1E1E1E]"
          }  text-sm sm:text-base text-white rounded-xl font-normal font-sansation px-4 md:px-10 py-2.5`}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={` ${
            pathname === "/projects" ? "bg-[#5E27B8]" : "bg-[#1E1E1E]"
          }  text-sm sm:text-base text-white rounded-xl font-normal font-sansation px-4 md:px-10 py-2.5`}
        >
          Project
        </Link>
        <Link
          href="/certification"
          className={` ${
            pathname === "/certification" ? "bg-[#5E27B8]" : "bg-[#1E1E1E]"
          }  text-sm sm:text-base text-white rounded-xl font-normal font-sansation px-4 md:px-10 py-2.5`}
        >
          Certifications
        </Link>
      </div>
    </div>
  );
};

export default Footer;
