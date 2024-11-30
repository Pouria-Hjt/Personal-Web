"use client";

import { Animate } from "@/ui/Animate/Animate";
import GroupButton from "@/ui/GroupButton/GroupButton";
import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { pages } from "@/configs";
import { MoreVertical } from "lucide-react";
import { AnimatedMenuIcon } from "@/assets/icons/AnimatedMenuIcon";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full px-4">
      <nav
        // animation="fade-up"
        // duration={1000}
        // as={"nav"}
        className="bg-nav hover:shadow-nav nav-transition relative mx-auto my-4 flex h-18 w-full max-w-screen-lg items-center justify-between rounded-2.5xl border border-quaternary px-10 py-1 backdrop-blur-xl md:my-14 xl:max-w-screen-xl"
      >
        <h1 className="text-3xl font-semibold capitalize">
          pouria<span className="text-primary">H</span>
        </h1>
        <div className="hidden w-fit items-center justify-center gap-10 md:flex">
          <NavItem link={pages.home} text="Home" />
          <NavItem link={pages.about} text="About" />
          <NavItem link={pages.works} text="Works" />
          <NavItem link={pages.contact} text="Contact" />
        </div>
        <GroupButton
          className="hidden md:flex"
          as="a"
          text="let's talk"
          href={pages.contact}
          scroll
        />
        <AnimatedMenuIcon
          className="md:hidden"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className="absolute inset-x-0 top-full z-20 w-full bg-white md:hidden">
          siops
        </div>
      </nav>
    </nav>
  );
};

export { Navbar };
