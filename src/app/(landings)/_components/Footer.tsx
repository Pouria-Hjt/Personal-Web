import React from "react";
import { NavItem } from "./NavItem";
import { pages } from "@/configs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 py-8">
      <div className="max-w-screen-xl mx-auto w-full flex gap-1 justify-between items-center">
        <div className="flex justify-center items-center gap-2.5">
          <span className="text-lg font-medium">Copyright © 2024 BentoX</span>|
          <span className="text-lg ">
            Designed By{" "}
            <a
              target="_blank"
              href="https://themeforest.net/user/pixelaxis"
              className="text-primary">
              Pixelaxis
            </a>
          </span>
        </div>
        <div className="flex justify-center items-center gap-12">
          <NavItem link={pages.home} text="Home" />
          <NavItem link={pages.about} text="about" />
          <NavItem link={pages.works} text="works" />
          <NavItem link={pages.contact} text="contact" />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
