import {
  CssIcon,
  GithubIcon,
  JsIcon,
  NextjsIcon,
  ReactjsIcon,
  ReduxIcon,
  ScssIcon,
  TailwindIcon,
  TsIcon,
} from "@/assets/icons/techs";
import { Card } from "@/ui/Card/Card";
import { Marquee } from "@/ui/magic";
import React from "react";

type Props = {};
const TechnologiesName: string[] = [
  "Next js",
  "React js",
  "Scss",
  "Css",
  "Tailwind",
  "Javascript",
  "Github",
  "Typescript",
  "Redux",
];
const TechnologiesIcons: React.ReactNode[] = [
  <NextjsIcon key={"NextjsIcon"} className="size-8" />,
  <ReactjsIcon key={"ReactjsIcon"} className="size-8" />,
  <ScssIcon key={"ScssIcon"} className="size-8" />,
  <CssIcon key={"CssIcon"} className="size-8" />,
  <TailwindIcon key={"TailwindIcon"} className="size-8" />,
  <JsIcon key={"JsIcon"} className="size-8" />,
  <GithubIcon key={"GithubIcon"} className="size-8" />,
  <TsIcon key={"TsIcon"} className="size-8" />,
  <ReduxIcon key={"ReduxIcon"} className="size-8" />,
];
const TechnologiesCard = (props: Props) => {
  return (
    <Card
      animation="fade"
      title="Technologies & Tools"
      className="py-5 px-0"
      classNames={{
        title: "text-2xl leading-[150%] px-6 mb-5",
      }}>
      <Marquee className="[--duration:40s] [--gap:8px]">
        {TechnologiesName.map((tech, i) => (
          <div
            key={`skill-${tech}--${i}`}
            className="px-3 py-2 text-white/60 rounded-lg text-sm transition-all duration-200 ease-out border border-secondary hover:text-white hover:border-[#3d4043]">
            {tech}
          </div>
        ))}
      </Marquee>
      <Marquee className="[--duration:40s] [--gap:8px] mt-1" reverse>
        {TechnologiesIcons.map((icon, i) => (
          <div
            key={`icon-${i}`}
            className="size-12 fill-primary flex justify-center items-center rounded-lg text-sm transition-all duration-500 ease-in-out border border-secondary hover:text-white hover:border-[#3d4043] hover:bg-primary hover:fill-white ">
            {icon}
          </div>
        ))}
      </Marquee>
    </Card>
  );
};

export { TechnologiesCard };
