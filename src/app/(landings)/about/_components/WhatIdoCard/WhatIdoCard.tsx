import { Card } from "@/ui/Card/Card";
import React from "react";
import { SingleWhatDo } from "./SingleWhatDo";

type Props = {};

const WhatIdoCard = (props: Props) => {
  // icon={{

  // }}
  return (
    <Card
      animation="zoom-in-up"
      className="lg:col-span-3"
      duration={1000}
      classNames={{
        image: "!animate-none xl:top-0",
      }}
      image={{
        src: "/images/s-shape3.webp",
        alt: "shape1",
      }}
      title="What I do"
    >
      <div className="mt-10 h-full w-full space-y-4">
        <SingleWhatDo title="Web Development" />
        <SingleWhatDo title="UI/UX Implementation" />
        <SingleWhatDo title="Performance Optimization" />
        <SingleWhatDo title="Front-end Infrastructure" />
      </div>
    </Card>
  );
};

export { WhatIdoCard };
