"use client";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  link: string;
};

const NavItem = ({ link, text }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === link;
  return (
    <Link
      className={cn(
        "capitalize font-medium hover:text-primary transition-all duration-500",
        { "text-primary": isActive }
      )}
      href={link}>
      {text}
    </Link>
  );
};

export { NavItem };
