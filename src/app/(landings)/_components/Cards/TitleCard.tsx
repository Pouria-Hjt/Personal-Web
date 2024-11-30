import { Card } from "@/ui/Card/Card";
import React from "react";

type Props = {};

const TitleCard = (props: Props) => {
  return (
    <Card
      hoverableTitle
      title="Title"
      animation="zoom-in-down"
      image={{
        src: "/images/cus-stargay.webp",
        alt: "star",
      }}
    >
      <h2 className="text-[28px] capitalize leading-128 xl:text-4xl xl:font-medium">
        FrontEnd Developer
      </h2>
    </Card>
  );
};

export { TitleCard };
