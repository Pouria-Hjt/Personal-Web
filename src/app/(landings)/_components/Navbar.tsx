"use client";
import { Animate } from "@/ui/Animate/Animate";
import GroupButton from "@/ui/GroupButton/GroupButton";
import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { pages } from "@/configs";
import { AnimatedMenuIcon } from "@/assets/icons/AnimatedMenuIcon";
import { cn } from "@/utils";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-4">
      <Animate
        animation="fade-down"
        as={"div"}
        className={cn(
          "bg-nav hover:shadow-nav nav-transition relative mx-auto my-4 flex w-full max-w-screen-lg flex-col items-center justify-between rounded-2.5xl border border-quaternary backdrop-blur-xl md:my-14 md:flex-row md:p-4 md:px-10 xl:max-w-screen-xl",
          "overflow-hidden", // Add overflow hidden to contain the animation
        )}
      >
        <div className="flex w-full items-center justify-between px-4 py-3">
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
        </div>
        <div
          className={cn(
            "mobile-menu w-full md:hidden",
            "grid grid-cols-2 justify-items-center gap-4",
            "transform transition-all duration-300 ease-in-out",
            isOpen
              ? "visible max-h-52 translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-4 opacity-0",
          )}
          style={{
            padding: isOpen ? "1rem" : "0",
          }}
        >
          <NavItem link={pages.home} text="Home" />
          <NavItem link={pages.about} text="About" />
          <NavItem link={pages.works} text="Works" />
          <NavItem link={pages.contact} text="Contact" />
          <GroupButton
            className="col-span-2 flex h-10 w-full gap-1 md:hidden"
            classNames={{
              textButton: "flex-1 rounded-lg",
              iconButton: "rounded-lg",
            }}
            as="a"
            text="let's talk"
            href={pages.contact}
            scroll
          />
        </div>
      </Animate>
    </nav>
  );
};

export { Navbar };
