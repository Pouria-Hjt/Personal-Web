import { Animate } from "@/ui/Animate/Animate";
import GroupButton from "@/ui/GroupButton/GroupButton";
import Link from "next/link";
import React from "react";
import { NavItem } from "./NavItem";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Animate
      animation="fade-up"
      duration={1000}
      as={"nav"}
      className="max-w-screen-xl w-full mx-auto h-18 my-14 border border-quaternary px-10 py-1 rounded-2.5xl bg-nav backdrop-blur-xl hover:shadow-nav nav-transition flex justify-between items-center">
      <h1 className="capitalize text-3xl font-semibold">
        pouria<span className="text-primary">H</span>
      </h1>
      <div className="w-fit flex justify-center items-center gap-10">
        <NavItem link="/" text="Home" />
        <NavItem link="/about" text="About" />
        <NavItem link="/projects" text="Works" />
        <NavItem link="/contact" text="Contact" />
      </div>
      <GroupButton as="a" text="let's talk" href="/contact" scroll />
    </Animate>
  );
};

export { Navbar };
