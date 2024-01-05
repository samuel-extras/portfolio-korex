"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className=" fixed top-8 right-10 md:hidden z-20">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // {...props}
            >
              <line
                x1={5}
                y1={7}
                x2={19}
                y2={7}
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1={5}
                y1={12}
                x2={19}
                y2={12}
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1={5}
                y1={17}
                x2={19}
                y2={17}
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 py-4 md:hidden z-30">
          <DropdownMenuGroup className="space-y-4">
            <DropdownMenuItem>
              <Link href="/"> Portfolio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/blog"> Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/info"> Personal Info</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact"> Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="fixed left-0 top-0 md:flex w-full justify-center md:border-b md:border-[#797979]  py-5 backdrop-blur-2xl dark:border-neutral-800  z-10 hidden ">
        <NavigationMenu className="">
          <NavigationMenuList className="gap-20">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-white text-xl font-normal font-sansation ${
                    pathname == "/"
                      ? "underline decoration-[#5E27B8] underline-offset-4"
                      : ""
                  }`}
                >
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-white text-xl font-normal font-sansation ${
                    pathname == "/blog"
                      ? "underline decoration-[#5E27B8] underline-offset-4"
                      : ""
                  }`}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/info" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-white text-xl font-normal font-sansation ${
                    pathname == "/info"
                      ? "underline decoration-[#5E27B8] underline-offset-4"
                      : ""
                  }`}
                >
                  Personal Info
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-white text-xl font-normal font-sansation ${
                    pathname == "/contact"
                      ? "underline decoration-[#5E27B8] underline-offset-4"
                      : ""
                  }`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
