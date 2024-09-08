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
        src: "https://softivuspro.com/bentox/bontox/assets/images/global/cus-stargay.png",
        alt: "star",
      }}>
      <h2 className="capitalize text-4xl font-medium leading-128">
        FrontEnd Developer
      </h2>
    </Card>
  );
};

export { TitleCard };
