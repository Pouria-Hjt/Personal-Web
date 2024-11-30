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
      className="max-w-[calc(100vw-32px)] overflow-hidden px-0 py-5"
      classNames={{
        title: "text-lg xl:text-2xl leading-[150%] px-6 mb-5",
      }}
    >
      <Marquee className="[--duration:40s] [--gap:8px]">
        {TechnologiesName.map((tech, i) => (
          <div
            key={`skill-${tech}--${i}`}
            className="rounded-lg border border-secondary px-3 py-2 text-sm text-white/60 transition-all duration-200 ease-out hover:border-[#3d4043] hover:text-white"
          >
            {tech}
          </div>
        ))}
      </Marquee>
      <Marquee className="mt-1 [--duration:40s] [--gap:8px]" reverse>
        {TechnologiesIcons.map((icon, i) => (
          <div
            key={`icon-${i}`}
            className="flex size-12 items-center justify-center rounded-lg border border-secondary fill-primary text-sm transition-all duration-500 ease-in-out hover:border-[#3d4043] hover:bg-primary hover:fill-white hover:text-white"
          >
            {icon}
          </div>
        ))}
      </Marquee>
    </Card>
  );
};

export { TechnologiesCard };
