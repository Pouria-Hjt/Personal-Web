import React from "react";
import { NavItem } from "./NavItem";
import { pages } from "@/configs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 w-full py-8">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-1 md:flex-row xl:max-w-screen-xl">
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-sm font-medium md:text-lg">
            Copyright © 2024 BentoX
          </span>
          |
          <span className="text-sm md:text-lg">
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
