import { Card } from "@/ui/Card/Card";
import React from "react";

type Props = {};

const AboutCard = (props: Props) => {
  return (
    <Card
      animation="zoom-in-down"
      duration={1400}
      className="w-full max-w-none lg:col-span-8"
      classNames={{
        title: "xl:text-4xl leading-128",
      }}
      title={[
        "Hello,",
        "I’m Pouria Hajati, a Passionate ",
        "Front-End Developer",
      ]}
    >
      <p className="text-white/70">
        As a seasoned Front-End Developer with expertise in modern web
        technologies, user interface architecture, and responsive design, my
        comprehensive technical foundation has enabled me to bridge the gap
        between design and functionality across diverse projects and frameworks.
        My proficiency spans traditional web development and cutting-edge
        technologies, demonstrating adaptability in an ever-evolving digital
        landscape.{" "}
      </p>
    </Card>
  );
};

export { AboutCard };
