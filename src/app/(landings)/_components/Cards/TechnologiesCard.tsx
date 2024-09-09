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
  <NextjsIcon className="size-8" />,
  <ReactjsIcon className="size-8" />,
  <ScssIcon className="size-8" />,
  <CssIcon className="size-8" />,
  <TailwindIcon className="size-8" />,
  <JsIcon className="size-8" />,
  <GithubIcon className="size-8" />,
  <TsIcon className="size-8" />,
  <ReduxIcon className="size-8" />,
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
      <div>
        <Marquee className="[--duration:40s] [--gap:8px]">
          <div>
            {TechnologiesName.map((tech, i) => (
              <div
                key={`skill-${tech}--${i}`}
                className="px-3 py-2 text-white/60 rounded-lg text-sm transition-all duration-200 ease-out border border-secondary hover:text-white hover:border-[#3d4043]">
                {tech}
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee className="[--duration:40s] [--gap:8px] mt-1" reverse>
          <div>
            {TechnologiesIcons.map((icon, i) => (
              <div
                key={`icon-${i}`}
                className="size-12 fill-primary flex justify-center items-center rounded-lg text-sm transition-all duration-500 ease-in-out border border-secondary hover:text-white hover:border-[#3d4043] hover:bg-primary hover:fill-white ">
                {icon}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </Card>
  );
};

export { TechnologiesCard };
