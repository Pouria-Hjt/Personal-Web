import React from "react";
import { NavItem } from "./NavItem";
import { pages } from "@/configs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 hidden py-8 md:block">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-1 xl:max-w-screen-xl">
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-lg font-medium">Copyright © 2024 BentoX</span>|
          <span className="text-lg">
            Designed By{" "}
            <a
              target="_blank"
              href="https://themeforest.net/user/pixelaxis"
              className="text-primary"
            >
              Pixelaxis
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center gap-12">
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
