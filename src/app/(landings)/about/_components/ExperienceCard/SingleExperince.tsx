import { ExperienceArrowIcon } from "@/assets/icons";
import React from "react";

export type SingleExperienceProps = {
  from: string;
  to: string;
  // position: string
  company: string;
};

const SingleExperience = ({ company, from, to }: SingleExperienceProps) => {
  return (
    <div className="w-full items-center gap-2.5">
      <div className="flex w-full flex-wrap items-center gap-2.5">
        <ExperienceArrowIcon />
        <span>
          {from} // {to}
        </span>
      </div>
      <div className="ml-8.5 flex w-full flex-wrap items-center gap-2.5">
        <span>Front-end Dev</span>
        <span>-</span>
        <span>{company}</span>
      </div>
    </div>
  );
};

export { SingleExperience };
